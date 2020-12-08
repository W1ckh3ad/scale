import {
  Component,
  Prop,
  State,
  h,
  Element,
  Host,
  Watch,
  Event,
  EventEmitter,
  Listen,
} from '@stencil/core';
import classNames from 'classnames';
import { StyleSheet } from 'jss';
import { CssClassMap } from '../../utils/utils';
import { styles } from './modal.styles';
import { CssInJs } from '../../utils/css-in-js';
import Base from '../../utils/base-interface';
import { queryShadowRoot, isHidden, isFocusable } from '../../utils/focus-trap';
import { animateTo, KEYFRAMES } from '../../utils/animate';

const supportsResizeObserver = 'ResizeObserver' in window;

/*
  TODO
  ====
  - [ ] update storybook ~~(add proper icon)~~
  - [x] handle scrolling logic (toggle has-scroll class)
  - [x] implement sizes
  - [x] add close-label prop and use it
  - [x] add HCM border
  
  - [ ] add align-actions="left" prop and use it
  - [ ] trigger events
  - [ ] save focus of last element previous to opening the modal
  - [ ] put animations in tokens
 */

@Component({
  tag: 'scale-modal',
  shadow: true,
})
export class Modal implements Base {
  closeButton: HTMLButtonElement | HTMLScaleButtonElement;
  modalContainer: HTMLElement;
  modalWindow: HTMLElement;
  modalBody: HTMLElement;
  focusableElements: HTMLElement[] = [];
  resizeObserver: ResizeObserver;

  @Element() hostElement: HTMLElement;
  /** (optional) Custom class */
  @Prop() customClass?: string = '';
  /** Modal heading */
  @Prop() heading: string;
  /** (optional) Modal size */
  @Prop() size?: string = 'default';
  /** (optional) Modal variant */
  @Prop() variant?: string;
  /** (optional) If `true`, the Modal is open. */
  @Prop({ reflect: true }) opened?: boolean = false;
  /** (optional) Transition duration */
  @Prop() duration?: number = 200;
  /** (optional) Label for close button */
  @Prop() closeButtonLabel?: string = 'Close Pop-up';

  /** (optional) Injected jss styles */
  @Prop() styles?: any;
  /** decorator Jss stylesheet */
  @CssInJs('Modal', styles) stylesheet: StyleSheet;

  /** What actually triggers opening/closing the modal */
  @State() isOpen: boolean = false;
  /** Check wheter there are actions slots, style accordingly */
  @State() hasActionsSlot: boolean = false;
  /** Check wheter there's content in the body, style accordingly */
  @State() hasBody: boolean = false;
  /** Useful for toggling scroll-specific styles */
  @State() hasScroll: boolean = false;

  @Event() scaleOpen?: EventEmitter;
  @Event() scaleClose?: EventEmitter;

  @Listen('keydown', { target: 'window' })
  handleKeypress(event: KeyboardEvent) {
    if (!this.isOpen) {
      return;
    }
    if (event.key === 'Escape') {
      this.opened = false;
    }
  }

  componentDidUnload() {}
  componentWillUpdate() {}

  disconnectedCallback() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  /**
   * Set `hasActionsSlot` and `hasBody`.
   */
  componentWillRender() {
    const actionSlots = this.hostElement.querySelectorAll('[slot="action"]');
    const bodySlot = Array.from(
      this.hostElement.shadowRoot.querySelectorAll('slot')
    ).find(x => !x.name);

    this.hasActionsSlot = actionSlots.length > 0;
    if (bodySlot != null) {
      this.hasBody = bodySlot.assignedElements().length > 0;
    }
  }

  componentDidLoad() {
    // Query all focusable elements and store them in `focusableElements`.
    // Needed for the "focus trap" functionality.
    this.focusableElements = queryShadowRoot(
      this.hostElement.shadowRoot,
      el => isHidden(el) || el.matches('[data-focus-trap-edge]'),
      isFocusable
    );
    // Set `hasScroll` state dynamically on resize.
    if (supportsResizeObserver) {
      this.resizeObserver = new ResizeObserver(() => {
        this.setHasScroll();
      });
      this.resizeObserver.observe(this.modalBody as Element);
    }
    this.setHasScroll();
  }

  setHasScroll() {
    const container = this.modalBody;
    this.hasScroll = container.scrollHeight > container.clientHeight;
  }

  getFirstFocusableElement(): HTMLElement | null {
    return this.focusableElements[0];
  }

  getLastFocusableElement(): HTMLElement | null {
    return this.focusableElements[this.focusableElements.length - 1];
  }

  handleTopFocus = () => {
    this.attemptFocus(this.getLastFocusableElement());
  };

  handleBottomFocus = () => {
    this.attemptFocus(this.getFirstFocusableElement());
  };

  attemptFocus(element: HTMLElement | null) {
    if (element == null) {
      this.closeButton.focus();
      return;
    }
    element.focus();
  }

  @Watch('opened')
  openedChanged(newValue) {
    if (newValue === true) {
      this.open();
    } else {
      this.close();
    }
  }

  open() {
    this.isOpen = true;
    try {
      animateTo(this.modalWindow, KEYFRAMES.fadeInTop, {
        duration: this.duration,
        delay: this.duration * 0.5,
      });
      const anim = animateTo(this.modalContainer, KEYFRAMES.fadeIn, {
        duration: this.duration,
      });
      anim.addEventListener('finish', () => {
        this.attemptFocus(this.getFirstFocusableElement());
      });
    } catch (err) {}
  }

  close() {
    try {
      const anim = animateTo(this.modalContainer, KEYFRAMES.fadeOut, {
        duration: this.duration,
      });
      anim.addEventListener('finish', () => {
        this.isOpen = false;
      });
    } catch (err) {
      this.isOpen = false;
    }
  }

  render() {
    const { classes } = this.stylesheet;

    return (
      <Host>
        <style>{this.stylesheet.toString()}</style>
        <div
          ref={el => (this.modalContainer = el)}
          class={this.getCssClassMap()}
        >
          <div
            class={classes['modal__backdrop']}
            onClick={() => (this.opened = false)}
          ></div>
          <div
            data-focus-trap-edge
            onFocus={this.handleTopFocus}
            tabindex="0"
          ></div>
          <div
            class={classes['modal__window']}
            ref={el => (this.modalWindow = el)}
            role="dialog"
            aria-modal="true"
          >
            <div class={classes['modal__header']}>
              <h2 class={classes['modal__heading']}>{this.heading}</h2>
              <button
                ref={el => (this.closeButton = el)}
                class={classes['modal__close-button']}
                onClick={() => (this.opened = false)}
                aria-label={this.closeButtonLabel}
              >
                <slot name="close-icon">
                  <scale-icon-action-circle-close />
                </slot>
              </button>
            </div>
            <div
              ref={el => (this.modalBody = el)}
              class={classes['modal__body-wrapper']}
            >
              <div class={classes['modal__body']}>
                <slot></slot>
              </div>
            </div>
            <div class={classes['modal__actions']}>
              <slot name="action"></slot>
            </div>
          </div>
          <div
            data-focus-trap-edge
            onFocus={this.handleBottomFocus}
            tabindex="0"
          ></div>
        </div>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    const { classes } = this.stylesheet;
    return classNames(
      classes.modal,
      this.customClass && this.customClass,
      this.isOpen && classes['modal--is-open'],
      this.hasActionsSlot && classes['modal--has-actions'],
      this.hasScroll && classes['modal--has-scroll'],
      this.hasBody && classes['modal--has-body'],
      this.size && classes[`modal--size-${this.size}`],
      this.variant && classes[`modal--variant-${this.variant}`]
    );
  }
}

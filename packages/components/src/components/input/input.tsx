import {
  Component,
  Prop,
  Event,
  h,
  EventEmitter,
  Host,
  State,
  Watch,
  Element,
} from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';
import { styles } from './input.styles';
import { CssInJs } from '../../utils/css-in-js';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';

export interface InputChangeEventDetail {
  value: string | number | boolean | undefined | null;
}

let i = 0;

@Component({
  tag: 'scale-input',
  shadow: false,
})
export class Input implements Base {
  selectElement: HTMLSelectElement;
  mutationObserver: MutationObserver;

  @Element() el: HTMLElement;
  /** (optional) Input text class */
  @Prop() customClass?: string = '';
  /** (optional) Input type */
  @Prop() type?:
    | 'email'
    | 'hidden'
    | 'number'
    | 'password'
    | 'tel'
    | 'text'
    | 'checkbox'
    | 'radio'
    | 'select'
    | 'textarea'
    | 'url' = 'text';
  /** (optional) Input name */
  @Prop() name?: string = '';
  /** (optional) Input label variant */
  @Prop() variant?: 'animated' | 'static' = 'static';
  /** (optional) Input label */
  @Prop() label: string = '';
  /** (optional) Input size */
  @Prop() size?: string = '';
  /** (optional) textarea row */
  @Prop() rows?: number;
  /** (optional) textarea column */
  @Prop() cols?: number;
  /** (optional) Input helper text */
  @Prop() helperText?: string = '';
  /** (optional) Input status */
  @Prop() status?: string = '';
  /** (optional) Input max length */
  @Prop() maxLength?: number;
  /** (optional) Input min length */
  @Prop() minLength?: number;
  /** (optional) Input placeHolder */
  @Prop() placeholder?: string = '';
  /** (optional) Input disabled */
  @Prop() disabled?: boolean;
  /** (optional) Input required */
  @Prop() required?: boolean;
  /** (optional) Input counter */
  @Prop() counter?: boolean;
  /** (optional) Active switch */
  @Prop({ reflect: true }) checked?: boolean = false;
  /** (optional) textarea resize */
  @Prop() resize?: 'unset' | 'none' | 'vertical' | 'horizontal';
  /** (optional) Input value */
  @Prop({ mutable: true }) value?: string | number | null = '';
  /** (optional) Input checkbox id */
  @Prop() inputId?: string;
  /** (optional) Input checkbox checked icon */
  @Prop() icon?: string;
  /** (optional) select multiple options */
  @Prop() multiple?: boolean;
  /** (optional) the number of visible options in a select drop-down list */
  @Prop() visibleSize?: number;
  /** (optional) input background transparent */
  @Prop() transparent?: boolean;

  /** (optional) Injected jss styles */
  @Prop() styles?: any;
  /** decorator Jss stylesheet */
  @CssInJs('Input', styles) stylesheet: StyleSheet;

  /** Emitted when a keyboard input occurred. */
  @Event() scaleInput!: EventEmitter<KeyboardEvent>;
  /** Emitted when the value has changed. */
  @Event() scaleChange!: EventEmitter<InputChangeEventDetail>;
  /** Emitted when the input has focus. */
  @Event() scaleFocus!: EventEmitter<void>;
  /** Emitted when the input loses focus. */
  @Event() scaleBlur!: EventEmitter<void>;
  /** Emitted on keydown. */
  @Event() scaleKeyDown!: EventEmitter<KeyboardEvent>;

  /** (optional) Input checkbox checked */
  @State() customResize?: any;
  /** Whether the input element has focus */
  @State() hasFocus: boolean = false;
  /** "forceUpdate" hack, set it to trigger and re-render */
  @State() forceUpdate: string;

  componentWillLoad() {
    if (this.inputId == null) {
      this.inputId = 'input-' + i++;
    }
  }

  componentDidLoad() {
    // Keep this.value up-to-date for type="select".
    // This is important also for React, where `value` is used to control the element state.
    if (this.type === 'select') {
      const select = this.el.querySelector('select') as HTMLSelectElement;
      const selectedValue =
        select.selectedIndex > -1
          ? select.options[select.selectedIndex].value
          : null;

      // If we have a `value` passed, set it on the <select> element
      // Otherwise, if we have an <option selected>, set its value on `value`
      if (this.value) {
        select.value = String(this.value);
      } else if (selectedValue) {
        this.value = selectedValue;
      }
    }
    // This is a workaroud to prevent a bug in Stencil:
    // when using slots without Shadow DOM (possible only with Stencil)
    // sometimes an update in the Light DOM does not trigger a re-render
    // thus causing unexpected results.
    // https://gitlab.com/scale-ds/scale-telekom/-/issues/16
    if (this.type === 'select' && this.selectElement) {
      this.mutationObserver = new MutationObserver(() => {
        this.forceUpdate = String(Date.now());
      });
      this.mutationObserver.observe(this.el, {
        childList: true,
        subtree: true,
      });
    }
  }

  componentWillUpdate() {}
  componentDidUnload() {}

  disconnectedCallback() {
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
  }

  // We're not watching `value` like we used to
  // because we get unwanted `scaleChange` events
  // because how we keep this.value up-to-date for type="select"
  // `this.value = selectedValue`
  emitChange() {
    this.scaleChange.emit({
      value: this.value == null ? this.value : this.value.toString(),
    });
  }

  @Watch('checked')
  checkedChanged() {
    this.scaleChange.emit({ value: this.checked });
  }

  // Handle checkbox/radio change (click on label)
  handleCheckChange = event => {
    this.checked = event.target.checked;
  };

  // Handle click on checkbox visual element
  handleCheckboxClick = () => {
    if (!this.disabled) {
      this.checked = !this.checked;
    }
  };

  handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement | null;
    if (target) {
      this.value = target.value || '';
      this.emitChange();
    }
    this.scaleInput.emit(event as KeyboardEvent);
  };

  handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement | null;
    if (target) {
      this.value = target.value || '';
      this.emitChange();
    }
  };

  handleFocus = () => {
    this.scaleFocus.emit();
    this.hasFocus = true;
  };

  handleBlur = () => {
    this.scaleBlur.emit();
    this.hasFocus = false;
  };

  handleKeyDown = (event: KeyboardEvent) => {
    this.scaleKeyDown.emit(event);
  };

  render() {
    const Tag = this.type === 'textarea' ? 'textarea' : 'input';
    const { classes } = this.stylesheet;

    const ariaInvalidAttr =
      this.status === 'error' ? { 'aria-invalid': true } : {};
    const helperTextId = `helper-message-${i}`;
    const ariaDescribedByAttr = { 'aria-describedBy': helperTextId };

    if (this.type === 'checkbox') {
      return (
        <Host checked={this.checked}>
          <div class={this.getCssClassMap()}>
            <input
              type="checkbox"
              name={this.name}
              id={this.inputId}
              onChange={this.handleCheckChange}
              value={this.value}
              checked={this.checked}
              disabled={this.disabled}
              {...ariaInvalidAttr}
              {...ariaDescribedByAttr}
            />
            <div
              class={classNames('input__checkbox-container')}
              onClick={this.handleCheckboxClick}
            >
              <span class={classNames('input__checkbox-placeholder')}></span>
              {/* Accessibility: rendering the icon *only* when checked, otherwise is always visible in HCM */}
              {!!this.icon && this.checked && (
                <scale-icon path={this.icon} size={12}></scale-icon>
              )}
            </div>
            <label htmlFor={this.inputId}>{this.label}</label>
            {!!this.helperText && (
              <div
                class="input__meta"
                id={helperTextId}
                aria-live="polite"
                aria-relevant="additions removals"
              >
                <div class="input__helper-text">{this.helperText}</div>
              </div>
            )}
          </div>
        </Host>
      );
    }

    if (this.type === 'radio') {
      return (
        <Host>
          <div class={this.getCssClassMap()}>
            <input
              type="radio"
              name={this.name}
              id={this.inputId}
              onChange={this.handleCheckChange}
              value={this.value}
              checked={this.checked}
              disabled={this.disabled}
              {...ariaInvalidAttr}
              {...ariaDescribedByAttr}
            />
            <label htmlFor={this.inputId}>{this.label}</label>
            {!!this.helperText && (
              <div
                class="input__meta"
                id={helperTextId}
                aria-live="polite"
                aria-relevant="additions removals"
              >
                <div class="input__helper-text">{this.helperText}</div>
              </div>
            )}
          </div>
        </Host>
      );
    }

    return (
      <Host>
        <div class={this.getCssClassMap()}>
          {/* Accessibility: label should be always *before* the actual input */}
          <label class="input__label" htmlFor={this.inputId}>
            {this.label}
          </label>
          {this.type === 'select' ? (
            <div class="input__select-wrapper">
              <select
                ref={el => (this.selectElement = el)}
                class={classNames('input__select')}
                // @ts-ignore
                value={this.value}
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                onKeyDown={this.handleKeyDown}
                disabled={this.disabled}
                required={this.required}
                multiple={this.multiple}
                id={this.inputId}
                name={this.name}
                size={this.visibleSize}
                {...ariaInvalidAttr}
                {...ariaDescribedByAttr}
              >
                <slot />
              </select>
              {!!this.icon && <scale-icon path={this.icon}></scale-icon>}
            </div>
          ) : (
            <Tag
              type={this.type}
              class={classNames(
                `input__${this.type === 'textarea' ? 'textarea' : 'input'}`,
                this.customResize && this.customResize.id
              )}
              style={!!this.resize && { resize: this.resize }}
              value={this.value}
              {...(!!this.name ? { name: this.name } : {})}
              required={this.required}
              minLength={this.minLength}
              maxLength={this.maxLength}
              id={this.inputId}
              onInput={this.handleInput}
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              onKeyDown={this.handleKeyDown}
              {...(!!this.placeholder ? { placeholder: this.placeholder } : {})}
              disabled={this.disabled}
              {...(!!this.rows ? { rows: this.rows } : {})}
              {...(!!this.cols ? { cols: this.cols } : {})}
              {...ariaInvalidAttr}
              {...ariaDescribedByAttr}
            />
          )}

          {/* Accessibility: solid background for the textarea label to avoid making the label unreadable when there's text underneath */}
          {this.type === 'textarea' && this.variant === 'animated' && (
            <span
              class={classes['input__textarea-label-safety-background']}
              aria-hidden="true"
            />
          )}
          {(!!this.helperText || !!this.counter) && (
            <div
              class="input__meta"
              id={helperTextId}
              aria-live="polite"
              aria-relevant="additions removals"
            >
              {!!this.helperText && (
                <div class="input__helper-text">{this.helperText}</div>
              )}
              {this.counter && (
                <div class="input__counter">
                  {!!this.value ? String(this.value).length : 0} /{' '}
                  {this.maxLength}
                </div>
              )}
            </div>
          )}
        </div>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    const { classes } = this.stylesheet;

    return classNames(
      classes.input,
      this.customClass && this.customClass,
      this.type && classes[`input--type-${this.type}`],
      this.hasFocus && classes['input--has-focus'],
      this.checked && classes[`input--checked`],
      this.resize && classes[`input--resize-${this.resize}`],
      this.variant && classes[`input--variant-${this.variant}`],
      this.disabled && classes[`input--disabled`],
      this.transparent && classes['input--transparent'],
      this.status && classes[`input--status-${this.status}`],
      this.size && classes[`input--size-${this.size}`],
      this.value && 'animated'
    );
  }
}

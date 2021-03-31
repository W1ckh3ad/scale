import { Component, Prop, Host, Element, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-action-auto-login'
})
export class ActionAutoLogin {
  @Element() hostElement: HTMLElement;

  /** (optional) The width and height in pixels */
  @Prop() size?: number = 24;
  /** (optional) Sets the icon color via the `fill` attribute */
  @Prop() color?: string = 'currentColor'; 
  /** (optional) If `true`, the icon changes visually */
  @Prop() selected?: boolean = false;
  /** (optional) If `true` the SVG element will get `aria-hidden="true"` */
  @Prop() decorative?: boolean = false;
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  @Prop() accessibilityTitle?: string;

  connectedCallback() {
    if (!this.hostElement.hasAttribute('styles')) {
      this.hostElement.style.display = 'inline-flex';
    }
  }

  render() {
    const ariaHidden = this.decorative ? { 'aria-hidden': 'true' } : {}

    return (
      <Host>
        <svg xmlns="http://www.w3.org/2000/svg" width={this.size} height={this.size} viewBox="0 0 24 24" {...ariaHidden}>
          {this.accessibilityTitle && <title>{this.accessibilityTitle}</title>}
          <g fill={this.color}>
            {this.selected ? (<g><path d="M12 1.515a1 1 0 01.925.62l1.66 4.045 4.38.32a1 1 0 01.61 1.78l-3.355 2.835 1.05 4.265a1 1 0 01-1.5 1.085l-3-1.845v8.095a.75.75 0 01-1.5 0V14.6l-3 1.845a1 1 0 01-1.5-1.085l1.05-4.265L4.465 8.26a1 1 0 01.57-1.76l4.38-.3 1.66-4.065a1 1 0 01.925-.62zm8.443 10.19l2.492.81-.464 1.426-2.491-.81zm-16.885-.003l.464 1.426-2.492.81-.464-1.426zM18.007.205l1.213.881-1.54 2.12-1.213-.882 1.54-2.12zM5.999.195l1.546 2.122-1.215.885L4.784 1.08z" fill-rule="evenodd"></path></g>) : (<g><path d="M12 .75c.7 0 1.35.45 1.6 1.1l1.5 3.65 3.9.25c.75.05 1.35.5 1.55 1.2s0 1.45-.55 1.9l-3 2.55.95 3.8c.2.7-.05 1.45-.65 1.85s-1.35.4-1.95.05l-2.6-1.6v7.2c0 .4-.35.75-.75.75s-.75-.35-.75-.75v-7.2l-2.6 1.6c-.6.4-1.35.35-1.95-.05-.55-.45-.8-1.15-.65-1.85L7 11.4 4 8.85c-.55-.5-.8-1.2-.55-1.9S4.3 5.8 5 5.75l3.9-.25 1.5-3.65c.25-.65.9-1.1 1.6-1.1zm0 1.55h-.1c-.082.004-.158.025-.2.15l-1.85 4.5L5 7.3c-.15 0-.2.1-.2.15s0 .15.1.25l3.7 3.15-1.15 4.7c-.05.1.05.2.1.25s.2.1.3 0L12 13.25l4.1 2.55c.15.1.25.05.3 0s.15-.1.05-.25l-1.15-4.7L19 7.7c.15-.1.1-.2.1-.25s-.05-.15-.2-.15l-4.85-.35-1.85-4.5c-.05-.15-.15-.15-.25-.15zm8.427 9.404l2.473.804-.463 1.426-2.473-.803zm-16.88-.019l.464 1.427-2.473.803-.463-1.426 2.473-.804zM5.99.213l1.528 2.104-1.214.881-1.528-2.103zM17.998.205l1.214.882-1.529 2.103-1.213-.882z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
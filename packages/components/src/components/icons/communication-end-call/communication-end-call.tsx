import { Component, Prop, Host, Element, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-communication-end-call'
})
export class CommunicationEndCall {
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
            {this.selected ? (<g><path fill-rule="evenodd" d="M12 11.225a28.75 28.75 0 013.135.175 1.5 1.5 0 011.335 1.475v1.785l5.46 1.535c3.185-3.975-.24-6.25-1.5-6.86C18.175 8.225 15.09 7.75 12 7.75s-6.175.475-8.445 1.585c-1.245.61-4.67 2.885-1.5 6.86l5.46-1.535v-1.785A1.5 1.5 0 018.85 11.4a28.75 28.75 0 013.15-.175z"></path></g>) : (<g><path d="M23.905 12.195c-.465-2.09-2.515-3.235-3.13-3.535C18.585 7.59 15.47 7 12 7s-6.585.59-8.775 1.66c-.615.3-2.66 1.45-3.13 3.535-.315 1.42.15 2.92 1.39 4.47l.31.385 6.485-1.825V12.87c0-.375.285-.69.665-.735.71-.08 1.815-.17 3.055-.17s2.345.095 3.055.17c.38.04.665.355.665.735v2.355l6.485 1.825.31-.385c1.24-1.545 1.705-3.05 1.39-4.47zm-2.265 3.14l-4.42-1.245v-1.215c0-1.145-.86-2.1-2-2.225-2.175-.24-4.26-.24-6.435 0-1.14.125-2 1.08-2 2.225v1.215l-4.42 1.245c-.72-1.025-.99-1.965-.8-2.81.32-1.435 1.86-2.29 2.325-2.515C5.87 9.035 8.755 8.5 12 8.5s6.13.535 8.115 1.505c.465.225 2.005 1.08 2.325 2.515.19.85-.08 1.795-.8 2.815z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
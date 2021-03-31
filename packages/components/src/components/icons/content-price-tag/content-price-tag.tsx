import { Component, Prop, Host, Element, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-content-price-tag'
})
export class ContentPriceTag {
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
            {this.selected ? (<g><path d="M21.061 2.836l-8.62-1.274L2.346 11.657a2.988 2.988 0 000 4.232l5.643 5.662a2.988 2.988 0 004.256 0l10.07-10.11zm-2.84 4.237a.98.98 0 11-1.36-1.411.98.98 0 011.36 1.41z" fill-rule="evenodd"></path></g>) : (<g><path d="M12.445 1.535l8.78 1.3 1.295 8.78L12.215 21.92a3.052 3.052 0 01-4.32 0l-5.76-5.76a3.051 3.051 0 010-4.32l10.31-10.305zm.525 1.59L3.195 12.9A1.543 1.543 0 002.74 14c0 .415.16.805.455 1.1l5.765 5.76c.295.295.685.455 1.1.455s.805-.16 1.1-.455l9.77-9.77-1.03-6.935zM17.5 5.5a1 1 0 110 2 1 1 0 010-2z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
import { Component, Prop, Host, Element, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-content-music'
})
export class ContentMusic {
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
            {this.selected ? (<g><path d="M7.5 4.89v12.06a4.205 4.205 0 00-1.885-.695c-1.89-.22-3.44.88-3.465 2.455s1.5 3.03 3.385 3.25S9 21.075 9 19.5V8.11l10.5-2.19v8.53a4.205 4.205 0 00-1.885-.695c-1.89-.22-3.44.88-3.465 2.455s1.5 3.03 3.385 3.25S21 18.575 21 17V2.08z" fill-rule="evenodd"></path></g>) : (<g><path d="M7.5 4.89v12.06a4.205 4.205 0 00-1.885-.695c-1.89-.215-3.44.885-3.465 2.46-.02 1.575 1.495 3.03 3.385 3.245C7.43 22.175 9 21.075 9 19.5V8.11l10.5-2.19v8.53a4.205 4.205 0 00-1.885-.695c-1.89-.215-3.44.885-3.465 2.46-.02 1.575 1.495 3.03 3.385 3.245C19.43 19.675 21 18.575 21 17V2.08z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
import { Component, Prop, Host, Element, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-navigation-location'
})
export class NavigationLocation {
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
            {this.selected ? (<g><path fill-rule="evenodd" d="M17.76 2.945A8.145 8.145 0 004.955 12.79l5.545 9.54a1.75 1.75 0 003.03 0l5.515-9.54a8.14 8.14 0 00-1.285-9.845zM12 11.5a3 3 0 110-6 3 3 0 010 6z"></path></g>) : (<g><path fill-rule="evenodd" d="M12 .55c2.1 0 4.15.8 5.75 2.4a8.17 8.17 0 011.3 9.85l-5.55 9.55c-.3.55-.9.85-1.5.85-.55 0-1.15-.25-1.5-.85L4.95 12.8a8.17 8.17 0 011.3-9.85C7.85 1.35 9.9.55 12 .55zm0 1.5c-1.8 0-3.45.7-4.7 1.95a6.663 6.663 0 00-1.05 8.05l5.55 9.55c.05.05.1.1.2.1s.15 0 .2-.1l5.55-9.55c1.5-2.6 1.1-5.9-1.05-8.05A6.577 6.577 0 0012 2.05zm0 3.45a3 3 0 110 6 3 3 0 010-6z"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
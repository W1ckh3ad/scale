import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-service-support',
})
export class ServiceSupport {
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

  render() {
    const ariaHidden = this.decorative ? { 'aria-hidden': 'true' } : {};

    return (
      <Host class="scl-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={this.size}
          height={this.size}
          viewBox="0 0 24 24"
          {...ariaHidden}
        >
          {this.accessibilityTitle && <title>{this.accessibilityTitle}</title>}
          <g fill={this.color}>
            {this.selected ? (
              <g>
                <path
                  fill-rule="evenodd"
                  d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12A10.25 10.25 0 0012 1.75zM12 2a10.03 10.03 0 012.245.265L13.34 5.9A6.255 6.255 0 0012 5.75a6.17 6.17 0 00-1.335.15l-.91-3.635A10.03 10.03 0 0112 2zM5.9 13.34l-3.635.905a9.64 9.64 0 010-4.5l3.635.905a6.06 6.06 0 000 2.68v.01zM12 22a10.03 10.03 0 01-2.245-.265l.91-3.635a6.17 6.17 0 001.335.15c.45-.002.9-.052 1.34-.15l.905 3.635A10.03 10.03 0 0112 22zm0-4.25a5.75 5.75 0 11.01-11.5 5.75 5.75 0 01-.01 11.5zm6.1-4.41c.2-.882.2-1.798 0-2.68l3.635-.905a9.64 9.64 0 010 4.5L18.1 13.34z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M12 1C5.95 1 1 5.95 1 12s4.95 11 11 11 11-4.95 11-11S18.05 1 12 1zm2.4 1.8c3.3.85 5.95 3.5 6.8 6.8l-2.95.5c-.65-2.1-2.3-3.75-4.35-4.35zm-4.8 0l.5 2.95C8 6.4 6.35 8.05 5.75 10.1L2.8 9.6c.9-3.3 3.5-5.9 6.8-6.8zm0 18.4c-3.3-.85-5.95-3.5-6.8-6.8l2.95-.5c.65 2.1 2.3 3.75 4.35 4.35zM7 12c0-2.75 2.25-5 5-5s5 2.25 5 5-2.25 5-5 5-5-2.25-5-5zm7.4 9.2l-.5-2.95c2.1-.65 3.75-2.3 4.35-4.35l2.95.5c-.9 3.3-3.5 5.9-6.8 6.8z"
                  fill-rule="evenodd"
                ></path>
              </g>
            )}
          </g>
        </svg>
      </Host>
    );
  }
}

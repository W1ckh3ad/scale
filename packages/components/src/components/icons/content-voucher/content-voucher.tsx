import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-content-voucher',
})
export class ContentVoucher {
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
                  d="M4 3v2h1.5V3h3v2H10V3h3v2h1.5V3h3v2H19V3h3.5v3.5h-2V8h2v3h-2v1.5h2v3h-2V17h2v.5a3 3 0 01-3 3H19v-2h-1.5v2h-3v-2H13v2h-3v-2H8.5v2h-3v-2H4v2h-.5a3 3 0 01-3-3V17h2v-1.5h-2v-3h2V11h-2V8h2V6.5h-2V3H4zm10.295 8.945a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm.77-4.635H13.43l-5.635 9h1.64l5.63-9zm-.755 5.905a1 1 0 010 1.945.975.975 0 010-1.945zM8.585 7.15a2.25 2.25 0 00-.03 4.5 2.235 2.235 0 002.27-2.245 2.25 2.25 0 00-2.24-2.255zm-.03 1.28a.92.92 0 01.92.975.915.915 0 11-1.825 0 .92.92 0 01.905-.975z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M2.5 17v.5c0 .85.65 1.5 1.5 1.5h.5v1.5H4c-1.65 0-3-1.35-3-3V17zM18 19v1.5h-3V19zm5-2v.5c0 1.65-1.35 3-3 3h-.5V19h.5c.85 0 1.5-.65 1.5-1.5V17zm-9.5 2v1.5h-3V19zM9 19v1.5H6V19zm5.95-7.1c1.3 0 2.35 1 2.35 2.3s-1.05 2.35-2.35 2.35-2.35-1.05-2.35-2.35 1.05-2.3 2.35-2.3zM15.8 7l-5.9 9.5H8.15L14.1 7zM2.5 12.5v3H1v-3zm20.5 0v3h-1.5v-3zm-8.05.7c-.55 0-.95.45-.95 1s.4 1 .95 1 .95-.4.95-1c0-.55-.4-1-.95-1zm-5.9-6.25c1.3 0 2.35 1.05 2.35 2.35s-1.05 2.3-2.35 2.3-2.35-1-2.35-2.3 1.05-2.35 2.35-2.35zM2.5 8v3H1V8zM23 8v3h-1.5V8zM9 8.25c-.5 0-.9.45-.95 1 0 .55.4 1 .95 1s.95-.45.95-1-.4-1-.95-1zM23 3v3.5h-1.5v-2h-2V3zM4.5 3v1.5h-2v2H1V3zM18 3v1.5h-3V3zM9 3v1.5H6V3zm4.5 0v1.5h-3V3z"
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

import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-device-replacement-mobilephone',
})
export class DeviceReplacementMobilephone {
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
      <Host style={{ display: 'inline-flex' }}>
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
                  d="M7.03 3a4.13 4.13 0 00-.03.5v1H4.5A1.5 1.5 0 003 6v14.5A1.5 1.5 0 004.5 22h2.765c.194.554.497 1.064.89 1.5H4.5a3 3 0 01-3-3V6a3 3 0 013-3zM19.5.5a3 3 0 013 3v17a3 3 0 01-3 3h-8a3 3 0 01-3-3v-6.25h2.25v3.5l7.62-5-7.62-5v3.5H8.5V3.5a3 3 0 013-3zm-4 17.75a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm0 .5a1 1 0 110 2 1 1 0 010-2zm-4-9.6l5.5 3.6-5.5 3.6V13.5H6.75a.75.75 0 110-1.5h4.75V9.15zm6-6.9h-4v1h4v-1z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  fill-rule="evenodd"
                  d="M7.05 3C7 3.15 7 3.35 7 3.5v1H4.5C3.65 4.5 3 5.15 3 6v14.5c0 .85.65 1.5 1.5 1.5h2.75c.2.55.5 1.05.9 1.5H4.5c-1.65 0-3-1.35-3-3V6c0-1.65 1.35-3 3-3zM19.5.5c1.65 0 3 1.35 3 3v17c0 1.65-1.35 3-3 3h-8c-1.65 0-3-1.35-3-3V15H10v5.5c0 .85.65 1.5 1.5 1.5h8c.85 0 1.5-.65 1.5-1.5v-17c0-.85-.65-1.5-1.5-1.5h-2v1.5h-4V2h-2c-.85 0-1.5.65-1.5 1.5v7H8.5v-7c0-1.65 1.35-3 3-3zm-4 18a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-4-9.35l5.5 3.6-5.5 3.6V13.5H6.75c-.4 0-.75-.35-.75-.75s.35-.75.75-.75h4.75V9.15z"
                ></path>
              </g>
            )}
          </g>
        </svg>
      </Host>
    );
  }
}

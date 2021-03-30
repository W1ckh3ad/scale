import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-device-device-watch',
})
export class DeviceDeviceWatch {
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
                  d="M17.19 20.875l-.08.3A2.5 2.5 0 0114.7 23H9.3a2.5 2.5 0 01-2.41-1.825l-.08-.3h10.38zM15.97 3.5a4 4 0 014 4v9a4 4 0 01-4 4H8.03a4 4 0 01-4-4v-9a4 4 0 014-4zm5.53 7v3h-1.05v-3h1.05zM14.7.955a2.5 2.5 0 012.41 1.825l.08.3H6.81l.08-.3A2.5 2.5 0 019.3.955z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  fill-rule="evenodd"
                  d="M21.5 10.5H20v-3c0-1.75-1.1-3.2-2.65-3.75l-.25-.9C16.8 1.75 15.8 1 14.7 1H9.3c-1.1 0-2.1.75-2.4 1.8l-.25.9C5.1 4.3 4 5.75 4 7.5v9c0 1.75 1.1 3.2 2.65 3.75l.25.9c.3 1.1 1.3 1.8 2.4 1.8h5.4c1.1 0 2.1-.75 2.4-1.8l.25-.9A4.004 4.004 0 0020 16.5v-3h1.5v-3zm-3 6c0 1.4-1.1 2.5-2.5 2.5H8c-1.4 0-2.5-1.1-2.5-2.5v-9C5.5 6.1 6.6 5 8 5h8c1.4 0 2.5 1.1 2.5 2.5v9z"
                ></path>
              </g>
            )}
          </g>
        </svg>
      </Host>
    );
  }
}

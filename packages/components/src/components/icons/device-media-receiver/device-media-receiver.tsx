import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-device-media-receiver',
})
export class DeviceMediaReceiver {
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
                  d="M23.5 13v5a3 3 0 01-3 3h-17a3 3 0 01-3-3v-5h23zM19 16h-2v2h2v-2zm.175-11.53l1.06 1.06A11.42 11.42 0 0112.1 8.9a11.41 11.41 0 01-8.13-3.37l1.06-1.06A9.93 9.93 0 0012.1 7.4a9.935 9.935 0 007.075-2.93zm-2.83-2.83l1.06 1.06A7.44 7.44 0 0112.1 4.9a7.435 7.435 0 01-5.3-2.2l1.06-1.06A5.95 5.95 0 0012.1 3.4a5.96 5.96 0 004.245-1.76z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M23.5 13v5c0 1.65-1.35 3-3 3h-17c-1.65 0-3-1.35-3-3v-5zM22 14.5H2V18c0 .85.65 1.5 1.5 1.5h17c.85 0 1.5-.65 1.5-1.5zM19 16v2h-2v-2zm.2-11.5l1.05 1.05C18.05 7.7 15.3 8.9 12.2 8.9s-6-1.2-8.15-3.35L5.1 4.5c1.85 1.9 4.4 2.95 7.05 2.95S17.3 6.4 19.2 4.5zm-2.85-2.85L17.4 2.7c-1.4 1.4-3.3 2.2-5.3 2.2s-3.9-.8-5.3-2.2l1.05-1.05A5.935 5.935 0 0012.1 3.4c1.6 0 3.1-.6 4.25-1.75z"
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

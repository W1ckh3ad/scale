import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-device-smart-speaker',
})
export class DeviceSmartSpeaker {
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
                  d="M21.224 10.231a2.087 2.087 0 00-2.087-1.883h-1.132a19.68 19.68 0 00-5.833-1.044 18.295 18.295 0 00-5.739 1.044H5.181a2.087 2.087 0 00-2.087 1.883c-.193 2.119-.485 5.53-.485 7.696a4.889 4.889 0 003.814 4.946v.084c0 .576.467 1.043 1.043 1.043h9.391c.577 0 1.044-.467 1.044-1.043v-.084c2.264-.433 3.814-2.52 3.814-4.946 0-2.165-.287-5.577-.49-7.696zm-8.019 9.595h-2.087V17.74h2.087v2.087zm-.782-18.26a13.08 13.08 0 015.353 1.142l.751-1.378a14.682 14.682 0 00-12.673.235l.751 1.357a13.12 13.12 0 015.818-1.357zM7.617 4.762l.73 1.373a9.391 9.391 0 017.655-.204l.756-1.388a11.009 11.009 0 00-9.14.22z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  fill-rule="evenodd"
                  d="M12 7.55c2.2 0 4.4.6 5.6 1h1.1c1.05 0 1.9.75 2 1.8.15 2 .45 5.3.45 7.35 0 2.3-1.5 4.3-3.65 4.7v.1c0 .55-.45 1-1 1h-9c-.55 0-1-.45-1-1v-.05C4.35 22 2.85 20 2.85 17.7c0-2.05.25-5.3.45-7.35.1-1 .95-1.8 2-1.8h1.15c1.05-.35 3.2-1 5.55-1zM18.7 10H5.3c-.25 0-.5.2-.5.45-.15 1.85-.45 5.2-.45 7.25 0 1.85 1.3 3.3 3 3.3h9.3c1.7 0 3-1.45 3-3.3 0-2.1-.3-5.45-.45-7.25-.05-.25-.25-.45-.5-.45zM13 17.5v2h-2v-2h2zM12.25 4c1.5 0 2.9.3 4.15.8l-.7 1.35a8.86 8.86 0 00-3.45-.7c-1.4 0-2.7.35-3.9.9l-.7-1.3C9.05 4.4 10.6 4 12.25 4zm0-3.5c2.1 0 4.05.45 5.85 1.3l-.7 1.3C15.8 2.4 14.1 2 12.25 2c-2 0-3.9.45-5.6 1.3L5.95 2C7.85 1.05 10 .5 12.25.5z"
                ></path>
              </g>
            )}
          </g>
        </svg>
      </Host>
    );
  }
}
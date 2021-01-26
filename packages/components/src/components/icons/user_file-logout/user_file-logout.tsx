import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-user_file-logout',
})
export class UserFileLogout {
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
                  d="M10.5 13.25c3.04 0 5.25-3.075 5.25-6.25a5.08 5.08 0 00-5.25-5.25A5.08 5.08 0 005.25 7c0 3.175 2.21 6.25 5.25 6.25zm4.25 4.25h1.75v-1.95a4.554 4.554 0 00-.645-.05h-2.26L10.5 18.595 7.405 15.5H5.14a4.73 4.73 0 00-4.685 3.97L.28 20.5h12.36a2.195 2.195 0 01-.14-.75 2.245 2.245 0 012.25-2.25zm8.95 2.245L18 16v3h-3.25a.75.75 0 000 1.5H18v3l5.7-3.755z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  fill-rule="evenodd"
                  d="M18 16l5.7 3.75L18 23.5v-3h-3.25c-.4 0-.75-.35-.75-.75s.35-.75.75-.75H18v-3zm-10.6-.5l3.1 3.1 3.1-3.1h2.429c.171.003.321.012.471.05v1.95h-1.75c-1.4 0-2.5 1.25-2.2 2.7.05.1.05.2.1.3H.3l.15-1.05c.4-2.3 2.35-3.95 4.7-3.95H7.4zM10.5 1c3.5 0 6 2.5 6 6 0 3.4-2.4 7-6 7s-6-3.6-6-7c0-3.5 2.5-6 6-6zm0 1.5C7.9 2.5 6 4.4 6 7c0 2.65 1.8 5.5 4.5 5.5S15 9.65 15 7c0-2.6-1.9-4.5-4.5-4.5z"
                ></path>
              </g>
            )}
          </g>
        </svg>
      </Host>
    );
  }
}
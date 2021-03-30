import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-content-rss',
})
export class ContentRss {
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
                  d="M19 2H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3zM7.22 18.5a1.725 1.725 0 110-3.45 1.725 1.725 0 010 3.45zm6.085-.5H11.76c.11-.408.167-.828.17-1.25A4.755 4.755 0 007.18 12a4.6 4.6 0 00-1.18.155v-1.54a6.13 6.13 0 011.18-.115 6.26 6.26 0 016.125 7.5zm4.545 0h-1.5a9.37 9.37 0 00.095-1.25A9.26 9.26 0 007.18 7.5 9.23 9.23 0 006 7.585v-1.5c.391-.051.785-.08 1.18-.085 5.935.006 10.744 4.815 10.75 10.75a10.29 10.29 0 01-.08 1.25z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  fill-rule="evenodd"
                  d="M19 2c1.655 0 3 1.345 3 3v14c0 1.655-1.345 3-3 3H5c-1.655 0-3-1.345-3-3V5c0-1.655 1.345-3 3-3zm0 1.5H5c-.825 0-1.5.675-1.5 1.5v14c0 .825.675 1.5 1.5 1.5h14c.825 0 1.5-.675 1.5-1.5V5c0-.825-.675-1.5-1.5-1.5zM7.22 15.06a1.72 1.72 0 110 3.44 1.72 1.72 0 010-3.44zm-.04-4.56a6.259 6.259 0 016.125 7.5H11.76c.105-.4.17-.815.17-1.25 0-2.62-2.13-4.75-4.75-4.75-.41 0-.8.06-1.18.155v-1.54c.38-.075.775-.115 1.18-.115zm0-4.5c5.93 0 10.75 4.82 10.75 10.75 0 .425-.03.84-.08 1.25h-1.515c.055-.41.095-.825.095-1.25 0-5.1-4.15-9.25-9.25-9.25-.4 0-.79.035-1.18.085V6.07c.39-.045.78-.07 1.18-.07z"
                ></path>
              </g>
            )}
          </g>
        </svg>
      </Host>
    );
  }
}

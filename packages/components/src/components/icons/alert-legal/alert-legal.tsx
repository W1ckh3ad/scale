import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-alert-legal',
})
export class AlertLegal {
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
                  d="M23.72 14.865L20.525 2H13v-.75a1 1 0 10-2 0V2H3.5L.28 14.865.25 15v.12c0 1.26.965 3.645 4.625 3.645s4.625-2.4 4.625-3.66V15L6.71 3.75H11V19.5H8.5A2.5 2.5 0 006 22h12a2.5 2.5 0 00-2.5-2.5H13V3.75h4.29l-2.76 11.115a1 1 0 00-.03.24c0 1.26.965 3.645 4.625 3.645s4.625-2.385 4.625-3.645a1 1 0 00-.03-.24zM7.445 15h-5.14l2.57-10.345L7.445 15zm9.11 0l2.57-10.345L21.695 15h-5.14z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  fill-rule="evenodd"
                  d="M23.48 14.925L20.27 2h-7.52v-.75a.749.749 0 10-1.5 0V2H3.73L.52 14.925a.736.736 0 00-.02.18c0 1.175.915 3.395 4.375 3.395s4.375-2.22 4.375-3.395c0-.06-.005-.12-.02-.18L6.39 3.5h4.86v16H8.5c-.345 0-.675.07-.975.195-.6.255-1.075.73-1.33 1.33-.125.3-.195.63-.195.975h12c0-.345-.07-.675-.195-.975a2.508 2.508 0 00-1.33-1.33c-.3-.125-.63-.195-.975-.195h-2.75v-16h4.86l-2.835 11.425a.736.736 0 00-.02.18c0 1.175.915 3.395 4.375 3.395s4.37-2.22 4.37-3.395c0-.06-.005-.12-.02-.18zM4.875 3.62L7.7 15H2.05L4.875 3.62zM16.3 15l2.825-11.38L21.95 15H16.3z"
                ></path>
              </g>
            )}
          </g>
        </svg>
      </Host>
    );
  }
}
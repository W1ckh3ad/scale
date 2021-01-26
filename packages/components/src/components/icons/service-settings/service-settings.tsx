import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-service-settings',
})
export class ServiceSettings {
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
                  d="M20.235 14.5L23 14v-4l-2.765-.5a1 1 0 01-.64-1.555l1.595-2.31-2.825-2.825-2.31 1.595a1 1 0 01-1.555-.64L14 1h-4l-.5 2.76a1 1 0 01-1.555.645L5.635 2.81 2.81 5.635l1.595 2.31a1 1 0 01-.64 1.555L1 10v4l2.76.5a1 1 0 01.645 1.555l-1.595 2.31 2.825 2.825 2.31-1.595a1 1 0 011.555.64L10 23h4l.5-2.765a1 1 0 011.555-.64l2.31 1.595 2.825-2.825-1.595-2.31a1 1 0 01.64-1.555zM12 15a3 3 0 110-6 3 3 0 010 6z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  fill-rule="evenodd"
                  d="M14 1l.5 2.75c.15.75.95 1.05 1.55.65l2.3-1.6 2.85 2.85-1.6 2.3c-.4.6-.05 1.4.65 1.55L23 10v4l-2.75.5a.994.994 0 00-.65 1.55l1.6 2.3-2.85 2.85-2.3-1.6c-.6-.4-1.4-.05-1.55.65L14 23h-4l-.5-2.75c-.15-.7-.95-1.05-1.55-.65l-2.3 1.6-2.85-2.85 1.6-2.3c.4-.6.05-1.4-.65-1.55L1 14v-4l2.75-.5a.994.994 0 00.65-1.55l-1.6-2.3L5.65 2.8l2.3 1.6c.6.4 1.4.05 1.55-.65L10 1h4zm-1.25 1.5h-1.5l-.3 1.5c-.2 1.2-1.25 2.05-2.45 2.05-.5 0-1-.15-1.4-.45l-1.3-.9-1.05 1.05.9 1.3c.5.7.6 1.6.25 2.4-.3.8-1 1.35-1.85 1.5l-1.55.3v1.5l1.55.25c.85.15 1.5.7 1.85 1.5.35.8.25 1.7-.25 2.4l-.9 1.3 1.05 1.05 1.3-.9c.4-.3.9-.45 1.4-.45 1.2 0 2.25.85 2.45 2.05l.3 1.55h1.5l.3-1.55c.2-1.2 1.25-2.05 2.45-2.05.5 0 1 .15 1.4.45l1.3.9 1.05-1.05-.9-1.3c-.5-.7-.55-1.6-.25-2.3.3-.8 1-1.35 1.85-1.5l1.55-.3v-1.5l-1.55-.3c-.85-.15-1.5-.7-1.85-1.5-.35-.8-.25-1.7.25-2.4l.9-1.3-1.05-1.05-1.3.9c-.4.3-.9.45-1.4.45-1.2 0-2.25-.85-2.45-2.05l-.3-1.55zM12 9a3 3 0 110 6 3 3 0 010-6z"
                ></path>
              </g>
            )}
          </g>
        </svg>
      </Host>
    );
  }
}
import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-action-favorite',
})
export class ActionFavorite {
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
                  d="M13 2.41l2.45 6 6.5.475a1.06 1.06 0 01.55 1.88l-4.96 4.19 1.55 6.31a1.065 1.065 0 01-1.59 1.155L12 19l-5.5 3.42a1.065 1.065 0 01-1.59-1.155l1.55-6.31-4.96-4.19a1.06 1.06 0 01.61-1.87l6.5-.475 2.45-6A1.065 1.065 0 0113 2.41z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M23.55 9.4c-.25-.7-.85-1.2-1.6-1.25l-6-.45-2.25-5.55C13.4 1.45 12.75 1 12 1s-1.4.45-1.7 1.15L8 7.75 2 8.2c-.75.05-1.35.55-1.6 1.25s0 1.45.55 1.95l4.6 3.9-1.4 5.8c-.15.7.1 1.45.7 1.9.3.25.7.35 1.05.35s.65-.1.95-.25L12 19.9l5.1 3.2c.65.4 1.4.35 2-.05.6-.45.85-1.2.7-1.9l-1.45-5.85 4.6-3.9c.6-.55.85-1.3.6-2zm-1.5.8l-5.3 4.5 1.65 6.75c.05.2-.05.3-.1.35s-.2.1-.35 0L12 18.1l-5.9 3.65c-.15.1-.3.05-.35 0s-.15-.15-.1-.35l1.65-6.75-5.3-4.5c-.15-.1-.1-.25-.1-.35 0-.05.1-.2.25-.2l6.95-.5 2.65-6.45c.05-.15.15-.15.25-.15s.2.05.3.2l2.65 6.45 6.95.5c.2 0 .25.15.25.2 0 .1 0 .25-.1.35z"
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

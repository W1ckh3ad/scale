import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-action-add-card',
})
export class ActionAddCard {
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
                  d="M17.5 11a6.5 6.5 0 110 13 6.5 6.5 0 010-13zm0 1.5a5 5 0 100 10 5 5 0 000-10zm0 1.75a.75.75 0 01.75.75v1.75H20a.75.75 0 010 1.5h-1.75V20a.75.75 0 11-1.5 0v-1.75H15a.75.75 0 110-1.5h1.75V15a.75.75 0 01.75-.75zM21 8.5v1.815a8 8 0 00-3.5-.815 8 8 0 00-7.74 6H4a3 3 0 01-3-3v-4h20zM18 2a3 3 0 013 3v1H1V5a3 3 0 013-3z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M17 11c3.6 0 6.5 2.9 6.5 6.5S20.6 24 17 24s-6.5-2.9-6.5-6.5S13.4 11 17 11zm0 3.25c-.4 0-.75.35-.75.75v1.75H14.5c-.4 0-.75.35-.75.75s.35.75.75.75h1.75V20c0 .4.35.75.75.75s.75-.35.75-.75v-1.75h1.75c.4 0 .75-.35.75-.75s-.35-.75-.75-.75h-1.75V15c0-.4-.35-.75-.75-.75zM17.5 2c1.65 0 3 1.35 3 3v5.3c-.5-.25-1-.4-1.5-.55V8.5H2v4c0 .85.65 1.5 1.5 1.5h6.3c-.25.5-.4 1-.55 1.5H3.5c-1.65 0-3-1.35-3-3V5c0-1.65 1.35-3 3-3zm0 1.5h-14C2.65 3.5 2 4.15 2 5v1h17V5c0-.85-.65-1.5-1.5-1.5z"
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

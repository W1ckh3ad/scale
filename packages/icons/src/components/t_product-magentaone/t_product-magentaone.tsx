import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-t_product-magentaone',
})
export class TProductMagentaone {
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
                  d="M12.315 15.1a1.255 1.255 0 00.885 2.135c.331-.001.65-.132.885-.365l2.05-2.05c.234-.235.365-.553.365-.885V1.75c0-.69-.56-1.25-1.25-1.25h-6a1.25 1.25 0 00-1 .5L3.07 8.265A1.25 1.25 0 003.375 10l4 2.77A1.24 1.24 0 009 12.625v9.625c0 .69.56 1.25 1.25 1.25h5c.69 0 1.25-.56 1.25-1.25v-3.04a1.25 1.25 0 10-2.5 0V21h-2.5V8.08c0-.04-.025-.08-.035-.125l-.04-.105a.775.775 0 00-.06-.11.695.695 0 00-.13-.195c-.03-.03-.05-.065-.08-.09l-.08-.07-.115-.085-.075-.035a1.05 1.05 0 00-.13-.065l-.11-.035-.145-.05h-.225a1.15 1.15 0 00-.13 0 .8.8 0 00-.115 0 .585.585 0 00-.1.03 1 1 0 00-.13.045.345.345 0 00-.095.05.855.855 0 00-.205.135l-.095.085a.5.5 0 00-.065.08.5.5 0 00-.09.115L7.735 10 5.84 8.695 9.915 3H14v10.415L12.315 15.1z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M12.65 16.55c-.3.3-.3.75 0 1.05s.75.3 1.05 0l2.05-2.05c.15-.15.2-.35.2-.55V1.75c.05-.4-.3-.75-.7-.75h-6c-.25 0-.45.1-.6.3L3.5 8.55c-.1.15-.15.35-.15.55.05.2.15.35.3.5l4 2.75c.15.1.4.15.6.1s.4-.15.5-.35l.75-1.2v11.3c0 .4.35.75.75.75h5c.4 0 .75-.35.75-.75v-3.05c0-.4-.35-.75-.75-.75s-.75.4-.75.8v2.3H11V8.55l.8-1.3a.8.8 0 00-.25-1.05.8.8 0 00-1.05.25l-2.65 4.2-2.75-1.9 4.5-6.3h4.9V14.7z"
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

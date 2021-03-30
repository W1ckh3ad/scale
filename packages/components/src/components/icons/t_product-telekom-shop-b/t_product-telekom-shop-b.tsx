import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-t_product-telekom-shop-b',
})
export class TProductTelekomShopB {
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
                  d="M22.884 5.302h-.837V.558H1.953v4.744h-.837C.5 5.302 0 5.802 0 6.42v3.348h1.674v13.396h20.652V9.767H24V6.42c0-.617-.5-1.117-1.116-1.117zM3.628 2.232h16.744v3.07H3.628v-3.07zm10.437 18.42h-4.13v-.475c.244.008.49-.007.731-.045a.72.72 0 00.603-.558 2.79 2.79 0 00.067-.714v-6.18a2.182 2.182 0 00-1.641.715 3.349 3.349 0 00-.692 1.937l-.447-.072.084-2.959h6.698l.083 2.959-.446.072a3.349 3.349 0 00-.675-1.937 2.233 2.233 0 00-1.675-.692v6.151c-.047.369.038.743.24 1.055.192.162.435.251.687.251h.49l.023.491zM8.567 17.86v-1.73h1.714v1.73H8.567zm6.888 0H13.74v-1.73h1.714v1.73z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  fill-rule="evenodd"
                  d="M21 1.5V5h.75c.95 0 1.75.8 1.75 1.75V9H22v13.5H2V9H.5V6.75C.5 5.8 1.3 5 2.25 5H3V1.5h18zM20.5 9h-17v12h17V9zM15 11l.1 2.65-.4.05c-.05-.8-.25-1.35-.6-1.75-.4-.4-.85-.6-1.5-.6v5.55c0 .5.05.8.2.95.1.15.3.2.6.25h.45v.4h-3.7v-.35c.3 0 .5 0 .65-.05.3-.05.5-.25.55-.5.05-.15.05-.35.05-.65V11.4c-.6 0-1.1.2-1.45.6-.35.35-.55.95-.6 1.7l-.4-.05L9 11h6zm.1 3.45v1.5h-1.55v-1.5h1.55zm-4.65 0v1.5H8.9v-1.5h1.55zM19.5 3h-15v2h15V3z"
                ></path>
              </g>
            )}
          </g>
        </svg>
      </Host>
    );
  }
}

import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-content-smile',
})
export class ContentSmile {
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
                  d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11A11 11 0 0012 1zm3.5 6.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-7 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm8.77 8.87c-1.305 1.99-3.225 3.13-5.27 3.13-2.045 0-3.965-1.14-5.27-3.13A.757.757 0 018 15.545C9 17.105 10.5 18 12 18s3-.895 4-2.455a.75.75 0 011.255.825h.015z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M12 1c6.1 0 11 4.9 11 11s-4.9 11-11 11S1 18.1 1 12 5.95 1 12 1zm0 1.5c-5.25 0-9.5 4.25-9.5 9.5s4.25 9.5 9.5 9.5 9.5-4.25 9.5-9.5-4.25-9.5-9.5-9.5zM6.95 15.35c.35-.25.8-.15 1.05.2C9 17.1 10.5 18 12 18s3-.9 4-2.45c.25-.35.7-.45 1.05-.2.35.2.45.65.2 1.05-1.3 2-3.25 3.15-5.25 3.15S8.05 18.4 6.75 16.4c-.25-.35-.15-.8.2-1.05zM8.5 7.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm7 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
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

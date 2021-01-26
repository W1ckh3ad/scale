import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-device-mobile-equipment',
})
export class DeviceMobileEquipment {
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
                  d="M18.83 6.5c.728 0 1.368.484 1.565 1.185l.29 1.03a2.915 2.915 0 011.815 2.7V13.5h1V16h-1v2.585a2.915 2.915 0 01-1.815 2.7l-.29 1.03A1.625 1.625 0 0118.83 23.5h-4.16a1.625 1.625 0 01-1.565-1.185l-.29-1.03a2.915 2.915 0 01-1.815-2.7v-7.17c0-1.185.717-2.253 1.815-2.7l.29-1.03A1.625 1.625 0 0114.67 6.5zM10.9.5A3.105 3.105 0 0114 3.58v1.5a3.13 3.13 0 00-2.34 2.2l-.115.415a4.41 4.41 0 00-2.045 3.72v7.17A4.36 4.36 0 0010.225 21H4.6a3.105 3.105 0 01-3.1-3.1V3.6A3.105 3.105 0 014.6.5zm8.685 9.5h-5.67c-.781 0-1.415.634-1.415 1.415v7.17c0 .781.634 1.415 1.415 1.415h5.67c.781 0 1.415-.634 1.415-1.415v-7.17c0-.781-.634-1.415-1.415-1.415zM7.75 16a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm0 .5a.75.75 0 110 1.5.75.75 0 010-1.5zM9.5 2.25H6v1h3.5v-1z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  fill-rule="evenodd"
                  d="M18.83 6.5c.73 0 1.37.485 1.565 1.185l.29 1.03a2.917 2.917 0 011.815 2.7V13.5h1V16h-1v2.585a2.92 2.92 0 01-1.81 2.7l-.29 1.03c-.2.7-.84 1.185-1.565 1.185H14.67c-.73 0-1.37-.485-1.565-1.185l-.29-1.03a2.917 2.917 0 01-1.815-2.7v-7.17c0-1.22.75-2.265 1.81-2.7l.29-1.03c.2-.7.84-1.185 1.565-1.185zM10.9.5C12.61.5 14 1.89 14 3.6v1.485a3.12 3.12 0 00-1.5.805V3.6c0-.88-.72-1.6-1.6-1.6H9.5v1.5H6V2H4.6C3.72 2 3 2.72 3 3.6v14.3c0 .88.72 1.6 1.6 1.6h5c.115.545.33 1.05.625 1.5H4.6c-1.71 0-3.1-1.39-3.1-3.1V3.6C1.5 1.89 2.89.5 4.6.5zm8.685 9.5h-5.67c-.78 0-1.415.635-1.415 1.415v7.17c0 .78.635 1.415 1.415 1.415h5.67c.78 0 1.415-.635 1.415-1.415v-7.17c0-.78-.635-1.415-1.415-1.415zM7.75 16a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"
                ></path>
              </g>
            )}
          </g>
        </svg>
      </Host>
    );
  }
}
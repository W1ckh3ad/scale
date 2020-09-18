import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-device-remote-controller',
})
export class DeviceRemoteController {
  @Prop() size: number = 24;
  @Prop() color: string = 'currentColor';
  @Prop() selected: boolean = false;

  render() {
    return (
      <Host style={{ display: 'inline-flex' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={this.size}
          height={this.size}
          viewBox="0 0 24 24"
        >
          <g fill={this.color}>
            {this.selected ? (
              <g>
                <path
                  fill-rule="evenodd"
                  d="M10.255 7.045l6.715 6.72-7.6 7.6a4.745 4.745 0 01-6.715 0l-.173-.182a4.745 4.745 0 01.173-6.533l7.6-7.605zM9 15a1 1 0 10-1.403 1.425A1 1 0 009 15zm2.43-2.43a1 1 0 00-1.405 0 1 1 0 101.415 0zM13.06 1A10 10 0 0123 10.96h-1.5a8.5 8.5 0 00-8.44-8.46zm0 3.425a6.54 6.54 0 016.535 6.535h-1.5a5.04 5.04 0 00-5.035-5.035z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M10.255 5.985l7.78 7.785-8.13 8.13a5.46 5.46 0 01-3.89 1.61 5.46 5.46 0 01-3.89-1.61 5.507 5.507 0 010-7.78zM10.25 8.11l-7.07 7.07a4.002 4.002 0 000 5.655 3.974 3.974 0 002.83 1.17c1.07 0 2.075-.415 2.83-1.17l7.065-7.07zm-2.675 6.9c.39-.39 1.025-.39 1.415 0s.39 1.025 0 1.415-1.025.39-1.415 0a1.002 1.002 0 010-1.415zm2.44-2.44c.39-.39 1.025-.39 1.415 0s.39 1.025 0 1.415-1.025.39-1.415 0a1.002 1.002 0 010-1.415zm3.045-8.145a6.54 6.54 0 016.535 6.535h-1.5a5.042 5.042 0 00-5.035-5.035zm0-3.43c5.49 0 9.96 4.47 9.96 9.96h-1.5c0-4.665-3.795-8.46-8.46-8.46z"
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

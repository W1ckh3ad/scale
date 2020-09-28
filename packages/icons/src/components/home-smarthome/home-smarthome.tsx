import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-home-smarthome',
})
export class HomeSmarthome {
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
                  d="M12 5.11l7.75 7.75V19a2.245 2.245 0 01-2.25 2.25h-11A2.245 2.245 0 014.25 19v-6.13L12 5.11zm3.477 9.233a.625.625 0 00-.797.317 3.535 3.535 0 01-4.71 1.925.625.625 0 10-.5 1.14 4.775 4.775 0 006.375-2.605.632.632 0 00-.368-.777zM22.5 13.5L12 3 1.5 13.5.435 12.435 12 .87l11.565 11.565L22.5 13.5zM9.715 10.55c-.69 0-1.25.56-1.25 1.25l.007.132a1.25 1.25 0 101.243-1.382zm5.82.625H13.76a.625.625 0 100 1.25h1.775a.625.625 0 100-1.25z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M19 12.1l1.5 1.5V19c0 1.65-1.35 3-3 3h-11c-1.65 0-3-1.35-3-3v-5.4L5 12.1V19c0 .85.65 1.5 1.5 1.5h11c.85 0 1.5-.65 1.5-1.5zm-4.3 2.5c.1-.3.5-.5.8-.35.3.1.5.5.35.8-.75 1.8-2.5 3-4.45 3-.7 0-1.35-.15-1.95-.4-.3-.1-.45-.5-.3-.8.1-.3.5-.45.8-.3.5.2.95.35 1.45.3 1.5 0 2.75-.9 3.3-2.25zM12 .85l11.55 11.6-1.05 1.05L12 3 1.5 13.5.45 12.45zM9.3 10.5c.608 0 1.1.604 1.1 1.35s-.492 1.35-1.1 1.35-1.1-.604-1.1-1.35.492-1.35 1.1-1.35zm5.75.75c.3 0 .6.3.6.6s-.25.6-.6.6H13.3c-.3 0-.6-.3-.6-.6s.25-.6.6-.6z"
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
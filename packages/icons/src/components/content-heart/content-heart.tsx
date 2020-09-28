import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-content-heart',
})
export class ContentHeart {
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
                  d="M20.075 6.915a4.365 4.365 0 00-5.3-1.58c-1.67.69-2.14 1.915-2.775 3.165-.665-1.32-1.155-2.585-2.94-3.235a4.365 4.365 0 00-5.135 1.65 4.37 4.37 0 00.29 5.3l6.635 7.755a1.5 1.5 0 002.3 0l6.635-7.755a4.37 4.37 0 00.29-5.3z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  fill-rule="evenodd"
                  d="M21.315 6.07a5.857 5.857 0 00-4.85-2.57 5.85 5.85 0 00-2.265.45c-1 .415-1.69.985-2.2 1.605-.55-.67-1.305-1.28-2.425-1.69a5.864 5.864 0 00-6.89 2.205 5.89 5.89 0 00.39 7.12l6.63 7.755a3.017 3.017 0 004.585 0l6.63-7.755a5.883 5.883 0 00.395-7.12zm-1.53 6.145L13.15 19.97c-.3.355-.725.53-1.15.53-.425 0-.85-.175-1.15-.53l-6.635-7.755a4.372 4.372 0 01-.29-5.3A4.319 4.319 0 017.535 5c.52 0 1.035.09 1.525.27 1.785.655 2.275 1.915 2.94 3.235.635-1.255 1.105-2.48 2.775-3.17A4.486 4.486 0 0116.465 5c1.365 0 2.735.625 3.61 1.915 1.11 1.63.99 3.8-.29 5.3z"
                ></path>
              </g>
            )}
          </g>
        </svg>
      </Host>
    );
  }
}
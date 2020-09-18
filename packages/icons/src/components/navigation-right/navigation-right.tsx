import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-navigation-right',
})
export class NavigationRight {
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
                  d="M8 20.75a1.25 1.25 0 01-.775-2.25L15.5 12 7.225 5.5a1.265 1.265 0 111.55-2L19.5 12 8.775 20.5a1.26 1.26 0 01-.775.25z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M7.4 19.95c-.25-.35-.2-.8.1-1.05l8.8-6.9-8.75-6.9a.691.691 0 01-.1-1.05c.25-.3.75-.4 1.05-.1L18.7 12 8.45 20.1c-.3.25-.8.2-1.05-.15z"
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

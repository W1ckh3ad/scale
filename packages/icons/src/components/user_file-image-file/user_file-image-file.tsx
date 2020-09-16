import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-user_file-image-file',
})
export class UserFileImageFile {
  @Prop() size: number = 24;
  @Prop() color: string = 'currentColor';
  @Prop() selected: boolean = false;

  render() {
    return (
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
                d="M21 17.5L15.5 23v-4a1.5 1.5 0 011.5-1.5zM21 1v15.5h-4a2.5 2.5 0 00-2.5 2.5v4H6a3 3 0 01-3-3V1zm-7.5 8l-2.64 3.4-1.5-1.935L6.23 14.5h11.54zM7.75 7a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"
                fill-rule="evenodd"
              ></path>
            </g>
          ) : (
            <g>
              <path
                d="M21 1v17l-5 5H6c-1.655 0-3-1.345-3-3V1zm-1.5 1.5h-15V20c0 .825.675 1.5 1.5 1.5h9v-3c0-.83.67-1.5 1.5-1.5h3zm-6 6.5l4.27 5.5H6.23l3.13-4.035 1.5 1.935zM7.75 7a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"
                fill-rule="evenodd"
              ></path>
            </g>
          )}
        </g>
      </svg>
    );
  }
}

import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-action-drag-and-drop',
})
export class ActionDragAndDrop {
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
                  d="M15.5 8.5V21a3 3 0 01-3 3H3a3 3 0 01-3-3V8.5h15.5zM5.27 11.66v6.385l1.415-1.73.895 2.125.92-.39-.905-2.12 2.225.19-4.55-4.46zM19.5 14v1.5H17V14h2.5zm4.5-1.5a3 3 0 01-3 3V14a1.5 1.5 0 001.5-1.5zm0-4V11h-1.5V8.5H24zm0-4V7h-1.5V4.5H24zm-14 0V7H8.5V4.5H10zM21 0a3 3 0 013 3h-1.5A1.5 1.5 0 0021 1.5zm-9.5 0v1.5A1.5 1.5 0 0010 3H8.5a3 3 0 013-3zm4 0v1.5H13V0h2.5zm4 0v1.5H17V0h2.5z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  fill-rule="evenodd"
                  d="M15.5 8.5V21c0 1.655-1.345 3-3 3H3c-1.655 0-3-1.345-3-3V8.5h15.5zM14 10H1.5v11c0 .825.675 1.5 1.5 1.5h9.5c.825 0 1.5-.675 1.5-1.5V10zm-8.5 2.255l3.645 3.555-1.66-.14 1.005 2.38-.92.39-1.005-2.385-1.055 1.29-.01-5.09zM24 12.5c0 1.655-1.345 3-3 3V14c.825 0 1.5-.675 1.5-1.5zM19.5 14v1.5H17V14h2.5zM24 8.5V11h-1.5V8.5H24zm-14-4V7H8.5V4.5H10zm14 0V7h-1.5V4.5H24zM11.5 0v1.5c-.825 0-1.5.675-1.5 1.5H8.5c0-1.655 1.345-3 3-3zM21 0c1.655 0 3 1.345 3 3h-1.5c0-.825-.675-1.5-1.5-1.5zm-1.5 0v1.5H17V0h2.5zm-4 0v1.5H13V0h2.5z"
                ></path>
              </g>
            )}
          </g>
        </svg>
      </Host>
    );
  }
}
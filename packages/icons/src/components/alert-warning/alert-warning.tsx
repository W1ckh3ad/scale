import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-alert-warning',
})
export class AlertWarning {
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
                fill-rule="evenodd"
                d="M23.075 18L14.6 3.32a3 3 0 00-5.2 0L.925 18a3 3 0 002.6 4.5H20.5a3 3 0 002.575-4.5zM11 8.25h2v6.5h-2v-6.5zm1 10.5a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"
              ></path>
            </g>
          ) : (
            <g>
              <path
                fill-rule="evenodd"
                d="M11.95 1.8c1 0 2 .5 2.6 1.5l8.5 14.7c1.2 2-.25 4.5-2.55 4.5H3.55C1.25 22.5-.2 20 .95 18l8.4-14.7c.6-1 1.6-1.5 2.6-1.5zm.105 1.5h-.11a1.44 1.44 0 00-1.245.75l-8.5 14.7c-.4.7-.15 1.25 0 1.5s.5.75 1.3.75h17c.75 0 1.15-.5 1.25-.75.15-.25.4-.8.05-1.5l-8.5-14.7c-.4-.7-1.05-.75-1.3-.75zM12 16.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm1-8V15h-2V8.5h2z"
              ></path>
            </g>
          )}
        </g>
      </svg>
    );
  }
}

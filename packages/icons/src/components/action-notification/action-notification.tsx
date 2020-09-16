import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-action-notification',
})
export class ActionNotification {
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
                d="M21.25 17.25a9.755 9.755 0 01-2.82-6l-.16-1.75a6.3 6.3 0 00-5.05-5.63 1.5 1.5 0 10-2.44 0A6.3 6.3 0 005.73 9.5l-.16 1.755a9.755 9.755 0 01-2.82 6v2.5h5.5a2.095 2.095 0 000 .25 3.75 3.75 0 007.5 0 2.095 2.095 0 000-.25h5.5V17.25zm-7 2.75a2.25 2.25 0 11-4.5 0c.003-.084.012-.167.025-.25h4.45c.013.083.022.166.025.25z"
              ></path>
            </g>
          ) : (
            <g>
              <path
                d="M22 16.95c-2.35-2.35-2.7-4.65-2.8-5.8L19 9.4c-.25-3.15-2.55-5.6-5.5-6.25V3c0-.85-.65-1.5-1.5-1.5s-1.5.65-1.5 1.5v.15C7.55 3.8 5.25 6.25 5 9.4l-.15 1.75c-.15 1.1-.5 3.4-2.85 5.8v3.55h7.05C9.3 21.9 10.5 23 12 23s2.7-1.1 2.95-2.5H22zM20.5 19h-17v-1.45c1.6-1.7 2.6-3.9 2.8-6.25l.15-1.75C6.75 6.65 9.1 4.5 12 4.5s5.25 2.15 5.5 5.05l.15 1.75c.2 2.35 1.2 4.55 2.8 6.25V19z"
                fill-rule="evenodd"
              ></path>
            </g>
          )}
        </g>
      </svg>
    );
  }
}

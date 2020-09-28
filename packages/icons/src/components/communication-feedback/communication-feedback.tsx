import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-communication-feedback',
})
export class CommunicationFeedback {
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
                  d="M12.26.555A10.36 10.36 0 005 18.305v2.97A1.75 1.75 0 008 22.5l1.6-1.6A10.355 10.355 0 1012.26.555zm4.5 12.94H8.04a.75.75 0 110-1.5h8.72a.75.75 0 110 1.5zm0-3.5H8.04a.75.75 0 010-1.5h8.72a.75.75 0 110 1.5z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  fill-rule="evenodd"
                  d="M12 1c5.8 0 10.5 4.7 10.45 10.55 0 5.8-4.7 10.5-10.5 10.5-1.05 0-2.1-.15-3.05-.45l-1.45 1.45c-.35.35-.75.5-1.2.5-.9 0-1.75-.7-1.75-1.75v-2.95c-1.85-1.9-3-4.5-3-7.35C1.5 5.7 6.2 1 12 1zm0 1.5c-4.95 0-9 4.05-9 9 0 2.35.9 4.6 2.6 6.3l.45.45v3.55c0 .25.25.25.25.25.05 0 .1-.05.15-.1l2.1-2.1.85.25c.85.25 1.7.4 2.6.4 4.95 0 9-4.05 9-9s-4.05-9-9-9zm4.25 10c.45 0 .75.35.75.75s-.35.75-.75.75h-8.7c-.4 0-.75-.35-.75-.75s.35-.75.75-.75zm0-3.5c.45 0 .75.35.75.75s-.35.75-.75.75h-8.7c-.4 0-.75-.35-.75-.75S7.15 9 7.55 9z"
                ></path>
              </g>
            )}
          </g>
        </svg>
      </Host>
    );
  }
}
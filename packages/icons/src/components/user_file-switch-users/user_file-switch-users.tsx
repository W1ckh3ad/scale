import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-user_file-switch-users',
})
export class UserFileSwitchUsers {
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
                  d="M18.136 17.62v1.945h2.874a.783.783 0 010 1.565h-2.874v1.941l-4.174-2.728 4.174-2.724zM6.783 14.347l2.99 3.02 3.02-3.02h2.087c-.257.386-.393.84-.391 1.304.005.735.352 1.426.939 1.868L13.1 19.043H0l.157-.85a4.586 4.586 0 014.539-3.845h2.087zm12.928-1.425l4.174 2.724-4.174 2.729v-1.941h-2.874a.783.783 0 110-1.565h2.874v-1.947zM9.793 1.304a4.847 4.847 0 015.014 4.988c0 3.031-2.113 5.969-5.014 5.969-2.9 0-5.009-2.917-5.009-5.948a4.847 4.847 0 015.009-5.009z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M18 18.65v1.85h2.75c.4 0 .75.35.75.75s-.35.75-.75.75H18v1.85l-4-2.6zM7.1 15.5l2.9 2.9 2.85-2.9h2c-.3.45-.45 1.05-.3 1.7.1.55.45 1 .85 1.35L13.15 20H.6l.15-.8c.35-2.15 2.2-3.7 4.35-3.7zm12.4-1.35l4 2.6-4 2.6V17.5h-2.75c-.4 0-.75-.35-.75-.75s.35-.75.75-.75h2.75zM10 2.25c3.2 0 5.55 2.35 5.55 5.55 0 3.1-2.25 6.45-5.55 6.45S4.45 10.9 4.45 7.8c0-3.2 2.35-5.55 5.55-5.55zm0 1.5c-2.35 0-4.05 1.7-4.05 4.05 0 2.4 1.65 4.95 4.05 4.95s4.05-2.55 4.05-4.95c0-2.35-1.7-4.05-4.05-4.05z"
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
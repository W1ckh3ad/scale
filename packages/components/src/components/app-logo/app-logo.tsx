import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-logo',
  styleUrl: 'app-logo.css',
})
export class Logo {
  @Prop() href: string = '';
  @Prop() color: string = '#fff';
  @Prop() claim: boolean = false;

  render() {
    if (!this.claim) {
      return (
        <svg
          width="51"
          height="24"
          viewBox="0 0 51 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 15.8v-4.83h4.996v4.83H0zm15.235 0v-4.83h4.997v4.83h-4.997zm14.99 0v-4.83h4.995v4.83h-4.996zm14.988 0v-4.83h4.996v4.83h-4.996zM19.984 0l.248 8.415-1.31.219c-.243-2.48-.916-4.32-2.02-5.52-1.16-1.257-2.76-1.913-4.815-1.97V18.75c0 1.538.225 2.536.689 2.997.395.392 1.062.633 2.002.723.28.023.755.034 1.428.034v1.346H4.026v-1.346c.673 0 1.148-.011 1.427-.034.94-.09 1.608-.33 2.002-.723.465-.46.687-1.46.687-2.997V1.145c-2.055.056-3.652.712-4.813 1.968-1.103 1.201-1.776 3.041-2.02 5.521L0 8.415.247 0h19.737z"
            fill={this.color}
            fill-rule="nonzero"
          />
        </svg>
      );
    }
    return (
      <a class="logo" title="Telekom Logo" href={this.href}>
        <svg width="284" height="36" xmlns="http://www.w3.org/2000/svg">
          <g fill={this.color} fill-rule="nonzero">
            <path d="M104.6 16v2.3h4.1v2h-4.1v2.5h4.2v2.1h-6.4v-11h6.4V16zM114 20.9h-1.1v4h-2.2v-11h4c2.1 0 3.6 1.3 3.6 3.5 0 1.7-.9 2.8-2.2 3.2l2.3 4.2h-2.5l-1.9-3.9zm-1.1-2.1h1.7c.9 0 1.5-.5 1.5-1.4 0-.9-.6-1.4-1.5-1.4h-1.7v2.8zM120 13.9h2.2v8.9h3.9v2.1H120zM129.5 16v2.3h4.1v2h-4.1v2.5h4.3v2.1h-6.5v-11h6.5V16zM143.1 21.8c0 1.7-1 3-3.4 3h-4.1V13.9h4.2c2.2 0 3.2 1.3 3.2 2.9 0 1.1-.5 2-1.3 2.5v.1c.9.4 1.4 1.3 1.4 2.4zm-5.2-5.9v2.5h1.7c.7 0 1.2-.5 1.2-1.3s-.5-1.3-1.2-1.3h-1.7v.1zm2.9 5.7c0-.8-.5-1.3-1.3-1.3h-1.6v2.6h1.6c.8 0 1.3-.5 1.3-1.3zM147 16v2.3h4.1v2H147v2.5h4.3v2.1h-6.5v-11h6.5V16zM161.6 13.9v11h-2.2l-3.9-6.9h-.1v6.9h-2.3v-11h2.3l3.9 6.9h.1v-6.9zM166 22.3v2.3c0 1.7-.7 2.8-2.5 2.9v-1.2c.9-.1 1.2-.5 1.2-1.4v-.1h-1.2v-2.5h2.5zM183.9 13.9l-2.9 11h-2.4l-1.8-7.2h-.1l-1.8 7.2h-2.4l-2.9-11h2.3l1.8 7.3h.1l1.7-7.3h2.5l1.8 7.3h.1l1.7-7.3zM189.9 22.7h-3.8l-.7 2.1h-2.2l3.7-10.9h2.2l3.7 10.9h-2.2l-.7-2.1zm-.7-2l-1.1-3.4h-.1l-1.1 3.4h2.3zM193.3 21.8h2.2c.2.9.8 1.3 1.6 1.3 1 0 1.4-.5 1.4-1.2s-.5-1-1.3-1.3l-1.3-.4c-1.8-.5-2.4-1.7-2.4-3.1 0-2.1 1.6-3.4 3.6-3.4 2.2 0 3.4 1.3 3.6 3.3h-2.2c-.2-.8-.6-1.2-1.5-1.2-.7 0-1.3.4-1.3 1.2 0 .8.5 1.1 1.1 1.2l1.3.3c1.6.4 2.6 1.6 2.6 3.2 0 2.2-1.6 3.4-3.7 3.4-2.2 0-3.5-1.2-3.7-3.3zM214 13.9l-3.5 11h-2.2l-3.6-11h2.3l2.3 7.4h.1l2.4-7.4zM217.1 16v2.3h4.1v2h-4.1v2.5h4.3v2.1h-6.5v-11h6.5V16zM226.5 20.9h-1.1v4h-2.2v-11h4c2.1 0 3.6 1.3 3.6 3.5 0 1.7-.9 2.8-2.2 3.2l2.3 4.2h-2.5l-1.9-3.9zm-1.1-2.1h1.7c.9 0 1.5-.5 1.5-1.4 0-.9-.6-1.4-1.5-1.4h-1.7v2.8zM239.9 21.8c0 1.7-1 3-3.4 3h-4.1V13.9h4.2c2.2 0 3.2 1.3 3.2 2.9 0 1.1-.5 2-1.3 2.5v.1c.9.4 1.4 1.3 1.4 2.4zm-5.2-5.9v2.5h1.7c.7 0 1.2-.5 1.2-1.3s-.5-1.3-1.2-1.3h-1.7v.1zm2.9 5.7c0-.8-.5-1.3-1.3-1.3h-1.6v2.6h1.6c.9 0 1.3-.5 1.3-1.3zM241.6 13.9h2.2v11h-2.2zM254.4 13.9v11h-2.2l-4-6.9h-.1v6.9h-2.2v-11h2.3l3.9 6.9h.1v-6.9zM256.5 13.9h3.8c2.8 0 4.6 1.9 4.6 5.5s-1.8 5.5-4.6 5.5h-3.8v-11zm3.7 8.9c1.5 0 2.5-1 2.5-3.4s-1-3.4-2.5-3.4h-1.4v6.8h1.4zM268.8 16v2.3h4v2h-4v2.5h4.2v2.1h-6.4v-11h6.4V16zM273.9 13.9h7.8V16h-2.8v8.9h-2.2V16h-2.8zM281.5 22.3h2.5v2.6h-2.5z" />
            <g>
              <path d="M7.3 16.6H0v7.3h7.3z" />
              <path d="M.4 0L0 12.7l1.9.3c.4-3.7 1.3-6.5 2.9-8.3 1.7-1.9 4-2.9 7-3v26.6c0 2.3-.3 3.8-1 4.5-.6.6-1.5 1-2.9 1.1-.3.1-1 .1-2 .1v2h17.8v-2c-1 0-1.7 0-2.1-.1-1.4-.1-2.3-.5-2.9-1.1-.7-.7-1-2.2-1-4.5V1.7c3 .1 5.3 1.1 7 3 1.6 1.8 2.6 4.6 2.9 8.3l1.9-.3L29.2 0H.4z" />
              <path d="M22.2 16.6v7.3h7.3v-7.3h-3.7zM44.1 16.6v7.3h7.3v-7.3h-3.6zM66 16.6v7.3h7.3v-7.3h-3.8z" />
            </g>
          </g>
        </svg>
      </a>
    );
  }
}

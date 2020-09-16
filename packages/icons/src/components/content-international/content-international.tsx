import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-content-international',
})
export class ContentInternational {
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
              <filter id="a">
                <feColorMatrix
                  in="SourceGraphic"
                  values="0 0 0 0 0.149020 0 0 0 0 0.149020 0 0 0 0 0.149020 0 0 0 1.000000 0"
                ></feColorMatrix>
              </filter>
              <g fill="none" fill-rule="evenodd" filter="url(#a)">
                <path d="M0 0h24v24H0z"></path>
                <path
                  d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11A11 11 0 0012 1zm8.4 9.75h-1.445a15.205 15.205 0 00-1.185-4.97 8.465 8.465 0 012.63 4.97zM10.75 3.9v6.85H7.56a11.67 11.67 0 011.6-5.185A5.16 5.16 0 0110.75 3.9zm0 9.35v6.85a5.16 5.16 0 01-1.59-1.665 11.67 11.67 0 01-1.6-5.185zm2.5 6.85v-6.85h3.19a11.67 11.67 0 01-1.6 5.185 5.16 5.16 0 01-1.59 1.665zm0-9.35V3.9a5.16 5.16 0 011.59 1.665 11.67 11.67 0 011.6 5.185zm-7-4.97a15.205 15.205 0 00-1.185 4.97h-1.46A8.43 8.43 0 016.23 5.78zm-2.645 7.47h1.44a15.205 15.205 0 001.185 4.97 8.43 8.43 0 01-2.625-4.97zm14.165 4.97a15.205 15.205 0 001.185-4.97H20.4a8.465 8.465 0 01-2.63 4.97z"
                  fill="#000"
                  fill-rule="nonzero"
                ></path>
              </g>
            </g>
          ) : (
            <g>
              <path
                d="M12 1C5.95 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm9.45 10.25h-2.5c-.15-3-1.05-5.7-2.4-7.55 2.75 1.5 4.65 4.3 4.9 7.55zM11.25 2.6v8.65H6.5c.25-4.4 2.25-8.05 4.75-8.65zm0 10.15v8.65c-2.5-.6-4.5-4.25-4.75-8.65zm1.5 8.65v-8.65h4.75c-.25 4.4-2.25 8.05-4.75 8.65zm0-10.15V2.6c2.5.6 4.5 4.25 4.75 8.65zM7.45 3.7c-1.35 1.85-2.3 4.55-2.4 7.55h-2.5a9.426 9.426 0 014.9-7.55zm-4.9 9.05h2.5c.15 3 1.05 5.7 2.4 7.55a9.426 9.426 0 01-4.9-7.55zM16.6 20.3c1.35-1.85 2.3-4.55 2.4-7.55h2.5a9.66 9.66 0 01-4.9 7.55z"
                fill-rule="evenodd"
              ></path>
            </g>
          )}
        </g>
      </svg>
    );
  }
}

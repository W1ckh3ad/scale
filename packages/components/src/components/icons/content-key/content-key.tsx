import { Component, Prop, Host, Element, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-content-key'
})
export class ContentKey {
  @Element() hostElement: HTMLElement;

  /** (optional) The width and height in pixels */
  @Prop() size?: number = 24;
  /** (optional) Sets the icon color via the `fill` attribute */
  @Prop() color?: string = 'currentColor'; 
  /** (optional) If `true`, the icon changes visually */
  @Prop() selected?: boolean = false;
  /** (optional) If `true` the SVG element will get `aria-hidden="true"` */
  @Prop() decorative?: boolean = false;
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  @Prop() accessibilityTitle?: string;

  connectedCallback() {
    if (!this.hostElement.hasAttribute('styles')) {
      this.hostElement.style.display = 'inline-flex';
    }
  }

  render() {
    const ariaHidden = this.decorative ? { 'aria-hidden': 'true' } : {}

    return (
      <Host>
        <svg xmlns="http://www.w3.org/2000/svg" width={this.size} height={this.size} viewBox="0 0 24 24" {...ariaHidden}>
          {this.accessibilityTitle && <title>{this.accessibilityTitle}</title>}
          <g fill={this.color}>
            {this.selected ? (<g><path d="M18.185 2.025L20.13 3.97a2.25 2.25 0 010 3.18l-.35.35h-2.125v2.13h-2.12v2.115L14.28 13a6.25 6.25 0 11-3.535-3.53zM6.166 16.171a1 1 0 101.415 1.413 1 1 0 00-1.415-1.413z" fill-rule="evenodd"></path></g>) : (<g><path d="M18.4 1.25l2.5 2.45c1.15 1.15 1.15 3.05 0 4.25l-.55.55h-1.8v2h-2v1.8l-1.15 1.15c.75 2.5.1 5.2-1.75 7.05a7.006 7.006 0 01-4.95 2.05c-2.3 0-4.65-1.2-6.05-3.5-.35-.55-.6-1.15-.75-1.8-.6-2.5.1-4.95 1.8-6.65 1.85-1.85 4.6-2.5 7.05-1.75zm0 2.1l-7.25 7.3-.45-.2c-.65-.3-1.3-.4-2-.4-1.45 0-2.85.55-3.9 1.6s-1.6 2.4-1.6 3.9.55 2.85 1.6 3.9c2.35 2.35 6.3 2.1 8.35-.7 1.1-1.5 1.3-3.55.6-5.3l-.15-.35 1.4-1.4V9h2V7h2.65l.15-.15c.6-.6.6-1.5 0-2.1zM7.1 16.1c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
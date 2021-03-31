import { Component, Prop, Host, Element, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-user_file-contracts'
})
export class UserFileContracts {
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
            {this.selected ? (<g><path fill-rule="evenodd" d="M3 .5v19a3 3 0 003 3h7.5v-1.88a2.25 2.25 0 112.5 0v1.88h2a3 3 0 003-3V.5H3zm13 13H8A.75.75 0 118 12h8a.75.75 0 110 1.5zm0-3H8A.75.75 0 118 9h8a.75.75 0 110 1.5zm0-3H8A.75.75 0 118 6h8a.75.75 0 110 1.5z"></path></g>) : (<g><path fill-rule="evenodd" d="M14.75 16.5c1.25 0 2.25 1 2.25 2.25 0 .75-.4 1.45-1 1.85v2.9l-1.25-.5-1.25.5v-2.9c-.6-.4-1-1.05-1-1.85 0-1.25 1-2.25 2.25-2.25zM21 .5v19c0 1.65-1.35 3-3 3h-.5V21h.5c.85 0 1.5-.65 1.5-1.5V2h-15v17.5c0 .85.65 1.5 1.5 1.5h6v1.5H6c-1.65 0-3-1.35-3-3V.5h18zM16 12c.4 0 .75.35.75.75s-.35.75-.75.75H8c-.4 0-.75-.35-.75-.75S7.6 12 8 12zm0-3c.4 0 .75.35.75.75s-.35.75-.75.75H8c-.4 0-.75-.35-.75-.75S7.6 9 8 9zm0-3c.4 0 .75.35.75.75s-.35.75-.75.75H8c-.4 0-.75-.35-.75-.75S7.6 6 8 6z"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
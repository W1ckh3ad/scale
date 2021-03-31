import { Component, Prop, Host, Element, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-action-refresh'
})
export class ActionRefresh {
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
            {this.selected ? (<g><path fill-rule="evenodd" d="M14.191 1.677l.119.013A10.635 10.635 0 0122.565 12a10.615 10.615 0 01-4.065 8.335l1.39 2.165h-6.675l2.68-6.13 1.42 2.175a8.435 8.435 0 00-3.47-14.78 1.065 1.065 0 01.465-2.075zM10.785 1.5l-2.68 6.13L6.68 5.45a8.44 8.44 0 003.475 14.785h-.02a1.065 1.065 0 01-.235 2.1 1.245 1.245 0 01-.23-.025A10.56 10.56 0 015.5 3.665L4.11 1.5h6.675z"></path></g>) : (<g><path d="M13.35 2.55c.1-.4.5-.65.9-.55 4.65 1.05 8 5.25 8 10 0 3.15-1.5 6.15-4 8.1l1.6 2.4H13.2l2.7-6.15 1.6 2.45c2-1.65 3.25-4.15 3.25-6.8 0-4.05-2.9-7.65-6.85-8.55-.4-.1-.65-.5-.55-.9zM10.8 1.5L8.1 7.65 6.5 5.2c-2 1.6-3.25 4.1-3.25 6.8 0 4.05 2.9 7.65 6.85 8.55A.745.745 0 119.75 22c-4.65-1.05-8-5.25-8-10 0-3.2 1.5-6.15 3.95-8.1L4.1 1.5z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
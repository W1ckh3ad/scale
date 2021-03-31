import { Component, Prop, Host, Element, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-action-link'
})
export class ActionLink {
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
            {this.selected ? (<g><path fill-rule="evenodd" d="M12.225 8.37a5.75 5.75 0 011.895 9.39l-3.711 3.711a5.75 5.75 0 01-7.954-8.306L5.99 9.65a5.71 5.71 0 011.31-1 6.845 6.845 0 00-.105 1.155c0 .638.092 1.273.27 1.885L4.22 14.93a3.255 3.255 0 004.6 4.6l3.535-3.535a3.26 3.26 0 000-4.6l-.124-.133a2.23 2.23 0 01-.006-2.892zm1.19-6.165a5.75 5.75 0 018.13 0 5.75 5.75 0 010 8.075l-3.535 3.535a5.66 5.66 0 01-1.305 1c.03-.15.07-.325.07-.5a6.72 6.72 0 00-.245-2.5l3.25-3.245a3.255 3.255 0 10-4.6-4.6l-3.535 3.535a3.26 3.26 0 000 4.6l.124.134a2.25 2.25 0 01.016 2.896A5.64 5.64 0 019.88 13.87a5.745 5.745 0 010-8.13z"></path></g>) : (<g><path fill-rule="evenodd" d="M11.94 8.8c.665.255 1.29.645 1.82 1.18a5.245 5.245 0 010 7.425l-3.535 3.535a5.215 5.215 0 01-3.71 1.535c-1.34 0-2.685-.51-3.71-1.535a5.26 5.26 0 010-7.425L6.34 9.98c.27-.275.565-.505.875-.705-.015.175-.025.35-.025.525 0 .45.045.89.13 1.32l-3.455 3.455a3.76 3.76 0 000 5.305 3.76 3.76 0 005.305 0l3.535-3.535a3.755 3.755 0 000-5.305 3.857 3.857 0 00-.935-.68c-.05-.18-.08-.365-.08-.555 0-.355.095-.695.25-1.005zm1.825-6.24a5.26 5.26 0 017.425 0 5.242 5.242 0 01-.01 7.425l-3.535 3.535c-.27.275-.565.505-.875.705.05-.62.01-1.235-.11-1.835l3.465-3.465a3.76 3.76 0 000-5.305 3.736 3.736 0 00-2.65-1.095c-.96 0-1.92.365-2.65 1.095L11.29 7.155c-.71.705-1.1 1.65-1.1 2.65s.39 1.94 1.1 2.65c.28.28.595.505.93.68.065.25.1.505.075.77-.02.22-.085.5-.23.795a5.188 5.188 0 01-1.835-1.185 5.2 5.2 0 01-1.54-3.71c0-1.4.55-2.72 1.54-3.71z"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
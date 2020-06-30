import { Element, Component, h, Prop, Host, Listen } from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';
import { styles } from './tab-nav.styles';
import { CssInJs } from '../../utils/css-in-js';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';
import { TabHeader } from '../tab-header/tab-header';

@Component({
  tag: 'scale-tab-nav',
  shadow: false,
})
export class TabNav implements Base {
  @Element() el: HTMLElement;
  /** (optional) Injected jss styles */
  @Prop() styles?: StyleSheet;
  /** decorator Jss stylesheet */
  @CssInJs('TabNav', styles) stylesheet: StyleSheet;

  @Prop() ariaLabel?: string;

  @Listen('tabclick')
  clickHandler(ev: CustomEvent<TabHeader>) {
    console.log(ev.target);
    this.selectTab(event.target);
  }

  componentWillLoad() {
    this.linkPanels();
  }
  componentDidUnload() {}
  componentWillUpdate() {}

  getAllPanels() {
    return Array.from(this.el.querySelectorAll('scale-tab-panel'));
  }

  getAllTabs() {
    return Array.from(this.el.querySelectorAll('scale-tab-header'));
  }

  panelForTab(tab) {
    const panelId = tab.getAttribute('aria-controls');
    return this.el.querySelector(`#${panelId}`);
  }

  selectTab(tab) {
    this.reset();
    const panel: any = this.panelForTab(tab);

    if (!panel) {
      throw new Error('No panel with this id');
    }

    tab.selected = true;
    panel.hidden = false;
    tab.focus();
  }

  reset() {
    const tabs = this.getAllTabs();
    const panels = this.getAllPanels();

    tabs.forEach(tab => (tab.selected = false));
    panels.forEach(panel => (panel.hidden = true));
  }

  linkPanels() {
    const tabs = this.getAllTabs();

    tabs.forEach((tab, i) => {
      console.log(tab);
      const panel = tab.nextElementSibling;
      if (panel.tagName.toLowerCase() !== 'scale-tab-panel') {
        console.error(`Tab #${i} is not a` + `sibling of a Panel`);
        return;
      }
      //auto-generate id
      if (
        !tab.getAttribute('aria-controls') &&
        !panel.getAttribute('aria-labelledby')
      ) {
        const id = `auto-generated-${i}`;
        console.log(`set id ${id}`);
        tab.setAttribute('aria-controls', id);
        panel.setAttribute('aria-labelledby', id);
        panel.setAttribute('id', id);
      }
    });

    const selectedTab = tabs.find(tab => tab.selected) || tabs[0];
    this.selectTab(selectedTab);
  }

  render() {
    const { classes } = this.stylesheet;
    const label = this.ariaLabel ? { 'aria-label': this.ariaLabel } : {};

    return (
      <Host>
        <style>{this.stylesheet.toString()}</style>
        <nav style={{ border: `2px solid red` }}>
          <ul style={{ border: `1px solid green` }}>
            <slot name="headings"></slot>
          </ul>
        </nav>
        <div style={{ border: `1px solid blue` }}>
          <slot name="content"></slot>
        </div>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    const { classes } = this.stylesheet;
    return classNames(classes['tab-nav']);
  }
}

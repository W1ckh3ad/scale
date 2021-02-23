import { Component, h, Prop, Host, Event, EventEmitter } from '@stencil/core';
import { CssClassMap, isPseudoClassSupported } from '../../utils/utils';
import classNames from 'classnames';

let i = 0;

// For chrome that applies :focus upon click, and :focus-visible isn't widely supported
const isFocusVisibleSupported = isPseudoClassSupported(':focus-visible');

@Component({
  tag: 'scale-switch',
  styleUrl: './switch.css',
  shadow: false,
})
export class Switch {
  /** (optional) Active switch */
  @Prop({ reflect: true }) checked?: boolean = false;
  /** (optional) Disabled switch */
  @Prop() disabled?: boolean = false;
  /** (optional) Input id */
  @Prop() inputId?: string;
  /** (optional) switch label */
  @Prop() label?: string;

  /** Emitted when the switch was clicked */
  @Event() scaleChange!: EventEmitter;

  componentWillLoad() {
    if (this.inputId == null) {
      this.inputId = 'switch-' + i++;
    }
  }

  render() {
    return (
      <Host>
        <div class={this.getCssClassMap()}>
          <label id={`${this.inputId}-label`}>
            <input
              type="checkbox"
              checked={this.checked}
              disabled={this.disabled}
              aria-pressed={this.checked}
              aria-labelledby={`${this.inputId}-label`}
              id={this.inputId}
              onChange={(e: any) => {
                this.checked = e.target.checked;
                // bubble event through the shadow dom
                this.scaleChange.emit({ value: this.checked });
              }}
            />
            <div class="switch__wrapper">
              <div class="switch__toggle" />
              <div class="switch__text" />
            </div>
            {this.label && <span class="switch__label">{this.label}</span>}
          </label>
        </div>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    return classNames(
      'switch',
      this.disabled && 'switch--disabled',
      isFocusVisibleSupported && 'switch--focus-visible-supported',
      !isFocusVisibleSupported && 'switch--focus-visible-not-supported'
    );
  }
}

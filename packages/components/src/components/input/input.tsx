import {
  Component,
  Prop,
  Event,
  h,
  EventEmitter,
  Host,
  State,
} from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';
import { styles } from './input.styles';
import { CssInJs } from '../../utils/css-in-js';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';

@Component({
  tag: 'scale-input',
  shadow: false,
})
export class Input implements Base {
  /** (optional) Input text class */
  @Prop() customClass?: string = '';
  /** (optional) Input type */
  @Prop() type?:
    | 'email'
    | 'hidden'
    | 'number'
    | 'password'
    | 'tel'
    | 'text'
    | 'checkbox'
    | 'radio'
    | 'select'
    | 'textarea'
    | 'url' = 'text';
  /** (optional) Input name */
  @Prop() name?: string = '';
  /** (optional) Input label variant */
  @Prop() variant?: 'animated' | 'static' = 'static';
  /** (optional) Input label */
  @Prop() label: string = '';
  /** (optional) Input size */
  @Prop() size?: string = '';
  /** (optional) textarea row */
  @Prop() rows?: number;
  /** (optional) textarea column */
  @Prop() cols?: number;
  /** (optional) Input helper text */
  @Prop() helperText?: string = '';
  /** (optional) Input status */
  @Prop() status?: string = '';
  /** (optional) Input max length */
  @Prop() maxLength?: number;
  /** (optional) Input min length */
  @Prop() minLength?: number;
  /** (optional) Input placeHolder */
  @Prop() placeholder?: string = '';
  /** (optional) Input disabled */
  @Prop() disabled?: boolean;
  /** (optional) Input required */
  @Prop() required?: boolean;
  /** (optional) Input counter */
  @Prop() counter?: boolean;
  /** (optional) radio checked value */
  @Prop() preChecked?: boolean;
  /** (optional) textarea resize */
  @Prop() resize?: 'unset' | 'none' | 'vertical' | 'horizontal';
  /** (optional) Input value */
  @Prop({ mutable: true }) value?: string;
  /** (optional) Input checkbox id */
  @Prop() inputId?: string;
  /** (optional) Input checkbox checked icon */
  @Prop() icon?: string;
  /** (optional) select multiple options */
  @Prop() multiple?: boolean;
  /** (optional) the number of visible options in a select drop-down list */
  @Prop() visibleSize?: number;
  /** (optional) input background transparent */
  @Prop() transparent?: boolean;
  /** (optional) Input text event changed */
  @Event() scaleChange: EventEmitter<InputEvent>;
  /** (optional) Input focus event */
  @Event() scaleFocus: EventEmitter<FocusEvent>;
  /** (optional) Input blur event */
  @Event() scaleBlur: EventEmitter<FocusEvent>;
  /** (optional) Input keyDown event */
  @Event() scaleKeyDown: EventEmitter<KeyboardEvent>;

  /** (optional) Injected jss styles */
  @Prop() styles?: any;
  /** decorator Jss stylesheet */
  @CssInJs('Input', styles) stylesheet: StyleSheet;

  /** (optional) Input checkbox checked */
  @State() checked?: boolean = this.preChecked;
  @State() customResize?: any;

  componentWillLoad() {}
  componentWillUpdate() {}
  componentDidLoad() {}
  componentDidUnload() {}

  handleChange(event) {
    this.value = event.target ? event.target.value : this.value;
    this.checked = event.target.checked;
    this.scaleChange.emit(event);
  }

  handleFocus(event) {
    this.scaleFocus.emit(event);
  }

  handleBlur(event) {
    this.scaleBlur.emit(event);
  }

  handleKeyDown(event) {
    this.scaleKeyDown.emit(event);
  }

  render() {
    if (this.type === 'checkbox') {
      return (
        <Host>
          <style>{this.stylesheet.toString()}</style>
          <div class={this.getCssClassMap()}>
            <div class={classNames('input__checkbox-container')}>
              <input
                type="checkbox"
                name={this.name}
                class={classNames('input__checkbox')}
                id={this.inputId}
                onChange={event => this.handleChange(event)}
                value={this.value}
                checked={this.checked}
                disabled={this.disabled}
              />
              <span
                class={classNames('input__checkbox-placeholder')}
                tabIndex={1}
              ></span>
              {!!this.checked && !!this.icon && (
                <scale-icon path={this.icon} size={12}></scale-icon>
              )}
            </div>
            <label class="input__label" htmlFor={this.inputId}>
              {this.label}
            </label>
          </div>
        </Host>
      );
    }

    if (this.type === 'radio') {
      return (
        <Host>
          <style>{this.stylesheet.toString()}</style>
          <div class={this.getCssClassMap()}>
            <input
              type="radio"
              name={this.name}
              class={classNames('input__radio')}
              id={this.inputId}
              onChange={event => this.handleChange(event)}
              value={this.value}
              checked={this.preChecked}
              disabled={this.disabled}
            />
            <label class="input__label" htmlFor={this.inputId}>
              {this.label}
            </label>
          </div>
        </Host>
      );
    }
    const Element = this.type === 'textarea' ? 'textarea' : 'input';

    return (
      <Host>
        <style>{this.stylesheet.toString()}</style>
        <div class={this.getCssClassMap()}>
          {this.variant === 'static' && (
            <label class="input__label" htmlFor={this.inputId}>
              {this.label}
            </label>
          )}
          {this.type === 'select' ? (
            <div class="input__select-wrapper">
              <select
                class={classNames('input__select')}
                onChange={event => this.handleChange(event)}
                disabled={this.disabled}
                required={this.required}
                multiple={this.multiple}
                id={this.inputId}
                size={this.visibleSize}
              >
                <slot />
              </select>
              {!!this.icon && <scale-icon path={this.icon}></scale-icon>}
            </div>
          ) : (
            <Element
              type={this.type}
              class={classNames(
                `input__${this.type === 'textarea' ? 'textarea' : 'input'}`,
                this.customResize && this.customResize.id
              )}
              style={!!this.resize && { resize: this.resize }}
              value={this.value}
              {...(!!this.name ? { name: this.name } : {})}
              required={this.required}
              minLength={this.minLength}
              maxLength={this.maxLength}
              id={this.inputId}
              onInput={event => this.handleChange(event)}
              onFocus={event => this.handleFocus(event)}
              onBlur={event => this.handleBlur(event)}
              onKeyDown={event => this.handleKeyDown(event)}
              {...(!!this.placeholder ? { placeholder: this.placeholder } : {})}
              disabled={this.disabled}
              {...(!!this.rows ? { rows: this.rows } : {})}
              {...(!!this.cols ? { cols: this.cols } : {})}
            />
          )}

          {this.variant === 'animated' && (
            <label class="input__label" htmlFor={this.inputId}>
              {this.label}
            </label>
          )}
          {(!!this.helperText || !!this.counter) && (
            <div class="input__meta">
              {!!this.helperText && (
                <div class="input__helper-text">{this.helperText}</div>
              )}
              {this.counter && (
                <div class="input__counter">
                  {!!this.value ? this.value.length : 0} / {this.maxLength}
                </div>
              )}
            </div>
          )}
        </div>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    const { classes } = this.stylesheet;
    const isAnimated =
      (!!this.placeholder || !!this.value) && this.variant === 'animated';
    return classNames(
      classes.input,
      this.customClass && this.customClass,
      this.type && classes[`input--type-${this.type}`],
      this.checked && classes[`input--checked`],
      this.resize && classes[`input--resize-${this.resize}`],
      this.variant && classes[`input--variant-${this.variant}`],
      this.disabled && classes[`input--disabled`],
      this.transparent && classes['input--transparent'],
      this.status && classes[`input--status-${this.status}`],
      this.size && classes[`input--size-${this.size}`],
      isAnimated && 'animated'
    );
  }
}

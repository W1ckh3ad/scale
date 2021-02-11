import { Component, Prop, h, State, Element, Host } from '@stencil/core';
import classNames from 'classnames';

import Base from '../../utils/base-interface';

const name = 'carousel';
@Component({
  tag: 'scale-carousel',
  styleUrl: './carousel.css',
  shadow: true,
})
export class Carousel implements Base {
  @Element() hostElement: HTMLElement;
  /** (optional) carousel display direction */
  @Prop() vertical?: boolean = false;

  /** (optional) Injected CSS styles */
  @Prop() styles?: string;

  @State() slidesArray = [];
  @State() value = 0;

  componentWillLoad() {
    if (this.slidesArray.length === 0) {
      const children = this.hostElement.children;
      // tslint:disable-next-line: prefer-for-of
      for (let childIndex = 0; childIndex < children.length; childIndex++) {
        if (children[childIndex].slot === '') {
          // tslint:disable-next-line: prefer-for-of
          for (
            let slideIndex = 0;
            slideIndex < children[childIndex].children.length;
            slideIndex++
          ) {
            const element = children[childIndex].children[slideIndex];
            this.slidesArray.push(element);
          }
        }
      }
    }
  }
  componentWillUpdate() {}
  disconnectedCallback() {}

  handleSlideChange = direction => {
    const val = this.value;
    if (direction === 'prev') {
      val === 0
        ? (this.value = -100 * (this.slidesArray.length - 1))
        : (this.value = val + 100);
    }

    if (direction === 'next') {
      val === -100 * (this.slidesArray.length - 1)
        ? (this.value = 0)
        : (this.value = val - 100);
    }
  };

  setActiveSlide = index => {
    this.value = -100 * index;
  };

  setTransformValue = () => {
    if (!!this.vertical) {
      return `translateY(${this.value}%)`;
    }
    return `translateX(${this.value}%)`;
  };

  setActiveCssClass = index => {
    if (Math.abs(this.value) / 100 === index) {
      return 'carousel__indicator--active';
    }
    return '';
  };

  render() {
    return (
      <Host>
        {this.styles && <style>{this.styles}</style>}

        <div class={this.getCssClassMap()}>
          <div class={`${name}__container`}>
            <div
              class={`${name}__arrow ${name}__arrow--left`}
              onClick={() => this.handleSlideChange('prev')}
            >
              <slot name="arrow-left" />
            </div>
            {this.slidesArray.map(element => (
              <div
                class={`${name}__slide`}
                style={{ transform: this.setTransformValue() }}
              >
                <div innerHTML={element.outerHTML}></div>
              </div>
            ))}
            <div
              class={`${name}__arrow ${name}__arrow--right`}
              onClick={() => this.handleSlideChange('next')}
            >
              <slot name="arrow-right" />
            </div>
          </div>
          <ul class={`${name}__indicators`}>
            {Array.from(Array(this.slidesArray.length).keys()).map(index => (
              <li
                key={index}
                class={`${name}__indicator ${this.setActiveCssClass(index)}`}
                onClick={() => this.setActiveSlide(index)}
              ></li>
            ))}
          </ul>
        </div>
      </Host>
    );
  }

  getCssClassMap() {
    return classNames(name, this.vertical && `${name}--vertical`);
  }
}

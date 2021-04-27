import { newSpecPage } from '@stencil/core/testing';
import { Slider } from './slider';

describe('Slider', () => {
  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [Slider],
      html: `<scale-slider>Label</scale-slider>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [Slider],
      html: `<scale-slider value="10">Label</scale-slider>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  describe('classes', () => {
    it('should handle getCssClassMap() and getBasePartMap()', () => {
      const element = new Slider();
      element.disabled = true;
      element.trackSmall = true;
      element.thumbLarge = true;
      expect(element.getCssClassMap()).toContain('slider');
      expect(element.getCssClassMap()).toContain('slider--disabled');
      expect(element.getCssClassMap()).toContain('slider--track-small');
      expect(element.getCssClassMap()).toContain('slider--thumb-large');

      expect(element.getBasePartMap()).toContain('slider');
      expect(element.getBasePartMap()).toContain('track-small');
      expect(element.getBasePartMap()).toContain('disabled');
      expect(element.getBasePartMap()).toContain('thumb-large');
    });
  });

  describe('props', () => {
    it('check default props', async () => {
      const page = await newSpecPage({
        components: [Slider],
        html: `<scale-slider></scale-slider>`,
      });
      expect(page.rootInstance.min).toBe(0);
      expect(page.rootInstance.max).toBe(100);
      expect(page.rootInstance.step).toBe(1);
      expect(page.rootInstance.showValue).toBe(true);
      expect(page.rootInstance.customColor).toBe('');
      expect(page.rootInstance.disabled).toBe(false);
      expect(page.rootInstance.trackSmall).toBe(false);
      expect(page.rootInstance.thumbLarge).toBe(false);
    });

    it('check props being set', async () => {
      const page = await newSpecPage({
        components: [Slider],
        html: `<scale-slider></scale-slider>`,
      });
      page.root.value = 50;
      page.root.min = 10;
      page.root.max = 90;
      page.root.step = 2;
      page.root.label = 'slider label';
      page.root.showValue = 'false';
      page.root.customColor = 'magenta';
      page.root.disabled = 'true';
      page.root.trackSmall = 'true';
      page.root.thumbLarge = 'true';
      page.root.sliderId = 'sliderID';
      page.root.styles = 'background : red';
      await page.waitForChanges();
      expect(page.rootInstance.value).toBe(50);
      expect(page.rootInstance.min).toBe(10);
      expect(page.rootInstance.max).toBe(90);
      expect(page.rootInstance.step).toBe(2);
      expect(page.rootInstance.label).toBe('slider label');
      expect(page.rootInstance.showValue).toBe(false);
      expect(page.rootInstance.customColor).toBe('magenta');
      expect(page.rootInstance.disabled).toBe(true);
      expect(page.rootInstance.trackSmall).toBe(true);
      expect(page.rootInstance.thumbLarge).toBe(true);
      expect(page.rootInstance.sliderId).toBe('sliderID');
      expect(page.rootInstance.styles).toBe('background : red');
    });
  });

  describe('functions', () => {
    it('setPosition(-20) returns 0', () => {
      const element = new Slider();
      element.setPosition(-20);
      expect(element.value).toBe(0);
    });

    it('setPosition(120) returns 100', () => {
      const element = new Slider();
      element.setPosition(120);
      expect(element.value).toBe(100);
    });

    it('setPosition(50) returns 50', () => {
      const element = new Slider();
      element.setPosition(50);
      expect(element.value).toBe(50);
    });

    it('currentPosition()', () => {
      const element = new Slider();
      element.value = 22;
      element.max = 90;
      element.min = 10;
      expect(element.currentPosition()).toBe('15%');
    });

    it('onDragEnd()', () => {
      const element = new Slider();
      element.dragging = true;
      element.onDragEnd();
      expect(element.dragging).toBe(false);
    });
  });

  describe('events', () => {
    let page;
    beforeEach(async () => {
      page = await newSpecPage({
        components: [Slider],
        html: `<scale-slider></scale-slider>`,
      });
    });

    it('onKeyDown with ArrowRight', async () => {
      page.root.value = 50;
      const sliderThumb = page.root.shadowRoot.querySelector('.slider__thumb');
      sliderThumb.dispatchEvent(
        new KeyboardEvent('keydown', {
          view: window,
          bubbles: true,
          cancelable: true,
          key: 'ArrowRight',
        })
      );
      await page.waitForChanges();
      expect(await page.rootInstance.value).toBe(51);
    });

    it('onKeyDown with ArrowUp', async () => {
      page.root.value = 50;
      const sliderThumb = page.root.shadowRoot.querySelector('.slider__thumb');
      sliderThumb.dispatchEvent(
        new KeyboardEvent('keydown', {
          view: window,
          bubbles: true,
          cancelable: true,
          key: 'ArrowUp',
        })
      );
      await page.waitForChanges();
      expect(await page.rootInstance.value).toBe(60);
    });

    it('mock onMousedown', async () => {
      const mock = jest.fn();
      const sliderThumbWrapper = page.root.shadowRoot.querySelector(
        '.slider__thumb-wrapper'
      );
      sliderThumbWrapper.addEventListener('mousedown', mock);
      await page.waitForChanges();
      sliderThumbWrapper.dispatchEvent(new MouseEvent('mousedown'));
      await page.waitForChanges();
      expect(mock).toHaveBeenCalled();
    });

    it('onMousedown with disabled', async () => {
      page.root.disabled = true;
      const sliderThumbWrapper = page.root.shadowRoot.querySelector(
        '.slider__thumb-wrapper'
      );
      sliderThumbWrapper.dispatchEvent(new MouseEvent('mousedown'));
      await page.waitForChanges();
      expect(page.rootInstance.dragging).toBe(undefined);
    });
  });
});

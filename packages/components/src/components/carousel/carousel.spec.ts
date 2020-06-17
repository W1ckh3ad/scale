import { newSpecPage } from '@stencil/core/testing';
import { Carousel } from './carousel';
import { styles } from './carousel.styles';
import jss from 'jss';

describe('Carousel', () => {
  let element;
  let stylesheet;
  beforeEach(async () => {
    element = new Carousel();
    stylesheet = element.stylesheet = jss.createStyleSheet(styles as any);
  });

  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [Carousel],
      html: `<scale-carousel>Label</scale-carousel>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should set correct translate value when clicking arrow prev', () => {
    element.value = 0;
    element.slidesArray = [0, 1, 2, 3];
    element.handleSlideChange('prev');
    expect(element.value).toBe(-300);
  });

  it('should set correct translate value when clicking arrow next', () => {
    element.value = 100;
    element.slidesArray = [0, 1, 2, 3];
    element.handleSlideChange('next');
    expect(element.value).toBe(0);
  });

  it('should set correct active slide', () => {
    element.value = -300;
    element.setActiveSlide(2);
    expect(element.value).toBe(-200);
  });

  it('should set correct transform value based on the carousel container direction', () => {
    element.value = -300;
    element.vertical = true;
    element.setTransformValue();
    expect(element.setTransformValue()).toBe('translateY(-300%)');
  });

  it('should set correct transform value based on the carousel container direction', () => {
    element.value = -200;
    element.setTransformValue();
    expect(element.setTransformValue()).toBe('translateX(-200%)');
  });

  it('should handle css classes', () => {
    element.customClass = 'custom';
    expect(element.getCssClassMap()).toContain('custom');

    element.vertical = true;
    expect(element.getCssClassMap()).toContain(
      stylesheet.classes['carousel--vertical']
    );
  });
});

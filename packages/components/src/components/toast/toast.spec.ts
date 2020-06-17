import { newSpecPage } from '@stencil/core/testing';
import { Toast } from './toast';
import { styles } from './toast.styles';
import jss from 'jss';

describe('Toast', () => {
  let element;
  let stylesheet;
  beforeEach(async () => {
    element = new Toast();
    stylesheet = element.stylesheet = jss.createStyleSheet(styles as any);
    jest.useFakeTimers();
    jest.mock('date-fns');
  });

  const components = [Toast];

  const timeStamp = 1540035262000;

  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components,
      html: `<scale-toast>Toast message</scale-toast>`,
    });
    expect(page.root.shadowRoot).toBeTruthy();
    expect(page.root).toMatchSnapshot();
  });

  it('should match snapshot when opened', async () => {
    const page = await newSpecPage({
      components,
      html: `<scale-toast opened=true >Label</scale-toast>`,
    });
    expect(page.root.shadowRoot).toBeTruthy();
    expect(page.root).toMatchSnapshot();
  });

  it('should close the Toast', () => {
    expect(element.opened).toBe(undefined);
    element.close();
    setTimeout(() => {
      expect(element.opened).toBe(false);
    }, 10);
  });

  it('should open the Toast', () => {
    expect(element.opened).toBe(undefined);
    element.open();
    expect(element.opened).toBe(true);
  });

  it('should hide the toast', () => {
    element.autohide = true;
    element.opened = true;
    element.setToastTimeout();

    setTimeout(() => {
      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenLastCalledWith(
        expect.any(Function),
        element.autohideTime
      );
    }, 10);
  });

  it('should not hide the toast', () => {
    element.autohide = false;
    element.opened = false;
    element.setToastTimeout();
    expect(element.autohide).toBe(false);
  });

  it('should cancel the timeout', () => {
    element.myTimeout = 500;
    element.close();

    setTimeout(() => {
      expect(clearTimeout).toHaveBeenCalledTimes(1);
      expect(element.myTimeout).toEqual(undefined);
    }, 10);
  });

  it('should render with default timeformat', () => {
    element.time = timeStamp;
    element.getTime();

    expect(element.time).toBe(timeStamp);
  });

  it('should handle css classes', () => {
    element.customClass = 'custom';
    expect(element.getCssClassMap()).toContain('custom');

    element.variant = 'primary';
    stylesheet.addRule('toast--variant-primary', {});
    expect(element.getCssClassMap()).toContain(
      stylesheet.classes['toast--variant-primary']
    );

    element.size = 'small';
    stylesheet.addRule('toast--size-small', {});
    expect(element.getCssClassMap()).toContain(
      stylesheet.classes['toast--size-small']
    );

    element.opened = true;
    stylesheet.addRule('toast--opened', {});
    expect(element.getCssClassMap()).toContain(
      stylesheet.classes['toast--opened']
    );

    element.hideToast = false;
    stylesheet.addRule('toast--show', {});
    expect(element.getCssClassMap()).toContain(
      stylesheet.classes['toast--show']
    );

    element.hideToast = true;
    stylesheet.addRule('toast--hide', {});
    expect(element.getCssClassMap()).toContain(
      stylesheet.classes['toast--hide']
    );
  });
});

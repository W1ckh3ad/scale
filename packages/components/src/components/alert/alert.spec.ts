import { newSpecPage } from '@stencil/core/testing';
import { Alert } from './alert';
import { styles } from './alert.styles';
import jss from 'jss';

describe('Alert', () => {
  let element;
  let stylesheet;
  beforeEach(async () => {
    element = new Alert();
    stylesheet = element.stylesheet = jss.createStyleSheet(styles as any);
    jest.useFakeTimers();
  });

  const components = [Alert];

  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components,
      html: `<scale-alert>Notifications</scale-alert>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should match snapshot when opened', async () => {
    const page = await newSpecPage({
      components,
      html: `<scale-alert opened=true >Notifications</scale-alert>`,
    });
    expect(page.root.shadowRoot).toBeTruthy();
    expect(page.root).toMatchSnapshot();
  });

  it('should match snapshot with hasSlotClose', async () => {
    const page = await newSpecPage({
      components,
      html: `
      <scale-alert opened=true>
        Notifications
        <div slot="close">
          Close
        </div>
      </scale-alert>
      `,
    });
    expect(page.root.shadowRoot).toBeTruthy();
    expect(page.root).toMatchSnapshot();
  });

  it('should close the alert', () => {
    expect(element.opened).toBe(undefined);
    element.close();
    expect(element.opened).toBe(false);
  });

  it('should open the alert', () => {
    expect(element.opened).toBe(undefined);
    element.open();
    expect(element.opened).toBe(true);
  });

  it('should not open the alert/ should not render, if the alert is already opened', () => {
    element.opened = true;
    expect(element.root).toBeFalsy();
  });

  it('should closed the alert after default timeout', () => {
    element.timeout = true;
    element.onCloseAlertWithTimeout();

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(
      expect.any(Function),
      element.defaultTimeout
    );
  });

  it('should closed the alert after set timeout', () => {
    element.timeout = 500;
    element.onCloseAlertWithTimeout();

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 500);
  });

  it('should handle css classes', () => {
    element.customClass = 'custom';
    expect(element.getCssClassMap()).toContain('custom');

    element.size = 'small';
    stylesheet.addRule('alert--size-small', {});
    expect(element.getCssClassMap()).toContain(
      stylesheet.classes['alert--size-small']
    );

    element.variant = 'primary';
    stylesheet.addRule('alert--variant-primary', {});
    expect(element.getCssClassMap()).toContain(
      stylesheet.classes['alert--variant-primary']
    );
  });
});

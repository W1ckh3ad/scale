/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { ToggleGroup } from './toggle-group';

describe('Toggle Group', () => {
  let page: SpecPage;
  describe('snapshots', () => {
    it('default props', async () => {
      page = await newSpecPage({
        components: [ToggleGroup],
        html: `<scale-toggle-group>
		   <scale-toggle-button>Click Me!</scale-toggle-button>
		   <scale-toggle-button>Click Me!</scale-toggle-button>
		   <scale-toggle-button selected>Click Me!</scale-toggle-button>
		 </scale-toggle-group>`,
      });
      expect(page.root).toMatchSnapshot();
    });
    it('size small, multi false', async () => {
      page = await newSpecPage({
        components: [ToggleGroup],
        html: `<scale-toggle-group size="small" multi="false">
		   <scale-toggle-button>Click Me!</scale-toggle-button>
		   <scale-toggle-button>Click Me!</scale-toggle-button>
		   <scale-toggle-button selected>Click Me!</scale-toggle-button>
		 </scale-toggle-group>`,
      });
      expect(page.root).toMatchSnapshot();
    });
    it('disabled', async () => {
      page = await newSpecPage({
        components: [ToggleGroup],
        html: `<scale-toggle-group disabled aria-label="Aria Label">
		   <scale-toggle-button>Click Me!</scale-toggle-button>
		   <scale-toggle-button>Click Me!</scale-toggle-button>
		   <scale-toggle-button selected>Click Me!</scale-toggle-button>
		 </scale-toggle-group>`,
      });
      expect(page.root).toMatchSnapshot();
    });
    it('styles', async () => {
      page = await newSpecPage({
        components: [ToggleGroup],
        html: `<scale-toggle-group styles="color:red">
		   <scale-toggle-button>Click Me!</scale-toggle-button>
		   <scale-toggle-button>Click Me!</scale-toggle-button>
		   <scale-toggle-button selected>Click Me!</scale-toggle-button>
		 </scale-toggle-group>`,
      });
      expect(page.root).toMatchSnapshot();
    });
  });
  describe('classes', () => {
    it('should handle getCssClassMap() and getBasePartMap()', () => {
      const element = new ToggleGroup();
      expect(element.getCssClassMap()).toContain('toggle-group');
      expect(element.getCssClassMap()).toContain('toggle-group--inline');
      expect(element.getCssClassMap()).not.toContain('toggle-group--border');

      expect(element.getBasePartMap()).toContain('toggle-group');
      expect(element.getBasePartMap()).toContain('inline');
      expect(element.getBasePartMap()).not.toContain('border');
      element.border = true;
      expect(element.getCssClassMap()).toContain('toggle-group--border');
      expect(element.getBasePartMap()).toContain('border');
    });
  });
});

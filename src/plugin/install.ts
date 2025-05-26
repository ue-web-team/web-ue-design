import type { Plugin } from 'vue';
import * as components from '../index';

const install: Plugin = {
  install(app) {
    for (const key in components) {
      const component = (components as any)[key];
      if (component && component.name?.startsWith('U')) {
        app.component(component.name, component);
      }
    }
  },
};

export default install;

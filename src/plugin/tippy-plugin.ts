// src/plugins/tippy-plugin.ts

import 'tippy.js/animations/scale.css';
import 'tippy.js/dist/tippy.css'; // Optional default styling
import '../../tippy.css';

import { App } from 'vue';
import VueTippy from 'vue-tippy';

export default {
  install(app: App) {
    app.use(VueTippy, {
      directive: 'tippy', // v-tippy
      component: 'tippy', // <tippy>
      componentSingleton: 'tippy-singleton',
      defaultProps: {
        placement: 'auto-end',
        allowHTML: true,
        theme: 'ue-tooltip',
        animation: 'scale',
      },
    });
  },
};

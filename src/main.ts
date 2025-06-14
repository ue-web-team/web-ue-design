import 'prismjs/themes/prism-tomorrow.css';
import 'tippy.js/animations/scale.css';
import 'tippy.js/dist/tippy.css'; // optional for styling
import { createApp } from 'vue';
import { plugin as VueTippy } from 'vue-tippy';
import '../tippy.css';
import App from './App.vue';
import './assets/base.postcss';
import './assets/borna.css';

// import './tooltip.css';

createApp(App)
  .use(
    VueTippy,

    {
      directive: 'tippy', // => v-tippy
      component: 'tippy', // => <tippy/>
      componentSingleton: 'tippy-singleton', // => <tippy-singleton/>,
      defaultProps: {
        placement: 'auto-end',
        allowHTML: true,
        theme: 'ue-tooltip',
        animation: 'scale',
        touch: false,
      }, // => Global default options * see all props
    }
  )
  .mount('#app');

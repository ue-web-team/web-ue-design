import Prism from 'prismjs';
import * as Vue from 'vue';

import { Slots, VNode } from 'vue';

declare type Data = Record<string, unknown>;

export default Vue.defineComponent({
  props: {
    code: {
      type: String,
    },
    inline: {
      type: Boolean,
      default: false,
    },
    language: {
      type: String,
      default: 'markup',
    },
  },
  setup(props, { slots, attrs }: { slots: Slots; attrs: Data }) {
    const { h } = Vue;
    const slotsData = (slots && slots.default && slots.default()) || [];
    const code = props.code || (slotsData.length > 0 ? String(slotsData[0].children) : '');
    const { inline, language } = props;
    const prismLanguage = Prism.languages[language];

    const className = `language-${language} rounded-lg !bg-black !text-sm relative`;

    // If language is not supported, just return raw code
    const highlighted = prismLanguage ? Prism.highlight(code, prismLanguage, language) : code;

    if (inline) {
      return (): VNode =>
        h('code', {
          ...attrs,
          class: [attrs.class, className],
          innerHTML: highlighted,
        });
    }

    return (): VNode =>
      h('pre', { ...attrs, class: [attrs.class, className] }, [
        h('code', {
          class: className,
          innerHTML: highlighted,
        }),
        h('p', {
          class: 'bg-white absolute top-0 px-2 border-2 border-black rounded-bl text-black rounded-tr-md right-0',
          innerHTML: props.language,
        }),
      ]);
  },
});

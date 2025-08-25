<template>
  <button class="ubutton focus-style" @pointerdown="onDown" :class="buttonClasses" :disabled="isDisabled" :type="type">
    <span v-if="loading" class="mr-2 animate-spin">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path d="M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8z" fill="currentColor" />
      </svg>
    </span>
    <span class="mr-2" v-if="$slots.before && !loading">
      <slot name="before"></slot>
    </span>
    <slot></slot>
    <span class="ml-2" v-if="$slots.after">
      <slot name="after"></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';

const props = defineProps({
  kind: {
    type: String as PropType<'primary' | 'light' | 'white' | 'ghost' | 'warn'>,
    default: 'primary',
    validator: (value: string) => ['primary', 'light', 'white', 'ghost', 'warn'].indexOf(value) !== -1,
  },

  outline: {
    type: Boolean as PropType<boolean>,
    default: false,
  },

  loading: {
    type: Boolean as PropType<boolean>,
  },

  disabled: {
    type: Boolean as PropType<boolean>,
    default: false,
  },

  hover: {
    type: Boolean as PropType<boolean>,
    default: false,
  },

  active: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  type: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    default: 'submit',
  },
  variant: {
    type: String as PropType<string>,
  },
});
// const { variant } = useVariant(computed(() => props.variant));
const isDisabled = computed(() => props.disabled || props.loading);
const buttonClasses = computed(() => {
  return [
    props.kind,
    props.variant ? props.variant : '',
    // getVariantType(variant.value),
    props.outline ? 'outline-type' : '',
    props.hover ? 'hover' : '',
    props.active ? 'active' : '',
    props.disabled ? 'btn-disabled' : '',
  ];
});
// const getVariantType = (variant: ColorVariant) => {
//   switch (variant) {
//     case ColorVariant.DARKGREEN:
//     case ColorVariant.EVERGREEN:
//       return 'light-variant';
//     default:
//       return 'dark-variant';
//   }
// };
const onDown = () => {};
//const { onDown } = useRippleEffect(isDisabled.value as boolean)
</script>

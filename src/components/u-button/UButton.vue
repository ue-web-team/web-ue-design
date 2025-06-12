<template>
  <button class="focus-style" @pointerdown="onDown" :class="buttonClasses" :disabled="isDisabled">
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
    type: String as PropType<'dark' | 'light' | 'white' | 'ghost' | 'warn'>,
    default: 'dark',
    validator: (value: string) => ['dark', 'light', 'white', 'ghost', 'warn'].indexOf(value) !== -1,
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
});
const isDisabled = computed(() => props.disabled || props.loading);
const buttonClasses = computed(() => {
  return [props.kind, props.outline ? 'outline-type' : '', props.hover ? 'hover' : '', props.active ? 'active' : ''];
});
const onDown = () => {};
//const { onDown } = useRippleEffect(isDisabled.value as boolean)
</script>

<style lang="pcss" scoped>
button {
  @apply min-h-11 inline-flex justify-center items-center relative overflow-hidden rounded-full truncate px-6 font-semibold;
  @apply transform-gpu transition-all ease-out duration-200 active:scale-95;
  @apply disabled:bg-gray-200 disabled:border-gray-400 disabled:text-gray-500;
  &.dark {
    @apply bg-darkgreen text-white dark:bg-sun dark:text-typegreen;
    &:hover, &.hover, &:active, &.active {
      @apply bg-evergreen text-white dark:bg-sun/85 dark:text-typegreen;
    }
    &:disabled {
      @apply bg-gray-300 text-darkgreen hover:bg-gray-300 hover:text-darkgreen pointer-events-none;
    }
  }
  &.light {
    @apply bg-white text-typegreen dark:bg-sun dark:text-typegreen;
    &:hover, &.hover {
      @apply bg-typegreen text-white dark:text-sun dark:bg-typegreen;
    }
    &:active, &.active {
      @apply bg-typegreen text-white dark:text-sun dark:bg-typegreen;
    }
    &:disabled {
      @apply bg-gray-300 text-darkgreen hover:bg-gray-300 hover:text-darkgreen pointer-events-none;
    }
  }
  &.white {
    @apply bg-white text-darkgreen dark:text-typegreen;
     &:hover, &.hover {
      @apply bg-typegreen text-white dark:bg-typegreen dark:text-white;
    }
    &:active, &.active {
      @apply bg-typegreen text-white;
    }
    &:disabled {
      @apply bg-gray-300 border-darkgreen text-darkgreen hover:bg-gray-300 hover:text-darkgreen hover:border-darkgreen pointer-events-none;
    }
  }
  &.ghost {
    @apply text-typegreen dark:text-sun;
     &:hover, &.hover {
       @apply bg-typegreen/10 dark:bg-sun/20
     }
      &:active, &.active {
      @apply bg-typegreen/10 text-typegreen dark:bg-sun/20 dark:text-sun;
    }
    &:disabled {
      @apply bg-gray-300 border-darkgreen text-darkgreen hover:bg-gray-300 hover:text-darkgreen hover:border-darkgreen pointer-events-none;
    }
  }
  &.warn {
     @apply bg-red text-white;
    &:hover, &.hover, &:active, &.active {
      @apply bg-red-600;
    }
    &:disabled {
      @apply bg-gray-300 border-darkgreen text-darkgreen hover:bg-gray-300 hover:text-darkgreen hover:border-darkgreen pointer-events-none;
    }
  }
}

button.outline-type {
  @apply border-2;
  &.dark {
    @apply border-darkgreen bg-transparent text-typegreen dark:text-white dark:border-sun;
    &:hover, &.hover {
      @apply bg-evergreen text-white dark:bg-sun/20 dark:text-white dark:border-sun;
    }
    &:active, &.active {
      @apply bg-evergreen text-white dark:bg-sun/20 dark:text-white dark:border-sun;
    }
    &:disabled {
      @apply bg-gray-300 border-darkgreen text-darkgreen hover:bg-gray-300 hover:text-darkgreen hover:border-darkgreen pointer-events-none;
    }
  }
  &.light {
    @apply border-white bg-transparent text-white dark:border-white dark:text-sun;
     &:hover, &.hover {
      @apply bg-white text-typegreen border-typegreen dark:bg-sun dark:text-typegreen dark:border-white;
    }
    &:active, &.active {
      @apply bg-white text-typegreen border-typegreen dark:bg-sun dark:text-typegreen dark:border-white;
    }
    &:disabled {
      @apply bg-gray-300 border-darkgreen text-darkgreen hover:bg-gray-300 hover:text-darkgreen hover:border-darkgreen pointer-events-none;
    }
  }
  &.white {
    @apply border-white bg-transparent text-white;
     &:hover, &.hover {
      @apply bg-white text-darkgreen dark:bg-white dark:text-typegreen;
    }
    &:active, &.active {
      @apply bg-white text-darkgreen dark:bg-white dark:text-typegreen;
    }
    &:disabled {
      @apply bg-gray-300 border-darkgreen text-darkgreen hover:bg-gray-300 hover:text-darkgreen hover:border-darkgreen pointer-events-none;
    }
  }
  &.warn {
    @apply border-red bg-transparent text-black dark:text-white;
     &:hover, &.hover {
      @apply bg-red-100 text-black dark:bg-red dark:text-white;
    }
    &:active, &.active {
      @apply bg-red text-white;
    }
    &:disabled {
      @apply bg-gray-300 border-darkgreen text-darkgreen hover:bg-gray-300 hover:text-darkgreen hover:border-darkgreen pointer-events-none;
    }
  }
}
</style>

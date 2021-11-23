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
import { useRippleEffect } from '../../logic/use-ripple'

const props = defineProps({
  kind: {
    type: String as PropType<string>,
    default: 'dark',
    validator: (value: string) => ['dark', 'light', 'white', 'ghost', 'warn'].indexOf(value) !== -1
  },

  outline: {
    type: Boolean as PropType<boolean>,
    default: false,
  },

  loading: {
    type: Boolean as PropType<boolean>
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
})
const isDisabled = computed(() => props.disabled || props.loading)
const buttonClasses = computed(() => {
 
  return [
    props.kind,
    props.outline ? 'outline' : '',
    props.hover ? 'hover': '',
    props.active ? 'active': '',
  ];
})
const onDown = () => {};
//const { onDown } = useRippleEffect(isDisabled.value as boolean)
</script>

<style lang="postcss" scoped>
button {
  @apply min-h-11 inline-flex justify-center items-center relative overflow-hidden rounded-full truncate px-6 font-semibold;
  @apply transform-gpu transition-all ease-out duration-200 active:scale-95;
  @apply !disabled:(bg-gray-200 border-gray-400 text-gray-500);
  &.dark {
    @apply bg-primary text-white;
    &:hover, &.hover, &:active, &.active {
      @apply bg-primary-600;
    }
  }
  &.light {
    @apply bg-primary-100 text-black;
    &:hover, &.hover {
      @apply bg-white;
    }
    &:active, &.active {
      @apply bg-primary-600 text-white;
    }
  }
  &.white {
    @apply bg-white text-black;
     &:hover, &.hover {
      @apply bg-primary-100;
    }
    &:active, &.active {
      @apply bg-primary-600 text-white;
    }
  }
  &.ghost {
     &:hover, &.hover {
       @apply bg-gray-300
     }
      &:active, &.active {
      @apply bg-gray-500 text-white;
    }
  }
  &.warn {
     @apply bg-red text-white;
    &:hover, &.hover, &:active, &.active {
      @apply bg-red-600;
    }
  }
}

button.outline {
  @apply border-2;
  &.dark {
    @apply border-primary bg-transparent text-black;
    &:hover, &.hover {
      @apply bg-primary-100;
    }
    &:active, &.active {
      @apply bg-primary text-white;
    }
  }
  &.light {
    @apply border-primary-100 bg-transparent text-primary-100;
     &:hover, &.hover {
      @apply bg-white text-primary border-primary;
    }
    &:active, &.active {
      @apply bg-primary-600 border-primary-100 text-white;
    }
  }
  &.white {
    @apply border-white bg-transparent text-white;
     &:hover, &.hover {
      @apply bg-primary-100 text-black;
    }
    &:active, &.active {
      @apply bg-primary-600 text-white;
    }
  }
  &.warn {
    @apply border-red bg-transparent text-black;
     &:hover, &.hover {
      @apply bg-red-100 text-black;
    }
    &:active, &.active {
      @apply bg-red text-white;
    }
  }
}
</style>
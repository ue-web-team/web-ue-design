<template>
  <div
    v-if="props.to"
    :class="['btn', buttonClasses, 'focus-style', disabled ? '' : 'cursor-pointer']"
    v-bind="$attrs"
    v-tippy="tooltip"
    @pointerdown="onDown"
  >
    <router-link v-tippy="tooltip" :to="props.to" :disabled="disabled">
      <div class="transform transition-transform duration-200 wrapper">
        <slot />
      </div>
    </router-link>
  </div>

  <button v-else :class="buttonClasses" class="focus-style" :disabled="disabled" @pointerdown="onDown" v-bind="$attrs">
    <div class="transform transition-transform duration-200 wrapper">
      <slot />
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed, PropType, useAttrs } from 'vue';
import { useRippleEffect } from '../../logic/use-ripple';

const props = defineProps({
  kind: {
    type: String as PropType<string>,
    default: 'dark',
    validator: (value: string) => ['dark', 'ghost'].indexOf(value) !== -1,
  },

  outline: {
    type: Boolean as PropType<boolean>,
    default: false,
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
  fab: {
    type: Boolean,
    default: false,
  },
  to: {
    type: String,
  },
  themeInverse: {
    type: Boolean,
    default: false,
  },
  tooltip: {
    type: String,
    default: '',
  },
});

const attrs = useAttrs();

const buttonClasses = computed(() => {
  return [
    props.kind,
    props.outline ? 'outline-type' : '',
    props.hover ? 'hover' : '',
    props.active ? 'active' : '',
    props.themeInverse ? 'theme-inverse' : '',
  ];
});

const { onDown } = useRippleEffect(props.disabled);
</script>

<style lang="pcss" scoped>
button, a, .btn {
  @apply w-11 h-11 rounded-full flex items-center justify-center relative overflow-hidden;
  @apply transition-all transform-gpu ease-out duration-200 active:scale-95;
  @apply disabled:bg-gray-200 disabled:border-gray-400 disabled:text-gray-500;
  &.dark {
    @apply bg-darkgreen text-white dark:bg-sun dark:text-typegreen;
    &.theme-inverse {
      @apply bg-white text-black dark:bg-evergreen dark:text-sun ;
      &:hover, &.hover, &:active, &.active {
        @apply bg-fog dark:bg-darkgreen;
      }

    }
    &:hover, &.hover {
      @apply bg-evergreen dark:bg-sun/85 dark:text-typegreen;
    }
    &:active, &.active {
      @apply bg-evergreen dark:bg-sun/85 dark:text-typegreen;
    }
  }
  &.ghost {
    @apply disabled:bg-transparent dark:text-sun;
     &:hover, &.hover {
       @apply bg-gray-400/40 dark:bg-sun/20
     }
      &:active, &.active {
      @apply bg-gray-500 text-white dark:bg-sun/20 dark:text-sun;
    }
  }
}

button.outline-type {
  @apply border-2;
  &.dark {
    @apply border-darkgreen bg-transparent text-black dark:text-white dark:border-sun;
    &:hover, &.hover {
      @apply bg-evergreen text-white dark:bg-sun/20 dark:text-white dark:border-sun;
    }
    &:active, &.active {
      @apply bg-evergreen text-white dark:bg-sun/20 dark:text-white dark:border-sun;
    }
  }
}
button:active .wrapper {
  @apply scale-75;
}
</style>

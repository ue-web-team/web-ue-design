<template>
  <button
    class="focus-style"
    @pointerdown="onDown"
    :class="buttonClasses"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';
import { useRippleEffect } from '../../logic/use-ripple'

const props = defineProps({
  kind: {
    type: String as PropType<string>,
    default: 'dark',
    validator: (value: string) => ['dark', 'ghost'].indexOf(value) !== -1
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
})

const buttonClasses = computed(() => {
  return [
    props.kind,
    props.outline ? 'outline' : '',
    props.hover ? 'hover': '',
    props.active ? 'active': '',
  ];
})

const { onDown } = useRippleEffect(props.disabled)

</script>

<style lang="pcss" scoped>
button {
  @apply w-11 h-11 rounded-full flex items-center justify-center relative overflow-hidden;
  @apply transition-all transform-gpu ease-out duration-200 active:scale-95;
  @apply !disabled:(bg-gray-200 border-gray-400 text-gray-500);
  &.dark {
    @apply bg-primary text-white;
    &:hover, &.hover {
      @apply bg-primary-600;
    }
    &:active, &.active {
      @apply bg-primary-600;
    }
  }
  &.ghost {
    @apply !disabled:(bg-transparent);
     &:hover, &.hover {
       @apply bg-gray-400/40
     }
      &:active, &.active {
      @apply bg-gray-500 text-white;
    }
  }
}

button.outline {
  @apply border-2;
  &.dark {
    @apply border-primary bg-transparent text-black dark:text-white;
    &:hover, &.hover {
      @apply bg-primary-100 dark:text-black;
    }
    &:active, &.active {
      @apply bg-primary text-white;
    }
  }
}
</style>
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
import { computed, PropType } from "vue";
import { useRippleEffect } from "../../logic/use-ripple";

const props = defineProps({
  kind: {
    type: String as PropType<string>,
    default: "dark",
    validator: (value: string) => ["dark", "ghost"].indexOf(value) !== -1,
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
});

const buttonClasses = computed(() => {
  return [
    props.kind,
    props.outline ? "outline-type" : "",
    props.hover ? "hover" : "",
    props.active ? "active" : "",
  ];
});

const { onDown } = useRippleEffect(props.disabled);
</script>

<style lang="pcss" scoped>
button {
  @apply w-11 h-11 rounded-full flex items-center justify-center relative overflow-hidden;
  @apply transition-all transform-gpu ease-out duration-200 active:scale-95;
  @apply disabled:bg-gray-200 disabled:border-gray-400 disabled:text-gray-500;
  &.dark {
    @apply bg-darkgreen text-white dark:bg-sun dark:text-typegreen;
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
</style>

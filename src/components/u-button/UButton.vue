<template>
  <button @pointerdown="onDown" :class="buttonClasses" :disabled="isDisabled">
  <span v-if="loading" class="mr-2 animate-spin">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8z" fill="currentColor"/></svg>
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
  loading: {
    type: Boolean as PropType<boolean>
  },
  outline: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  rounded: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  plain: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  warn: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    required: false,
    default: false,
  },
})
const isDisabled = computed(() => props.disabled || props.loading)
const buttonClasses = computed(() => {
  const classes = [
    'focus-style min-h-11 inline-flex justify-center items-center relative overflow-hidden transition-all duration-300 px-4 py-2 font-semibold !disabled:(bg-gray-200 border-gray-400 text-gray-500)',
    'transform-gpu ease-out duration-200 active:scale-95 hover:bg-gray-300 active:bg-gray-400'
  ];
  if(props.plain) {
    return [
      props.rounded ? 'rounded-full' : 'rounded',
      ...classes
    ]
  }
  return [
    props.outline ? 'border-2 border-primary-500 bg-white hover:bg-primary-200' : 'bg-primary-500 hover:(bg-primary-700 text-white)',
    props.warn ? props.outline ? 'border-warn-500 hover:bg-warn-200' : 'bg-warn-500 hover:(bg-warn-700 text-white)' : '',
    props.rounded ? 'rounded-full' : 'rounded',
    ...classes
  ]
})

const { onDown } = useRippleEffect(isDisabled.value as boolean)


</script>
<template>
  <button @pointerdown="onDown" :class="buttonClasses" :disabled="disabled">
  <span class="mr-2" v-if="$slots.before">
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
const buttonClasses = computed(() => {
  return [
    props.outline ? 'border-2 border-primary-500 bg-white hover:bg-primary-200' : 'bg-primary-500 hover:(bg-primary-700 text-white)',
    props.warn ? props.outline ? 'border-warn-500 hover:bg-warn-200' : 'bg-warn-500 hover:(bg-warn-700 text-white)' : '',
    props.rounded ? 'rounded-full' : 'rounded',
    'focus-style inline-flex items-center relative overflow-hidden transition-colors duration-300 px-4 py-2 font-semibold !disabled:(bg-gray-200 border-gray-400 text-gray-500)',
  ]
})

const { onDown } = useRippleEffect(props.disabled)


</script>
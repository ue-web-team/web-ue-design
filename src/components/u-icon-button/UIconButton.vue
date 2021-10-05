<template>
  <button class="focus-style w-11 h-11 rounded-full flex items-center justify-center relative overflow-hidden transition-colors duration-300 !disabled:(bg-gray-200 border-gray-400 text-gray-500)" @pointerdown="onDown" :class="buttonClasses" :disabled="disabled">
    <slot />
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
const buttonClasses = computed(() => {
  if(props.plain) {
    return [
    'hover:bg-gray-300 active:bg-gray-400',
    ]
  }
  return [
    props.outline ? 'border-2 border-green-500 bg-white hover:bg-green-200' : 'bg-green-500 hover:(bg-green-700 text-white)',
    props.warn ? props.outline ? 'border-orange-500 hover:bg-orange-200' : 'bg-orange-500 hover:(bg-orange-700 text-white)' : '',
  ]
})

const { onDown } = useRippleEffect(props.disabled)

</script>
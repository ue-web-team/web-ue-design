<template>
  <button
    class="focus-style w-11 h-11 rounded-full flex items-center justify-center relative overflow-hidden transition-all transform-gpu ease-out duration-200 active:scale-95 !disabled:(bg-gray-200 border-gray-400 text-gray-500)"
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
  if (props.plain) {
    return [
      'hover:bg-gray-300 active:bg-gray-400',
    ]
  }
  return [
    props.outline ? 'border-2 border-primary-500 bg-white hover:bg-primary-200' : 'bg-primary-500 hover:(bg-primary-700 text-white)',
    props.warn ? props.outline ? 'border-warn-500 hover:bg-warn-200' : 'bg-warn-500 hover:(bg-warn-700 text-white)' : '',
  ]
})

const { onDown } = useRippleEffect(props.disabled)

</script>
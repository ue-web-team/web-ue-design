<template>
  <button :class="buttonClasses" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';

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
    props.outline ? 'border-2 border-green-500 bg-white hover:bg-green-200' : 'bg-green-500 hover:(bg-green-700 text-white)',
    props.warn ? props.outline? 'border-orange-500 hover:bg-orange-200': 'bg-orange-500 hover:(bg-orange-700 text-white)': '',
    props.rounded ? 'rounded-full': 'rounded',
    'focus-style transition-colors duration-300 px-4 py-2 font-semibold !disabled:(bg-gray-200 border-gray-400 text-gray-500)',

  ]
})

</script>
<style scoped>
</style>
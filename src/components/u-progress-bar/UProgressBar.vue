<template>
  <transition
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:after-enter="afterEnter"
    v-bind:css="false"
  >
    <div
      class="c-Progress"
      role="progressbar"
      :title="`${percentage}%`"
      aria-valuemin="0"
      :aria-valuemax="max"
      :aria-valuenow="value"
    >
      <div class="c-Progress__background" />
      <div class="c-Progress__fill" :style="`width: ${percentage}%`" />
    </div>
  </transition>
</template>

<script setup lang="ts">

const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

const queue = (() => {
  const pending: any[] = []
  function next() {
    let fn = pending.shift()
    if (fn) {
      fn(next)
    }
  }
  return (fn: any) => {
    pending.push(fn)
    if (pending.length === 1) {
      next()
    }
  }
})();

import { computed, PropType } from 'vue';

const props = defineProps({
  value: {
    type: Number as PropType<number>,
    default: 0,
  },
  max: {
    type: [Number, String] as PropType<number>,
    default: 100,
  },
  loading: {
    type: Boolean as PropType<boolean>,
    default: false,
  }
})

const percentage = computed(() => {
  const value = Number(props.value)
  const max = Number(props.max)
  if (Number.isNaN(value) || Number.isNaN(max)) {
    return 0
  }
  return Math.round((value / max) * 100)
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



</script>
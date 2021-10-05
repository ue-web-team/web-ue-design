<template>
  <button class @pointerdown="onDown" :class="buttonClasses" :disabled="disabled">
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
    props.warn ? props.outline ? 'border-orange-500 hover:bg-orange-200' : 'bg-orange-500 hover:(bg-orange-700 text-white)' : '',
    props.rounded ? 'rounded-full' : 'rounded',
    'focus-style flex items-center relative overflow-hidden transition-colors duration-300 px-4 py-2 font-semibold !disabled:(bg-gray-200 border-gray-400 text-gray-500)',
  ]
})

// material ripple effect
const onDown = (e: PointerEvent) => {
  if(props.disabled) return;
  const button = e.currentTarget as HTMLButtonElement;
  const rect = button.getBoundingClientRect()
  const { x, y } = getRelativePointer(e, rect)

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${x - radius}px`;
  circle.style.top = `${y - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }
  button.appendChild(circle);
}

const getRelativePointer = ({ x, y }: PointerEvent, { top, left }: DOMRect) => ({
  x: x - left,
  y: y - top
})

</script>
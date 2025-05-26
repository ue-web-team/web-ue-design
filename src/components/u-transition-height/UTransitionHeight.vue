<template>
  <transition name="u-expand" @enter="enter" @after-enter="afterEnter" @leave="leave">
    <slot />
  </transition>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

const props = defineProps({
  duration: {
    type: Number as PropType<Number>,
    default: 300,
  },
});

const enter = (el: Element) => {
  const element = el as HTMLElement;
  const width = getComputedStyle(element).width;

  element.style.width = width;
  element.style.position = 'absolute';
  element.style.visibility = 'hidden';
  element.style.height = 'auto';

  const height = getComputedStyle(element).height;

  element.style.width = '';
  element.style.position = '';
  element.style.visibility = '';
  element.style.height = '0';
  element.style.transitionDuration = `${props.duration}ms`;

  // Force repaint to make sure the
  // animation is triggered correctly.
  getComputedStyle(element).height;

  // Trigger the animation.
  // We use `requestAnimationFrame` because we need
  // to make sure the browser has finished
  // painting after setting the `height`
  // to `0` in the line above.
  requestAnimationFrame(() => {
    element.style.height = height;
  });
};

const afterEnter = (el: Element) => {
  const element = el as HTMLElement;
  element.style.height = 'auto';
};
const leave = (el: Element) => {
  const element = el as HTMLElement;
  const height = getComputedStyle(element).height;

  element.style.height = height;
  element.style.transitionDuration = `${props.duration}ms`;

  // Force repaint to make sure the
  // animation is triggered correctly.
  getComputedStyle(element).height;

  requestAnimationFrame(() => {
    element.style.height = '0';
  });
};
</script>

<style scoped>
* {
  will-change: height;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>

<style>
.u-expand-enter-active,
.u-expand-leave-active {
  transition: height ease-in-out;
  overflow: hidden;
}
</style>

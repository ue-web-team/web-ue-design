<template>
  <input v-model="model" type="checkbox" />
</template>

<script setup lang="ts">
import { computed, WritableComputedRef } from "vue";
const props = defineProps({
  modelValue: Boolean,
  toggle: {
    type: Boolean,
    default: false
  }
});
const emit = defineEmits(["update:modelValue"]);
const model: WritableComputedRef<boolean> = computed({
  get(): boolean {
    return props.modelValue;
  },
  set(newValue: boolean): void {
    emit("update:modelValue", newValue);
  },
});
</script>

<style scoped lang="postcss">
input[type="checkbox"] {
  position: relative;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 100%;
  border: 2px solid green;
  appearance: none;
  -webkit-appearance: none;
  &:disabled {
    opacity: 0.6;
    filter: grayscale(1);
  }
  &:checked::before {
    transform: rotateZ(35deg);
    opacity: 0;
  }
  &::before {
    position: absolute;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="green"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L18 7" /></svg>');
    color: greenyellow;
    transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
  }
}
</style>
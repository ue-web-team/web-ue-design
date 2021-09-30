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
  width: 2.25rem;
  height: 1.25rem;
  border-radius: 1.25rem;
  border: 2px solid green;
  display: block;
  appearance: none;
  -webkit-appearance: none;
  transform-origin: center center;
  &:disabled {
    opacity: 0.6;
    filter: grayscale(1);
  }
  &::before {
    content: "";
    width: 1.25rem;
    height: 1.25rem;
    background: green;
    transform: translate3D(-7%, -10%, 0) scale(0.65);
    border-radius: 100%;
    position: absolute;
    transition: transform 0.2s ease;
  }
   &:checked::before {
   
    transform: translate3D(65%, -10%, 0) scale(0.65);
   
  }
}

</style>
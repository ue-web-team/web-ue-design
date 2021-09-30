<template>
  <input v-model="model" type="radio" />
</template>

<script setup lang="ts">
import { computed, WritableComputedRef } from "vue";
const props = defineProps({
  modelValue: String,
});
const emit = defineEmits(["update:modelValue"]);
const model: WritableComputedRef<string> = computed({
  get(): any {
    return props.modelValue;
  },
  set(newValue: string): void {
    emit("update:modelValue", newValue);
  },
});
</script>

<style scoped lang="postcss">
input[type="radio"] {
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
    transform: scale(.7);
    opacity: 1;
  }
  &::before {
    position: absolute;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    //border: 3px solid white;
    background-color: green;
    transition: opacity 0.2s ease, transform 0.2s ease;
    transform: scale(.1);
    opacity: 0;
  }
}
</style>
<template>
  <input class="focus-style" v-model="model" type="checkbox" />
</template>

<script setup lang="ts">
import { computed, WritableComputedRef } from "vue";
const props = defineProps({
  modelValue: Boolean,
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

<style scoped lang="pcss">
input[type="checkbox"] {
  @apply relative w-9 h-5 rounded-xl border-2 border-primary-500 cursor-pointer
  block appearance-none origin-center disabled:(opacity-60 filter grayscale);

  &::before {
    @apply w-5 h-5 rounded-full absolute bg-gray-400;
    content: "";
    transform: translate3D(-10%, -10%, 0) scale(0.65);
    transition: transform 0.2s ease;
  }
  &:checked::before {
    @apply bg-primary-500;
    transform: translate3D(65%, -10%, 0) scale(0.65);
  }
}
</style>
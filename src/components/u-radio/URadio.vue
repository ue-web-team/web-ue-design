<template>
  <input class="focus-style" v-model="model" type="radio" />
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
   @apply relative w-5 h-5 rounded-full border-2 border-green-500 appearance-none
  disabled:(opacity-60 filter grayscale);

  &:checked::before {
    transform: scale(.7);
    @apply opacity-100 scale-75;
  }
  &::before {
    @apply absolute block w-full h-full rounded-full bg-green-500 opacity-0;
  
    content: "";
   
    transition: opacity 0.2s ease, transform 0.2s ease;
    transform: scale(.1);

  }
}
</style>
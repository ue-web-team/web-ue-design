<template>
  <input class="focus-style" v-model="model" type="checkbox" />
</template>

<script setup lang="ts">
/*import { computed, WritableComputedRef } from "vue";
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
});*/
</script>

<style scoped lang="postcss">
input[type="checkbox"] {
  @apply relative w-5 h-5 rounded-full border-2 border-primary-500 appearance-none
  disabled:(opacity-60 filter grayscale);
 
  &:checked::before {
    transform: rotateZ(35deg);
    @apply opacity-0 transform-gpu rotate-z-45;
  }
  &::before {
    @apply block w-full h-full;
    content: "";
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="%2300C853"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L18 7" /></svg>');
    transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
  }
}
</style>
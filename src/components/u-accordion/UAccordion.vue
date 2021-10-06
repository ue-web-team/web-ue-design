<template>
  <div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { PropType, watch, ref } from "vue"

const props = defineProps({
  multi: {
    default: false,
    type: Boolean as PropType<boolean>
  }
})
const emit = defineEmits(["update:open"]);
/*const isOpen = ref(props.open);
watch(() => props.open, (value: boolean) => {
  isOpen.value = value;
});
const closeModal = () => {
  //isOpen.value = false;
  emit("update:open", false);
};*/
</script>
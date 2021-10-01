<template>
  <Disclosure v-slot="{ open }">
    <DisclosureButton
      class="flex justify-between border-2 border-green-600 items-center w-full px-4 py-2 text-sm font-medium text-left rounded-lg transition-colors duration-300 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
    >
      <span>{{ title }}</span>
      <svg :class="open ? 'rotate-x-180' : ''" class="transform transition-transform duration-300 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
      
    </DisclosureButton>
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-100 ease-out"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <DisclosurePanel class="px-4 pt-4 pb-2">
        <slot name="default" />
      </DisclosurePanel>
    </transition>
  </Disclosure>
</template>

<script setup lang="ts">
import { PropType, watch, ref } from "vue"
import {
  Disclosure,
  DisclosurePanel,
  DisclosureButton
} from "@headlessui/vue"

const props = defineProps({
  open: {
    type: Boolean as PropType<boolean>
  },
  title: {
    type: String as PropType<string>
  },
})
const emit = defineEmits(["update:open"]);
const isOpen = ref(props.open);
watch(() => props.open, (value: boolean) => {
  isOpen.value = value;
});
const closeModal = () => {
  //isOpen.value = false;
  emit("update:open", false);
};
</script>
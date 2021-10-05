<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal">
      <div class="fixed inset-0 overflow-y-auto">
        <div class="min-h-screen px-4 flex justify-center items-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0 bg-black bg-opacity-60" />
          </TransitionChild>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              style="max-height: min(95vh, 1200px)"
              class="flex flex-col w-full max-w-md px-6 pt-2 pb-6 overflow-auto text-left mx-auto transition-all transform bg-white shadow-xl rounded-lg"
            >
              <DialogTitle as="h1" class="my-3 text-xl md:text-2xl text-gray-900">{{ title }}</DialogTitle>

              <div class="text-gray-700">
                <slot name="default"></slot>
              </div>

              <div class="mt-4 flex gap-4 justify-end">
                <slot name="actions"></slot>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { PropType, watch, ref } from "vue"
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from "@headlessui/vue"

const props = defineProps({
  open: {
    required: true,
    type: Boolean as PropType<boolean>
  },
  title: {
    default: "Ingen titel",
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

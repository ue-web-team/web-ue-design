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
              :style="{'max-height': 'min(85vh, 1200px)', 'background-color': color}"
              class="flex flex-col w-full max-w-md p-4 md:(px-8 py-6) mx-auto transition-all relative transform bg-white shadow-xl rounded-lg"
            >
              <DialogTitle as="h1" class="pb-2 text-xl font-bold md:(pb-4 text-2xl)">{{ title }}</DialogTitle>
              <DialogDescription class="overflow-auto">
                <slot name="default"></slot>
              </DialogDescription>

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
import { colors } from '../../config/colors';
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
  DialogDescription,
} from "@headlessui/vue"

const props = defineProps({
  color: {
    type: String as PropType<string>,
    default: colors.gray['100']
  },
  open: {
    required: true,
    type: Boolean as PropType<boolean>
  },
  title: {
    default: "Ingen titel",
    type: String as PropType<string>
  },
  requireInteraction: {
    default: false,
    type: Boolean as PropType<boolean>
  }
})
const emit = defineEmits(["update:open"]);
const isOpen = ref(props.open);
watch(() => props.open, (value: boolean) => {
  isOpen.value = value;
});
const closeModal = () => {
  if(!props.requireInteraction) {
    emit("update:open", false);
  }
};
</script>

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
            <DialogOverlay class="fixed inset-0 bg-black/60" />
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
              :style="{
                'max-height': 'min(85vh, 1200px)',
              }"
              class="flex flex-col w-full p-4 md:px-8 md:py-6 mx-auto transition-all relative transform shadow-xl rounded-lg"
              :class="[isLoading ? 'overflow-hidden' : '', big ? 'max-w-3xl' : 'max-w-lg', backgroundColor]"
            >
              <div class="progress-wrapper" v-if="isLoading">
                <UProgressBar :loading="isLoading" />
              </div>

              <DialogTitle as="h2" class="title" :class="headingClasses ? headingClasses : 'text dark:text-sun'">{{
                title
              }}</DialogTitle>
              <DialogDescription class="overflow-y-auto">
                <slot name="default"></slot>
              </DialogDescription>
              <slot name="content"> </slot>
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
import {
  Dialog,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';
import { computed, PropType, ref, watch } from 'vue';

import { useVariant } from '../../composables/useVariant';
import { ColorVariant } from '../../config/colorVariant';
import UProgressBar from '../u-progress-bar/UProgressBar.vue';

const props = defineProps({
  colorClasses: {
    type: String as PropType<string>,
    required: false,
  },
  headingClasses: {
    type: String as PropType<string>,
    required: false,
  },

  open: {
    required: true,
    type: Boolean as PropType<boolean>,
  },
  title: {
    default: 'Ingen titel',
    type: String as PropType<string>,
  },
  requireInteraction: {
    default: false,
    type: Boolean as PropType<boolean>,
  },
  big: {
    default: false,
    type: Boolean as PropType<boolean>,
  },
  isLoading: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  variant: {
    type: String as PropType<ColorVariant>,
  },
});
const { backgroundColor } = useVariant(computed(() => props.variant));
const emit = defineEmits(['update:open']);
const isOpen = ref(props.open);
watch(
  () => props.open,
  (value: boolean) => {
    isOpen.value = value;
  }
);
const closeModal = () => {
  if (!props.requireInteraction) {
    emit('update:open', false);
  }
};
</script>
<style lang="pcss" scoped>
.progress-wrapper {
  @apply absolute w-full h-8 overflow-hidden left-0 top-0 pointer-events-none;
}
.title {
  @apply pb-2 md:pb-4 md:text-4xl text-2xl font-bold;
}
</style>

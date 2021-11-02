<template>
  <section
    class="relative bg-gradient-to-br from-white via-white to-gray-100 shadow-lg border-2 border-gray-300 rounded"
  >
    <div class="absolute w-full h-6 sm:rounded-xl overflow-hidden">
    
    </div>

    <div class="px-4 md:px-8 py-2 md:py-4 text-xl md:text-2xl border-b border-gray-200">
      <slot name="header" />
    </div>
    <div class="p-4 md:p-8">
      <slot />
    </div>
    <div v-if="$slots.actions" class="px-4 md:px-8 border-t border-gray-200">
      <slot name="actions" />
    </div>
  </section>
</template>


<script setup lang="ts">
import { PropType } from 'vue';

const props = defineProps({
  isLoading: {
    type: Boolean as PropType<boolean>,
    default: false,
  }
})

</script>

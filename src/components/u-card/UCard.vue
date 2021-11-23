<template>
  <section
    :aria-labelledby="titleId"
    :tabindex="focusable? 0: -1"
    class="focus-style relative bg-gradient-to-br from-white via-white to-gray-100 shadow-lg border border-gray-100 rounded-md"
  >
    <slot />
  </section>
</template>


<script setup lang="ts">
import { PropType, ref } from 'vue';
import { provide } from 'vue'
import { useId } from '../../logic/use-id';
import { CardContext } from './UCardContext';

// provide id of card to nested components
const titleId = ref(`u-card-${useId()}`);
const api = {
  titleId,
};
provide(CardContext, api);

const props = defineProps({
  isLoading: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  focusable: {
    type: Boolean as PropType<boolean>,
    default: false
  }
})

</script>

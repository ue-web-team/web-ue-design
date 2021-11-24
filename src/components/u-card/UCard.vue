<template>
  <section :aria-labelledby="titleId" :tabindex="focusable ? 0 : -1" class="focus-style card">
  <div class="rounded-t-md overflow-hidden">
    <UProgressBar :loading="isLoading" />
  </div>
<slot />
  </section>
</template>


<script setup lang="ts">
import { PropType, ref } from 'vue';
import { provide } from 'vue'
import { colors } from '../../config/colors';
import { useId } from '../../logic/use-id';
import { CardContext } from './UCardContext';
import UProgressBar from '../u-progress-bar/UProgressBar.vue';

// provide id of card to nested components
const titleId = ref(`u-card-${useId()}`);
const api = {
  titleId,
};
provide(CardContext, api);

const props = defineProps({
  color: {
    type: String as PropType<string>,
    default: colors.gray['100']
  },
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

<style lang="postcss" scoped>
.card {
  @apply relative rounded-lg;
  background-color: v-bind("props.color");
}
</style>
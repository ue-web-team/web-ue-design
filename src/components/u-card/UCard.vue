<template>
  <section
    :aria-labelledby="titleId"
    :tabindex="focusable ? 0 : -1"
    class="focus-style card"
    :class="cardBackgroundColor"
  >
    <div class="progress-wrapper">
      <UProgressBar :loading="isLoading" />
    </div>
    <slot />
  </section>
</template>

<script setup lang="ts">
import { computed, PropType, provide, ref } from 'vue';
import { useVariant } from '../../composables/useVariant';
import { ColorVariant } from '../../config/colorVariant';
import { useId } from '../../logic';
import UProgressBar from '../u-progress-bar/UProgressBar.vue';
import { CardContext } from './UCardContext';

// provide id of card to nested components
const titleId = ref(`u-card-${useId()}`);
const api = {
  titleId,
};
provide(CardContext, api);
const { variant, cardBackgroundColor } = useVariant(computed(() => props.variant));
const colorVariant = computed(() => {
  switch (variant.value) {
    case ColorVariant.DARKGREEN:
    case ColorVariant.EVERGREEN:
      return 'dark';
    default:
      return 'light';
  }
});

const props = defineProps({
  // colorClasses: {
  //   type: String as PropType<string>,
  //   required: false,
  // },

  isLoading: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  focusable: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  variant: {
    type: String as PropType<ColorVariant>,
  },
});
// const { cardBackgroundColor } = useVariant(computed(() => props.variant));
</script>

<style lang="pcss" scoped>
.card {
  @apply relative flex flex-col rounded-lg;

}
.progress-wrapper {
  @apply absolute rounded-t-lg h-8 w-full overflow-hidden pointer-events-none;
}
</style>

<template>
  <section
    :aria-labelledby="titleId"
    :tabindex="focusable ? 0 : -1"
    class="focus-style card"
    :class="[colorClasses ? colorClasses : 'bg-white dark:bg-evergreen']"
  >
    <div class="progress-wrapper">
      <UProgressBar :loading="isLoading" />
    </div>
    <slot />
  </section>
</template>

<script setup lang="ts">
import { PropType, provide, ref } from "vue";
import { useId } from "../../logic";
import UProgressBar from "../u-progress-bar/UProgressBar.vue";
import { CardContext } from "./UCardContext";

// provide id of card to nested components
const titleId = ref(`u-card-${useId()}`);
const api = {
  titleId,
};
provide(CardContext, api);

const props = defineProps({
  colorClasses: {
    type: String as PropType<string>,
    required: false,
  },

  isLoading: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  focusable: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
});
</script>

<style lang="pcss" scoped>
.card {
  @apply relative flex flex-col rounded-lg;

}
.progress-wrapper {
  @apply absolute rounded-t-lg h-8 w-full overflow-hidden pointer-events-none;
}
</style>

<template>
  <component :is="as" :id="api.titleId.value" :class="headingColor">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { useVariant } from '../../composables/useVariant';
import { useCardContext } from './UCardContext';
const api = useCardContext('UCardTitle');
const props = defineProps({
  as: {
    type: String as PropType<string>,
    default: 'h2',
  },
});
const { headingColor } = useVariant();
</script>

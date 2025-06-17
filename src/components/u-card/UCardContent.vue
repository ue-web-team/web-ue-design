<template>
  <div class="content" :class="textColor">
    <slot />
  </div>
</template>
<script setup lang="ts">
import { useVariant } from '../../composables/useVariant';

const { textColor, proseVariant } = useVariant();
</script>

<style lang="pcss" scoped>
.content {
  @apply p-4 md:px-8 md:py-6 flex-grow;
}
</style>

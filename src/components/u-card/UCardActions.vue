<template>
  <div class="actions">
    <slot />
  </div>
</template>

<style lang="pcss" scoped>
.actions {
  @apply flex items-center justify-end gap-4 px-4 pb-4 md:(px-8 pb-8 gap-6);
}
</style>
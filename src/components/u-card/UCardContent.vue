<template>
  <div class="content">
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
.content {
  @apply p-4 md:(px-8 py-6) flex-grow;
}
</style>
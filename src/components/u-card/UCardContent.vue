<template>
  <div class="content">
    <slot />
  </div>
</template>

<style lang="pcss" scoped>
.content {
  @apply p-4 md:px-8 md:py-6 flex-grow;
}
</style>
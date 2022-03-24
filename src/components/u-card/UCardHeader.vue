<template>
  <header
    class="header"
  >
    <slot />
  </header>
</template>

<style scoped lang="pcss">
.header {
  @apply flex items-center leading-11 px-4 pt-2 text-2xl font-bold md:(px-8 pt-6 text-3xl);
}
</style>
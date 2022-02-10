<template>
  <header
    class="header"
  >
    <slot />
  </header>
</template>

<style scoped lang="pcss">
.header {
  @apply flex items-center leading-11 px-4 pt-2 text-xl font-bold md:(px-8 pt-4 text-2xl);
}
</style>
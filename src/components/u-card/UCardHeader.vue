<template>
  <header
    class="header"
  >
    <slot />
  </header>
</template>

<style scoped lang="pcss">
.header {
  @apply flex items-center leading-11 px-4 pt-2 text-2xl font-bold md:px-8 md:pt-6 md:text-3xl;
}
</style>
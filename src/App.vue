<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { isDark } from './logic';
import Logo from './parts/Logo.vue';
const isMounted = ref(false);

function handleKeyDown(e: KeyboardEvent) {
  // Check for Ctrl+D or Cmd+D
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'd') {
    e.preventDefault();
    // toggleTheme();
    isDark.value = !isDark.value;
  }
}
onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
  isMounted.value = true;
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown);
});
</script>

<template>
  <div class="max-w-6xl mx-auto px-6 mt-8 text-black dark:text-gray-100">
    <header class="mb-10 flex justify-between items-center">
      <h1 class="text-2xl sm:text-4xl font-semibold">Umea Component Library (UCL)</h1>
      <UIconButton kind="ghost" @click="isDark = !isDark">
        <i-carbon-moon class="text-2xl" v-if="isDark" />
        <i-carbon-sun class="text-2xl" v-else />
      </UIconButton>
    </header>
    <main class="grid grid-cols-1 bg-white rounded-xl gap-8 mb-28 p-8 dark:bg-evergreen">
      <Logo></Logo>
      <Colors></Colors>
      <Buttons></Buttons>
      <IconButtons></IconButtons>
      <FormElements></FormElements>
      <Forms></Forms>
      <Cards></Cards>
      <Dialogs></Dialogs>
      <Pagination></Pagination>
      <Accordion></Accordion>
      <Loaders></Loaders>
      <Transitions></Transitions>
    </main>
  </div>
</template>

<style lang="pcss">
html {
  background: #f7f7f5;
}
html.dark {
  background: #222;
  color: white;
}
#app {
  @apply font-sans;
}
</style>

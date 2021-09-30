<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs

import { ref } from "vue";

// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
const checked = ref(false);
const radio = ref("");
</script>

<template>
  <div class="max-w-5xl mx-auto px-6 mt-8">
    <header>
      <h1 class="text-2xl sm:text-4xl font-semibold">
        Umea Component Library (UCL)
      </h1>
    </header>
    <main
      class="grid grid-cols-1 md:grid-cols-2 gap-8 divide-gray-300 <md:divide-y"
    >
      <div class="py-6">
        <UButton>Hello</UButton>
      </div>
      <div class="py-6">
        <UButton>Hello</UButton>
      </div>

      <div class="py-6">
        <div class="flex items-center gap-2">
          <UToggle v-model="checked" id="id1" />
          <label for="id1">I want candy</label>
        </div>
        <div class="flex items-center gap-2">
          <UToggle disabled v-model="checked" id="id1" />
          <label for="id1">I want disabled candy</label>
        </div>
      </div>

      <div class="py-6">
        <div class="flex items-center gap-2">
          <UCheckbox v-model="checked" id="id1" />
          <label for="id1">I want candy</label>
        </div>
        <div class="flex items-center gap-2">
          <UCheckbox disabled v-model="checked" id="id2" />
          <label for="id2">I want disabled candy</label>
        </div>
      </div>

      <div class="py-6">
        <fieldset class="border-green-700 border px-4 pt-2 pb-4 rounded-md">
          <legend class="px-1">Candy selection</legend>
          <div class="flex items-center gap-2">
            <URadio value="kola" v-model="radio" id="id11" />
            <label for="id11">I want kola</label>
          </div>
          <div class="flex items-center gap-2">
            <URadio value="dumle" v-model="radio" id="id22" />
            <label for="id22">I want dumle</label>
          </div>
          <div class="flex items-center gap-2">
            <URadio disabled value="suris" v-model="radio" id="id32" />
            <label for="id32">I want disabled suris</label>
          </div>
        </fieldset>
        {{ radio }}
      </div>
    </main>
  </div>
</template>

<style lang="postcss">
#app {
  @apply font-sans;
}
</style>

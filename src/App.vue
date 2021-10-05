<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs

import { ref } from "vue";

// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
const checked = ref(false);
const radio = ref("");
const isDialogOpen = ref(false);
</script>

<template>
  <div class="max-w-5xl mx-auto px-6 mt-8">
    <header>
      <h1 class="text-2xl sm:text-4xl font-semibold mb-10">Umea Component Library (UCL)</h1>
    </header>
    <main class="grid grid-cols-1 gap-8">
      <UCard>
        <template #header>Buttons</template>
        <div class="flex flex-wrap gap-4">
          <UButton><template #before><i-mdi-cog /></template>With icon before</UButton>
          <UButton outline ><template #after><i-mdi-account /></template>And after</UButton>
          <UButton rounded >Button</UButton>
          <UButton rounded outline >Button</UButton>
          <UButton warn >Button</UButton>
          <UButton outline warn >Button</UButton>
          <UButton disabled rounded outline warn @click="isDialogOpen = true" >Button</UButton>
          <UButton disabled warn >Button</UButton>
        </div>
      </UCard>
      <UCard>
        <template #header>Dialog</template>
        <UButton @click="isDialogOpen = true">Open dialog</UButton>
        <UDialog v-model:open="isDialogOpen" title="Change candy preference">
          Det här är en tillgänglig dialog med fokus-fälla rätt role attribut osv.
          finns ilite olika varianter med stäng om man klickar utanför ellr på esc
          <template #actions>
            <UButton outline @click="isDialogOpen = false">Cancel</UButton>
            <UButton @click="isDialogOpen = false">Ok</UButton>
          </template>
        </UDialog>
      </UCard>
      <UCard>
        <template #header>Checkbox / toggle</template>
        <div class="grid grid-cols-1 gap-2">
          <div class="flex items-center gap-2">
          <UToggle v-model="checked" id="id1" />
          <label for="id1">I want candy</label>
        </div>
        <div class="flex items-center gap-2">
          <UToggle disabled v-model="checked" id="id2" />
          <label for="id2">I want disabled candy</label>
        </div>
        <div class="flex items-center gap-2">
          <UCheckbox v-model="checked" id="id3" />
          <label for="id3">I want candy</label>
        </div>
        <div class="flex items-center gap-2">
          <UCheckbox disabled v-model="checked" id="id4" />
          <label for="id4">I want disabled candy</label>
        </div>
        </div>
      </UCard>
      <UCard>
        <template #header>Radio with fieldset</template>
        <fieldset class="border-gray-600 border-2 px-2 pt-2 pb-4 rounded-md flex flex-col gap-2">
          <legend class="px-2">Candy selection</legend>
          <div class="pl-2 flex items-center gap-2">
            <URadio value="kola" v-model="radio" id="id11" />
            <label for="id11">I want kola</label>
          </div>
          <div class="pl-2 flex items-center gap-2">
            <URadio value="dumle" v-model="radio" id="id22" />
            <label for="id22">I want dumle</label>
          </div>
          <div class="pl-2 flex items-center gap-2">
            <URadio disabled value="suris" v-model="radio" id="id32" />
            <label for="id32">I want disabled suris</label>
          </div>
        </fieldset>
      </UCard>
      <UCard>
        <template #header>Disclosure</template>
        <UAccordionPanel title="What candy do u like?">All of them!!</UAccordionPanel>
      </UCard>

      

     
    </main>
  </div>
</template>

<style lang="postcss">
#app {
  @apply font-sans;
}
</style>

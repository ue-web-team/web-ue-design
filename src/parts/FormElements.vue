<template>
  <article>
    <h2 class="text-3xl border-b pb-4 font-medium">Form elements</h2>
    <h3 class="text-xl my-4">Radio</h3>
    <fieldset class="border-gray-600 border-2 px-3 pt-2 pb-4 rounded-md inline-flex flex-col gap-2">
          <legend class="px-2">Radio fieldset</legend>
          <div class="pl-2 flex items-center gap-2">
            <input type="radio" value="kola" v-model="radio" id="id11" />
            <label for="id11">I want kola</label>
          </div>
          <div class="pl-2 flex items-center gap-2">
            <input type="radio" value="dumle" v-model="radio" id="id22" />
            <label for="id22">I want dumle</label>
          </div>
          <div class="pl-2 flex items-center gap-2">
            <input type="radio" disabled value="suris" v-model="radio" id="id32" />
            <label for="id32">I want disabled suris</label>
          </div>
        </fieldset>
  </article>
</template>

<script setup lang="ts">import { ref } from 'vue';

const radio = ref('kola') 
</script>
<template>
  <article>
    <h2 class="text-3xl border-b pb-4 mb-6 font-medium bg-li">Accordion etc..</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <UAccordionPanel  title="I'am hidden to begin">
      This is the hidden content!!
    </UAccordionPanel>
    </div>
    <h3 class="text-xl my-4">Usage</h3>
    <Prism language="html" class="codesnippet">{{ code }}</Prism>
  </article>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { colors } from '@/config/colors';
import Prism from "@/lib/code-block";

const isAccordionOpen = ref(false);

const code =
  `
<UAccordionPanel  title="I'am hidden to begin">
  This is the hidden content!!
</UAccordionPanel>
`
</script>
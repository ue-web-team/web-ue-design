<template>
  <article>
    <h2 class="text-3xl border-b pb-4 mb-6 font-medium bg-li">Logo</h2>
    <ULogo class="h-10" />
    <ULogo short class="h-10 mt-5" />
    <ULogo class="h-10 mt-5" :color="false" />
    <h3 class="text-xl my-4">Usage</h3>
    <Prism language="html" class="codesnippet">{{ code }}</Prism>
  </article>
</template>

<script setup lang="ts">
import ULogo from '../components/u-logo/ULogo.vue';

import Prism from '../lib/code-block';

const code = `
<ULogo class="h-10"  />
<ULogo short class="h-10"  /> set short to true for short logo -> default is false
<ULogo :color="false" class="h-10"  /> // set color to false for white logo -> default is true
`;
</script>

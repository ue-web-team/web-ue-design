<template>
  <article>
    <h2 class="text-3xl border-b pb-4 mb-6 font-medium bg-li">
      Loaders and state
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <UCard :color="colors.white.DEFAULT" focusable>
        <ULoadingOverlay v-model="isLoadingFull" />
        <UCardHeader>
          <UCardTitle>Full screen loader</UCardTitle>
        </UCardHeader>
        <UCardContent>
          Click start to emulate backend ajax call. A full screen loader will
          appear and the appropriate aria role will be set
        </UCardContent>
        <UCardActions
          ><UButton @click="startFull">Start loader</UButton></UCardActions
        >
      </UCard>
      <UCard
        :color="colors.white.DEFAULT"
        focusable
        class="relative overflow-hidden"
      >
        <ULoadingOverlay contained v-model="isLoadingContained" />
        <UCardHeader>
          <UCardTitle>Contained loader</UCardTitle>
        </UCardHeader>
        <UCardContent>
          Same, but contained to it's parent element. make sure to set relative
          positioning on that element
        </UCardContent>
        <UCardActions
          ><UButton @click="startContained">Start loader</UButton></UCardActions
        >
      </UCard>
      <UCard
        :bg-color="colors.white.DEFAULT"
        :color="colors.white.DEFAULT"
        focusable
        class="relative overflow-hidden"
      >
        <ULoadingOverlay
          :bg-color="colors.red[400]"
          :color="colors.red.DEFAULT"
          contained
          v-model="isLoadingContained2"
          ><span class="text-xl font-bold text-white">Loading...</span>
        </ULoadingOverlay>
        <UCardHeader>
          <UCardTitle>Contained with message</UCardTitle>
        </UCardHeader>
        <UCardContent> This time with some text and funky colors </UCardContent>
        <UCardActions
          ><UButton @click="startContained2"
            >Start loader</UButton
          ></UCardActions
        >
      </UCard>
    </div>
    <h3 class="text-xl my-4">Usage</h3>
    <Prism language="html" class="codesnippet">{{ code }}</Prism>
  </article>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { colors } from "@/config/colors";
import Prism from "@/lib/code-block";

const isLoadingFull = ref(false);
const startFull = () => {
  isLoadingFull.value = true;
  setTimeout(() => {
    isLoadingFull.value = false;
  }, 2000);
};

const isLoadingContained = ref(false);
const startContained = () => {
  isLoadingContained.value = true;
  setTimeout(() => {
    isLoadingContained.value = false;
  }, 2000);
};

const isLoadingContained2 = ref(false);
const startContained2 = () => {
  isLoadingContained2.value = true;
  setTimeout(() => {
    isLoadingContained2.value = false;
  }, 2000);
};

const code = `
<ULoadingOverlay
    :bg-color="colors.red[400]"
    :color="colors.red.DEFAULT"
    contained
    v-model="isLoadingContained2"
>
  <span class="text-xl font-bold text-white">Loading...</span>
</ULoadingOverlay>
`;
</script>

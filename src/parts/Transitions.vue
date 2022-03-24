<template>
  <article>
    <h2 class="text-3xl border-b pb-4 mb-6 font-medium bg-li">
      Transitions...
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <UCard :color="colors.white.DEFAULT" focusable>
        <UCardHeader>
          <UCardTitle>Transition height /collapse</UCardTitle>
        </UCardHeader>
        <UCardContent>
          <UTransitionHeight>
            <div class="" v-if="show">
             This is the expanded content 
            </div>
          </UTransitionHeight>
        </UCardContent>
        <UCardActions
          ><UButton @click="show = !show">{{
            show ? "Hide" : "Show"
          }}</UButton></UCardActions
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

const show = ref(false);

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

<template>
  <article>
    <h2 class="text-3xl border-b pb-4 mb-6 font-medium bg-li">Cards</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 place-items-start gap-4">

      <UCard focusable>
        <UCardHeader><UCardTitle>Standard</UCardTitle></UCardHeader>
        <UCardContent>"Vanligt" kort med header och action bar. En dialog i det här fallet</UCardContent>
        <UCardActions>
          <UButton class="w-full" @click="isDialogOpen = true">Open dialog</UButton>
          <UDialog v-model:open="isDialogOpen" title="Change candy preference">
            Det här är en tillgänglig dialog med fokus-fälla rätt role attribut osv.
            stänger om man klickar utanför eller på esc
            <template
              #actions
            >
              <UButton outline @click="isDialogOpen = false">Cancel</UButton>
              <UButton @click="isDialogOpen = false">Ok</UButton>
            </template>
          </UDialog>
        </UCardActions>
      </UCard>
      
      <UCard :color="colors.blue['200']" focusable>
        <UCardHeader>Rubrik som är ganska lång</UCardHeader>
        <UCardContent>Vi hjälper dig med några enkla tips på hur du kan sänka din förbrukning. Genom att sänka din energi-förbrukning sparar du både pengar och gör gott för miljön.</UCardContent>
      </UCard>

      <UCard :color="colors.lime['200']" focusable>
        <UCardHeader>Kort rubrik</UCardHeader>
        <UCardContent>Vi hjälper dig med några enkla tips på hur du kan sänka din förbrukning. Genom att sänka din energi-förbrukning sparar du både pengar och gör gott för miljön.</UCardContent>
      </UCard>

      <UCard class="text-white" :color="colors.primary['400']" focusable>
        <UCardHeader>Ljus text på mörkare</UCardHeader>
        <UCardContent>Vi hjälper dig med några enkla tips på hur du kan sänka din förbrukning. Genom att sänka din energi-förbrukning sparar du både pengar och gör gott för miljön.</UCardContent>
      </UCard>
      
      <UCard class="text-white" :color="colors.red['400']" focusable>
        <UCardHeader>Du har fakturor dom snart ska betalas</UCardHeader>
        <UCardContent>Vi hjälper inte dig om du inte har råd men du kan vända dig till valfritt låneinstitut</UCardContent>
        <UCardActions>
          <UButton kind="white" outline class="w-full" @click="isDialogOpen = true">Visa räkningen</UButton>
        </UCardActions>
      </UCard>

       <UCard :color="colors.blue['100']" focusable>
        <UCardHeader>Din årsförbrukning 1898:</UCardHeader>
        <UCardContent>
          <div class="flex items-center text-3xl font-bold">
            <i-fa-solid:house-damage class="text-blue-200 text-5xl mr-2"/>
            7 502 kWh/år
          </div>
          <p class="font-semibold leading-8">Det är en minskning från 1897 med:</p>
          <div class="flex items-center text-3xl font-bold">
            <i-fa-solid:arrow-down class="text-blue-200 text-5xl mr-2"/>
            -13%
          </div>
        </UCardContent>
      </UCard>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { colors } from '@/config/colors'
const isDialogOpen = ref(false);
</script>
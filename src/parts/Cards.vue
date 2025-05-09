<template>
  <article>
    <h2 class="text-3xl border-b pb-4 mb-6 font-medium bg-li">Cards</h2>
    <p>
      By default, the UCard adapts to dark mode automatically. However, you can
      override the colors by adding the forceColor prop.
    </p>
    <br />
    <br />
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <UCard focusable>
        <UCardHeader>
          <UCardTitle>Standard</UCardTitle>
        </UCardHeader>
        <UCardContent
          >"Vanligt" kort med header och action bar. En dialog i det här
          fallet</UCardContent
        >
        <UCardActions>
          <UButton class="w-full" @click="isDialogOpen = true"
            >Open dialog</UButton
          >
          <UDialog v-model:open="isDialogOpen" title="Change candy preference">
            Det här är en tillgänglig dialog med fokus-fälla rätt role attribut
            osv. stänger om man klickar utanför eller på esc
            <template #actions>
              <UButton outline @click="isDialogOpen = false">Cancel</UButton>
              <UButton @click="isDialogOpen = false">Ok</UButton>
            </template>
          </UDialog>
        </UCardActions>
      </UCard>

      <UCard
        focusable
        colorClasses="bg-lightgreen dark:bg-warm dark:text-typegreen"
      >
        <UCardHeader>
          <UCardTitle>Rubrik som är ganska lång</UCardTitle>
        </UCardHeader>
        <UCardContent
          >Vi hjälper dig med några enkla tips på hur du kan sänka din
          förbrukning. Genom att sänka din energi-förbrukning sparar du både
          pengar och gör gott för miljön.</UCardContent
        >
      </UCard>

      <UCard focusable colorClasses="bg-warm dark:bg-evergreen">
        <UCardHeader>
          <UCardTitle class="text-red">Kortare rubrik</UCardTitle>
        </UCardHeader>
        <UCardContent
          >Vi hjälper dig med några enkla tips på hur du kan sänka din
          förbrukning. Genom att sänka din energi-förbrukning sparar du både
          pengar och gör gott för miljön.</UCardContent
        >
      </UCard>

      <UCard focusable colorClasses="bg-gray-200 dark:bg-evergreen">
        <UCardHeader>
          <UCardTitle class="text-red">Ljus text på mörkare</UCardTitle>
        </UCardHeader>
        <UCardContent class="text-green dark:text-white"
          >Vi hjälper dig med några enkla tips på hur du kan sänka din
          förbrukning. Genom att sänka din energi-förbrukning sparar du både
          pengar och gör gott för miljön.</UCardContent
        >
      </UCard>

      <UCard focusable colorClasses="bg-evergreen dark:darkgreen text-white">
        <UCardHeader>
          <UCardTitle class="text-warm"
            >Du har fakturor som snart ska betalas</UCardTitle
          >
        </UCardHeader>
        <UCardContent
          >Vi hjälper inte dig om du inte har råd men du kan vända dig till
          valfritt låneinstitut</UCardContent
        >
        <UCardActions>
          <UButton
            kind="white"
            outline
            class="w-full"
            @click="isDialogOpen = true"
            >Visa räkningen</UButton
          >
        </UCardActions>
      </UCard>

      <UCard focusable>
        <UCardHeader>
          <UCardTitle>Din årsförbrukning 1898:</UCardTitle>
        </UCardHeader>
        <UCardContent>
          <div class="flex items-center text-3xl font-bold">
            <i-fa-solid:house-damage class="text-blue-200 text-5xl mr-2" />7 502
            kWh/år
          </div>
          <p class="font-semibold leading-8">
            Det är en minskning från 1897 med:
          </p>
          <div class="flex items-center text-3xl font-bold">
            <i-fa-solid:arrow-down class="text-blue-200 text-5xl mr-2" />-13%
          </div>
        </UCardContent>
      </UCard>
    </div>
    <UCard
      class="mt-4 max-w-prose"
      colorClasses="bg-sun dark:bg-darkgreen"
      :isLoading="isLoading"
      focusable
    >
      <UCardHeader>
        <UCardTitle class="text-green dark:text-sun"
          >Bigger card with loading progress</UCardTitle
        >
      </UCardHeader>
      <UCardContent class="prose dark:prose-invert">
        <b>Chocolate</b> gummies jelly pie tart. I love gummies chocolate tart
        dragée oat cake biscuit liquorice. Dessert danish macaroon wafer I love.
        Cake soufflé caramels halvah lemon drops macaroon muffin jelly beans.
        Gummi bears apple pie I love apple pie dessert cookie chocolate cotton
        candy brownie.
        <blockquote>Very useful for styling markdown content!</blockquote>
        <p>
          Apple pie sugar plum candy canes cake danish lemon drops. Jelly lemon
          drops cake tart gummies icing cake. Sweet apple pie pie tootsie roll
          croissant topping I love tiramisu.
        </p>
      </UCardContent>
      <UCardActions>
        <UButton kind="white" @click="isLoading = !isLoading">{{
          isLoading ? "Sluta ladda" : "Börja ladda"
        }}</UButton>
      </UCardActions>
    </UCard>
    <div>
      <h3 class="text-xl my-4 font-bold">Props</h3>
      <ul>
        <li>isLoading: boolean // default: false</li>
        <li>focusable: boolean // default: false</li>
        <li>
          colorClasses?: string // tailwind classes to use for background and
          text color
        </li>
      </ul>
    </div>

    <h3 class="text-xl my-4">Usage</h3>
    <Prism language="html" class="codesnippet">{{ code }}</Prism>
  </article>
</template>

<script setup lang="ts">
import Prism from "@/lib/code-block";
import { ref } from "vue";
const isDialogOpen = ref(false);
const isDialog2Open = ref(false);
const isLoading = ref(false);

const code = `
<!-- Wrapper with responsive padding and loading indicator -->
<UCard :isLoading="isLoading" colorClasses="text-green bg-gray-200 dark:bg-evergreen" focusable>
   <UCardHeader>
     <UCardTitle>This is the accesible card title</UCardTitle>
   </UCardHeader>
   <UCardContent>
     ...Put card content here...
     has padding that matches UCardHeader
     but can be omitted. 
   </UCardContent>
   <UCardActions>
     <!-- padded container with flex end and gap sizing for actions -->
     <UButton
       kind="white"
       @click="isLoading = !isLoading"
     >{{ isLoading ? 'Sluta ladda' : 'Börja ladda' }}</UButton>
   </UCardActions>
 </UCard>
`;
</script>

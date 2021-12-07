<template>
  <article>
    <h2 class="text-3xl border-b pb-4 mb-4 font-medium">Dialogs</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <UCard :color="colors.gray['100']">
        <UCardHeader>
          <UCardTitle>Dialog 1</UCardTitle>
        </UCardHeader>
        <UCardContent>
          Tillgänglig dialog baserad på headless/ui
          <UDialog v-model:open="isDialogOpen1" title="Change candy preference">
            Det här är en tillgänglig dialog med fokus-fälla rätt role attribut och tillgänglig titel.
            stänger om man klickar utanför eller på esc
            <template
              #actions
            >
              <UButton outline @click="isDialogOpen1 = false">Cancel</UButton>
              <UButton @click="isDialogOpen1 = false">Ok</UButton>
            </template>
          </UDialog>
        </UCardContent>
        <UCardActions>
          <UButton class="w-full" @click="isDialogOpen1 = true">Open dialog</UButton>
        </UCardActions>
      </UCard>
      <UCard :color="colors.gray['100']">
        <UCardHeader>
          <UCardTitle>Dialog 2</UCardTitle>
        </UCardHeader>
        <UCardContent>
          Dialog med massa text för att se om scroll blir rätt (i mobil)
          <UDialog v-model:open="isDialogOpen2" title="Change candy preference">
            I'm baby taiyaki bespoke neutra kickstarter. Af kombucha pinterest bicycle rights synth offal. Farm-to-table enamel pin quinoa, mumblecore vexillologist food truck YOLO pinterest church-key normcore seitan pabst poutine put a bird on it tumeric. Messenger bag hell of venmo gluten-free jean shorts helvetica squid direct trade sriracha. Vape flexitarian gluten-free PBR&B. Thundercats marfa pickled lyft.
            Cornhole vice master cleanse cardigan, ethical farm-to-table hot chicken freegan pug. Art party iceland wayfarers butcher actually pinterest food truck. Sustainable listicle waistcoat ugh plaid 90's butcher cornhole. Godard photo booth chillwave palo santo pop-up iceland skateboard ramps food truck. Church-key tote bag green juice venmo synth, viral ramps pug live-edge humblebrag fanny pack hot chicken artisan microdosing taiyaki.
            Tumblr waistcoat tofu try-hard vexillologist af. Tbh poutine hoodie coloring book vexillologist whatever actually skateboard narwhal air plant asymmetrical tacos helvetica. Poutine echo park thundercats, you probably haven't heard of them glossier godard keytar affogato letterpress flexitarian direct trade swag taxidermy migas woke. Kombucha chillwave poutine edison bulb roof party vexillologist scenester pabst.
            Live-edge irony deep v vape chambray forage single-origin coffee meggings enamel pin pitchfork heirloom aesthetic kogi street art la croix. Blog yr unicorn enamel pin, live-edge scenester intelligentsia microdosing swag 90's narwhal etsy adaptogen. Wayfarers cliche sustainable +1 stumptown vape, literally 8-bit pop-up lumbersexual echo park. Jean shorts hoodie shaman, truffaut single-origin coffee you probably haven't heard of them keytar fixie tattooed kombucha master cleanse letterpress pug. Edison bulb master cleanse humblebrag, tbh subway tile before they sold out sustainable venmo normcore literally VHS.
            <template
              #actions
            >
              <UButton outline @click="isDialogOpen2 = false">Cancel</UButton>
              <UButton @click="isDialogOpen2 = false">Ok</UButton>
            </template>
          </UDialog>
        </UCardContent>
        <UCardActions>
          <UButton class="w-full" @click="isDialogOpen2 = true">Open dialog</UButton>
        </UCardActions>
      </UCard>
      <UCard :color="colors.green['200']">
        <UCardHeader>
          <UCardTitle>Dialog 3</UCardTitle>
        </UCardHeader>
        <UCardContent>
          Dialog med hipp färg :)
          <UDialog :color="colors.green['200']" v-model:open="isDialogOpen3" title="Hipp färg">
            Hippare färg. kanske för att göra ett glatt val?
            <template
              #actions
            >
              <UButton kind="white" outline @click="isDialogOpen3 = false">Ja</UButton>
              <UButton kind="white" @click="isDialogOpen3 = false">Nej</UButton>
            </template>
          </UDialog>
        </UCardContent>
        <UCardActions>
          <UButton class="w-full" kind="white" outline @click="isDialogOpen3 = true">Open dialog</UButton>
        </UCardActions>
      </UCard>
      <UCard class="text-white" :color="colors.red['600']">
        <UCardHeader>
          <UCardTitle>Dialog 4</UCardTitle>
        </UCardHeader>
        <UCardContent>
          Allvarlig dialog som kräver ett val. kan inte avslutas med klick utanför eller 'esc'
          <UDialog require-interaction class="text-white" :color="colors.red['600']" v-model:open="isDialogOpen4" title="Hipp färg">
            Allvarlig dialog som kräver ett val. kan inte avslutas med click utanför eller 'esc'
            <template
              #actions
            >
              <UButton kind="white" outline @click="isDialogOpen4 = false">Ja</UButton>
              <UButton kind="white" @click="isDialogOpen4 = false">Nej</UButton>
            </template>
          </UDialog>
        </UCardContent>
        <UCardActions>
          <UButton class="w-full" kind="white" outline @click="isDialogOpen4 = true">Open dialog</UButton>
        </UCardActions>
      </UCard>
    </div>

    <h3 class="text-xl my-4">Usage</h3>
    <Prism language="html" class="codesnippet">{{ code }}</Prism>
  </article>
</template>

<script setup lang="ts">
import { colors } from '@/config/colors'
import Prism from "@/lib/code-block"
import { ref } from 'vue';

const code =
  `<!-- Trigger button -->
<UButton @click="isDialogOpen = true">Open dialog</UButton>
<!-- Actual modal (will not render here but as a child of <body>) -->
<UDialog v-model:open="isDialogOpen" title="Title of dialog">
  I'am the content of this dialog
  <template #actions >
    <UButton outline @click="isDialogOpen = false">Cancel</UButton>
    <UButton @click="isDialogOpen = false">Ok</UButton>
  </template>
</UDialog>
`
const isDialogOpen1 = ref(false);
const isDialogOpen2 = ref(false);
const isDialogOpen3 = ref(false);
const isDialogOpen4 = ref(false);
</script>
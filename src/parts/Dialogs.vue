<template>
  <article>
    <h2 class="text-3xl border-b pb-4 mb-4 font-medium">Dialogs</h2>
    <p>
      By default, the dialog adapts to dark mode automatically. However, you can override the colors by adding the
      forceColor prop.
    </p>
    <br />
    <br />
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <UCard :variant="ColorVariant.FOG">
        <UCardHeader>
          <UCardTitle>Dialog 1</UCardTitle>
        </UCardHeader>
        <UCardContent>
          Tillgänglig dialog baserad på headless/ui
          <UDialog v-model:open="isDialogOpen1" title="Change candy preference" :variant="ColorVariant.DARKGREEN">
            Det här är en tillgänglig dialog med fokus-fälla rätt role attribut och tillgänglig titel. stänger om man
            klickar utanför eller på esc
            <template #actions>
              <UButton outline @click="isDialogOpen1 = false">Cancel</UButton>
              <UButton @click="isDialogOpen1 = false">Ok</UButton>
            </template>
          </UDialog>
        </UCardContent>
        <UCardActions>
          <UButton class="w-full" @click="isDialogOpen1 = true">Open dialog</UButton>
        </UCardActions>
      </UCard>

      <UCard :variant="ColorVariant.DARKGREEN">
        <UCardHeader>
          <UCardTitle>Dialog 2</UCardTitle>
        </UCardHeader>
        <UCardContent>
          Dialog med massa text för att se om scroll blir rätt (i mobil)
          <UDialog v-model:open="isDialogOpen2" title="Change candy preference">
            I'm baby taiyaki bespoke neutra kickstarter. Af kombucha pinterest bicycle rights synth offal. Farm-to-table
            enamel pin quinoa, mumblecore vexillologist food truck YOLO pinterest church-key normcore seitan pabst
            poutine put a bird on it tumeric. Messenger bag hell of venmo gluten-free jean shorts helvetica squid direct
            trade sriracha. Vape flexitarian gluten-free PBR&B. Thundercats marfa pickled lyft. Cornhole vice master
            cleanse cardigan, ethical farm-to-table hot chicken freegan pug. Art party iceland wayfarers butcher
            actually pinterest food truck. Sustainable listicle waistcoat ugh plaid 90's butcher cornhole. Godard photo
            booth chillwave palo santo pop-up iceland skateboard ramps food truck. Church-key tote bag green juice venmo
            synth, viral ramps pug live-edge humblebrag fanny pack hot chicken artisan microdosing taiyaki. Tumblr
            waistcoat tofu try-hard vexillologist af. Tbh poutine hoodie coloring book vexillologist whatever actually
            skateboard narwhal air plant asymmetrical tacos helvetica. Poutine echo park thundercats, you probably
            haven't heard of them glossier godard keytar affogato letterpress flexitarian direct trade swag taxidermy
            migas woke. Kombucha chillwave poutine edison bulb roof party vexillologist scenester pabst. Live-edge irony
            deep v vape chambray forage single-origin coffee meggings enamel pin pitchfork heirloom aesthetic kogi
            street art la croix. Blog yr unicorn enamel pin, live-edge scenester intelligentsia microdosing swag 90's
            narwhal etsy adaptogen. Wayfarers cliche sustainable +1 stumptown vape, literally 8-bit pop-up lumbersexual
            echo park. Jean shorts hoodie shaman, truffaut single-origin coffee you probably haven't heard of them
            keytar fixie tattooed kombucha master cleanse letterpress pug. Edison bulb master cleanse humblebrag, tbh
            subway tile before they sold out sustainable venmo normcore literally VHS.
            <template #actions>
              <UButton outline @click="isDialogOpen2 = false">Cancel</UButton>
              <UButton @click="isDialogOpen2 = false">Ok</UButton>
            </template>
          </UDialog>
        </UCardContent>
        <UCardActions>
          <UButton class="w-full" @click="isDialogOpen2 = true">Open dialog</UButton>
        </UCardActions>
      </UCard>

      <UCard :variant="ColorVariant.WHITE">
        <UCardHeader>
          <UCardTitle>Dialog 3</UCardTitle>
        </UCardHeader>
        <UCardContent>
          Dialog med hipp färg :)
          <UDialog v-model:open="isDialogOpen3" title="Hipp färg">
            Hippare färg. kanske för att göra ett glatt val?
            <template #actions>
              <UButton kind="primary" @click="isDialogOpen3 = false">Ja</UButton>
              <UButton kind="primary" outline @click="isDialogOpen3 = false">Nej</UButton>
            </template>
          </UDialog>
        </UCardContent>
        <UCardActions>
          <UButton class="w-full" outline @click="isDialogOpen3 = true">Open dialog</UButton>
        </UCardActions>
      </UCard>

      <UCard :variant="ColorVariant.SUN">
        <UCardHeader>
          <UCardTitle>Dialog 4</UCardTitle>
        </UCardHeader>
        <UCardContent>
          Allvarlig dialog som kräver ett val. kan inte avslutas med klick utanför eller 'esc' Dialog har även en
          laddningsidikator.
          <UDialog
            require-interaction
            v-model:open="isDialogOpen4"
            title="Hipp färg"
            :isLoading="isLoading"
            colorClasses="bg-red dark:bg-green text-white"
          >
            Allvarlig dialog som kräver ett val. kan inte avslutas med click utanför eller 'esc'
            <template #actions>
              <UButton kind="primary" outline @click="mockSave">Ja</UButton>
              <UButton kind="primary" @click="isDialogOpen4 = false">Nej</UButton>
            </template>
          </UDialog>
        </UCardContent>
        <UCardActions>
          <UButton class="w-full" kind="primary" outline @click="isDialogOpen4 = true">Open dialog</UButton>
        </UCardActions>
      </UCard>

      <UCard :class="ColorVariant.LIGHTGREEN">
        <UCardHeader>
          <UCardTitle>Dialog 5</UCardTitle>
        </UCardHeader>
        <UCardContent>
          Dialog med stor ruta
          <UDialog
            big
            colorClasses="bg-green dark:bg-evergreen text-white"
            v-model:open="isDialogOpen5"
            title="Hipp färg"
            :isLoading="isLoading"
          >
            Bred dialog med mer plats. typ 2 kolumner om det finns plats
            <template #actions>
              <UButton outline @click="mockSave">Ja</UButton>
              <UButton @click="isDialogOpen5 = false">Nej</UButton>
            </template>
          </UDialog>
        </UCardContent>
        <UCardActions>
          <UButton class="w-full" kind="primary" outline @click="isDialogOpen5 = true">Open dialog</UButton>
        </UCardActions>
      </UCard>
    </div>
    <div>
      <h3 class="text-xl my-4 font-bold">Props</h3>
      <ul>
        <li>title: string // default: "Ingen titel"</li>
        <li>open: boolean // required</li>
        <li>requireInteraction: boolean // default: false</li>
        <li>big: boolean // default: false >>> used to show big dialog</li>
        <li>isLoading: boolean // default: false</li>
        <li>colorClasses?: string // tailwind classes to use for background and text color</li>
        <li>headingClasses?: string // tailwind classes for heading color</li>
      </ul>
    </div>

    <h3 class="text-xl my-4">Usage</h3>
    <Prism language="html" class="codesnippet">{{ code }}</Prism>
  </article>
</template>

<script setup lang="ts">
import Prism from '@/lib/code-block';
import { ref } from 'vue';
import UButton from '../components/u-button/UButton.vue';
import UCard from '../components/u-card/UCard.vue';
import UCardActions from '../components/u-card/UCardActions.vue';
import UCardContent from '../components/u-card/UCardContent.vue';
import UCardHeader from '../components/u-card/UCardHeader.vue';
import UCardTitle from '../components/u-card/UCardTitle.vue';
import UDialog from '../components/u-dialog/UDialog.vue';
import { ColorVariant } from '../config/colorVariant';

const code = `<!-- Trigger button -->
<UButton @click="isDialogOpen = true">Open dialog</UButton>
<!-- Actual modal (will not render here but as a child of <body>) -->
<UDialog v-model:open="isDialogOpen" title="Title of dialog"
  colorClasses="bg-green dark:bg-evergreen text-white"
  headingClasses="text-white dark:text-lightgreen"
>
  I'am the content of this dialog
  <template #actions >
    <UButton outline @click="isDialogOpen = false">Cancel</UButton>
    <UButton @click="isDialogOpen = false">Ok</UButton>
  </template>
</UDialog>
`;
const isDialogOpen1 = ref(false);
const isDialogOpen2 = ref(false);
const isDialogOpen3 = ref(false);
const isDialogOpen4 = ref(false);
const isDialogOpen5 = ref(false);
const isDialogOpen6 = ref(false);

const mockSave = () => {
  (isLoading.value = true),
    setTimeout(() => {
      (isLoading.value = false), (isDialogOpen4.value = false);
    }, 3500);
};
const isLoading = ref(false);
</script>

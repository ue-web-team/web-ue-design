<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs

import { ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel, Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import UButton from "./components/u-button/UButton.vue";
import UCard from "./components/u-card/UCard.vue";

// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
const checked = ref(false);
const radio = ref("");
const isDialogOpen = ref(false);

const currentPage = ref(1)
const total = ref(12);
const perPage = 3
const onPageClick = (page: any) => { console.log(page); currentPage.value = page; }
</script>

<template>
  <div class="max-w-6xl mx-auto px-6 mt-8 text-black">
    <header>
      <h1 class="text-2xl sm:text-4xl font-semibold mb-10">Umea Component Library (UCL)</h1>
    </header>
    <main class="grid grid-cols-1 gap-8 mb-26">
      <Colors></Colors>
      <Buttons></Buttons>
      <IconButtons></IconButtons>
      <FormElements></FormElements>
      <Cards></Cards>
      <Dialogs></Dialogs>
      <UCard focusable>
        <UCardHeader>
          <UCardTitle>Button styles</UCardTitle>
        </UCardHeader>
        <UCardContent>
          <p class="mb-4">Default, outlined and warning</p>
          <div class="flex flex-wrap gap-4">
            <UButton plain>
              <template #after>
                <i-mdi-chevron-down />
              </template>Plain with icon
            </UButton>
            <UButton>
              <template #before>
                <i-mdi-cog />
              </template>With icon before
            </UButton>
            <UButton loading>
              <template #before>
                <i-mdi-cog />
              </template>Loading
            </UButton>
            <UButton outline>
              <template #after>
                <i-mdi-account />
              </template>And after
            </UButton>
            <UButton rounded>Button</UButton>
            <UButton rounded outline>Button</UButton>
            <UButton warn>Button</UButton>
            <UButton outline warn>Button</UButton>
            <UButton disabled rounded outline warn @click="isDialogOpen = true">Button</UButton>
            <UButton disabled warn>Button</UButton>
          </div>
          <p class="my-4">Icon Buttons</p>
          <div class="flex flex-wrap gap-4">
            <UIconButton plain>
              <i-mdi-cog />
            </UIconButton>
            <UIconButton>
              <i-mdi-cog />
            </UIconButton>
            <UIconButton outline>
              <i-mdi-account />
            </UIconButton>
            <UIconButton warn>
              <i-mdi-alert />
            </UIconButton>
            <UIconButton outline warn>
              <i-mdi-food />
            </UIconButton>
            <UIconButton disabled outline warn @click="isDialogOpen = true">
              <i-mdi-account-cowboy-hat />
            </UIconButton>
            <UIconButton disabled warn>
              <i-mdi-wheelchair-accessibility />
            </UIconButton>
          </div>
        </UCardContent>
        <UCardActions>
          <UButton warn>Button</UButton>
          <UIconButton disabled warn>
              <i-mdi-wheelchair-accessibility />
            </UIconButton>
        </UCardActions>
      </UCard>
      <UCard focusable>
        <UCardHeader title="Dialog" level="3">Dialogs</UCardHeader>
        <UCardContent>
          <UButton @click="isDialogOpen = true">Open dialog</UButton>
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
        </UCardContent>
      </UCard>

      <UCard>
        <UCardHeader title="Dialog">Radio, checkbox and fieldset</UCardHeader>
        <UCardContent class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <fieldset class="border-gray-600 border-2 px-2 pt-2 pb-4 rounded-md flex flex-col gap-2">
          <legend class="px-2">Candy radio</legend>
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

        <fieldset class="border-gray-600 border-2 px-2 pt-2 pb-4 rounded-md flex flex-col gap-2">
          <legend class="px-2">Candy checkbox</legend>
          <div class="pl-2 flex items-center gap-2">
            <input type="checkbox" id="id-checkbox-1" />
            <label for="id-checkbox-1">I want kola</label>
          </div>
          <div class="pl-2 flex items-center gap-2">
            <input type="checkbox" id="id-checkbox-2" />
            <label for="id-checkbox-2">I want dumle</label>
          </div>
          <div class="pl-2 flex items-center gap-2">
            <input type="checkbox" disabled  id="id-checkbox-3" />
            <label for="id-checkbox-3">I want disabled suris</label>
          </div>
        </fieldset>
        
        <label class="block">
          Select candy
          <select class="mt-1 block">
            <option>Alla</option>
            <option>Kola</option>
            <option>Dumle</option>
          </select>
        </label>
     

        <label class="block">
          Select multiple candy
          <select class="mt-1 block" multiple>
            <option>Alla</option>
            <option>Kola</option>
            <option>Dumle</option>
          </select>
        </label>
        
        <label class="block">
          Text input
          <input type="text" class="mt-1 block" >
        </label>

        <label class="block">
          Date input
          <input type="date" class="mt-1 block" >
        </label>

        <label class="block">
          Textarea
          <textarea class="mt-1 block w-full" rows="3"></textarea>
        </label>

        <label class="block">
          Search input
          <input type="search" class="mt-1 block" >
        </label>
        
        </UCardContent>
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

      <UCard>
        <template #header>Pagination</template>
        <template #actions>
          <div class="my-4 flex justify-between">
            Page {{ currentPage }} of {{ total }}
            <UPagination
              :current="currentPage"
              :total="total"
              :perPage="perPage"
              @page-changed="onPageClick($event)"
            ></UPagination>
          </div>
        </template>
      </UCard>

      <!--UCard>
        <div class="w-12 h-12  bg-primary"></div>
        <div class="w-12 h-12 text-primary  bg-primary-20">dsds</div>
        <Menu as="div" class="relative">
          <div>
            <MenuButton as="template">
              <UButton>
                <template #after>
                  <i-mdi-chevron-down />
                </template>Options
              </UButton>
            </MenuButton>
          </div>

          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <MenuItems
              class="absolute left-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                  <button>sdds</button>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <button>sdds</button>
                </MenuItem>
              </div>
              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                  <button>sdds</button>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <button>sdds</button>
                </MenuItem>
              </div>

              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                  <button>sdds</button>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>

        <TabGroup>
          <TabList>
            <Tab as="template"><UButton>sdsd</UButton></Tab>
            <Tab as="template"><UButton>sdsd</UButton></Tab>
            <Tab>Tab 3</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>Content 1</TabPanel>
            <TabPanel>Content 2</TabPanel>
            <TabPanel>Content 3</TabPanel>
          </TabPanels>
        </TabGroup>
      </UCard-->
    </main>
  </div>
</template>

<style lang="postcss">
#app {
  @apply font-sans;
}
</style>

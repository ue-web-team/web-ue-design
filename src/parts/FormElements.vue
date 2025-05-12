<template>
  <article>
    <h2 class="text-3xl border-b pb-4 font-medium">Form elements</h2>
    <h3 class="text-xl my-4">Radio & checkbox</h3>
    <div class="flex flex-wrap gap-4">
      <UForm :initial-values="{ radio: 'kola' }">
        <UFormFieldset legend="Radio fieldset">
          <UFormRadio class="px-2" label="I want kola" value="kola" name="radio" />
          <UFormRadio class="px-2" label="I want dumle" value="dumle" name="radio" />
          <UFormRadio class="px-2" label="I want suris" value="suris" name="radio" />
        </UFormFieldset>
      </UForm>
      <fieldset class="border-gray-600 dark:border-white border-2 px-2 pt-2 pb-4 rounded-md inline-flex flex-col gap-2">
        <legend class="px-2">Candy checkbox</legend>
        <div class="pl-2 flex items-center gap-2">
          <input type="checkbox" checked id="id-checkbox-1" />
          <label for="id-checkbox-1">I want kola</label>
        </div>
        <div class="pl-2 flex items-center gap-2">
          <input type="checkbox" id="id-checkbox-2" />
          <label for="id-checkbox-2">I want dumle</label>
        </div>
        <div class="pl-2 flex items-center gap-2">
          <input type="checkbox" disabled id="id-checkbox-3" />
          <label for="id-checkbox-3">I want disabled suris</label>
        </div>
      </fieldset>
      <fieldset
        class="border-gray-600 bg-evergreen dark:bg-darkgreen text-white border-2 px-3 pt-2 pb-4 rounded-md inline-flex flex-col gap-2"
      >
        <legend class="px-2 bg-evergreen rounded dark:bg-darkgreen">Radio fieldset</legend>
        <div class="pl-2 flex items-center gap-2">
          <input class="light-check border-white" type="radio" value="kola" v-model="radio" id="id11" />
          <label for="id11">I want kola</label>
        </div>
        <div class="pl-2 flex items-center gap-2">
          <input class="light-check border-white" type="radio" value="dumle" v-model="radio" id="id22" />
          <label for="id22">I want dumle</label>
        </div>
        <div class="pl-2 flex items-center gap-2">
          <input class="light-check border-white" type="radio" disabled value="suris" v-model="radio" id="id32" />
          <label for="id32">I want disabled suris</label>
        </div>
      </fieldset>
      <fieldset
        class="border-gray-600 text-white bg-evergreen dark:bg-darkgreen border-2 px-2 pt-2 pb-4 rounded-md inline-flex flex-col gap-2"
      >
        <legend class="px-2 bg-evergreen rounded dark:bg-darkgreen">Candy checkbox</legend>
        <div class="pl-2 flex items-center gap-2">
          <input class="light-check border-white" type="checkbox" checked id="id-checkbox-1" />
          <label for="id-checkbox-1">I want kola</label>
        </div>
        <div class="pl-2 flex items-center gap-2">
          <input class="light-check border-white" type="checkbox" id="id-checkbox-2" />
          <label for="id-checkbox-2">I want dumle</label>
        </div>
        <div class="pl-2 flex items-center gap-2">
          <input class="light-check border-white" type="checkbox" disabled id="id-checkbox-3" />
          <label for="id-checkbox-3">I want disabled suris</label>
        </div>
      </fieldset>
      <UForm :initial-values="{ test: 'c' }">
        <UFormFieldset legend="Square radio buttons">
          <ul class="grid gap-6 mb-4 md:grid-cols-3">
            <UFormSquareRadioButton label="Hello" name="test" value="a" />
            <UFormSquareRadioButton label="World" name="test" value="b" />
            <UFormSquareRadioButton label="!" name="test" value="c" />
          </ul>
        </UFormFieldset>
      </UForm>
    </div>
    <h3 class="text-xl my-4">Other inputs</h3>
    <div class="flex flex-wrap gap-4">
      <UFormSelect label="Select..." name="formSelect" :options="selectoptions" :disabled="false" />
      <UFormText
        textarea
        label="Textarea"
        name="feedback"
        placeholder="Skriv in något..."
        hint="hjälp eller instruktion här"
      />
      <UFormText
        text
        label="Input text"
        name="feedback"
        placeholder="Skriv in något..."
        hint="hjälp eller instruktion här"
      />
      <UFormText type="date" label="Input date" name="date" hint="Välj datum" />
      <UFormText email label="Input email" name="email" placeholder="namn@domain.se" hint="Skriv in din emailadress" />
      <UFormText type="file" label="Input file" name="date" />
    </div>
    <h3 class="text-xl my-4">Multiselect</h3>
    <p class="my-4">
      Accessible multiselect dropdown. Implemented with a trigger element with role equal to combobox and a role listbox
      dropdown. Handles all relevant aria attributes in accordance to WCAG roles. aria-haspopup, aria-expanded,
      aria-multiselectable, aria-selected, aria-activedescendant. Manages focus states and handles most keybord
      shortcuts (up, down, space & enter toggles, end, home, esc to exit)
    </p>
    <div class="flex flex-wrap gap-4">
      <UForm :initial-values="{ select: 'multi' }">
        <UMultiSelect
          v-model="selected"
          all-message="Alla"
          :options="options"
          label="What u like?"
          selectAll="Välj alla"
          :multiselect="multiselect"
        >
        </UMultiSelect>
        <UFormFieldset legend="Inställningar">
          <UFormRadio name="select" value="multi" label="Multi select" v-model="selectKind" />
          <UFormRadio name="select" value="single" label="Single select" v-model="selectKind" />
        </UFormFieldset>
      </UForm>
    </div>
    <pre>{{ JSON.stringify(selected, null, 2) }}</pre>
    <h3 class="text-xl my-4">Fancy slider</h3>
    <UFormFancySlider label="Hello" unit="Hz" name="fancy" :min="100" :max="3000" :step="10" :value="1500" />
  </article>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import UForm from '../components/u-forms/UForm.vue';
import UFormFancySlider from '../components/u-forms/UFormFancySlider.vue';
import UFormFieldset from '../components/u-forms/UFormFieldset.vue';
import UFormRadio from '../components/u-forms/UFormRadio.vue';
import UFormSelect from '../components/u-forms/UFormSelect.vue';

const selectKind = ref('multi');
const multiselect = computed(() => selectKind.value == 'multi');

const radio = ref('kola');
const selected = ref();
const options = [
  {
    value: 0,
    label: 'Suris med godis',
  },
  {
    value: { label: 'fish' },
    label: 'Fish',
  },
  {
    value: false,
    label: 'Tapioka',
  },
  {
    value: true,
    label: 'Kola',
  },
  {
    value: 'stuff',
    label: 'stuff',
  },
  {
    value: 123,
    label: 'Number',
  },
  {
    value: '###&%¤#&',
    label: 'Pattern',
  },
  {
    value: { a: 1, b: 2 },
    label: 'Array',
  },
  {
    value: 'b12',
    label: 'More',
  },
  {
    value: 'b13',
    label: 'More1',
  },
  {
    value: 'b14',
    label: 'More2',
  },
];
const selectoptions = [
  {
    label: 'Alla',
    value: 0,
    disabled: false,
  },
  {
    label: 'Kola',
    value: 1,
    disabled: false,
  },
  {
    label: 'Dumle',
    value: 2,
    disabled: true,
  },
];
</script>

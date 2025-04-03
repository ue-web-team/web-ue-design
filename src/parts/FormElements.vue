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
      <fieldset class="border-gray-600 border-2 px-2 pt-2 pb-4 rounded-md inline-flex flex-col gap-2">
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
        class="border-gray-600 bg-gray text-white border-2 px-3 pt-2 pb-4 rounded-md inline-flex flex-col gap-2">
        <legend class="px-2 bg-gray rounded">Radio fieldset</legend>
        <div class="pl-2 flex items-center gap-2">
          <input class="light-check" type="radio" value="kola" v-model="radio" id="id11" />
          <label for="id11">I want kola</label>
        </div>
        <div class="pl-2 flex items-center gap-2">
          <input class="light-check" type="radio" value="dumle" v-model="radio" id="id22" />
          <label for="id22">I want dumle</label>
        </div>
        <div class="pl-2 flex items-center gap-2">
          <input class="light-check" type="radio" disabled value="suris" v-model="radio" id="id32" />
          <label for="id32">I want disabled suris</label>
        </div>
      </fieldset>
      <fieldset
        class="border-gray-600 text-white bg-gray border-2 px-2 pt-2 pb-4 rounded-md inline-flex flex-col gap-2">
        <legend class="px-2 bg-gray rounded">Candy checkbox</legend>
        <div class="pl-2 flex items-center gap-2">
          <input class="light-check" type="checkbox" checked id="id-checkbox-1" />
          <label for="id-checkbox-1">I want kola</label>
        </div>
        <div class="pl-2 flex items-center gap-2">
          <input class="light-check" type="checkbox" id="id-checkbox-2" />
          <label for="id-checkbox-2">I want dumle</label>
        </div>
        <div class="pl-2 flex items-center gap-2">
          <input class="light-check" type="checkbox" disabled id="id-checkbox-3" />
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
      <label class="block">
        Select...
        <select class="mt-1 block min-w-52">
          <option>Alla</option>
          <option>Kola</option>
          <option>Dumle</option>
        </select>
      </label>
      <div>
        <label class="block">
          Textarea
          <textarea class="mt-1 block min-w-52" rows="3"></textarea>
        </label>
        <div class="mt-1 text-sm">hjälp eller instruktion här</div>
      </div>
      <div>
        <label class="block">
          Input text
          <input type="text" class="mt-1 block min-w-52" rows="3" />
        </label>
        <div class="mt-1 text-sm">hjälp eller instruktion här</div>
      </div>
      <div>
        <label class="block">
          Input date
          <input type="date" class="mt-1 block min-w-52" rows="3" />
        </label>
        <div class="mt-1 text-sm">hjälp eller instruktion här</div>
      </div>
      <div>
        <label class="block">
          Input email
          <input type="email" class="mt-1 block min-w-52" rows="3" />
        </label>
      </div>
      <div>
        <label class="block">
          Input file
          <input type="file" class="mt-1 block min-w-52" rows="3" />
        </label>
      </div>
    </div>
    <h3 class="text-xl my-4">Multiselect</h3>
    <p class="my-4">
      Accessible multiselect dropdown. Implemented with a trigger element with
      role equal to combobox and a role listbox dropdown. Handles all relevant
      aria attributes in accordance to WCAG roles. aria-haspopup, aria-expanded,
      aria-multiselectable, aria-selected, aria-activedescendant. Manages focus
      states and handles most keybord shortcuts (up, down, space & enter
      toggles, end, home, esc to exit)
    </p>
    <div class="flex flex-wrap gap-4">
      <UMultiSelect v-model="selected" all-message="Alla" :options="options" label="What u like?" selectAll="Välj alla">
      </UMultiSelect>
    </div>
    <pre>{{ JSON.stringify(selected, null, 2) }}</pre>
    <h3 class="text-xl my-4">Fancy slider</h3>
    <UFormFancySlider label="Hello" unit="Hz" name="fancy" :min="0" :max="3000" :step="10" :value="1500" />
  </article>
</template>

<script setup lang="ts">
import { ref } from "vue";
import UFormFieldset from "../components/u-forms/UFormFieldset.vue";
import UFormFancySlider from "../components/u-forms/UFormFancySlider.vue";
import UForm from "../components/u-forms/UForm.vue";

const radio = ref("kola");
const selected = ref();
const options = [
  {
    value: 0,
    label: "Suris med godis",
  },
  {
    value: { label: "fish" },
    label: "Fish",
  },
  {
    value: false,
    label: "Tapioka",
  },
  {
    value: true,
    label: "Kola",
  },
  {
    value: "stuff",
    label: "stuff",
  },
  {
    value: 123,
    label: "Number",
  },
  {
    value: "###&%¤#&",
    label: "Pattern",
  },
  {
    value: { a: 1, b: 2 },
    label: "Array",
  },
  {
    value: "b12",
    label: "More",
  },
  {
    value: "b13",
    label: "More1",
  },
  {
    value: "b14",
    label: "More2",
  },
];
</script>

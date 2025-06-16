<template>
  <article>
    <h2 class="text-3xl border-b pb-4 font-medium">Buttons</h2>
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>Default</th>
          <th>Hover</th>
          <th>Active</th>
          <th>Focused</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Primary on Light</th>
          <td>
            <UButton kind="primary">Simple states</UButton>
          </td>
          <td>
            <UButton hover>Simple states</UButton>
          </td>
          <td>
            <UButton active>Simple states</UButton>
          </td>
          <td>
            <UButton class="ring ring-offset-1 ring-blue">Simple states</UButton>
          </td>
        </tr>
        <tr class="bg-evergreen">
          <th class="text-white">Primary on Dark</th>
          <td>
            <UButton kind="primary" :variant="ColorVariant.DARKGREEN">Simple states</UButton>
          </td>
          <td>
            <UButton hover :variant="ColorVariant.DARKGREEN">Simple states</UButton>
          </td>
          <td>
            <UButton active :variant="ColorVariant.DARKGREEN">Simple states</UButton>
          </td>
          <td>
            <UButton class="ring ring-offset-1 ring-blue" :variant="ColorVariant.DARKGREEN">Simple states</UButton>
          </td>
        </tr>
        <tr>
          <th>Primary outline on Light</th>
          <td>
            <UButton outline>Simple states</UButton>
          </td>
          <td>
            <UButton outline hover>Simple states</UButton>
          </td>
          <td>
            <UButton outline active>Simple states</UButton>
          </td>
          <td>
            <UButton class="ring ring-offset-1 ring-blue" outline>Simple states</UButton>
          </td>
        </tr>
        <tr class="bg-evergreen">
          <th class="text-white">Primary outline on Dark</th>
          <td>
            <UButton outline :variant="ColorVariant.DARKGREEN">Simple states</UButton>
          </td>
          <td>
            <UButton outline hover :variant="ColorVariant.DARKGREEN">Simple states</UButton>
          </td>
          <td>
            <UButton outline active :variant="ColorVariant.DARKGREEN">Simple states</UButton>
          </td>
          <td>
            <UButton class="ring ring-offset-1 ring-blue" outline :variant="ColorVariant.DARKGREEN"
              >Simple states</UButton
            >
          </td>
        </tr>

        <tr>
          <th>Ghost</th>
          <td>
            <UButton kind="ghost">Simple states</UButton>
          </td>
          <td>
            <UButton kind="ghost" hover>Simple states</UButton>
          </td>
          <td>
            <UButton kind="ghost" active>Simple states</UButton>
          </td>
          <td>
            <UButton class="ring ring-offset-1 ring-blue" kind="ghost">Simple states</UButton>
          </td>
        </tr>

        <tr>
          <th>Warn</th>
          <td>
            <UButton kind="warn">Simple states</UButton>
          </td>
          <td>
            <UButton kind="warn" hover>Simple states</UButton>
          </td>
          <td>
            <UButton kind="warn" active>Simple states</UButton>
          </td>
          <td>
            <UButton class="ring ring-offset-1 ring-blue" kind="warn">Simple states</UButton>
          </td>
        </tr>

        <tr>
          <th>Warn outline</th>
          <td>
            <UButton kind="warn" outline>Simple states</UButton>
          </td>
          <td>
            <UButton kind="warn" outline hover>Simple states</UButton>
          </td>
          <td>
            <UButton kind="warn" outline active>Simple states</UButton>
          </td>
          <td>
            <UButton class="ring ring-offset-1 ring-blue" kind="warn">Simple states</UButton>
          </td>
        </tr>

        <tr class="bg-evergreen">
          <th class="text-white">Light</th>
          <td>
            <UButton kind="light">Simple states</UButton>
          </td>
          <td>
            <UButton kind="light" hover>Simple states</UButton>
          </td>
          <td>
            <UButton kind="light" active>Simple states</UButton>
          </td>
          <td>
            <UButton class="ring ring-offset-1 ring-blue" kind="light">Simple states</UButton>
          </td>
        </tr>
        <tr class="bg-evergreen">
          <th class="text-white">Light outline</th>
          <td>
            <UButton kind="light" outline>Simple states</UButton>
          </td>
          <td>
            <UButton kind="light" outline hover>Simple states</UButton>
          </td>
          <td>
            <UButton kind="light" outline active>Simple states</UButton>
          </td>
          <td>
            <UButton class="ring ring-offset-1 ring-blue" kind="light" outline>Simple states</UButton>
          </td>
        </tr>

        <tr class="bg-evergreen">
          <th class="text-white">White</th>
          <td>
            <UButton kind="white">Simple states</UButton>
          </td>
          <td>
            <UButton kind="white" hover>Simple states</UButton>
          </td>
          <td>
            <UButton kind="white" active>Simple states</UButton>
          </td>
          <td>
            <UButton class="ring ring-offset-1 ring-blue" kind="white">Simple states</UButton>
          </td>
        </tr>
        <tr class="bg-evergreen">
          <th class="text-white">White outline</th>
          <td>
            <UButton kind="white" outline>Simple states</UButton>
          </td>
          <td>
            <UButton kind="white" outline hover>Simple states</UButton>
          </td>
          <td>
            <UButton kind="white" outline active>Simple states</UButton>
          </td>
          <td>
            <UButton class="ring ring-offset-1 ring-blue" kind="white" outline>Simple states</UButton>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="grid my-8 grid-cols-2 md:grid-cols-4 place-items-start gap-4">
      <UButton kind="ghost">
        <template #after> <i-mdi-chevron-down /> </template>Ghost with icon
      </UButton>
      <UButton>
        <template #before> <i-mdi-cog /> </template>With icon before
      </UButton>
      <UButton loading>
        <template #before> <i-mdi-cog /> </template>Loading
      </UButton>
      <UButton outline>
        <template #after> <i-mdi-account /> </template>And after
      </UButton>

      <UButton disabled outline>Button</UButton>
      <UButton disabled>Button</UButton>
    </div>
    <h3 class="text-xl my-4">Usage</h3>
    <Prism language="html" class="codesnippet">{{ code }}</Prism>
  </article>
</template>

<script setup lang="ts">
import Prism from '@/lib/code-block';
import UButton from '../components/u-button/UButton.vue';
import { ColorVariant } from '../config/colorVariant';

const code = `<!-- Variants. default(dark), ghost, warn, light, white -->
<UButton> Button text </UButton>
<UButton kind="ghost"> Button text </UButton>
<UButton kind="warn"> Button text </UButton>
<UButton kind="light"> Button text </UButton>
<UButton kind="white"> Button text </UButton>

<!-- whith outline (not ghost) -->
<UButton outline> Button text </UButton>
<UButton kind="warn" outline> Button text </UButton>
<UButton kind="light" outline> Button text </UButton>
<UButton kind="white" outline> Button text </UButton>

<!-- loading -->
<UButton loading> Button text </UButton>

<!-- icons (after and before)-->
<UButton loading>
  <template #after>
    <i-mdi-account />
  </template>
  Button text
</UButton>
<UButton loading>
  <template #before>
    <i-mdi-account />
  </template>
  Button text
</UButton>
`;
</script>

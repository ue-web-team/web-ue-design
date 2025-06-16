<template>
  <article>
    <h2 class="text-3xl border-b pb-4 font-medium">Icon buttons</h2>
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>Default</th>
          <th>Hover</th>
          <th>Active</th>
          <th>Focused</th>
          <th>Disabled</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Primary on Light</th>
          <td>
            <UIconButton v-tippy="{ content: 'default button', placement: 'right' }"><i-mdi-cog /></UIconButton>
          </td>
          <td>
            <UIconButton hover v-tippy="'hover button'"><i-mdi-cog /></UIconButton>
          </td>
          <td class="flex justify-center">
            <UIconButton active to="/home" v-tippy="'active button'"><i-mdi-cog /></UIconButton>
          </td>
          <td>
            <UIconButton class="ring ring-offset-1 ring-blue-600 ring-opacity-90"><i-mdi-cog /></UIconButton>
          </td>
          <td>
            <UIconButton disabled><i-mdi-cog /></UIconButton>
          </td>
        </tr>
        <tr class="bg-evergreen">
          <th class="text-white">Primary on Dark</th>
          <td>
            <UIconButton :variant="ColorVariant.DARKGREEN" v-tippy="{ content: 'default button', placement: 'right' }"
              ><i-mdi-cog
            /></UIconButton>
          </td>
          <td>
            <UIconButton :variant="ColorVariant.DARKGREEN" hover v-tippy="'hover button'"><i-mdi-cog /></UIconButton>
          </td>
          <td class="flex justify-center">
            <UIconButton :variant="ColorVariant.DARKGREEN" active to="/home" v-tippy="'active button'"
              ><i-mdi-cog
            /></UIconButton>
          </td>
          <td>
            <UIconButton :variant="ColorVariant.DARKGREEN" class="ring ring-offset-1 ring-blue-600 ring-opacity-90"
              ><i-mdi-cog
            /></UIconButton>
          </td>
          <td>
            <UIconButton :variant="ColorVariant.DARKGREEN" disabled><i-mdi-cog /></UIconButton>
          </td>
        </tr>
        <tr>
          <th>Primary outline on Light BG</th>
          <td>
            <UIconButton outline><i-mdi-cog /></UIconButton>
          </td>
          <td>
            <UIconButton outline hover><i-mdi-cog /></UIconButton>
          </td>
          <td>
            <UIconButton outline active><i-mdi-cog /></UIconButton>
          </td>
          <td>
            <UIconButton class="ring ring-offset-1 ring-blue-600 ring-opacity-90" outline><i-mdi-cog /></UIconButton>
          </td>
          <td>
            <UIconButton outline disabled><i-mdi-cog /></UIconButton>
          </td>
        </tr>
        <tr class="bg-evergreen">
          <th class="text-white">Dark outline on Dark BG</th>
          <td>
            <UIconButton :variant="ColorVariant.DARKGREEN" outline><i-mdi-cog /></UIconButton>
          </td>
          <td>
            <UIconButton :variant="ColorVariant.DARKGREEN" outline hover><i-mdi-cog /></UIconButton>
          </td>
          <td>
            <UIconButton :variant="ColorVariant.DARKGREEN" outline active><i-mdi-cog /></UIconButton>
          </td>
          <td>
            <UIconButton
              :variant="ColorVariant.DARKGREEN"
              class="ring ring-offset-1 ring-blue-600 ring-opacity-90"
              outline
              ><i-mdi-cog
            /></UIconButton>
          </td>
          <td>
            <UIconButton :variant="ColorVariant.DARKGREEN" outline disabled><i-mdi-cog /></UIconButton>
          </td>
        </tr>
        <tr>
          <th>Ghost</th>
          <td>
            <UIconButton kind="ghost"><i-mdi-cog /></UIconButton>
          </td>
          <td>
            <UIconButton kind="ghost" hover><i-mdi-cog /></UIconButton>
          </td>
          <td>
            <UIconButton kind="ghost" active><i-mdi-cog /></UIconButton>
          </td>
          <td>
            <UIconButton class="ring ring-offset-1 ring-blue-600 ring-opacity-90" kind="ghost"
              ><i-mdi-cog
            /></UIconButton>
          </td>
          <td>
            <UIconButton kind="ghost" disabled><i-mdi-cog /></UIconButton>
          </td>
        </tr>
      </tbody>
    </table>
    <h3 class="text-xl my-4">Usage</h3>
    <Prism language="html" class="codesnippet">{{ code }}</Prism>
  </article>
</template>

<script setup lang="ts">
import UIconButton from '../components/u-icon-button/UIconButton.vue';
import { useVariant } from '../composables/useVariant';
import { ColorVariant } from '../config/colorVariant';
import Prism from '../lib/code-block';

useVariant(ColorVariant.WHITE);
const code = `<!-- Variants. default(dark), ghost -->
<UIconButton><i-mdi-cog /></UIconButton>
<UIconButton kind="ghost"><i-mdi-cog /></UIconButton>

<!-- whith outline (not ghost) -->
<UIconButton outline><i-mdi-cog /></UIconButton>
`;
</script>
<style scoped>
.tippy-box[data-theme~='tomato'] {
  background-color: tomato;
  color: yellow;
}
</style>

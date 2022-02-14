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
          <th>Dark</th>
          <td>
            <UIconButton><i-mdi-cog /></UIconButton>
          </td>
          <td>
            <UIconButton hover><i-mdi-cog /></UIconButton>
          </td>
          <td>
            <UIconButton active><i-mdi-cog /></UIconButton>
          </td>
          <td>
            <UIconButton class="ring-3 ring-offset-1 ring-blue-600 ring-opacity-90"><i-mdi-cog /></UIconButton>
          </td>
          <td>
            <UIconButton disabled><i-mdi-cog /></UIconButton>
          </td>
        </tr>
        <tr>
          <th>Dark outline</th>
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
            <UIconButton
              class="ring-3 ring-offset-1 ring-blue-600 ring-opacity-90"
              outline
            ><i-mdi-cog /></UIconButton>
          </td>
          <td>
            <UIconButton outline disabled><i-mdi-cog /></UIconButton>
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
            <UIconButton
              class="ring-3 ring-offset-1 ring-blue-600 ring-opacity-90"
              kind="ghost"
            ><i-mdi-cog /></UIconButton>
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
import Prism from "../lib/code-block"

const code =
  `<!-- Variants. default(dark), ghost -->
<UIconButton><i-mdi-cog /></UIconButton>
<UIconButton kind="ghost"><i-mdi-cog /></UIconButton>

<!-- whith outline (not ghost) -->
<UIconButton outline><i-mdi-cog /></UIconButton>
`
</script>
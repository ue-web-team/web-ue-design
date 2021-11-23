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
          <th>Dark</th>
          <td>
            <UButton>Simple states</UButton>
          </td>
          <td>
            <UButton hover>Simple states</UButton>
          </td>
          <td>
            <UButton active>Simple states</UButton>
          </td>
          <td>
            <UButton class="ring-3 ring-offset-1 ring-blue-600 ring-opacity-90">Simple states</UButton>
          </td>
        </tr>
        <tr>
          <th>Dark outline</th>
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
            <UButton
              class="ring-3 ring-offset-1 ring-blue-600 ring-opacity-90"
              outline
            >Simple states</UButton>
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
            <UButton
              class="ring-3 ring-offset-1 ring-blue-600 ring-opacity-90"
              kind="ghost"
            >Simple states</UButton>
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
            <UButton
              class="ring-3 ring-offset-1 ring-blue-600 ring-opacity-90"
              kind="warn"
            >Simple states</UButton>
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
            <UButton
              class="ring-3 ring-offset-1 ring-blue-600 ring-opacity-90"
              kind="warn"
            >Simple states</UButton>
          </td>
        </tr>

        <tr class="bg-gray-500">
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
            <UButton
              class="ring-3 ring-offset-1 ring-blue-600 ring-opacity-90"
              kind="light"
            >Simple states</UButton>
          </td>
        </tr>
        <tr class="bg-gray-500">
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
            <UButton
              class="ring-3 ring-offset-1 ring-blue-600 ring-opacity-90"
              kind="light"
              outline
            >Simple states</UButton>
          </td>
        </tr>

        <tr class="bg-gray-500">
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
            <UButton
              class="ring-3 ring-offset-1 ring-blue-600 ring-opacity-90"
              kind="white"
            >Simple states</UButton>
          </td>
        </tr>
        <tr class="bg-gray-500">
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
            <UButton
              class="ring-3 ring-offset-1 ring-blue-600 ring-opacity-90"
              kind="white"
              outline
            >Simple states</UButton>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="grid my-8 grid-cols-2 md:grid-cols-4 place-items-start gap-4">
      <UButton kind="ghost">
        <template #after>
          <i-mdi-chevron-down />
        </template>Ghost with icon
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

      <UButton disabled outline>Button</UButton>
      <UButton disabled>Button</UButton>
    </div>
  </article>
</template>

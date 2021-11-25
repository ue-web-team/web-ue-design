<template>
  <article>
    <h2 class="text-3xl border-b pb-4 mb-4 font-medium">Color palette</h2>

    <div v-for="palette in all" :key="palette.name">
      <p class="font-bold mb-2 mt4">{{ palette.name }}</p>
      <div class="flex gap-2 overflow-y-auto">
        <div class="block w-26" v-for="color in palette.colors" :key="color.name">
          <button
            @click="onColorSelect(color)"
            class="text-xs p-1 w-full rounded h-16 border border-black transition-colors hover:border-2 active:opacity-75"
            :style="{ 'background-color': color.value, 'color': contrastColor({ bgColor: color.value }) }"
          >
          {{ color.value }}
          </button>
          {{ color.name }}
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { colors } from '../config/colors'
import { contrastColor } from '../logic/contrast'
const isDialogOpen = ref(false);
const isLoading = ref(false);
const all = Object.keys(colors).map(name => ({
  name,
  colors: Object.keys(colors[name]).map(grade => ({
    name: grade,
    value: colors[name][grade]
  }))
})).filter(item => !['transparent', 'white'].includes(item.name))
console.log('ssssssssssss', all)

const onColorSelect = ({ name, value }: { name: string, value: string }) => {
  navigator.clipboard.writeText(value)
}
</script>

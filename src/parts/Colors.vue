<template>
  <article>
    <h2 class="text-3xl border-b pb-4 mb-4 font-medium">Color palette</h2>

    <div v-for="palette in items" :key="palette.name">
      <p class="font-bold mb-2 mt4">{{ getPaletteName(palette.name) }}</p>
      <div class="flex gap-2 p-1 overflow-y-auto">
        <div
          class="block w-26"
          v-for="(color, index) in palette.colors"
          :key="color.name"
        >
          <button
            @click="onColorSelect(color)"
            class="focus-style relative text-xs p-1 w-full rounded h-16 border border-black transition-colors hover:border-2 active:opacity-75"
            :style="{
              'background-color': color.value,
              color: index > 2 ? 'white' : 'black',
            }"
          >
            <p class="p-2">{{ color.value }}</p>
          </button>
          {{ color.name }}
        </div>
      </div>
    </div>
    <h3 class="text-xl my-4">Usage</h3>
    <div class="prose">
      <p>
        The color palette is delivered as a "theme" for
        <strong>tailwind/windicss</strong> and is also accesible in code by
        including {colors} from "@vejron/ue-design"
      </p>
    </div>
    <Prism language="html" class="codesnippet">{{ code }}</Prism>
    <Prism language="javascript" class="codesnippet">{{ code2 }}</Prism>
  </article>
</template>

<script setup lang="ts">
import Prism from "@/lib/code-block";
import { ref } from "vue";
import { colors } from "../config/colors";

const code = `<!-- Usage with tailwind utility classes -->
<div class="bg-red text-primary border border-blue-100">I am a red square with green text and light blue border</div
`;
const code2 = `// Usage in code
import { colors } from "@vejron/ue-design"

const blue = colors.blue.DEFAULT
const lightBlue = colors.blue['100']
const darkestBlue = colors.blue['700']
`;

const isDialogOpen = ref(false);
const isLoading = ref(false);

const all = Object.keys(colors)
  .map((name) => ({
    name,
    colors: Object.keys(colors[name]).map((grade) => ({
      name: grade,
      value: colors[name][grade],
    })),
  }))
  .filter((item) => !["transparent", "white"].includes(item.name));
const items = ref(all);
const getPaletteName = (name: string) => {
  if (name == "primary" || name == "green") return name + " (Gran)";
  if (name == "leaf") return name + " (Björk)";
  if (name == "evergreen") return name + " (Tall)";
  if (name == "typegreen") return name + " (Typografi)";
  if (name == "darkgreen") return name + " (Vår svart)";
  if (name == "smoke") return name + " (Dimma)";
  if (name == "warm") return name + " (UE Värme)";
  if (name == "lightyellow") return name + " (UE Sol)";
  return name;
};

const onColorSelect = ({ name, value }: { name: string; value: string }) => {
  navigator.clipboard.writeText(value);
};
</script>

<style scoped lang="css">
.focus-style::after {
  content: "Copied!";
  opacity: 0;
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.focus-style:active::after {
  opacity: 1;
}
</style>

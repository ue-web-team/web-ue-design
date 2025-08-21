import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import typescript from '@rollup/plugin-typescript'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
    }),
    vue(),
    visualizer({
      open: false,
      title: 'UCL Bundle Visualizer',
    }),
    {
      name: 'copy tailwind config',
      generateBundle() {
        /*fs.copyFileSync(
          resolve('./src/config/theme.ts'),
          resolve('./dist/theme.ts')
        );*/
        fs.copyFileSync(
          resolve('./src/assets/base.postcss'),
          resolve('./dist/base.postcss')
        );
      }
    }
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    },
    dedupe: ['vue']
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'uedesign',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', '@headlessui/vue', '@vueuse/core'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.names[0] == "ue-design.css") return "style.css";
          return assetInfo.names;
        },
      },
    },
  },
})
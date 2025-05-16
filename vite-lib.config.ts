import typescript from '@rollup/plugin-typescript';
import vue from '@vitejs/plugin-vue';
import fs from 'fs';
import { resolve } from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.otf'],
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
        fs.copyFileSync(resolve('./src/assets/base.postcss'), resolve('./dist/base.postcss'));
      },
    },
    {
      name: 'copy favicons',
      generateBundle() {
        const src = resolve(__dirname, './src/assets/favicons');
        const dest = resolve(__dirname, './dist/favicons');
        fs.mkdirSync(dest, { recursive: true });

        fs.copyFileSync(`${src}/favicon.svg`, `${dest}/favicon.svg`);
        fs.copyFileSync(`${src}/favicon.ico`, `${dest}/favicon.ico`);
        fs.copyFileSync(`${src}/apple-touch-icon.png`, `${dest}/apple-touch-icon.png`);
      },
    },
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
    dedupe: ['vue'],
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'uedesign',
      fileName: (format) => `ue-design.${format}.js`, // this matches your package.json
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
      },
    },
  },
});

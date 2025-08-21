import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    },
    dedupe: ['vue']
  },
  plugins: [
    vue(),
    Components({
      dirs: ['src/components', 'src/parts'],
      resolvers: [
        IconsResolver()
      ]
    }),
    Icons({ /* options */ }),
    mkcert()
  ]
})

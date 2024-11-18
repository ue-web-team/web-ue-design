/** @type {import('tailwindcss').Config} */

import ustyle from "./src/plugin"
import theme from "./src/config/theme";
import typography from '@tailwindcss/typography'

module.exports = {
  darkMode: 'class',
  safelist: [
    'h1',
    'h2',
    'h3',
    'p',
    'img'
  ],
  theme,
  plugins: [ustyle, typography],
}

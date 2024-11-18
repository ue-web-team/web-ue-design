/** @type {import('tailwindcss').Config} */

import ustyle from "./src/plugin"
import theme from "./src/config/theme";
import typography from '@tailwindcss/typography'

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],  
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

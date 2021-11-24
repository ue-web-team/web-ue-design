import { defineConfig } from "windicss/helpers";
import prose from 'windicss/plugin/typography'
import ustyle from "./src/plugin"
import theme from "./src/config/theme";

export default defineConfig({
  darkMode: "class",
  prefixer: false,
  preflight: {
    safelist: 'h1 h2 h3 p img',
  },
  theme,
  plugins: [ustyle, prose],
});

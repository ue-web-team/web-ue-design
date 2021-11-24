import { Theme } from "windicss/types/interfaces";
import { colors } from "./colors";

export const theme: Theme = {
    colors,
    extend: {
      fontFamily: {
        sans: ['OutfitVariable', 'sans-serif'],
      }
    }
};

export default theme;

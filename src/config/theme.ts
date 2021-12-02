import { Theme } from "windicss/types/interfaces";
import { colors } from "./colors";

export const theme: Theme = {
    colors,
    extend: {
      fontFamily: {
        sans: ['UrbanistVariable', 'sans-serif'],
      }
    }
};

export default theme;

import { Theme } from "windicss/types/interfaces";

const theme: Theme = {
  extend: {
    colors: {
      primary: {
        DEFAULT: "#00C853",
        "50": "#AFFFD0",
        "100": "#95FFC1",
        "200": "#62FFA3",
        "300": "#2FFF85",
        "400": "#00FB68",
        "500": "#00C853",
        "600": "#00953E",
        "700": "#006229",
        "800": "#002F14",
        "900": "#000000",
      },
      warn: {
        DEFAULT: "#E92362",
        "50": "#FEF4F7",
        "100": "#FCDCE6",
        "200": "#F7AEC5",
        "300": "#F280A4",
        "400": "#EE5183",
        "500": "#E92362",
        "600": "#C5144C",
        "700": "#970F3A",
        "800": "#690A28",
        "900": "#3A0616",
      },
    },
  },
};

export default theme;

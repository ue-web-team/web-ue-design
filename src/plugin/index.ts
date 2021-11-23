import plugin from "windicss/plugin";
//import { colors, baseConfig } from "windicss/types/config";
//import { DefaultTheme } from "windicss/types/interfaces";
import svgToDataUri from "mini-svg-data-uri";

//const defaultTheme = baseConfig.theme as unknown as DefaultTheme;
//const [baseFontSize, { lineHeight: baseLineHeight }] =
//  defaultTheme.fontSize.base;
//const { borderWidth, borderRadius, outline } = defaultTheme;
const spacing = (num: number) => `${num / 4}rem`;

export default plugin(
  ({ addUtilities, addBase, theme, addComponents, config }) => {
    addBase({
      [`
  [type='text'],
  [type='email'],
  [type='url'],
  [type='password'],
  [type='number'],
  [type='date'],
  [type='datetime-local'],
  [type='month'],
  [type='search'],
  [type='tel'],
  [type='time'],
  [type='week'],
  [multiple],
  textarea,
  select
  `]: {
        "-webkit-appearance": "none",
        "-moz-appearance": "none",
        appearance: "none",
        "background-color": "#fff",
        "border-color": theme("colors.gray.500") as string,
        "border-width": "2px",
        "border-radius": "0.25rem",
        "padding-top": spacing(2),
        "padding-right": spacing(3),
        "padding-bottom": spacing(2),
        "padding-left": spacing(3),
        "font-size": "initial",
        "line-height": "inherit",
        "min-height": "2.75rem",
        "&:focus": {
          outline: "none",
          "outline-offset": "0",
          "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
          "--tw-ring-offset-width": "0px",
          "--tw-ring-offset-color": "#fff",
          "--tw-ring-color": theme("colors.blue.DEFAULT") as string,
          "--tw-ring-offset-shadow":
            "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
          "--tw-ring-shadow":
            "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
          "box-shadow":
            "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
          "border-color": theme("colors.blue.DEFAULT") as string,
        },
      },

      "input::-moz-placeholder, textarea::-moz-placeholder": {
        color: theme("colors.gray.500") as string,
        opacity: "1",
      },

      "input::-ms-input-placeholder, textarea::-ms-input-placeholder": {
        color: theme("colors.gray.500") as string,
        opacity: "1",
      },

      "input::placeholder, textarea::placeholder": {
        color: theme("colors.gray.500") as string,
        opacity: "1",
      },

      "::-webkit-datetime-edit-fields-wrapper": {
        padding: "0",
      },

      // Unfortunate hack until https://bugs.webkit.org/show_bug.cgi?id=198959 is fixed.
      // This sucks because users can't change line-height with a utility on date inputs now.
      // Reference: https://github.com/twbs/bootstrap/pull/31993
      "::-webkit-date-and-time-value": {
        "min-height": "1.5em",
      },

      textarea: {
        "padding-top": spacing(2),
        "padding-right": spacing(3),
        "padding-bottom": spacing(2),
        "padding-left": spacing(3),
        "font-size": "initial",
        "line-height": "inherit",
      },

      select: {
        "background-image": `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M6 8l4 4 4-4"/></svg>`
        )}")`,
        "background-position": `right ${spacing(2)} center`,
        "background-repeat": "no-repeat",
        "background-size": "1.5em 1.5em",
        "padding-top": spacing(2),
        "padding-right": spacing(10),
        "padding-bottom": spacing(2),
        "padding-left": spacing(3),
        "-webkit-print-color-adjust": "exact",
        "color-adjust": "exact",

      },

      "[multiple]": {
        "background-image": "initial",
        "background-position": "initial",
        "background-repeat": "unset",
        "background-size": "initial",
        "padding-right": spacing(3),
        "-webkit-print-color-adjust": "unset",
        "color-adjust": "unset",
      },

      [`
  [type='checkbox'],
  [type='radio']
  `]: {
        "-webkit-appearance": "none",
        "-moz-appearance": "none",
        appearance: "none",
        padding: "0",
        "-webkit-print-color-adjust": "exact",
        "color-adjust": "exact",
        display: "inline-block",
        "vertical-align": "middle",
        "background-origin": "border-box",
        "-webkit-user-select": "none",
        "-moz-user-select": "none",
        "-ms-user-select": "none",
        "user-select": "none",
        "flex-shrink": "0",
        height: spacing(4),
        width: spacing(4),
        color: theme("colors.primary.DEFAULT") as string,
        "background-color": "#fff",
        "border-color": theme("colors.black.DEFAULT") as string,
        "border-width": "1px",
        "border-radius": "3px"
      },
      ["[type='radio']"]: {
        "border-radius": "100%",
      },
      [`
  [type='checkbox']:focus,
  [type='radio']:focus
      `]: {
        //outline: "none",
      },

      [`
  [type='checkbox']:checked,
  [type='radio']:checked
      `]: {
        //"border-color": "transparent",
        "background-color": "currentColor",
        "background-size": "100% 100%",
        "background-position": "center",
        "background-repeat": "no-repeat",
      },

      ["[type='checkbox']:checked"]: {
        "background-image": `url("${svgToDataUri(
          '<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>'
        )}")`,
      },

      ["[type='radio']:checked"]: {
        "background-image": `url("${svgToDataUri(
          '<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>'
        )}")`,
      },

      [`
  [type='checkbox']:checked:hover,
  [type='checkbox']:checked:focus,
  [type='radio']:checked:hover,
  [type='radio']:checked:focus
      `]: {
        //"border-color": "transparent",
        //"background-color": "currentColor",
      },

      ["[type='checkbox']:indeterminate"]: {
        "background-image": `url("${svgToDataUri(
          '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h8"/></svg>'
        )}")`,
        "border-color": "transparent",
        "background-color": "currentColor",
        "background-size": "100% 100%",
        "background-position": "center",
        "background-repeat": "no-repeat",
      },

      [`
  [type='checkbox']:indeterminate:hover,
  [type='checkbox']:indeterminate:focus
      `]: {
        "border-color": "transparent",
        "background-color": "currentColor",
      },

      ["[type='file']"]: {
        background: "unset",
        "border-color": "inherit",
        "border-width": "0",
        "border-radius": "0",
        padding: "0",
        "font-size": "unset",
        "line-height": "inherit",
      },

      ["[type='file']:focus"]: {
        outline: ["1px solid ButtonText", "1px auto -webkit-focus-ring-color"],
        // outline: `1px auto -webkit-focus-ring-color`,
      },
    });
    addComponents({
      ".light-check": {
        
        "&:checked": {
          "border-color": "#fff",
        },
      },
      ".btn-blue": {
        backgroundColor: "#3490dc",
        color: "#fff",
        "&:hover": {
          backgroundColor: "#2779bd",
        },
      },
    });
  }
);

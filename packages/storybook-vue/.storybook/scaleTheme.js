import { create } from "@storybook/theming/create";
import { color } from "../public/design-tokens-telekom";

const PRIMARY = color.magenta;
const WHITE = color.white;
const TEXT = color.text.standard;
const GREY = color.grey0;

export default create({
  base: "light",

  colorPrimary: PRIMARY,
  colorSecondary: PRIMARY, // :)

  // UI
  appBg: GREY,
  appContentBg: WHITE,
  appBorderColor: GREY,
  appBorderRadius: 4,

  // Typography
  // TODO sizes are too small with TeleNeo, check if tweaking sizes is possible
  fontBase: "TeleNeoWeb, TeleNeo, sans-serif",
  fontCode: "monospace",

  // Text colors
  textColor: TEXT,
  textInverseColor: WHITE,

  // Toolbar default and active colors
  barTextColor: TEXT,
  barSelectedColor: PRIMARY,
  barBg: WHITE,

  // Form colors
  inputBg: WHITE,
  inputBorder: GREY,
  inputTextColor: TEXT,
  inputBorderRadius: 4,

  brandTitle: "Telekom Scale Design System",
  // TODO add URL
  // brandUrl: 'https://example.com',
  brandImage: "assets/Telekom-Logo-Magenta-350x150.svg"
});

import { defineConfig } from "vite-plugin-windicss";
import typography from "windicss/plugin/typography";

const config = defineConfig({
  darkMode: "class",
  plugins: [typography()],
  attributify: true,
  theme: {
    extend: {
      screens: {
        // mxl: "1390px",
      },
      colors: {
        // primary: "#2D7DD2",
      },
      fontFamily: {
        // sans: "Roboto",
      },
    },
  },
});

export default config;

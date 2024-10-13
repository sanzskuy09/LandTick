const { nextui } = require("@nextui-org/theme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|checkbox|date-picker|input|ripple|spinner|calendar|date-input|popover).js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(90deg, #ec7ab7 -0.6%, #ec7a7a 100%)",
      },
      colors: {
        primary: "#EC7A80",
        secondary: "#B7B7B7",
      },
    },
  },
  plugins: [nextui()],
};

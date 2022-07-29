const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./layouts/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./views/**/*.{ts,tsx}",
    "./composites/**/*.{ts,tsx}",
    "./components/**/*.{ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        mono: ["Inconsolata", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};

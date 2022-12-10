module.exports = {
  mode: "jit",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./posts/**/*.{md,mdx}",
  ],
  darkMode: "class",

  theme: {
    typography: (theme) => ({}),
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};

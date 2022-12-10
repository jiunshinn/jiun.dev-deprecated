module.exports = {
  darkMode: "class",
  purge: {
    enabled: true,
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./layouts/**/*.{js,ts,jsx,tsx}",
      "./posts/**/*.{md,mdx}",
    ],
    options: {
      safelist: ["dark"], //specific classes
    },
  },
  theme: {
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            color: "white",
          },
        },
      }),
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};

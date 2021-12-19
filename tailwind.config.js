module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Calibri", "notosans", "serif"],
      },
    },
  },
  variants: { extend: {} },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("@tailwindcss/line-clamp")],
};

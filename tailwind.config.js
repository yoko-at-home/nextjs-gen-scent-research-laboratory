module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      yui: ['"Yuji Syuku"', '"serif"'],
      sans: ['"游ゴシック体"', '"YuGothic"', '"游ゴシック"', '"Yu Gothic"', '"Calibri"', '"sans-serif"'],
      caribri: ['"Calibri"', '"sans-serif"'],
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "#717171",
            a: {
              color: "#3182ce",
              "&:hover": {
                color: "#2c5282",
              },
            },
          },
        },
      },
    },
  },
  variants: { extend: {} },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};

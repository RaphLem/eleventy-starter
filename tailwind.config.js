// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{njk,md,js}'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        color2: '#0B4776',
        color1: '#186843',
        color3: '#0B1338',
        color4: '#F8EFD9',
        color5: '#EB9A2F',
        color6: '#67868B',
      },
      fontFamily: {
        text: ['Calibri'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'inherit',
          },
        },
      }),
    },
    container: {
      center: true,
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

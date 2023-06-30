/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  //important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    /* colors: {
      'dark-light' : '#F9F9F9',
    }, */
    colors: {
      'dark-light' : '#F9F9F9',
      'dark-mid': '#040315',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
      red: colors.red,
      amber: colors.amber,
      indigo: colors.indigo
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1150px',
      //'2xl': '1536px',
    },
    extend: {},
  },
  plugins: [
    //require('@tailwindcss/forms'),
  ],
}


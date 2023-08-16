/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  //important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1150px',
      //'2xl': '1536px',
    },
    extend: {
      colors: {
        'dark-light' : '#F9F9F9',
        'dark-mid': '#040315',
        primary: '#0D0954',
      }
    },
  },
  plugins: [
  ],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs:14,
      sm:16,
      md:18,
      lg:20,
      xl:24,
      '2xl':32,
    },
    colors: {
      black: '#000',
      white: '#fff',

      transparent: 'transparent',
      
      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7c7c8a',
        200: '#c4c4cc',
        100: '#e1e1e6',
      },

      marron: {
        900: '#332105',
        700: '#664714',
        500: '#99702E',
        300: '#CC9D52',
        100: '#FFCE80'
      },

      'gray-900': '#121214',
      'gray-800': '#202024',
      'gray-400': '#7c7c8a',
      'gray-200': '#c4c4cc',
      'gray-100': '#e1e1e6',

      'marron-900': '#332105',
      'marron-700': '#664714',
      'marron-500': '#99702E',
      'marron-300': '#CC9D52',
      'marron-100': '#FFCE80'
    },

    extend: {
      fontFamily:{
        sans: 'Nunito Sans, sans-serif'
      }
    },
  },
  plugins: [],
}

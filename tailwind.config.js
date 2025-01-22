/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'vazir': ['Vazir', 'sans-serif'],
        'staatliches': ['Staatliches', 'sans-serif'],
        'bungee': ['Bungee', 'sans-serif']
      },
      screens: {
        'xs': '444px'
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('tailwindcss-rtl'),
  ]
}
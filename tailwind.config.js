/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'vazir': ['Vazir'],
        'staatliches': ['Staatliches', 'sans-serif'], // اضافه کردن فونت
      },
    },
  },
  plugins: [],
}
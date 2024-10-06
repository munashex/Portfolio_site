/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', '"Nunito Placeholder"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
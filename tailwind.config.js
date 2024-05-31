/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons"
      }
    },
    maxWidth: {
      '1/2': '50%',
      '3/5': '60%',
      '3/4': '75%',
    },
  },
  plugins: [],
}


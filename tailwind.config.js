/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBg: '#F0F0F6',
        darkBg: '#4E4B57',
        secondaryDarkBg: '#2A2A2A',
        primarytxt: '#2B2B2B',
        secondarytxt: '#767676',
        orangetxt: '#FFB400'
      }
    },
  },
  plugins: [],
}
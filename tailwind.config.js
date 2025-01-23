const {heroui} = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom color palate
      colors: {
        cyan: '#0FF1F6',
        dark_bg: '#002228',
        light_bg: '#07292F'
      },
      fontFamily: {
        montserrat: '"Montserrat", sans serif',
        work_sans: '"Work Sans", sans serif'
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}
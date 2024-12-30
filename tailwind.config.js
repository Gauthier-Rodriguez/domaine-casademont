/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Futura", "sans-serif"],
      },
      backgroundImage: {
        "bg-custom": "url('/public/winesBG.svg')",
      }
    },
  },
  plugins: [],
}
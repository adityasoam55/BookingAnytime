/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          light: "#006ce4",
          default: "#003580",
          border: "#febb02",
        }
    },
  },
  plugins: [],
}


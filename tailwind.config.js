/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        'main': "#FFC222"
      },
      backgroundColor: {
        'main': '#FFC222'
      }
    },
  },
  plugins: [],
}


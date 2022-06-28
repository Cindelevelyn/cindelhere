/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Josefin Sans, sans-serif',
        mono: 'Ubuntu, sans-serif',
      },
      colors: {
        brown: "#A9927D",
        darkBlue: "#22333B",
        gray: "#D7D6D6",
      }
    },
  },
  plugins: [],
}

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
        bege: "#FDFCDC",
        darkBlue: "#0081A7",
        rosa: "#F07167",
      }
    },
  },
  plugins: [],
}

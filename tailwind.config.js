/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/**/*.{html,js}", "index.html", "script.js"],
  theme: {
    extend: {
      colors: {
        'azul': '#6448fe',
        'roxo': '#600594',
        'vermelho': '#ff5252',
        'roxo-escuro': '#21092f',
        'roxo-acinzentado': '#8e8593',
        'roxo-claro-acinzentado': '#dedddf'
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif']
      }
    },
  },
  plugins: [],
}

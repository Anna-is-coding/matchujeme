/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './**/*.{js,jsx,ts,tsx}', // Tento řádek prohledá všechny složky v projektu
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};

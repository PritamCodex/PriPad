// tailwind.config.js
import daisyui from 'daisyui';
const { default: daisyui } = require('daisyui');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
   daisyui: {
    themes: ["forest","coffee"],//any theme just name ans use EASY
   },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        deepCerulean: '#11578F',
        vividSkyBlue: '#20A8E0',
        greenApple: '#6EBC45',
        purpleHeart: '#5F2E84',
      },
      fontFamily: {
        poppins: ['Poppins-Regular', 'Poppins-Medium', 'Poppins-Bold'],
        prompt: ['Prompt-Regular', 'Prompt-Medium', 'Prompt-Bold'],
        'gotham-bold': ['Gotham-Bold'],
        'gotham-book': ['Gotham-Book'],
        'gotham-black': ['Gotham-Black'],
      },
    },
  },
  plugins: [],
};

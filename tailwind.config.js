/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        navy_blue: '#080852',
        yellow_orange: '#FEC107',
      },
      fontFamily: {
        poppins: ['Poppins-Regular', 'Poppins-Medium', 'Poppins-Bold'],
        prompt: ['Prompt-Regular', 'Prompt-Medium', 'Prompt-Bold'],
      },
    },
  },
  plugins: [],
};

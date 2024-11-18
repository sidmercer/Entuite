/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React files
  ],
  theme: {
    extend: {
      colors: {
        customPink: '#FE025E', // Add the custom color here
        bgdarkblue: '#0B0917'
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 12s linear infinite',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React files
  ],
  theme: {
    extend: {
      colors: {
        customPink: '#FE025E', // Add the custom color here
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Clarkson', 'sans-serif'],  // Set Clarkson as default sans-serif
      }
    },
  },
  plugins: [
    // require('daisyui'),
  ],
}
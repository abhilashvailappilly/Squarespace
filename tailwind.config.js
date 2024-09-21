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
      },
      boxShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [
    // require('daisyui'),
  ],
}
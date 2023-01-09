/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/assets/images/homeCarousel/3.jpg')",
        
      },
    },
  },
  plugins: [require("daisyui")],
}

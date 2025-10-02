/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#22C55E',
        secondary: '#065F46',
        accent: '#FACC15',
        background: '#F9FAFB',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'tax-primary': '#3B82F6',
          'tax-secondary': '#10B981',
          'tax-background': '#F3F4F6',
          'tax-text': '#1F2937'
        },
        fontFamily: {
          'sans': ['Inter', 'system-ui', 'sans-serif']
        }
      },
    },
    plugins: [],
  }
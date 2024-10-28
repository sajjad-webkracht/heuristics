/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        'red-hat': ['"Red Hat Display"', 'sans-serif'],
      },
      colors: {
        ann: {
          500: '#D8E430',
        },
      },
      
    },
  },
  safelist: [
    'custom-cursor-pointer',
  ],
  plugins: [],
}

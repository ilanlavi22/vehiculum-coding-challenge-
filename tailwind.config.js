/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');
module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        josefin: ['Josefin']
      },
      colors: {
        'primary': '#0066BA',
      },
      container: {
        padding: '2rem',
        center: true
      },
      gridTemplateColumns: {
        '250': 'repeat(auto-fill, minmax(270px, 1fr))',
      },
      fontSize: {
        xxs: '0.7rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1300px',
        xl: '1300px',
        '2xl': '1300px'
      }
    }
  },
  plugins: []
});


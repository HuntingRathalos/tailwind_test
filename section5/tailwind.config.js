const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './public/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'sky': colors.sky,
        fresh: {
          100: '#BBD3FB',
          200: '#9FBFF5',
          300: '#81A9EE',
          400: '#6A96E1',
          500: '#5985D0',
          600: '#3B69B7',
      }
    },
    fontFamily: {
      noto: ['Noto Sans JP']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
}

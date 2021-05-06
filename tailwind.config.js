const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange
      },
      minHeight: theme => theme('spacing'),
      minWidth: theme => theme('spacing'),
      screens: {
        'print': { 'raw': 'print' },
      }
    }
  },
  variants: {},
  plugins: [],
  corePlugins: {
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    ringOpacity: false,
    divideOpacity: false,
    placeholderOpacity: false,
  }
}

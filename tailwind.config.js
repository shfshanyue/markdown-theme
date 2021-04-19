module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: theme => theme('spacing'),
      minWidth: theme => theme('spacing'),
      screens: {
        'print': { 'raw': 'print' },
      }
    }
  },
  variants: {},
  plugins: [],
}

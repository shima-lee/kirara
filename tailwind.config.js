module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'regal-blue': '#FFEEDB'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    // ...
    require('@tailwindcss/forms')
  ]
}

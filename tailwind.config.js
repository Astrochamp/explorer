module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#000000',
      navy: {
        400: '#474DFF',
        500: '#222E46',
        600: '#182035',
        700: '#171E2D',
        800: '#161E2E',
        900: '#101725',
      },
      green: {
        100: '#474DFF',
        500: '#32C48D',
      },
      red: {
        500: '#E86161',
      },
      yellow: {
        500: '#FCC945',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

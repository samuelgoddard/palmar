module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      'sans': ['SuisseIntl', 'Arial', 'sans-serif'],
      'serif': ['RecklessNeue', 'Georgia', 'serif'],
      'mono': ['Lucida Console', 'Courier', 'monospace'],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px"
    },
    extend: {
      colors: {
        'black': '#212121',
        'white': '#FFF',
        'off-white': '#E7E7E7',
        'pink': '#CC997D',
        'green': '#93A38D',
        'blue': '#AEB4BD',
        'brown': '#533D30'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: []
}
module.exports = {
  content: ['./dist/**/*.html', './src/**/*.{js,jsx,ts,tsx}', './*.html'],
  plugins: [require('@tailwindcss/forms')],
  variants: {
    extend: {
      opacity: ['disabled']
    }
  },
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'sans-serif'],
        shoreline: ['shoreline', 'sans-serif']
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 85px 65px rgba(0, 0, 0, 0.15)'
        ],
        '5xl': '0px 0px 63px 26px rgba(16, 24, 40, 0.24)',
        '6xl': '-8px -8px 20px 0px rgba(0, 0, 0, 0.16);'
      },
      boxShadow: {
        '6xl': '-8px -8px 20px 0px rgba(0, 0, 0, 0.16);',
        '7xl':
          '0px 0px 0px 5.09091px #F4EBFF, 0px 1.27273px 2.54545px 0px rgba(16, 24, 40, 0.05);'
      },
      colors: {
        overlay: 'rgba(52, 64, 84, 0.7)',
        primary: '#7F56D9'
      }
    }
  }
}

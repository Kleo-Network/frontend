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
      screens: {
        mac: '1440px'
      },
      fontFamily: {
        inter: ['inter', 'sans-serif'],
        shoreline: ['shoreline', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'], // Adds Montserrat as the default sans-serif font
        roboto: ['Roboto', 'sans-serif'],
        nokora: ['Nokora', 'sans-serif']
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
        grayblue: {
          25: '#FCFCFD', // AA 6.07
          50: '#F8F9FC', // AA 5.91
          100: '#EAECF5', // AA 5.29
          200: '#D5D9EB', // AA 4.43
          300: '#B3B8DB', // AA 1.94
          400: '#717BBC', // AA 4.01
          500: '#4E5BA6', // AA 6.24
          600: '#3E4784', // AA 8.59
          700: '#363F72', // AAA 9.99
          800: '#293056', // AAA 12.72
          900: '#101323' // AAA 18.43
        },
        primary: {
          25: '#FCFAFF',
          50: '#F9F5FF',
          100: '#F4EBFF',
          200: '#E9D7FE',
          300: '#D6BBFB',
          400: '#B692F6',
          500: '#9E77ED',
          600: '#7F56D9',
          700: '#7F56D9',
          800: '#53389E',
          900: '#42307D'
        }
      }
    }
  }
}

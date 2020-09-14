module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  theme: {
    maxWidth: {
      '3/4': '75%'
    },
    extend: {
      fontFamily: {
        'lobster': ['Lobster'],
        'oswald': ['Oswald']
      },
      width: {
        '9': '90',
        '257': '257px',
        '317': '317px',
        '90vw': '90vw',
        '50vw': '50vw',
        '70vw': '70vw',
        '500': '500px',
        '390': '390px',
        '220': '220px'
      },
      colors: {
        'primary': '#2d3748',
        'bg-light': '#f2f2f2',
        'bg-dark': '#696969',
        'burnt-orange': 'rgba(183, 109, 12, 60%)',
        'linkedin-blue':'#4875B4',
        'twitter-blue': '#00ACED',
        'github-purple': '#320782'
      },
      height: {
        '1/2': '50vh',
        '76vh': '76vh',
        '700': '700px',
        '641': '641px',
      },
      opacity: {
        '90': '90%'
      },
      inset: {
        '-1/4': '-25vh',
        '-94': '-94%',
        '8%': '8%',
        '100': '100%',
        '10': '10px',
      },
      screens: {
        '2xl': '1500px'
      },
      keyframes: {
        'fade-in-left': {
          '0%': { transform: 'translate(-100%)', opacity: '0'},
          '100%': { transform: 'translate(0)', opacity: '1'}
        },
        'fade-in-right': {
          '0%': { transform: 'translate(100%)', opacity: '0'},
          '100%': { transform: 'translate(0)', opacity: '1'}
        },
        'fade-in': {
          '0%': { opacity: '0'},
          '100%': { opacity: '1'}
        }
      },
      animation: {
        'fade-in-left': 'fade-in-left .7s ease-in-out',
        'fade-in-right': 'fade-in-right .7s ease-in-out',
        'fade-in': 'fade-in 1s ease-in',
      }
    },
  },
  future: {
    removeDepreciatedGapUtilities: true,
  },
  variants: {
    height: ['responsive'],
    scrollSnapType: ['responsive'],
    display: ['responsive'],
    visibility: ['hover'],
    backgroundColor: ['hover', 'responsive'],
    translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    boxShadow: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [
    require('tailwindcss-scroll-snap')
  ],
}

// 'color-transition': {
//   '0%': { color: '#2d3748', backgroundColor: 'white'},
//   '100%': { color: 'white', backgroundColor}
// }
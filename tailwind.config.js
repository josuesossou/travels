/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate2d(-30deg, -30deg, -30deg)' },
          '50%': { transform: 'rotate2d(-30deg, 30deg, 30deg)' },
        },
        shimmer: {
          '0%': {
            backgroundPosition: 'left',
          },
          '100%': {
            backgroundPosition: 'right',
          },
        },
        shake: {
          '0%': {
            transform: 'translate3d(0, 0, 0)'
          },
          '10%': {
            transform: 'translate3d(-2px, 0, 0)'
          },
          '20%': {
            transform: 'translate3d(2px, 0, 0)'
          },
          '30%': {
            transform: 'translate3d(-2px, 0, 0)'
          },
          '40%': {
            transform: 'translate3d(2px, 0, 0)'
          },
          '50%': {
            transform: 'translate3d(-1px, 0, 0)'
          },
          '60%': {
            transform: 'translate3d(1px, 0, 0)'
          },
          '70%': {
            transform: 'translate3d(-1px, 0, 0)'
          },
          '80%': {
            transform: 'translate3d(1px, 0, 0)'
          },
          '90%': {
            transform: 'translate3d(-1px, 0, 0)'
          },
          '100%': {
            transform: 'translate3d(0, 0, 0)'
          }
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        shake: 'shake 1s ease-in-out infinite',
        shimmer: 'shimmer 1s linear infinite'
      },
      boxShadow: {
        '3xl': '0 -2px 30px 0px rgba(0, 0, 0, 0.3)',
        'mlc': `0px 0px 35px -6px var(--tw-gradient-1),
               0px 0px 55px -6px var(--tw-gradient-2)`
      }

    },
  },
  plugins: [],
}


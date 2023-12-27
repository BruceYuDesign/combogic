/** @type {import('tailwindcss').Config} */

const colors = require( 'tailwindcss/colors' )


export default {
  content: [
    './nuxt.config.{js,ts}',
    './src/**/*.{js,ts,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary:   colors.sky,
        secondary: colors.slate,
        danger:    colors.rose,
      }
    },
  },
  plugins: [],
}
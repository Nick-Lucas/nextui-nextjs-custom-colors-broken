import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],

  // Everything is fine here:
  theme: {
    extend: {},
  },

  // With this styles break
  // theme: {
  //   colors: {
  //     'my-gray': '#4A4A4A',
  //   },
  //   extend: {}
  // },

  darkMode: "class",
  plugins: [nextui()],
}

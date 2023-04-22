// const plugin = require('tailwindcss/plugin')
// const colors = require('tailwindcss/colors')
// console.log(colors)
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '320px',
      mdxs: '450px',
      sm: '560px',
      mdsm: '640px',
      md: '768px',
      tab: '858px',
      lap: '900px',
      lg: '1160px',
      mdlg: '1280px',
      xlg: '1367px',
    },
    extend: {
      width: {
        1600: '1600px',
        650: '650px',
        560: '560px',
        520: '520px',
        550: '550px',
        450: '450px',
        400: '400px',
        260: '260px',
        210: '210px',
      },
      height: {
        600: '600px',
        280: '280px',
        900: '900px',
        458: '458px',
      },
      borderColor: {
        bd500: '#3a3b3c',
        bl500: 'red',
      },
      colors: {
        light500: '#dcdcf85b',
        light400: '#D4D8E8',
        light300: '#e3e3e3e3',
        dark500: '#18191a',
        dark400: '#242526',
        dark300: '#3a3b3c',
        dark200: '#e4e6eb',
        dark100: '#b0b3b8',
        tpBlue500: '#0c4aad47',
        thdark500: 'rgb(222, 221, 221)',
        thlight500: 'rgb(192, 192, 192)',
      },
    },
  },
  variants: {
    // 'responsive',
    // 'group-hover',
    // 'focus-within',
    // 'first',
    // 'last',
    // 'odd',
    // 'even',
    // 'hover',
    // 'focus',
    // 'active',
    // 'visited',
    // 'disabled',
    // 'checked',
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [
    // plugin(function ({ addComponents, theme }) {
    //   const screens = theme('screens', {})
    //   addComponents([
    //     {
    //       '.container': { width: '100%' },
    //     },
    //     {
    //       [`@media (min-width: ${screens.sm})`]: {
    //         '.container': {
    //           'max-width': '640px',
    //         },
    //       },
    //     },
    //     {
    //       [`@media (min-width: ${screens.md})`]: {
    //         '.container': {
    //           'max-width': '768px',
    //         },
    //       },
    //     },
    //     {
    //       [`@media (min-width: ${screens.lg})`]: {
    //         '.container': {
    //           'max-width': '1024px',
    //         },
    //       },
    //     },
    //     {
    //       [`@media (min-width: ${screens.xl})`]: {
    //         '.container': {
    //           'max-width': '1280px',
    //         },
    //       },
    //     },
    //     {
    //       [`@media (min-width: ${screens['2xl']})`]: {
    //         '.container': {
    //           'max-width': '1280px',
    //         },
    //       },
    //     },
    //   ])
    // }),
  ],
}

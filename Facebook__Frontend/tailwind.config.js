/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        1600: '1600px',
        560: '560px',
        400: '400px',
        450: '450px',
        210: '210px',
        550: '550px',
        260: '260px',
        650: '650px',
      },
      height: {
        600: '600px',
        280: '280px',
        900: '900px',
        458: '458px',
      },
      backgroundColor: {
        primary: '#dcdcf85b',
        primaryWhite: '#D4D8E8',
        hover: '#e3e3e3e3',
        darkPrimary: '#18191a',
        darkSecondary: '#242526',
        darkComplementry: '#3a3b3c',
        darkLight: '	#e4e6eb',
        darkHover: '#b0b3b8',
      },
      borderColor: {
        borderDark: '#3a3b3c',
      },
      colors: {
        darkText: '#3a3b3c',
        text_heading_dark_white: 'rgb(222, 221, 221)',
        text_heading_dark_gray: 'rgb(192, 192, 192)',
      },
    },
  },
  plugins: [],
}

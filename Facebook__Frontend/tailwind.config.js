/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      xtra_small: '320px',
      mid_small: '560px',
      small: '640px',
      medium: '768px',
      tablet: '858px',
      laptop: '900px',
      larg: '1160px',
      xtra_larg: '1280px',
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
      backgroundColor: {
        primary: '#dcdcf85b',
        primaryWhite: '#D4D8E8',
        secondaryWhite: '#e3e3e3e3',
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
        heading_dark_white: 'rgb(222, 221, 221)',
        heading_dark_gray: 'rgb(192, 192, 192)',
      },
    },
  },
  plugins: [],
}

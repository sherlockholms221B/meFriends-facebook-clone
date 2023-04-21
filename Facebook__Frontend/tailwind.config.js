/** @type {import('tailwindcss').Config} */
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
        thdark500: 'rgb(222, 221, 221)',
        thlight500: 'rgb(192, 192, 192)',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    colors: {
      'White-main-heading-stats': 'hsl(0, 0%, 100%)',
      'Slightly-transparent-white-main-paragraph': 'hsla(0, 0%, 100%, 0.75)',
      'Slightly-transparent-white-stat-headings': 'hsla(0, 0%, 100%, 0.6)',
      'Very-dark-blue-main-background': 'hsl(233, 47%, 7%)',
      'Dark-desaturated-blue-card-background': 'hsl(244, 38%, 16%)',
      'Dark-violet': 'hsla(284, 70%, 20%, 1)',
      'Soft-violet-accent': 'hsl(277, 64%, 61%)'
    },
    
    fontFamily:{
      'title':'Inter',
      'mainthing':'Lexend Deca',
    },
    extend: {
      fontSize:
      {
        'main':'15px',
      },
      width:{
        'container':'22rem',
        'desktop':'30rem'
      },
    },
  },
  plugins: [],
}

module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './pages/details/**/*.html.js',
  ],
    theme: {
        extend: {
            colors: {
                primary: '#07849f',
                greyish: '#808080'
            }
        }
    },
  plugins: [        require('@tailwindcss/typography'),
  require('@tailwindcss/line-clamp')

],
}

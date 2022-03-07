module.exports = {
  content: ['./data-access/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        heading: ['"Helvetica Neue"', 'sans-serif'],
      },
      colors: {
        primary: '#222222',
        accent: '#00a0c4',
        success: '#42a548',
        error: '#f23b2f',

        'status-showroom': 'rgb(89, 141, 201)',
        'status-coming_soon': 'rgb(89, 141, 201)',
        'status-for_sale': 'rgb(83, 178, 0)',
        'status-reserved': 'rgb(245, 141, 35)',
        'status-booked': 'rgb(255, 96, 49)',
        'status-sold': 'rgb(209, 58, 68)',
        'status-not_for_sale': 'rgb(200, 200, 200)',
        'status-hidden': 'rgb(200, 200, 200)',
        'status-removed': 'rgb(200, 200, 200)',
      },
    },
  },
  plugins: [],
}

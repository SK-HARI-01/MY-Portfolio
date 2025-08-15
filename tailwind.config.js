/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./public/index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: '#2563eb', // Blue
        secondary: '#9333ea', // Purple
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.15)',
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'radial-fade': 'radial-gradient(1000px 600px at 80% -10%, rgba(147,51,234,0.18), transparent 60%), radial-gradient(800px 500px at 10% 10%, rgba(37,99,235,0.18), transparent 60%)'
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
        'float': 'float 6s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

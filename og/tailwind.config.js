/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0B0F19',
          neon: '#00FFB2',
          emerald: '#00C896',
          mist: '#9CA7BF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 20px 60px rgba(0, 255, 178, 0.2)',
        panel: '0 24px 80px rgba(0, 0, 0, 0.35)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delay': 'float 11s ease-in-out infinite',
        shimmer: 'shimmer 1.8s linear infinite',
        'pulse-soft': 'pulseSoft 3.2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.06)' },
        },
      },
    },
  },
  plugins: [],
};

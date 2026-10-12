/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        boc: {
          navy: {
            DEFAULT: '#071B3A',
            50: '#F0F4FA',
            100: '#D9E3F3',
            200: '#B0C5E6',
            300: '#7FA3D5',
            400: '#4E7EC2',
            500: '#2C5DA8',
            600: '#1B4282',
            700: '#112C5C',
            800: '#071B3A',
            900: '#041126',
            950: '#020A17',
          },
          gold: {
            DEFAULT: '#C9A227',
            light: '#F8F1DE',
            200: '#F0DEAA',
            300: '#E5C45A',
            400: '#DAB641',
            500: '#C9A227',
            600: '#B08C1E',
            700: '#8C6F16',
            800: '#685210',
            900: '#46360A',
          },
          lightBg: '#F5F7FA',
          darkText: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cinzel: ['Cinzel', '"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'gold-sm': '0 0 12px rgba(201, 162, 39, 0.25)',
        'gold-md': '0 4px 24px rgba(201, 162, 39, 0.35)',
        'gold-lg': '0 8px 36px rgba(201, 162, 39, 0.45)',
        'navy-deep': '0 20px 50px rgba(2, 10, 23, 0.75)',
      },
      animation: {
        'shimmer': 'shimmer 2.5s infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(201, 162, 39, 0.3))' },
          '50%': { opacity: '0.9', filter: 'drop-shadow(0 0 30px rgba(229, 196, 90, 0.6))' },
        }
      }
    },
  },
  plugins: [],
}

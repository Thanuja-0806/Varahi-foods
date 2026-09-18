/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          maroon: {
            50: '#FDF2F3',
            100: '#FCE4E6',
            200: '#F7CBD0',
            300: '#EEA2AA',
            400: '#E1707E',
            500: '#CF4356',
            600: '#B5283D',
            700: '#941C2E',
            800: '#671018',
            900: '#4A0A10',
            950: '#2D0509',
          },
          gold: {
            50: '#FFFDF5',
            100: '#FFF9E5',
            200: '#FFF0BF',
            300: '#FFE28A',
            400: '#F5C84C',
            500: '#E5A93C',
            600: '#D97706',
            700: '#B45309',
            800: '#8F3E07',
            900: '#74320A',
          },
          cream: {
            50: '#FFFDF9',
            100: '#FDFBF7',
            200: '#FAF7F2',
            300: '#F4ECE1',
            400: '#E8DBC9',
            500: '#D8C4AA',
          },
          charcoal: {
            700: '#443A34',
            800: '#362B24',
            900: '#261C14',
            950: '#1A120C',
          }
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 4px 20px -2px rgba(103, 16, 24, 0.08), 0 2px 6px -1px rgba(103, 16, 24, 0.04)',
        'warm-hover': '0 12px 30px -4px rgba(103, 16, 24, 0.15), 0 4px 12px -2px rgba(103, 16, 24, 0.08)',
        'gold-glow': '0 0 25px rgba(217, 119, 6, 0.25)',
      }
    },
  },
  plugins: [],
};

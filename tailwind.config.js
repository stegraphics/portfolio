/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'grid-flow': 'grid-flow 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'grid-flow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-50px)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}

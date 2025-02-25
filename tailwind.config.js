/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'neon-glow': {
          '0%': { boxShadow: '0 0 10px #FFB6C1, 0 0 20px #FFB6C1, 0 0 30px #FFB6C1' },
          '50%': { boxShadow: '0 0 20px #FFB6C1, 0 0 30px #FFB6C1, 0 0 40px #FFB6C1' },
          '100%': { boxShadow: '0 0 10px #FFB6C1, 0 0 20px #FFB6C1, 0 0 30px #FFB6C1' },
        },
        'neon-glow-purple': {
          '0%': { boxShadow: '0 0 10px #9370DB, 0 0 20px #9370DB, 0 0 30px #9370DB' },
          '50%': { boxShadow: '0 0 20px #9370DB, 0 0 30px #9370DB, 0 0 40px #9370DB' },
          '100%': { boxShadow: '0 0 10px #9370DB, 0 0 20px #9370DB, 0 0 30px #9370DB' },
        },
      },
      animation: {
        'neon-glow': 'neon-glow 2s infinite alternate',
        'neon-glow-purple': 'neon-glow-purple 2s infinite alternate',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}


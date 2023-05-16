/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'br-',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'dialog-overlay': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        'dialog-content': {
          from: {
            opacity: 0,
            transform: 'translate(-50%, -58%) scale(0.5)',
          },
          to: {
            opacity: 1,
            transform: 'translate(-50%, -60%) scale(1)',
          },
        },
      },
      animation: {
        'dialog-overlay': 'dialog-overlay 250ms cubic-bezier(0.16, 1, 0.3, 1)',
        'dialog-content': 'dialog-content 250ms cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
}

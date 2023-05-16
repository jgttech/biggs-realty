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
        'slide-up-and-fade': {
          from: {
            opacity: 0,
            transform: 'translateY(10px)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        'slide-right-and-fade': {
          from: {
            opacity: 0,
            transform: 'translateX(-10px)',
          },
          to: {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        'slide-down-and-fade': {
          from: {
            opacity: 0,
            transform: 'translateY(-10px)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        'slide-left-and-fade': {
          from: {
            opacity: 0,
            transform: 'translateX(10px)',
          },
          to: {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        'dialog-overlay': 'dialog-overlay 250ms cubic-bezier(0.16, 1, 0.3, 1)',
        'dialog-content': 'dialog-content 250ms cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up-and-fade': 'slide-up-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-right-and-fade': 'slide-right-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down-and-fade': 'slide-down-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-left-and-fade': 'slide-left-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
};

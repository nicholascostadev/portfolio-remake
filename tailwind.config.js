/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        contentShow: {
          from: { opacity: 0, transform: 'translate(-20px, 0)' },
          to: { opacity: 1, transform: 'translate(0, 0)' },
        },
        contentHide: {
          from: { opacity: 1, transform: 'translate(0, 0)' },
          to: { opacity: 0, transform: 'translate(-180px, 0)' },
        },
      },
      animation: {
        contentShow: 'contentShow 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentHide: 'contentHide 300ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}

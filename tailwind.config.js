/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // IMTA brand palette — light blue, calming
        canvas: '#F0F8FC',
        ink: '#1A3344',
        gold: '#5DAAD4',
        earth: '#5E7F94',
        surface: '#FFFFFF',
        highlight: '#E1F0F8',
        'imta-indigo': '#4A8FB8',
        'auth-lavender': '#E8F4FA',
        'auth-muted': '#F4FAFD',
      },
      boxShadow: {
        surface:
          '0 4px 24px -4px rgba(26, 51, 68, 0.06), 0 2px 8px -2px rgba(93, 170, 212, 0.1)',
        'surface-lg':
          '0 8px 32px -6px rgba(26, 51, 68, 0.08), 0 4px 12px -4px rgba(93, 170, 212, 0.12)',
      },
    },
  },
  plugins: [],
}

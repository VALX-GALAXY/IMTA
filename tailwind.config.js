/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // IMTA brand palette
        canvas: '#FAFAF7', // warm off-white background
        ink: '#1C1917', // deep warm black
        gold: '#C8A96E', // healing / awards / prestige accent
        earth: '#7C6D5A', // muted earth — secondary text
        surface: '#FFFFFF', // cards, elevated panels
        highlight: '#F0EBE3', // alternating sections, soft card fills
      },
      boxShadow: {
        surface:
          '0 4px 24px -4px rgba(28, 25, 23, 0.06), 0 2px 8px -2px rgba(124, 109, 90, 0.08)',
        'surface-lg':
          '0 8px 32px -6px rgba(28, 25, 23, 0.08), 0 4px 12px -4px rgba(124, 109, 90, 0.1)',
      },
    },
  },
  plugins: [],
}

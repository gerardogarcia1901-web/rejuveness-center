/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FCFAF8',
          pure: '#FFFFFF',
          warm: '#F8F3F0',
        },
        rose: {
          blush: '#F5E8E6',
          nude: '#EBD5D2',
          soft: '#D8B2AE',
          old: '#C28D8B',
          deep: '#9E6866',
          dark: '#341C21',
          espresso: '#241216',
        },
        gold: {
          light: '#F4ECE0',
          border: '#E5D5BC',
          metallic: '#C5A059',
          deep: '#9E7B36',
        },
        ink: {
          DEFAULT: '#2B1E21',
          muted: '#6D5A5E',
          subtle: '#9A868A',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        editorial: '0.26em',
        widecaps: '0.34em',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#e0121a',
          dark: '#111827',
          secondary: '#0f172a',
          accent: '#25d366',
          light: '#f8fafc',
        }
      }
    },
  },
  plugins: [],
};

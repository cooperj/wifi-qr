/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      // sans: ['como', 'ui-sans-serif', 'system-ui'],
      sans: ['como'],
      serif: ['servus-slab', 'ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular']
    },
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
      ultra: '3000px'
    },
  },
  plugins: [],
}


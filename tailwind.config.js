/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['servus-slab', 'ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular']
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
  theme: {
    extend: {
      // keep custom extensions minimal here; you can add keyframes/animation
      // definitions later if you need more advanced custom animations
    },
  },
  plugins: [
    // taos plugin (if you use the TAOS data attributes for scroll animations)
    require('taos'),
  ],
};

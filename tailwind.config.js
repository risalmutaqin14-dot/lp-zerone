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
      fontFamily: {
        // Mengganti font 'sans' Tailwind dengan Plus Jakarta Sans
        sans: ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('taos'),
  ],
};

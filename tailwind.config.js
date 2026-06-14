/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // DESIGN.md §2 — color tokens & roles
      colors: {
        primary: '#1C2C39', // headings, nav, footer, feature bands
        primaryAlt: '#25333E', // dark feature-band surfaces, navy cards
        accent: '#E0B384', // buttons, links, icons, CTAs
        accentBright: '#F5C18A', // hover/active states, glows
        pageBg: '#FFFFFF', // primary page background (dominant)
        neutralWarm: '#F7F4EF', // alternating section bands
        neutralLine: '#E8E2D9', // hairline borders, dividers
        textBody: '#3A4650', // body text on light (navy-tinted grey)
      },
      // DESIGN.md §3 — elegant serif headings, clean sans body
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

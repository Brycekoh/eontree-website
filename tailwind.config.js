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
        accentDeep: '#8A5A1E', // gold for small TEXT on white (4.5:1+); not for fills
        pageBg: '#FFFFFF', // primary page background (dominant)
        neutralWarm: '#F7F4EF', // alternating section bands
        neutralLine: '#E8E2D9', // hairline borders, dividers
        textBody: '#3A4650', // body text on light (navy-tinted grey)
        muted: '#9AA3AA', // unconfirmed/bracketed data and developer notes
      },
      // Newsreader holds up below 24px where Cormorant Garamond went thin.
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1240px',
      },
      keyframes: {
        cue: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.55' },
          '50%': { transform: 'translateY(6px)', opacity: '1' },
        },
      },
      animation: {
        cue: 'cue 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

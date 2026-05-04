/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy:    { DEFAULT: '#002349', dark: '#001428' },
        gold:    { DEFAULT: '#C4952A', bright: '#E8B84B' },
        cream:   { DEFAULT: '#F9F7F4' },
        taupe:   { DEFAULT: '#6B5D52' },
        charcoal:{ DEFAULT: '#1A1A1A' },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        serif:   ['"EB Garamond"', 'serif'],
        sans:    ['"Inter"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero':   ['clamp(2.5rem, 7vw, 5rem)', { lineHeight: '1.1' }],
        'display':['clamp(2rem, 5vw, 3.5rem)',  { lineHeight: '1.15' }],
      },
      spacing: {
        'nav': '64px',
        'bottom-nav': '72px',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
};

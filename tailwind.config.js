/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        paper: '#F4F2EC',
        stone: '#DAD4C6',
        concrete: '#8C897F',
        graphite: '#3A3934',
        charcoal: '#1B1A17',
        ink: '#0B0B0A',
        oxide: {
          DEFAULT: '#9C4A2E',
          light: '#B25C3C',
          dark: '#7A3A23',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        widest2: '0.24em',
      },
      maxWidth: {
        content: '1440px',
      },
      transitionTimingFunction: {
        precise: 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      keyframes: {
        'reveal-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scroll-hint': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.4' },
          '50%': { transform: 'translateY(8px)', opacity: '1' },
        },
      },
      animation: {
        'reveal-up': 'reveal-up 0.9s cubic-bezier(0.65,0,0.35,1) forwards',
        'fade-in': 'fade-in 0.6s ease forwards',
        'scroll-hint': 'scroll-hint 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

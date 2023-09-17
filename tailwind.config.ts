import { type Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'var(--font-inter)',
          'BlinkMacSystemFont',
          ...fontFamily.sans,
        ],
        stock: fontFamily.sans,
        mono: ['JetBrains Mono', ...fontFamily.mono],
        riffic: ['var(--font-riffic-free)', ...fontFamily.sans],
        default: ['var(--font-inter)', ...fontFamily.sans],
        display: ['var(--font-inter)', ...fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: '#7800D4',
          50: '#EDD6FF',
          100: '#E4C2FF',
          200: '#D399FF',
          300: '#C170FF',
          400: '#AF47FF',
          500: '#9E1FFF',
          600: '#8200E6',
          700: '#6200AD',
          800: '#420075',
          900: '#23003D',
          950: '#130021',
        },
      },
      boxShadow: {
        glow: '0 0 4px rgb(0 0 0 / 0.1)',
        'glow-2': '0 0 50px rgb(0 0 0 / 1)',
        small: '0px 0px 5px 0px rgba(0, 0, 0, 0.03)',
      },
      opacity: {
        1: '0.01',
        2.5: '0.025',
        7.5: '0.075',
        15: '0.15',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        // Tooltip
        'slide-up-fade': {
          '0%': { opacity: '0', transform: 'translateY(2px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-right-fade': {
          '0%': { opacity: '0', transform: 'translateX(-2px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-down-fade': {
          '0%': { opacity: '0', transform: 'translateY(-2px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-left-fade': {
          '0%': { opacity: '0', transform: 'translateX(2px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        // Navigation menu
        'enter-from-right': {
          '0%': { transform: 'translateX(200px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'enter-from-left': {
          '0%': { transform: 'translateX(-200px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'exit-to-right': {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(200px)', opacity: '0' },
        },
        'exit-to-left': {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-200px)', opacity: '0' },
        },
        'scale-in-content': {
          '0%': { transform: 'rotateX(-30deg) scale(0.9)', opacity: '0' },
          '100%': { transform: 'rotateX(0deg) scale(1)', opacity: '1' },
        },
        'scale-out-content': {
          '0%': { transform: 'rotateX(0deg) scale(1)', opacity: '1' },
          '100%': { transform: 'rotateX(-10deg) scale(0.95)', opacity: '0' },
        },
        // Custom wiggle animation
        wiggle: {
          '0%, 100%': {
            transform: 'translateX(0%)',
            transformOrigin: '50% 50%',
          },
          '15%': { transform: 'translateX(-4px) rotate(-4deg)' },
          '30%': { transform: 'translateX(6px) rotate(4deg)' },
          '45%': { transform: 'translateX(-6px) rotate(-2.4deg)' },
          '60%': { transform: 'translateX(2px) rotate(1.6deg)' },
          '75%': { transform: 'translateX(-1px) rotate(-0.8deg)' },
        },
        'slide-down-left-fade': {
          // should fade in from the top right corner
          '0%': {
            opacity: '0',
            transform: 'translate(2px, -2px) rotate(10deg)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(0, 0) rotate(0deg)',
          },
        },
        'slide-down-out-fade': {
          '0%': {
            opacity: '1',
            transform: 'translate(0, 0)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(-2px)',
          },
        },
        'change-object-location': {
          '0%': {
            'object-position': 'top',
          },
          '50%': {
            'object-position': 'bottom',
          },
          '100%': {
            'object-position': 'top',
          },
        },
        'change-object-to-top': {
          '0%': {},
          '100%': {
            'object-position': 'top',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        // Tooltip
        'slide-up-fade': 'slide-up-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-right-fade':
          'slide-right-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down-fade': 'slide-down-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-left-fade': 'slide-left-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        // Navigation menu
        'enter-from-right': 'enter-from-right 0.25s ease',
        'enter-from-left': 'enter-from-left 0.25s ease',
        'exit-to-right': 'exit-to-right 0.25s ease',
        'exit-to-left': 'exit-to-left 0.25s ease',
        'scale-in-content': 'scale-in-content 0.2s ease',
        'scale-out-content': 'scale-out-content 0.2s ease',
        'fade-in': 'fade-in 0.2s ease',
        'fade-out': 'fade-out 0.2s ease',
        // Custom wiggle animation
        wiggle: 'wiggle 0.75s infinite',
        'slide-down-left-fade': 'slide-down-left-fade 0.4s ease',
        'object-location': 'change-object-location 5s ease infinite',
        // hold object to top
        'object-to-top': 'change-object-to-top 0.4s ease',
      },
      screens: {
        xs: '320px',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@savvywombat/tailwindcss-grid-areas'),
    require('@tailwindcss/forms'),
  ],
} satisfies Config;

export default config;

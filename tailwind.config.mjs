/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        ibm: ['"IBM Plex Sans"', 'sans-serif'],
        sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        gold: {
          primary: '#C5A059',
          light: '#D4AF37',
          bright: '#E5C365',
          dark: '#997A15',
          pale: 'rgba(212, 175, 55, 0.1)',
          glow: 'rgba(212, 175, 55, 0.25)',
        },
        pink: {
          baby: '#F8C8DC',
          soft: '#FFB6C1',
          light: '#FFF0F5',
          blush: '#FDE8EF',
          pale: 'rgba(248, 200, 220, 0.25)',
          deep: '#E8A5C8',
        },
        bg: {
          obsidian: '#FFFFFF',
          surface: '#FFF8FA',
          card: '#FFFFFF',
          'card-hover': '#FFF5F8',
          glass: 'rgba(255, 255, 255, 0.85)',
        },
        text: {
          primary: '#1F1A24',
          secondary: '#5A4E5E',
          muted: '#8C7E91',
          gold: '#B8860B',
          pink: '#D87093',
        },
        border: {
          subtle: 'rgba(248, 200, 220, 0.4)',
          gold: 'rgba(212, 175, 55, 0.35)',
          pink: 'rgba(248, 200, 220, 0.7)',
          'gold-bright': 'rgba(197, 160, 89, 0.7)',
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F8C8DC 0%, #D4AF37 50%, #C5A059 100%)',
        'gold-gradient-soft': 'linear-gradient(135deg, rgba(248,200,220,0.3) 0%, rgba(212,175,55,0.15) 100%)',
        'pink-gradient': 'linear-gradient(135deg, #FFF0F5 0%, #F8C8DC 50%, #FFB6C1 100%)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-smooth': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [],
};

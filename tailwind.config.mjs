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
          primary: '#D4AF37',
          light: '#F4D068',
          bright: '#FFF2C2',
          dark: '#997A15',
          pale: 'rgba(212, 175, 55, 0.08)',
          glow: 'rgba(212, 175, 55, 0.22)',
        },
        bg: {
          obsidian: '#08090B',
          surface: '#0E1014',
          card: 'rgba(18, 20, 26, 0.75)',
          'card-hover': 'rgba(28, 31, 40, 0.85)',
          glass: 'rgba(255, 255, 255, 0.03)',
        },
        text: {
          primary: '#FAF8F5',
          secondary: '#A3A8B5',
          muted: '#6C7280',
          gold: '#E5C365',
        },
        border: {
          subtle: 'rgba(212, 175, 55, 0.12)',
          gold: 'rgba(212, 175, 55, 0.35)',
          'gold-bright': 'rgba(244, 208, 104, 0.7)',
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #A8821F 100%)',
        'gold-gradient-soft': 'linear-gradient(135deg, rgba(243,229,171,0.2) 0%, rgba(212,175,55,0.1) 100%)',
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

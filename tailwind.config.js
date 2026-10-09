/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#07090b',
          900: '#0b0e12',
          850: '#101419',
          800: '#151b22',
          750: '#1c242d',
          700: '#232d38',
          600: '#334155',
        },
        silver: {
          100: '#f8fafc',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
        },
        cyan: {
          accent: '#00c4d4',
          glow: 'rgba(0, 196, 212, 0.25)',
          bright: '#22d3ee',
          deep: '#0891b2',
          dark: '#0e7490',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'cyan-sm': '0 0 15px -3px rgba(0, 196, 212, 0.2)',
        'cyan-md': '0 0 25px -5px rgba(0, 196, 212, 0.3)',
        'cyan-lg': '0 0 40px -8px rgba(0, 196, 212, 0.4)',
        'card': '0 8px 30px rgba(0, 0, 0, 0.45)',
        'card-hover': '0 20px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 196, 212, 0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        'cyan-mesh': 'radial-gradient(circle at 50% 0%, rgba(0, 196, 212, 0.12), transparent 50%)',
      }
    },
  },
  plugins: [],
}

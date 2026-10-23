/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Divmora Brand Color Palette (from Logo)
        divmora: {
          50: '#F0F6FE',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB', // Primary Brand Cobalt Blue
          700: '#1D4ED8', // Deep Royal Blue
          800: '#1E40AF',
          900: '#1E3A8A', // Deep Logo Navy
          950: '#0F172A', // Slate/Navy Ink
        },
        slate: {
          850: '#131C2E',
          925: '#0B0F19',
        },
        accent: {
          cyan: '#0EA5E9',
          emerald: '#10B981',
          amber: '#F59E0B',
          purple: '#6366F1',
          rose: '#F43F5E',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'clean-sm': '0 1px 2px 0 rgba(15, 23, 42, 0.05)',
        'clean': '0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.05)',
        'clean-md': '0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.04)',
        'clean-lg': '0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.04)',
        // Tactile Shadows
        'tactile-sm': '2px 2px 0px 0px rgba(15, 23, 42, 0.9)',
        'tactile': '3px 3px 0px 0px rgba(15, 23, 42, 0.9)',
        'tactile-md': '5px 5px 0px 0px rgba(15, 23, 42, 0.9)',
        'tactile-blue': '3px 3px 0px 0px #1D4ED8',
        'glow-blue': '0 0 25px rgba(37, 99, 235, 0.25)',
      },
      backgroundImage: {
        'dot-grid': 'radial-gradient(#94A3B8 1px, transparent 1px)',
        'dot-grid-dark': 'radial-gradient(#334155 1px, transparent 1px)',
      },
      animation: {
        'radar': 'radar 4s linear infinite',
      },
      keyframes: {
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      }
    },
  },
  plugins: [],
}

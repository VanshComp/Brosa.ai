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
        brosa: {
          orange: '#F97316',
          deep: '#EA580C',
          darkOrange: '#C2410C',
          purple: '#320472',
          purpleDark: '#21024D',
          purpleLight: '#4C1D95',
          purpleGlow: '#6D28D9',
          purpleSoft: '#EDE9FE',
          light: '#FFF7ED',
          peach: '#FFEDD5',
          cream: '#FFFBF5',
          dark: '#090D16',
          cardDark: '#111827',
          surface: '#1E293B',
          accent: '#F59E0B',
          emerald: '#10B981',
        },
        primary: {
          DEFAULT: '#F97316',
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        },
        dark: {
          950: '#070A10',
          900: '#0B0F19',
          850: '#101623',
          800: '#141C2D',
          700: '#1F2937',
          600: '#374151',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float': 'float 3.5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'brosa-glow': '0 0 35px -5px rgba(249, 115, 22, 0.35)',
        'brosa-sm': '0 2px 10px rgba(249, 115, 22, 0.12)',
        'fintech': '0 20px 40px -15px rgba(0, 0, 0, 0.07)',
        'fintech-lg': '0 25px 60px -12px rgba(0, 0, 0, 0.12)',
        'fintech-dark': '0 20px 50px -10px rgba(0, 0, 0, 0.5)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.06)',
      },
      borderRadius: {
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
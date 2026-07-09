/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B1220',
        surface: '#141C2E',
        border: '#26334D',
        primary: '#2563EB',
        success: '#2CFF05',
        warning: '#FF8624',
        danger: '#FF272A',
        purple: '#FF57D2',
        yellow: '#FFDA29',
        text: '#F8FAFC',
        muted: '#94A3B8',
        cyan: '#00D7FF',
        'surface-2': '#1A2540',
        'border-2': '#334466',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(37,99,235,0.25)',
        'glow-success': '0 0 20px rgba(44,255,5,0.2)',
        'glow-danger': '0 0 20px rgba(255,39,42,0.25)',
        'glow-warning': '0 0 20px rgba(255,134,36,0.2)',
        card: '0 4px 24px rgba(0,0,0,0.4)',
        panel: '0 8px 40px rgba(0,0,0,0.6)',
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2326334D' fill-opacity='0.3'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
      },
      keyframes: {
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
        slideUp: { from: { opacity: 0, transform: 'translateY(16px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        slideInRight: { from: { opacity: 0, transform: 'translateX(16px)' }, to: { opacity: 1, transform: 'translateX(0)' } },
      },
      borderRadius: { xl: '12px', '2xl': '16px', '3xl': '20px' },
    },
  },
  plugins: [],
}

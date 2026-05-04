import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#15ADE2',
        'brand-orange': '#FF9B23',
        'brand-purple': '#8B5CF6',
        'brand-dark': '#0f172a',
        'brand-navy': '#1e293b',
        'brand-green': '#22c55e',
      },
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'slide-up': 'slideUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.7s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
        slideUp: {
          from: { transform: 'translateY(32px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss/plugin')(({ addComponents }: { addComponents: (components: Record<string, unknown>) => void }) => {
      addComponents({
        '.prose-policy': {
          '& h2': {
            fontSize: '1.25rem',
            fontFamily: 'Fredoka, sans-serif',
            fontWeight: '600',
            color: '#ffffff',
            marginTop: '2.5rem',
            marginBottom: '0.75rem',
          },
          '& h3': {
            fontSize: '1rem',
            fontWeight: '600',
            color: '#e2e8f0',
            marginTop: '1.5rem',
            marginBottom: '0.5rem',
          },
          '& p': {
            fontSize: '0.9375rem',
            color: '#94a3b8',
            lineHeight: '1.75',
            marginBottom: '1rem',
          },
          '& ul': {
            listStyleType: 'disc',
            paddingLeft: '1.5rem',
            marginBottom: '1rem',
          },
          '& li': {
            fontSize: '0.9375rem',
            color: '#94a3b8',
            lineHeight: '1.75',
            marginBottom: '0.25rem',
          },
          '& a': {
            color: '#15ADE2',
            textDecoration: 'underline',
          },
          '& strong': {
            color: '#e2e8f0',
            fontWeight: '600',
          },
          '& hr': {
            borderColor: 'rgba(255,255,255,0.05)',
            marginTop: '2rem',
            marginBottom: '2rem',
          },
        },
      })
    }),
  ],
}

export default config

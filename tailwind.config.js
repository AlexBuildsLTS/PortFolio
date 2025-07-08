/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Updated to use CSS variables for theme-awareness
        background: 'hsl(var(--color-background) / <alpha-value>)',
        text: 'hsl(var(--color-text) / <alpha-value>)',
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        accent: 'hsl(var(--color-accent) / <alpha-value>)',

        // You can retain specific, non-thematic colors if needed,
        // but the primary theme colors should rely on the CSS variables.
        'navy-primary': '#0a192f', // Example: might be used for specific dark elements
        'green': '#64ffda',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

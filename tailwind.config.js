/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
=======
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
>>>>>>> 9af85ae396b67f543fcb2d1e65b76ce51e39a42b
  theme: {
    extend: {
      colors: {
        navy: {
<<<<<<< HEAD
          primary: '#0a192f',
          light: '#112240',
          lightest: '#233554',
        },
        slate: {
          DEFAULT: '#8892b0',
          light: '#a8b2d1',
          lightest: '#ccd6f6',
        },
        green: '#64ffda',
        royal: '#2464C4',
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
=======
          primary: "#0a192f",
          light: "#112240",
          lightest: "#233554",
        },
        slate: {
          DEFAULT: "#8892b0",
          light: "#a8b2d1",
          lightest: "#ccd6f6",
        },
        white: "#ffffff",
        green: "#108a30",
      },
      backgroundColor: {
        light: {
          primary: "#ffffff",
          accent: "#e6f0ff",
        },
        dark: {
          primary: "#0a192f",
          accent: "#112240",
        },
      },
      textColor: {
        light: {
          primary: "#1e3a8a",
          accent: "#108a30",
        },
        dark: {
          primary: "#ccd6f6",
          accent: "#108a30",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
>>>>>>> 9af85ae396b67f543fcb2d1e65b76ce51e39a42b

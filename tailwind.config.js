/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
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

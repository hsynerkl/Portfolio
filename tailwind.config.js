/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      animation: {
        loading: "loading 1.5s ease-in-out",
        skills: "loading 1.5s",
      },
      keyframes: {
        loading: {
          "0%": { width: "0%" },
          "25%": { width: "0%" },
          "50%": { width: "50%" },
          "75%": { width: "75%" },
          "100%": { width: "100%" },
        },
        skills: {
          "0%": { width: "0%" },
          "25%": { width: "0%" },
          "50%": { width: "50%" },
          "75%": { width: "75%" },
          "100%": { width: "100%" },
        },
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    // ...
  ],
};

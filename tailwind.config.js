/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1440px",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Nunito", "sans-serif"],
        titleFont: ["Poppins", "sans-serif"],

      },
      colors: {
        primeColor: "#810CA8",
        textPrimeColor: "#810CA8",
        textBase: "#EEEEEE",
        lightText: "#6D6D6D",
        bgBase: "#EEEEEE",
        bgDark: "#1B2430",
        dark: "#201c1c"
      },
      boxShadow: {
        testShadow: "0px 0px 54px -13px rgba(0,0,0,0.7)",
      },
    },
  },
  darkMode: "class",
  plugins: [require("tailwind-scrollbar"), require("daisyui")], 
};

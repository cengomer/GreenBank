/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#2BB32A", 
          DEFAULT: "#424242",
          dark: "#EDEDED", 
        },
         secondary: "#80CB86",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        dimGreen : "linear-gradient(to right, #2BB32A, #FF5733)"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'primary-bg': "url('/src/assets/dora_wrap.png')", // Update with the actual path to your image
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

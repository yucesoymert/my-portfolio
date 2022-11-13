/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Raleway, sans-serif"],
    },
    extend: {
      colors: {
        "dark-blue": "#2c2c54",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DEDBC8",
        sunset: {
          50: "#FFF8E7",
          100: "#FFEDC4",
          200: "#FFD88A",
          300: "#FFBF50",
          400: "#FFA726",
          500: "#FF8F00",
          600: "#F57C00",
          700: "#E65100",
        },
        sky: {
          dark: "#2C3E50",
          storm: "#34495E",
          mist: "#5D6D7E",
        },
        earth: {
          grass: "#7CB342",
          soil: "#6D4C41",
          stone: "#546E7A",
        },
      },
      fontFamily: {
        serif: ['"Instrument Serif"', "serif"],
      },
      backgroundImage: {
        'gradient-sunset': 'linear-gradient(135deg, #2C3E50 0%, #34495E 50%, #5D6D7E 100%)',
        'gradient-warm': 'linear-gradient(to bottom, rgba(44, 62, 80, 0.95), rgba(52, 73, 94, 0.98))',
      },
    },
  },
  plugins: [],
};

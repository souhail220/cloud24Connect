// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2b39cf", // main brand color
          light: "#5c6eff",
          dark: "#020257",
        },
        secondary: {
          DEFAULT: "#ff9100",
          light: "#fa9c0e",
          dark: "#f97316",
        },
        background: "#d0e3f6ff",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 12px rgba(0, 0, 0, 0.1)",
      },
      borderRadius: {
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
};

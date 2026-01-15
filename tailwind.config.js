// tailwind.config.js
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2c25d5", // main brand color
          light: "#545dff",
          dark: "#020257",
        },
        secondary: {
          DEFAULT: "#f97316",
          light: "#fb8a3c",
          dark: "#ea670c",
        },
        background: "#d0e3f6ff",
        // Light mode specific colors
        'light-bg': '#f5f5f5',
        'light-card': '#ffffff',
        'light-text': '#213547',
        'light-text-secondary': '#64748b',
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

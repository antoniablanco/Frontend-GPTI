module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        falabella: {
          DEFAULT: "#3fae2a", // Color base (falabella)
          light: "#6ddb5e", // Versión clara (falabella-light)
          dark: "#2a7e1d", // Versión oscura (falabella-dark)
        },
      },
    },
  },
  plugins: [],
};

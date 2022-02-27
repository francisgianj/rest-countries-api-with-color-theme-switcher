module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        "dark-blue": "hsl(209, 23%, 22%)",
        "very-dark-blue1": "hsl(207, 26%, 17%)",
        "very-dark-blue2": "hsl(200, 15%, 8%)",
        "dark-gray": "hsl(0, 0%, 52%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

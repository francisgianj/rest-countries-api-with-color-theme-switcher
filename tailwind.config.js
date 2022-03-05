module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "nunito-sans": "Nunito Sans, sans-serif",
    },
    fontWeight: {
      light: 300,
      semibold: 600,
      extrabold: 800,
    },
    fontSize: {
      "homepage-items": ["14px", { lineHeight: 2, letterSpacing: "0.025em" }],
      "detail-page": ["16px", { lineHeight: 2, letterSpacing: "0.025em" }],
    },
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
    extend: {
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

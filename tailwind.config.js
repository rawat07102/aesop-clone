module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "rgb(182, 180, 159)",
        primaryDark: "#252525",
      },
      fontFamily: {
        SuisseRegular: ["Suisse Regular", "sans-serif"],
        SuisseMedium: ["Suisse Medium", "sans-serif"],
        ZapfHumanist: ["Zapf Humanist", "serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

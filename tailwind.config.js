module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Source Sans Pro", "sans-serif"],
    },
    extend: {
      screens: {
        tablet: "875px",
      },
      fontSize: {
        title: "calc(3rem + 5vw)",
      },
      colors: {
        light: "#FCF6F4",
        dark: "#000000",
        lightToDark: `linear-gradient(
          to right,
          #FCF6F4 50%,
          #000000 50%)`,
        darkToLight: `linear-gradient(
            to right,
            #000000 50%,
            #FCF6F4 50%`,
      },
      backgroundImage: {
        "innerBackground-md": `linear-gradient(
            to right,
            #FCF6F4 50%,
            #000000 50%)`,
        "outerBackground-md": `linear-gradient(
              to right,
              #000000 50%,
              #FCF6F4 50%)`,
        "innerBackground-sm": `linear-gradient(
                to bottom,
                #FCF6F4 50%,
                #000000 50%)`,
        "outerBackground-sm": `linear-gradient(
                  to bottom,
                  #000000 50%,
                  #FCF6F4 50%)`,
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        cadetblue: "#8bb3b3",
        darkgray: "#a1a1a1",
        blueviolet: "#773ee0",
        mediumslateblue: "#9e66ff",
        gainsboro: "#e8e8e8",
        dimgray: "#525252",
      },
      spacing: {},
      fontFamily: {
        actor: "Actor",
        poppins: "Poppins",
      },
      borderRadius: {
        "11xl": "30px",
      },
    },
    fontSize: {
      "7xl": "26px",
      "2xl": "21px",
      sm: "14px",
      xs: "12px",
      inherit: "inherit",
    },
    screens: {
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#202733",
        "secondary-blue": "#313A48",
        "primary-grey": "#CEE3E9",
        "lime-green": "#53FFAA",
        "secondary-grey": "#4F5D74",
      },
      keyframes: {
        rotate: {
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        rotate: "rotate 500ms ease",
      },
    },
  },
  plugins: [],
};

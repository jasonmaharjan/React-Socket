module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Droid Sans", "ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ['"Droid Sans"'],
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "400%": "400%",
      16: "4rem",
    },
    extend: {
      colors: {
        primaryDarker: "#662ebe",
        primaryDark: "#845EC2",
        primaryLight: "#B39CD0",
        secondaryDark: "#a69116",
        secondaryLight: "#EDD233",
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "spin-slower": "spin 14s linear infinite",
        "reverse-spin": "reverseSpin 12s linear infinite",
      },
      keyframes: {
        reverseSpin: {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
};

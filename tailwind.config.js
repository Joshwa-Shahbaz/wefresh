/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "mini-phones": "400px",
        "small-mobile": "450px",
        tap: "540px",
        check: "675px",
        b: "900px",
        xxl: "1600px",
      },
      colors: {
        blue: "#68BAE3",
        grey: "#868E95",
        "light-blue": "#E1F3F3",
      },
    },
  },
  plugins: [],
};

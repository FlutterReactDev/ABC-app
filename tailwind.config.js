/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        input: "#E2E2E2",
        foreground: "#021425",
        primary: {
          DEFAULT: "#1789F2",
        },
        error: {
          DEFAULT: "#F22417",
        },
        blue: {
          DEFAULT: "#172DF2",
        },
        green: {
          DEFAULT: "#0C9600",
        },
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwindcss-animate")],
};

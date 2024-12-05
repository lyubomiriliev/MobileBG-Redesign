import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        adventPro: ["Advent Pro", "serif"],
      },
      colors: {
        mobilePrimary: "#0099FF",
        mobilePrimaryDark: "#0083DB",
        mobileDarkGray: "#4A4A4A",
        mobileVIP: "#FF9807",
      },
    },
  },
  plugins: [],
} satisfies Config;

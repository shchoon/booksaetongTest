import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      base: ["14px", "20px"],
      lg: ["16px", "24px"],
      xl: ["36px", "36px"],
    },
    fontWeight: {
      normal: "400",
      semibold: "600",
      bold: "700",
    },
    extend: {
      fontFamily: {
        main: ["PretendardVariable", "sans-serif"],
        styled: ["NanumMyeongjo", "serif"],
      },
      colors: {
        navbar: "D9D9D9",
        brown: {
          1: "#fefae0",
          2: "eae0d5",
          3: "#c6ac8f",
          4: "#5e503f",
        },
      },
    },
  },
  plugins: [],
};
export default config;

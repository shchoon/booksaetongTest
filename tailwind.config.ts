import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["18px", "28px"],
      xl: ["20px", "28px"],
      "2xl": ["24px", "32px"],
      "3xl": ["30px", "36px"],
    },
    extend: {
      colors: {
        navbar: "#D9D9D9",
        brown: {
          1: "#fefae0",
          2: "eae0d5",
          3: "#c6ac8f",
          4: "#5e503f",
        },
        font: {
          textPrimary: "#292524",
          textSecondary: "#78716c",
        },
      },
    },
  },
  plugins: [],
};
export default config;

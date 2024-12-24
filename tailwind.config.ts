import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["PretendardVariable", "sans-serif"],
        styled: ["NanumMyeongjo", "serif"],
      },
      colors: {
        navbar: "#D9D9D9",
        brown: {
          1: "#fefae0",
          2: "eae0d5",
          3: "#c6ac8f",
          4: "#5e503f",
        },
      },
      height: {
        "minu-nav": "calc(100vh - 100px)",
      },
    },
  },
  plugins: [],
};
export default config;

// !!!!텍스크 크기는 아래 텍스트 사용하되 변경 및 추가 시 협의!!!!
// - fontSize: sm, base, 3xl,
// - fontWeight: nomal semi-bold, bold,

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "navbar": "D9D9D9",
        brown: {
          1: '#fefae0',
          2: 'eae0d5',
          3: '#c6ac8f',
          4: '#5e503f'
        }
      },
    },
  },
  plugins: [],
};
export default config;

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
        "color-1": "#0B0D17",
        "color-2": "#D0D6F9",
        "color-3": "#FFFFFF",
      },
      fontFamily: {
        BarlowCondensed: ["BarlowCondensed-Regular", "sans-serif"],
        Bellefair: ["Bellefair-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

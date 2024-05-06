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
        Barlow: ["Barlow", "sans-serif"],
        BarlowCondensed: ["BarlowCondensed", "sans-serif"],
        Bellefair: ["Bellefair", "sans-serif"],
      },
      backgroundImage: {
        "home-mobile": "url('/assets/home/background-home-mobile.jpg')",
        "home-tablet": "url('/assets/home/background-home-tablet.jpg')",
        "home-desktop": "url('/assets/home/background-home-desktop.jpg')",
        "destination-mobile":
          "url('/assets/destination/background-destination-mobile.jpg')",
      },
      boxShadow: {
        "explore-button": "0px 0px 0px 30px rgb(255 255 255 / 10%)",
      },
      screens: {
        "3xl": "2000px",
      },
    },
  },
  plugins: [],
};
export default config;

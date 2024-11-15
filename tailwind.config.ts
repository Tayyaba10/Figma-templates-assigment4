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
        mypink: "#F98585",
        myblack: "#21243D",
        recentbackground:"#F4E2E2",
        footerbackground:"#FAF5F5",
        heroellipse:"#dfd8d8",
        background: "#CFA6A61C",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;

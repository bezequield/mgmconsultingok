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
        "mgm-yellow": "#ffc700",
        "mgm-navy": "#0d1b4a",
        "mgm-navy-dark": "#040c1e",
        "mgm-navy-l": "#162255",
        "mgm-navy-hover": "#1a2a65",
      },
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        grotesk: ["Space Grotesk", "sans-serif"],
      },
      animation: {
        "float-slow": "float 18s ease-in-out infinite",
        "float-medium": "float 14s ease-in-out infinite reverse",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "blink": "blink 1s step-end infinite",
        "shine": "shine 5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "33%": { transform: "translateY(-30px) scale(1.05)" },
          "66%": { transform: "translateY(15px) scale(0.95)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        shine: {
          "0%": { transform: "translateX(-100%) rotate(25deg)", opacity: "0" },
          "20%": { opacity: "0.15" },
          "60%": { opacity: "0.15" },
          "100%": { transform: "translateX(200%) rotate(25deg)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

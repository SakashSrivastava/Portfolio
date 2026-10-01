import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-archivo)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        paper: {
          DEFAULT: "#f4f1ea",
          soft: "#eceadf",
          dark: "#e4e0d3",
        },
        ink: {
          DEFAULT: "#17150f",
          soft: "#2b281f",
          muted: "#6c665a",
          faint: "#9a9484",
        },
        flame: {
          DEFAULT: "#ff5324",
          deep: "#e03c0f",
          soft: "#ffe3d8",
        },
      },
      boxShadow: {
        hard: "4px 4px 0 0 #17150f",
        "hard-sm": "3px 3px 0 0 #17150f",
        "hard-flame": "4px 4px 0 0 #ff5324",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        marquee: "marquee 90s linear infinite",
        spinSlow: "spinSlow 22s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

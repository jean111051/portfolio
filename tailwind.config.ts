import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          DEFAULT: "#142946",
          2: "#42536b",
          3: "#7d8a9a",
        },
        paper: {
          DEFAULT: "#f7f9fc",
          2: "#eef3f8",
          3: "#d8e2ee",
        },
        forest: {
          DEFAULT: "#142946",
          light: "#294d78",
        },
        gold: {
          DEFAULT: "#e85d1c",
          light: "#f5822a",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#42536b",
            h2: { color: "#142946", fontFamily: "var(--font-playfair)" },
            h3: { color: "#142946", fontFamily: "var(--font-playfair)" },
            code: {
              backgroundColor: "#eef3f8",
              padding: "0.1rem 0.4rem",
              borderRadius: "0",
              fontWeight: "400",
            },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            a: { color: "#e85d1c" },
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;

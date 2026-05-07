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
          DEFAULT: "#18201f",
          2: "#485452",
          3: "#7b8783",
        },
        paper: {
          DEFAULT: "#fbf7ef",
          2: "#efe9dc",
          3: "#ded5c5",
        },
        forest: {
          DEFAULT: "#123f43",
          light: "#1d7776",
        },
        gold: {
          DEFAULT: "#d95f45",
          light: "#f5a65b",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#4a4744",
            h2: { color: "#0f0e0d", fontFamily: "var(--font-playfair)" },
            h3: { color: "#0f0e0d", fontFamily: "var(--font-playfair)" },
            code: {
              backgroundColor: "#f2efe9",
              padding: "0.1rem 0.4rem",
              borderRadius: "0",
              fontWeight: "400",
            },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            a: { color: "#2d6a4a" },
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;

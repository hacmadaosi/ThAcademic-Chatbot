import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "class-liquid":
          "inset_1px_1px_2px_0_rgba(255,255,255,0.3),inset_-1px_-1px_2px_0_rgba(255,255,255,0.1),inset_0_0_10px_0_rgba(255,255,255,0.3)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;

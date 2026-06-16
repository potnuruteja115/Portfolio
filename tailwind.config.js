/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0E14",
        paper: "#F5F3EE",
        surface: "#1A1F2B",
        "surface-light": "#FFFFFF",
        signal: "#5EE6C5",
        coral: "#FF8A5B",
        slate: "#A8B3C5",
        "slate-light": "#5B6472",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "draw-line": "draw 2.4s ease-out forwards",
        "fade-up": "fadeUp 0.7s ease-out forwards",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        draw: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

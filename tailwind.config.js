/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["var(--font-syne)"],
        spaceMono: ["var(--font-space-mono)"],
      },
      colors: {
        primary: "#3D248D",
        cardDescription: "#B2BEFF",
      },
    },
  },
  plugins: [],
};

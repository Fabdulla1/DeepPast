/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./docs/**/*.{md,mdx}",
    "./challenge/**/*.{md,mdx}",
    "./blog/**/*.{md,mdx}",
    "./docusaurus.config.js",
    "./node_modules/@docusaurus/theme-classic/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef8ff",
          100: "#d9efff",
          200: "#bce4ff",
          300: "#8ed4ff",
          400: "#59baff",
          500: "#2f9cff",
          600: "#1a7de0",
          700: "#1764b5",
          800: "#18558f",
          900: "#194876",
        },
      },
    },
  },
  plugins: [],
};

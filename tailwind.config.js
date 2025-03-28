/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        IconColor: "#264653",
        HoverShade: "#8AC7A4",
        Primary: "#2A9D8F",
      },
    },
  },
  plugins: [],
};

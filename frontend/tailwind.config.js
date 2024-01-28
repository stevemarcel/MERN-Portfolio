/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#213067",
        pry: {
          light: {
            50: "#f5f5f8",
            100: "#d9d9e4",
            200: "#b4b4ca",
            300: "#9090b1",
            400: "#6c6e98",
            500: "#484e7f",
          },
          dark: {
            100: "#1e2956",
            200: "#1b2245",
            300: "#181b34",
            400: "#131525",
            500: "#0c0c16",
          },
        },
      },
    },
  },
  plugins: [],
};

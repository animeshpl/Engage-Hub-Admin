/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        pine: {
          navy: "#071827",
          navy2: "#0d2538",
          green: "#079455",
          mint: "#E8F8EF",
        },
      },
      boxShadow: {
        card: "0 10px 28px rgba(16, 24, 40, 0.035)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

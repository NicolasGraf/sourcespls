module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)",
        "primary-light": "var(--primary-light)",
        "secondary-light": "var(--secondary-light)",
        "primary-dark": "var(--primary-dark)",
        "secondary-dark": "var(--secondary-dark)",
        "border-dark": "var(--border-dark)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00CDBC",
        "primary-dark": "#028e8e",
      },
      backgroundImage: {
        "gradient-teal": "linear-gradient(120deg, #00CDBC 0%, #028e8e 100%)",
        "gradient-teal-reverse": "linear-gradient(120deg, #028e8e 0%, #00CDBC 100%)",
      },
    },
  },
  plugins: [],
};

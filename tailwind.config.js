/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
      primary: "#050816", // You can keep this dark background
      secondary: "#aaa6c3", // Dark orange
      tertiary: "#151030",  // A deeper dark orange for accents
      "black-100": "#100d25", // Darker brownish-black with a hint of orange
      "black-200": "#331A0D", // Even darker shade to blend with dark orange
      "white-100": "#f7eded", // You can keep this white or slightly warm it up
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobgm.jpg')",
      },
    },
  },
  plugins: [],
};

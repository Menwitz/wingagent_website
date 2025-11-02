/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/app/_components/**/*.{js,jsx}",
    "./src/app/_sections/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brandStart: "#f000b8", // fuchsia
        brandEnd: "#4f46e5"    // indigo-600
      },
      boxShadow: {
        glow: "0 0 30px rgba(240,0,184,0.25), 0 0 40px rgba(79,70,229,0.25)"
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(90deg, #f000b8 0%, #4f46e5 100%)",
        "radial-fade": "radial-gradient(1000px 600px at 50% -10%, rgba(240,0,184,0.18), transparent 60%)"
      }
    }
  },
  darkMode: "class",
  plugins: []
};
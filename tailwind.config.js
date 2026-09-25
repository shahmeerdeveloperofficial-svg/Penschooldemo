/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        berlin: ["Berlin", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "pen-gold": "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
        "pen-red": "linear-gradient(135deg, #9B1B1E 0%, #751214 100%)",
        "pen-blue": "linear-gradient(135deg, #0284C7 0%, #0369A1 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      colors: {
        main: "#9B1B1E",       // Signature Crimson Maroon from Pen Schools logo
        mainD: "#781215",      // Darker Crimson Maroon
        sec: "#0B2240",        // Deep Navy
        secD: "#0284C7",       // Sky Blue from logo globe stripes
        gold: "#F59E0B",       // Pen Nib Gold
        goldD: "#D97706",
        sky: "#0284C7",
        light: "#ffffff",
        dark: "#0B2240",
        gray: "#797979",
        grayL: "#e4e4e4",
        grayD: "#555555",
      },
    },
  },
  plugins: [],
};

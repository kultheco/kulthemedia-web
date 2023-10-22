/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 10s linear infinite",
        "marquee-speed-2": "marquee 20s linear infinite",
        "marquee-speed-3": "marquee 30s linear infinite",
        "marquee-speed-4": "marquee 40s linear infinite",
        "marquee-speed-5": "marquee 50s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};

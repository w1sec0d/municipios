/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ['"Raleway"',"sans-serif"],
        RalewayBold: ['"Raleway-bold"',"sans-serif"],
      },
    },
  },
  plugins: [],
}


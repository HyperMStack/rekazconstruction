/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      scrollbar: {
        hide: "scrollbar-hide",
        thin: "scrollbar-thin",
        auto: "scrollbar-auto",
      },
    },
  },
  plugins: [],
};

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
      aspectRatio: {
        "1/1": "1 / 1",
        "3/4": "3 / 4",
        "4/5": "4 / 5",
        "2/3": "2 / 3",
        "16/9": "16 / 9",
        "9/16": "9 / 16",
      },
    },
  },
  plugins: [],
};

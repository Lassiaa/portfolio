/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#87775a",
        secondary: "#baa98c",
        dark: "#141414",
        action: "#57dbef",
      },
      fontFamily: {
        abril: ["Abril Fatface"],
        inter: ["Inter"],
        noto: ["Noto Sans"],
        playfair: ["Playfair"],
        josefin: ["Josefin Sans"],
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
      screens: {
        xs: "420px",
        sm: "780px",
        semi: "840px",
        md: "1024px",
      },
      width: {
        128: "32rem",
      },
      height: {
        128: "32rem",
      },
    },
    scale: {
      150: "1.5",
      175: "1.75",
    },
  },
  plugins: [],
};

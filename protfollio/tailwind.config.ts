import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        expand: {
          "0%": { width: "100px", height: "100px" },
          "100%": { width: "200vw", height: "200vh" },
        },
        expandToT: {
          "0%": {
            width: "6rem",
            height: "6rem",
            // borderRadius: " // 초기에는 원형
            clipPath: "inset(0 0 0 0)", // 전체 사각형
          },
          // "50%": {
          //   width: "100vw",
          //   height: "100vh",
          //   clipPath: "polygon(40% 0, 60% 0, 60% 100%, 40% 100%)",
          // },

          "100%": {
            width: "100vw",
            height: "100vh",
            // borderRadius: "0%", // T 모양으로 변형
            clipPath:
              "polygon(100% 0, 100% 20%, 60% 20%, 60% 100%, 40% 100%, 40% 20%, 0 20%, 0 0)", // T 모양
          },
        },
      },
      animation: {
        expand: "expand 3s ease-in-out forwards",
        expandToT: "expandToT 5s ease-in-out forwards",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

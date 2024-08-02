import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'glow': '0 0 10px 2px rgba(255, 255, 255, 0.7)',
        'left-right-glow': '30px 0 20px rgba(0, 255, 255, 0.1), -30px 0 20px rgba(0, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
};
export default config;

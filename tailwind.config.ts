import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
        '20': 'repeat(20, minmax(0, 1fr))',
        '30': 'repeat(30, minmax(0, 1fr))',
        '40': 'repeat(40, minmax(0, 1fr))',
        '50': 'repeat(50, minmax(0, 1fr))',
        '70': 'repeat(70, minmax(0, 1fr))',
        '90': 'repeat(90, minmax(0, 1fr))',
        '100': 'repeat(100, minmax(0, 1fr))',
        '150': 'repeat(150, minmax(0, 1fr))',
        '200': 'repeat(200, minmax(0, 1fr))',
        '250': 'repeat(250, minmax(0, 1fr))',
        '400': 'repeat(400, minmax(0, 1fr))',
      },

    },
  },
  plugins: [],
};
export default config;

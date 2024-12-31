import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './client/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f1c001',
        darkTitle: '#1f2937',
        darkDescription: '#4b5563',
        'gray-dark': '#c5c5c2',
        'gray-green': '#c4c5c0',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      animation: {
        fader: 'background-image 1s ease-in-out',
      },
      maxWidth: {
        '8xl': '90rem',
        '9xl': '110rem',
      },
      screens: {
        xs: '320px',
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: ".5rem",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'green': {
          '50': '#eeffee',
          '100': '#d7ffda',
          '200': '#b2ffb6',
          '300': '#77fe7f',
          '400': '#35f341',
          'primary': '#0bdc19',
          'secondary': '#02b70e',
          '700': '#068f10',
          '800': '#0b7013',
          '900': '#0b5c13',
          '950': '#003405',
        },

      },
    },
  },
  plugins: [],
} satisfies Config;

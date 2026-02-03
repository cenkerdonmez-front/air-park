import type { Config } from "tailwindcss";

export default {
  darkMode: ["class", "system"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#015C54',
        'brand-gold': '#b8734f',
        'background-cream': '#FCF9F3',
        'text-dark': '#1a1a1a',
      },
      fontFamily: {
        sans: ['Inter', 'var(--font-geist-sans)', 'sans-serif'],
        body: ['Inter', 'var(--font-geist-sans)', 'sans-serif'],
        display: ['Inter', 'var(--font-geist-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;

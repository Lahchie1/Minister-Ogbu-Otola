/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "canvas-stone": "#F8F6F1",
        "surface-card": "#FFFFFF",
        "surface-subtle": "#F0EDE6",
        "border-light": "#E2DDD4",
        "ink-charcoal": "#1A365D",
        "ink-body": "#1A202C",
        "ink-muted": "#4A5568",
        "accent-gold": "#D4A017",
        "accent-gold-dark": "#8B6512",
        "status-success": "#2F855A",
        "status-error": "#C53030",
        primary: {
          DEFAULT: "#1A365D",
          dark: "#0F2340",
          container: "#1E3D6E",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        cinzel: ["var(--font-cinzel)", "Cinzel", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      spacing: {
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2.5rem",
        "space-xxl": "4rem",
      },
    },
  },
  plugins: [],
};


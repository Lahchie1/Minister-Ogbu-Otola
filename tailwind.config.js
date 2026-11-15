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
        "canvas-stone": "#FAF9F6",
        "surface-card": "#FFFFFF",
        "surface-subtle": "#F1EFEA",
        "border-light": "#E4E2DC",
        "ink-charcoal": "#1A2332",
        "ink-body": "#1E232A",
        "ink-muted": "#555E6D",
        "accent-gold": "#C59B27",
        "accent-gold-dark": "#9A7516",
        "status-success": "#1E6B42",
        "status-error": "#9B2C2C",
        primary: {
          DEFAULT: "#1A2332",
          dark: "#0C1219",
          container: "#24303D",
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


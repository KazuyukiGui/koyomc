import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB",
          light: "#E3EEFF",
          dark: "#1E40AF",
        },
        secondary: {
          DEFAULT: "#38BDF8",
          light: "#E0F6FF",
          dark: "#0284C7",
        },
        accent: "#F59E0B",
        text: "#0F172A",
        subtext: "#475569",
        border: "#D0DAF7",
        background: "#F4F8FF",
        surface: "#FFFFFF",
        muted: "#EEF3FF",
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-jp)", "system-ui", "sans-serif"],
        display: [
          "var(--font-shippori-mincho)",
          "var(--font-noto-sans-jp)",
          "serif",
        ],
      },
      borderRadius: {
        md: "12px",
        lg: "20px",
        xl: "32px",
        full: "9999px",
      },
      boxShadow: {
        card: "0 28px 60px -30px rgba(37, 99, 235, 0.45)",
        soft: "0 18px 45px -35px rgba(15, 23, 42, 0.45)",
      },
      backgroundImage: {
        "wave-blue": "linear-gradient(135deg, rgba(227, 238, 255, 0.85) 0%, rgba(224, 246, 255, 0.95) 100%)",
        "wave-white": "linear-gradient(180deg, #FFFFFF 0%, #F5F8FF 100%)",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;

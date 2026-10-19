import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0C0D0E",
        surface: "#141619",
        "surface-light": "#1C1F24",
        "surface-border": "rgba(255, 255, 255, 0.08)",
        orange: {
          50: "#FFF7ED",
          100: "#FFEDD5",
          200: "#FED7AA",
          300: "#FDBA74",
          400: "#FB923C",
          500: "#F97316",
          DEFAULT: "#FF5E14",
          hover: "#FF7533",
          light: "#FF8547",
          dark: "#E04800",
          glow: "rgba(255, 94, 20, 0.35)",
        },
        amber: {
          DEFAULT: "#FFAA00",
          light: "#FFC247",
        },
        slate: {
          850: "#171A1F",
          900: "#111317",
          950: "#0C0D0E",
        },
        ivory: "#F8FAFC",
        muted: "#94A3B8",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Outfit", "Plus Jakarta Sans", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-.03em",
        tighter: "-.02em",
        wide: ".05em",
        wider: ".1em",
        widest: ".2em",
      },
      boxShadow: {
        "orange-glow": "0 0 35px -5px rgba(255, 94, 20, 0.4)",
        "orange-card": "0 10px 30px -10px rgba(255, 94, 20, 0.15)",
        "fun-hover": "0 20px 40px -15px rgba(255, 94, 20, 0.25)",
      },
      backgroundImage: {
        "radial-orange": "radial-gradient(circle at 50% 0%, rgba(255, 94, 20, 0.2) 0%, transparent 65%)",
        "radial-glow": "radial-gradient(ellipse at center, rgba(255, 94, 20, 0.18) 0%, transparent 70%)",
        "gradient-orange": "linear-gradient(135deg, #FF5E14 0%, #FF8547 50%, #FFAA00 100%)",
      },
    },
  },
  plugins: [],
};
export default config;

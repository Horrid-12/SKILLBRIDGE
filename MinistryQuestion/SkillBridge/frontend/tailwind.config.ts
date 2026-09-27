import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        slate: {
          850: "#0f172a",
          900: "#0b1120",
          950: "#060913",
        },
        /* Design-token colors — mapped to CSS vars (theme-aware) */
        ink: "var(--sb-ink)",
        "ink-muted": "var(--sb-ink-muted)",
        "ink-faint": "var(--sb-ink-faint)",
        canvas: "var(--sb-canvas)",
        surface: "var(--sb-surface)",
        raised: "var(--sb-surface-raised)",
        line: "var(--sb-hairline)",
        brand: {
          50: "#e4eaf6",
          100: "#c7d9f0",
          200: "#a3c1e4",
          300: "#7fa8d4",
          400: "#5a84bf",
          500: "#2a4b8d",
          600: "#234072",
          700: "#1f3a6e",
          800: "#1a3159",
          900: "#152844",
          950: "#0f1d2e",
        },
        cta: {
          DEFAULT: "var(--sb-cta)",
          hover: "var(--sb-cta-hover)",
          600: "#0d5d56",
          700: "#0a4a44",
        },
        positive: {
          DEFAULT: "var(--sb-positive)",
          tint: "var(--sb-positive-tint)",
        },
        warning: {
          DEFAULT: "var(--sb-warning)",
          tint: "var(--sb-warning-tint)",
        },
        critical: {
          DEFAULT: "var(--sb-critical)",
          tint: "var(--sb-critical-tint)",
        },
        info: {
          DEFAULT: "var(--sb-info)",
          tint: "var(--sb-info-tint)",
        },
        /* legacy accent families revalued to new palette (Phase 4: delete) */
        cyber: {
          cyan: "#06b6d4",
          emerald: "#15803d",
          violet: "#4338ca",
          amber: "#b45309",
          rose: "#b91c1c",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-mesh":
          "radial-gradient(at 100% 0%, rgba(42,75,141,0.15) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(6,182,212,0.12) 0px, transparent 50%)",
        "card-glow":
          "radial-gradient(circle at 50% 0%, rgba(42,75,141,0.08), transparent 70%)",
        "fit-glow":
          "radial-gradient(circle at 20% 0%, rgba(6,182,212,0.12), transparent 55%), radial-gradient(circle at 85% 100%, rgba(42,75,141,0.10), transparent 50%)",
        "fit-gradient": "linear-gradient(135deg, #0f766e 0%, #2a4b8d 100%)",
        "fit-soft": "linear-gradient(135deg, rgba(6,182,212,0.08), rgba(42,75,141,0.08))",
      },
      animation: {
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
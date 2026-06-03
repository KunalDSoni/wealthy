import type { Config } from "tailwindcss";

/**
 * Plan Happy Wealth — Design System
 * ----------------------------------
 * A premium wealth-advisory system. Deep navy canvas, midnight depth,
 * gold signal, soft-cloud light. Every value below is a token; nothing
 * brand-level should be hard-coded inside a component.
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/content/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Canvas + elevated surfaces
        navy: {
          DEFAULT: "#07111F",
          950: "#05080F",
          900: "#07111F",
          800: "#0E1B2E",
          700: "#13243B",
          600: "#1B3149",
          500: "#2A466A",
        },
        midnight: "#0E1B2E",
        // Gold — the wealth signal. Used sparingly, with intent.
        gold: {
          DEFAULT: "#D4AF37",
          50: "#FBF6E6",
          100: "#F4E6B8",
          200: "#E8CE7F",
          300: "#DDBB57",
          400: "#D4AF37",
          500: "#B8932A",
          600: "#967421",
        },
        // Cloud — the light-on-dark text ramp
        cloud: {
          DEFAULT: "#F8F9FB",
          muted: "#C7CEDB",
          dim: "#8B97AC",
          faint: "#5A6478",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Fluid editorial scale — clamps for true responsive typography
        "display-2xl": ["clamp(3rem, 7vw, 6.5rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-xl": ["clamp(2.5rem, 5.5vw, 4.5rem)", { lineHeight: "1.0", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.6rem, 3vw, 2.25rem)", { lineHeight: "1.12", letterSpacing: "-0.015em" }],
      },
      letterSpacing: {
        tightest: "-0.04em",
        kicker: "0.24em",
      },
      maxWidth: {
        container: "80rem",
        prose: "42rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      boxShadow: {
        glass: "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 24px 64px -24px rgba(0,0,0,0.7)",
        "glass-lg": "0 1px 0 0 rgba(255,255,255,0.08) inset, 0 40px 120px -32px rgba(0,0,0,0.85)",
        gold: "0 0 0 1px rgba(212,175,55,0.35), 0 16px 48px -12px rgba(212,175,55,0.35)",
        "gold-soft": "0 12px 40px -16px rgba(212,175,55,0.45)",
        elevate: "0 30px 80px -24px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        "radial-gold": "radial-gradient(circle at 50% 0%, rgba(212,175,55,0.16), transparent 60%)",
        "radial-aurora": "radial-gradient(60% 60% at 50% 0%, rgba(27,49,73,0.6), transparent 70%)",
        "gold-line": "linear-gradient(90deg, transparent, rgba(212,175,55,0.6), transparent)",
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.22, 1, 0.36, 1)",
        "luxury-in": "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-gold": {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) forwards",
        shimmer: "shimmer 2.5s linear infinite",
        float: "float 7s ease-in-out infinite",
        "pulse-gold": "pulse-gold 3.5s ease-in-out infinite",
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;

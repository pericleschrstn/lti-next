import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#000000",
      primary: "#005CA8",
      secondary: "#0A4176",
      success: "#9FC665",
      info: "#53B1D7",
      tertiary: "#61BBBD",
      dark: "#212529",
      body: "#888888",
      danger: "#DC3545",
      warning: "#FFF3CD",
      gray: {
        100: "#F8F9FA",
        200: "#E9ECEF",
        300: "#DEE2E6",
        400: "#CED4DA",
        500: "#ADB5BD",
        600: "#6C757D",
        700: "#495057",
        800: "#343A40",
        900: "#212529",
      },
      green: {
        100: "#dcfce7",
        500: "#22c55e",
        900: "#14532d",
        950: "#052e16",
      },
      sky: {
        100: "#e0f2fe",
        900: "#0c4a6e",
        950: "#082f49",
      },
      yellow: {
        100: "#fef9c3",
        900: "#713f12",
        950: "#422006",
      },
      red: {
        100: "#fee2e2",
        950: "#450a0a",
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

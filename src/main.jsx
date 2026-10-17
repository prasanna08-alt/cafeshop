import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app/globals.css";
import "@/site/fonts";
import "@/site/site.css";
import { theme } from "@/site/site";
import App from "./App";
import Patterns from "./pages/Patterns";

// Theme colours + fonts from src/site/site.js become CSS variables on <html>
// (this was app/layout.tsx in the Next.js version).
const isDark = (hex) => {
  const n = parseInt(hex.replace("#", "").slice(0, 6), 16);
  return ((n >> 16) & 255) * 0.299 + ((n >> 8) & 255) * 0.587 + (n & 255) * 0.114 < 140;
};
const vars = {
  "--bg": theme.bg,
  "--surface": theme.surface,
  "--text": theme.text,
  "--muted": theme.muted,
  "--accent": theme.accent,
  "--accent-text": theme.accentText,
  "--line": theme.line,
  "--hero-text": theme.heroText ?? (isDark(theme.bg) ? theme.text : "#fbf8f3"),
  "--radius": `${theme.radius ?? 0}px`,
  "--font-display-family": theme.fontDisplay,
  "--font-body-family": theme.fontBody,
  "--heading-case": theme.uppercaseHeadings ? "uppercase" : "none",
  "--heading-tracking": theme.uppercaseHeadings ? "0.04em" : "0.005em",
};
Object.entries(vars).forEach(([k, v]) => document.documentElement.style.setProperty(k, v));

// Tiny router: "/" is the site, "/patterns" is the pattern library.
const isPatterns = window.location.pathname.replace(/\/$/, "") === "/patterns";

createRoot(document.getElementById("root")).render(
  <StrictMode>{isPatterns ? <Patterns /> : <App />}</StrictMode>
);

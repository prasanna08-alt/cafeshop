# Ember Roast — React (Vite + JavaScript)

The original Next.js + TypeScript project, converted to a plain **React + JavaScript (JSX)** app built with **Vite**.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000  → the site
                   # http://localhost:3000/patterns → pattern library
npm run build      # production build into dist/
npm run preview    # serve the production build
```

## What changed from the Next.js version

| Before (Next.js + TS) | Now (React + JS) |
|---|---|
| `.ts` / `.tsx` files | `.js` / `.jsx` (type annotations removed, code and comments unchanged) |
| `app/layout.tsx` (theme CSS variables, fonts, `<html>`/`<body>`) | `src/main.jsx` (sets the CSS variables) + `index.html` |
| `app/page.tsx` | `src/App.jsx` |
| `app/patterns/page.tsx` (route) | `src/pages/Patterns.jsx`, shown when the URL is `/patterns` |
| `"use client"` directives | removed (everything is client-side) |
| `next dev / build / start` | `vite` / `vite build` / `vite preview` |
| `@tailwindcss/postcss` | `@tailwindcss/vite` |
| inline `<script>` in `site/Page.tsx` | moved to `index.html` (inline scripts in React markup don't run) |

## Folder map

```
index.html              page shell (title, description, scroll/record script)
src/main.jsx            entry: theme variables, CSS, fonts, tiny router
src/App.jsx             engine (loader, smooth scroll, cursor, record mode) + the site
src/app/globals.css     Tailwind + base styles
src/components/engine/  loader, cursor, smooth scroll, animations, record mode, frame player
src/components/patterns/ reusable section patterns (used by /patterns)
src/components/ui/      Button, Magnetic, SplitText, TiltCard
src/lib/                gsap setup, frame loader, loading tracker
src/site/               the Ember Roast site: Page.jsx, content.js, site.js, site.css, components/
public/                 images + scroll-frame sequences
docs/                   original notes on motion, design and recording
```

`?record=1`, `?static=1` and `&at=` URL options work exactly as before.

Note: `raw/` (original videos and full-size photos) is not included to keep the zip small; the frames and images in `public/` are what the site uses.

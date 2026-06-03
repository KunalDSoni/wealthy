# Plan Happy Wealth

A premium, goal-based **financial-planning experience** for Indian families — led by
**Seema Kakade Ahuja** (CFP · QPFP · MBA, 25+ years). Built to feel less like a mutual-fund
distributor's website and more like the digital front door of a trusted wealth practice.

> _Trusted planning for life's biggest financial goals._

- **Framework:** Next.js 15 (App Router) · React 19 · TypeScript
- **Styling:** Tailwind CSS with a tokenised design system
- **Motion:** Framer Motion (scroll reveals, counters, accordions) — fully `prefers-reduced-motion` aware
- **Output:** 100% static (`next export`) — no server, deploys anywhere
- **Performance:** Lean dependency set, self-hosted variable fonts (no CLS), `unoptimized` images for static hosts

---

## Architecture

The codebase follows a clean separation between **content**, **design system**, and **composition**.
Business copy never lives inside a component — it is centralised in `src/content`.

```
src/
├── app/                    # Routes, metadata, robots & sitemap
│   ├── layout.tsx          # Fonts, SEO metadata, JSON-LD, skip-link
│   ├── page.tsx            # Home — composes the section sequence
│   ├── globals.css         # Design-system base + component layers
│   ├── robots.ts           # Static robots.txt
│   └── sitemap.ts          # Static sitemap.xml
├── content/                # ⭐ Single source of truth for ALL copy
│   ├── site.ts             # Brand, contact, founder, nav, CTAs, SEO
│   ├── services.ts         # Six core services
│   ├── stats.ts            # Trust metrics + credentials
│   ├── process.ts          # Process steps + philosophy pillars
│   ├── goals.ts            # Goal-planning showcase data
│   ├── testimonials.ts     # Case-study stories
│   └── faqs.ts             # Objection-handling FAQ
├── components/
│   ├── ui/                 # Design-system primitives (Button, Section,
│   │                       #   Container, Reveal, Counter, Logo)
│   ├── layout/             # Navbar, Footer
│   └── sections/           # One file per landing-page section
└── lib/                    # cn(), basePath(), motion tokens, structured data
```

### Design system

All brand decisions are tokens in `tailwind.config.ts` (colour ramps, fluid type scale,
elevation, radii, easing, keyframes) and CSS variables in `globals.css`. Components consume
tokens — nothing brand-level is hard-coded.

| Token group | Examples |
|-------------|----------|
| Colour      | `navy.*`, `gold.*`, `cloud.*`, `midnight` |
| Type        | `display-2xl…md` (fluid `clamp()`), `font-display/sans/mono` |
| Motion      | `ease-luxury`, `animate-marquee`, shared variants in `lib/motion.ts` |
| Elevation   | `shadow-glass`, `shadow-gold`, `shadow-elevate` |

### Section sequence (the conversion narrative)

`Hero → TrustBar → Philosophy → Founder → Services → Process → Goals → Testimonials → FAQ → Consultation`

Each section maps to a step in the visitor's journey from _"who are you?"_ to _"book a call"_.

---

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

Scripts:

| Command            | Purpose                                  |
|--------------------|------------------------------------------|
| `npm run dev`      | Local development server                 |
| `npm run build`    | Production build + static export → `out/`|
| `npm run start`    | Serve the production build               |
| `npm run lint`     | ESLint (next/core-web-vitals)            |
| `npm run typecheck`| TypeScript, no emit                      |

---

## Build & deploy

The site builds to a static `out/` directory and runs **with no server**. It deploys unmodified to:

### Vercel / Netlify / Cloudflare Pages
- **Build command:** `npm run build`
- **Output directory:** `out`
- `netlify.toml` is included; Vercel and Cloudflare auto-detect Next.js static export.

### GitHub Pages
- A workflow is provided at `.github/workflows/deploy.yml` (build → upload `out/` → deploy).
- **Project sites** served from a sub-path (`https://user.github.io/repo/`) need a base path:
  set `NEXT_PUBLIC_BASE_PATH="/repo"` before building. Leave it empty for a custom domain
  or user/org site. (`.nojekyll` is included so `_next/` assets are served.)

### Environment
Copy `.env.example` → `.env` and set:
- `NEXT_PUBLIC_SITE_URL` — canonical URL (metadata, sitemap, JSON-LD)
- `NEXT_PUBLIC_BASE_PATH` — only for GitHub Pages project sites

---

## SEO & accessibility

- Schema.org **`FinancialService`** + **`WebSite`** JSON-LD (`lib/structuredData.ts`)
- Open Graph + Twitter cards, canonical URL, generated `robots.txt` + `sitemap.xml`
- Semantic landmarks, single `<h1>`, skip-to-content link, gold focus rings, `aria` on
  interactive widgets (nav, tabs, accordion), `prefers-reduced-motion` honoured in CSS **and** JS

---

## Content updates

To change any copy, edit the relevant file in **`src/content/`** and rebuild. No component
edits required. Before launch, confirm these placeholders with the founder:

- `src/content/site.ts` → `arn`, `euin` (currently `XXXX`)
- Founder photograph — currently an elegant monogram fallback; drop a real image into
  `public/` and wire it into `components/sections/Founder.tsx` + `Hero.tsx` when available.
- AUM / families-served figures are intentionally omitted until verified.

---

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| CSS / JS 404s on GitHub Pages | Set `NEXT_PUBLIC_BASE_PATH="/<repo>"` and rebuild; ensure `.nojekyll` is deployed. |
| Build fails on `output: export` | Remove any API routes / server-only code — this site is fully static. |
| Fonts flash | Fonts are self-hosted via `@fontsource`; ensure the imports in `app/layout.tsx` remain. |
| Wrong canonical / OG URL | Set `NEXT_PUBLIC_SITE_URL`. |

---

© Plan Happy Wealth · AMFI-Registered Mutual Fund Distributor.
Mutual fund investments are subject to market risks; read all scheme-related documents carefully.

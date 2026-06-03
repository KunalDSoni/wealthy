# Hulio — Reference Design Teardown

> Source: https://hulio.framer.website/ (Framer template, "Creative Digital Agency").
> Purpose: extract **principles** (hierarchy, rhythm, motion, layout) to reinterpret for
> Plan Happy Wealth. **Not** to copy content, palette, or imagery. Hulio is a light/electric
> agency brand; Plan Happy Wealth is a dark, gold, trust-led wealth practice.

---

## 1. Pages crawled

| Page | Role |
|------|------|
| `/` | Full marketing narrative (10 sections) |
| `/about` | Story + stats + team + CTA |
| `/project` | Portfolio grid |
| `/pricing` | 3-tier pricing + CTAs |
| `/blog`, `/contact`, `/404` | Standard supporting pages |

## 2. Homepage section sequence (the rhythm)

1. **Hero** — oversized headline ("Award Winning Creative Digital **Agency**"), short body, single CTA "Know More About Us".
2. **Keyword marquee** — 10 scrolling category tags (DEVELOPMENT, STUDIO, STRATEGY, BRANDING…). Pure texture/positioning.
3. **Three intro cards** — "Who we are", "We'll design your projects", "Drop us your message" → each links out.
4. **About + headline stat** — "We deliver innovative ideas…" with a count-up stat ("0 M+", "$15M secured", "51% of consumers") + founder video.
5. **Trust strip** — "World's Most Popular Companies Trust Us" + logo wall.
6. **Portfolio grid** — "Take a look at our projects", 4 cards, "Load More".
7. **Services** — "What we offer", numbered **01–04**, primary CTA "Let's Talk with Us".
8. **Team** — "Meet the team", 3-up cards.
9. **Testimonials** — "What our users say", 4 cards w/ 5★, carousel.
10. **Blog** — "The latest blog from us", 3 cards w/ read-times.
11. **Closing CTA** — giant repeating "Let's work together." ×5.

**Principle:** alternating *texture → substance → proof → conversion*. Every credibility block (stats, logos, portfolio, team, testimonials) is sandwiched between a value statement and a CTA. Conversion is offered ~5 times before the footer.

## 3. Typography

- **Single typeface: Inter** (sans) for everything — no serif. Hierarchy is created by **size + weight**, not by mixing families.
- **Type scale (px observed in markup):** display **140** (hero word), **70 / 64 / 60 / 50 / 48** (section heads), **40 / 38 / 36 / 32** (sub-heads), body **20 / 18 / 16 / 15**, captions **12 / 10**.
- Huge jump from body (~16px) to display (140px) → dramatic scale contrast is the whole personality.

> **PHW reinterpretation:** we intentionally diverge — Inter for body but **Fraunces** (serif) for display, because a wealth brand earns trust through warmth/editorial gravitas, not agency edge. We keep Hulio's *scale contrast* principle (fluid clamps up to ~6.5rem).

## 4. Colour

| Role | Hulio | PHW (ours) |
|------|-------|-----------|
| Canvas | White `#FFF` + `#F7F9FC` | Deep navy `#07111F` |
| Text | Black `#000`, grey `#54595F` / `#9CA3AF` | Cloud `#F8F9FB` ramp |
| Accent | Electric blue `#0099FF`, lime `#D0FF71`, amber `#FBBF24` | Gold `#D4AF37` (single, restrained) |

> Hulio uses **multiple bright accents** for energy. We use **one** (gold) for discipline and luxury — the opposite emotional register, by design.

## 5. Motion system (extracted from raw Framer markup)

22 scroll/load "appear" animations. Framer computes easing in JS (a spring/bezier), but the
**initial states** are in the static markup and reveal the motion language:

| Initial transform | Count | Meaning |
|-------------------|------:|---------|
| `opacity:0` + `translateY(20px)` | 10 | **Fade-up** — the workhorse reveal |
| `translateY(30px)` | 3 | Deeper fade-up for large blocks |
| `translateY(-20px)` | 4 | Fade-**down** for top-anchored elements (nav, eyebrows) |
| `translateX(-60px)` | 12 | **Slide-in from left** — headings / row items, staggered |
| `translateX(30px)` | 1 | Slide-in from right (counter-balance) |
| `scale(0.001)→1` | 1 | Pop-in accent |

**Observed characteristics**
- Distances are **small** (20–30px vertical, 60px horizontal) → elegant, not theatrical.
- **Directional storytelling:** content rises, top-chrome drops, list rows sweep in laterally with stagger.
- Each appear has its own id → **staggered**, not all-at-once.
- A continuous **marquee** (keyword strip) provides ambient motion independent of scroll.
- Hover micro-interactions on cards/CTAs (scale + colour shift).

> **PHW reinterpretation (already implemented):** `lib/motion.ts` codifies fade-up (28px),
> stagger containers, and `scaleIn`; `ease-luxury` = `cubic-bezier(0.22,1,0.36,1)` (a slightly
> more refined curve than Framer's default); a credential **marquee** mirrors Hulio's ambient
> strip; counters animate on view; tabs/accordion use the same easing. **All gated by
> `prefers-reduced-motion`** — something most Framer exports do *not* honour well.

## 6. Layout & white-space

- Generous vertical padding between sections; content held in a centered max-width with wide gutters.
- Grids: 3-up (cards/team/blog), 4-up (portfolio/services), 2-up (about).
- Numbered services (01–04) give a "system / process" feel.
- Heavy reliance on **cards with hairline separators** and lots of negative space.

> **PHW reinterpretation:** same generous rhythm (`py-20→32`), `max-w-container`, hairline
> dividers, numbered **Process 01–04**, 3-up services/stories. We add frosted-glass surfaces
> and gold hairlines for the premium register.

## 7. What we deliberately did NOT take

- Hulio's **content** (agency copy, fake clients, $/award stats, stock team) — replaced with PHW's real, verified content.
- Its **palette and serif-less type** — wrong emotional register for wealth.
- Its **multi-accent energy** — we chose restraint.
- Filler "lorem ipsum" body copy — every PHW sentence is written to build trust.

## 8. Net takeaways applied to Plan Happy Wealth

1. **Scale contrast** as the core typographic device → fluid display clamps.
2. **Sandwich every proof block between value + CTA** → our section order does exactly this.
3. **Small-distance, staggered, directional reveals** → `lib/motion.ts`.
4. **Ambient marquee** for life without distraction → credential strip.
5. **Numbered process** for a "system you can trust" feeling → Process section.
6. Offer the **conversion repeatedly** but calmly → CTAs in nav, hero, founder, and final consult block.

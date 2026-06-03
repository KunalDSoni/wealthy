# wealthy — Hulio site mirror

A full static mirror of **https://hulio.framer.website/** (a free Framer template),
captured with content, fonts, images, and the Framer JavaScript runtime so the
**animations play locally**.

## Run locally

```bash
python3 -m http.server 4322
```

Then open: **http://localhost:4322/hulio.framer.website/index.html**

> Serve from the repo root (both `hulio.framer.website/` and `framerusercontent.com/`
> must be under the server root — assets are referenced across the two folders).
> It must be served over `http://`, not opened as a `file://` page, because the
> animations load as ES modules which browsers block on `file://`.

## Contents

- `hulio.framer.website/` — 18 HTML pages (home, about, project, pricing, blog, team,
  contact, privacy + blog-details/ and project-details/)
- `framerusercontent.com/` — Framer runtime (incl. the `motion`/`framer` animation
  modules), web fonts, and all images

## Notes

- One analytics beacon (`events.framer.com`) is left external and is harmless.
- The original "Plan Happy Wealth" build that previously lived here is preserved in
  this repo's git history at tag `phw-build` (`git checkout phw-build`).

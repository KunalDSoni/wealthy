# wealthy — Hulio site mirror

A full static mirror of **https://hulio.framer.website/** (a free Framer template),
captured with content, fonts, images, and the Framer JavaScript runtime so the
**animations play**.

## Live

GitHub Pages: **https://kunaldsoni.github.io/wealthy/**
(Settings → Pages → Deploy from a branch → `main` / `/root`.)

## Run locally

```bash
python3 -m http.server 4322
```

Then open: **http://localhost:4322/** (the home page is `index.html` at the root).

> Must be served over `http://`, not opened as a `file://` page — the animations
> load as ES modules, which browsers block on `file://`.

## Structure

- `index.html`, `about.html`, `project.html`, `pricing.html`, `blog.html`,
  `team.html`, `contact.html`, `privacy-policy.html` — top-level pages
- `blog-details/`, `project-details/` — detail pages
- `framerusercontent.com/` — Framer runtime (incl. the `motion`/`framer` animation
  modules), web fonts, and all images

All asset paths are relative, so the site works at the domain root or under a
sub-path (e.g. `/wealthy/`) with no changes.

## Notes

- One analytics beacon (`events.framer.com`) is left external and is harmless.
- The "Olam / Use for Free" Framer template promo is hidden via injected CSS.
- The original "Plan Happy Wealth" build that previously lived here is preserved in
  this repo's git history at tag `phw-build` (`git checkout phw-build`).

/**
 * Resolve a public asset URL with the configured base path.
 * Lets the same code deploy at root (Vercel/Netlify) or a sub-path
 * (GitHub Pages project sites) without changes.
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}

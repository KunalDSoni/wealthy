/** @type {import('next').NextConfig} */

// Static export so the site deploys unmodified on GitHub Pages, Vercel,
// Netlify and Cloudflare Pages. For GitHub Pages (served from a sub-path),
// set NEXT_PUBLIC_BASE_PATH="/<repo>" at build time; everywhere else leave empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  basePath: basePath || undefined,
  images: {
    // No image-optimization server on static hosts.
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;

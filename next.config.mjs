/** @type {import('next').NextConfig} */

// GitHub Pages serves this project at /Portfolio (the repo name).
// In dev we stay at the root so localhost:3000 works normally.
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/Portfolio" : "";

const nextConfig = {
  reactStrictMode: true,
  output: "export", // static site in ./out (required for GitHub Pages)
  basePath,
  images: { unoptimized: true }, // GitHub Pages has no image optimizer
  env: { NEXT_PUBLIC_BASE_PATH: basePath }, // so raw asset paths can prefix it
};

export default nextConfig;

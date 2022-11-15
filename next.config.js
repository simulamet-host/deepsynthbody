/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  trailingSlash: true,
  basePath: "/Testing-deep",
  assetPrefix: "/Testing-deep",
  images: {
    unoptimized: true
}
}

module.exports = nextConfig
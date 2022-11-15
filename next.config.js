/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  trailingSlash: true,
  basePath: "/Testing-deep",
  assetPrefix: "/Testing-deep",
  images: {
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig
const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react',
  },
})
module.exports = withMDX({
pageExtensions: ['js', 'jsx', 'md', 'mdx'],
reactStrictMode: true,
swcMinify: true,
trailingSlash: true,
basePath: ghPages? '/deepsynthbody' : '/deepsynthbody',
assetPrefix: ghPages ? '/deepsynthbody' : '/deepsynthbody',
images: {
      unoptimized: true
 }
})


/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false,
//   swcMinify: true,
//   trailingSlash: true,
//   basePath: "/Testing-deep",
//   assetPrefix: "/Testing-deep",
//   images: {
//     unoptimized: true
// }
// }

// module.exports = nextConfig

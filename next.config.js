/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  
  basePath: "/nextjs-pages",
  assetPrefix: "/nextjs-pages"
};

module.exports = nextConfig;
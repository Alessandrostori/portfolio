/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  }
}

module.exports = nextConfig
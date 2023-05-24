/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@edge-computing/cloudflare-core"],
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // removeConsole: true,
  },
  swcMinify: true,
  pageExtensions: ["tsx", "ts"],
};

export default nextConfig;

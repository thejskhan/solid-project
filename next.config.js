const path = require("path");

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  react: {
    useSuspense: false,
    wait: true,
  },
  compiler: {
    styledComponents: true,
    // removeConsole: true,
  },
  swcMinify: true,
};

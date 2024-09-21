/** @type {import('next').NextConfig} */
require("./next.config.ts");

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  env: {
    API_ORIGIN: "http://127.0.0.1:3080",
  },
  reactStrictMode: false,
  swcMinify: true,
  output: "standalone",
};

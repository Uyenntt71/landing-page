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
    API_ORIGIN: "https://streaming-server-7e13.onrender.com",
  },
  reactStrictMode: false,
  swcMinify: true,
  output: "standalone",
};

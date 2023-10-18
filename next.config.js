/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  serverRuntimeConfig: {
    URL: process.env.SERVER_API_URL ?? "http://localhost:3000/api/",
  },
  publicRuntimeConfig: {
    URL: process.env.CLIENT_API_URL ?? "http://localhost:3000/api/",
  },
  experimental: {
    largePageDataBytes: 716800
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  serverRuntimeConfig: {
    URL: process.env.VERCEL_URL ?? process.env.SERVER_API_URL ?? "http://localhost:3000/api/",
    MONTH: process.env.MONTH ?? 11,
  },
  publicRuntimeConfig: {
    URL: process.env.VERCEL_URL ?? process.env.CLIENT_API_URL ?? "http://localhost:3000/api/",
    MONTH: process.env.MONTH ?? 11,
  },
  experimental: {
    largePageDataBytes: 716800
  }
}

module.exports = nextConfig

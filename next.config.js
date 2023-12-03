/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  serverRuntimeConfig: {
    URL: (process.env.VERCEL_URL && process.env.VERCEL_URL !== "" ? `http://${process.env.VERCEL_URL}/api/` : undefined) ?? process.env.SERVER_API_URL ?? "http://localhost:3000/api/",
    MONTH: process.env.MONTH ?? 11,
  },
  publicRuntimeConfig: {
    URL: (process.env.VERCEL_URL && process.env.VERCEL_URL !== "" ? `http://${process.env.VERCEL_URL}/api/` : undefined) ?? process.env.CLIENT_API_URL ?? "http://localhost:3000/api/",
    MONTH: process.env.MONTH ?? 11,
  },
  experimental: {
    largePageDataBytes: 716800,
    outputFileTracingIncludes: {
      '/api/[category]/[id]': ['./images/**/*'],
    },
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  serverRuntimeConfig: {
    URL: process.env.SERVER_API_URL ?? "http://localhost:3000/api/",
    MONTH: process.env.MONTH ?? 11,
  },
  publicRuntimeConfig: {
    URL: process.env.CLIENT_API_URL ?? "http://localhost:3000/api/",
    MONTH: process.env.MONTH ?? 11,
  },
  experimental: {
    largePageDataBytes: 716800
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.js$/,
      use: {
        loader: '@swc/loader',
        options: {
          jsc: {
            parser: {
              syntax: 'ecmascript',
              jsx: true
            },
            transform: {
              react: true
            }
          }
        }
      }
    });
    return config;
  }
}

module.exports = nextConfig

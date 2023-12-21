/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
        ]
      },
      {
        source: "/api/team",
        headers: [
          { key: "Access-Control-Allow-Methods", value: "GET" },
        ]
      }
    ]
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'via.placeholder.com',
      },
    ],
  },
}

module.exports = nextConfig

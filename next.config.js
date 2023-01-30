/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost', 'media.graphassets.com'],
  },
}

module.exports = nextConfig

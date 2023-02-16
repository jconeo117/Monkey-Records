/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['scontent.cdninstagram.com'],
    remotePatterns: [{
      protocol: 'https',
      hostname: 'scontent.cdninstagram.com'
    }]
  }
}

module.exports = nextConfig

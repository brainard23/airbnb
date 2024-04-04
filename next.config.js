/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true
    },
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'assets.vercel.com',
            port: '',
            pathname: '/image/upload/**',
          },
        ],
        domains: [
            "avatars.githubusercontent.com", 
            "res.cloudinary.com",
            "lh3.googleusercontent.com"
        ]
    }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: ['drive.google.com', 'www.google.com', 'upload.wikimedia.org',
      'cdn.sanity.io'
    ],
  },
}
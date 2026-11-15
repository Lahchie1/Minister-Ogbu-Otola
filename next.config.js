/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/teaching',
        permanent: true,
      },
      {
        source: '/blog/:slug',
        destination: '/teaching/:slug',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;


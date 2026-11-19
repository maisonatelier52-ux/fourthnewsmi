import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fiscalfusion.org',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/terms',
        destination: '/terms-and-conditions',
        permanent: true,
      },
      {
        source: '/ownership-funding',
        destination: '/ownership-and-funding',
        permanent: true,
      },
      {
        source: '/right-of-reply',
        destination: '/right-of-reply-policy',
        permanent: true,
      },
      {
        source: '/feed',
        destination: '/rss.xml',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

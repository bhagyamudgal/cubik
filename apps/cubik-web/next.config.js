/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    // if (isServer) {
    //   config.plugins = [...config.plugins];
    // }
    return config;
  },
  transpilePackages: ['@cubik/api', '@cubik/database'],
  images: {
    domains: [
      'd1yweukyu067aq.cloudfront.net',
      'www.sandstormhackathon.com',
      'media-fastly.hackerearth.com',
      'res.cloudinary.com',
    ],
  },
};

module.exports = nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
      protocol: 'https',
      hostname: 'example.com',
      pathname: '/images/**',
      },
       {
      protocol: 'https',
      hostname: 'fakestoreapi.com',
      pathname: '/img/**',
      },
    ],
  },
};

export default nextConfig;

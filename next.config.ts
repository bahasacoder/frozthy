import type { NextConfig } from "next";
import path from "path/win32";

const nextConfig: NextConfig = {
  /* config options here */
  outputFileTracingRoot: path.join(__dirname, '../../'),
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
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
      {
      protocol: 'https',
      hostname: 'cdn.shadcnstudio.com',
      pathname: '/ss-assets/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'iili.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        port: '', // Port is optional, use '' for default ports
        pathname: '/gh/**', // Allows any path under /account123/
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '', // Port is optional, use '' for default ports
        pathname: '/**', // Allows any path under /account123/
      },
    ],
  },
};

export default nextConfig;

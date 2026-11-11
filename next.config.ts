import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
    ],
  },
};

export default nextConfig;

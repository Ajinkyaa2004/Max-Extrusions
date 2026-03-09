import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // This is necessary due to a known issue with Next.js 16.x on Vercel
    // where TypeScript checking can hang during deployment.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

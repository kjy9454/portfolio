import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    domains: ["images.pexels.com"],
  },
};
export default nextConfig;

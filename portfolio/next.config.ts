import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',  // Keep this
  images: {
    unoptimized: true,
  },

  
};

export default nextConfig;
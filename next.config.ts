import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Uncomment output and images for static export deployment
  output: "export", // Only use for deploy for IIS - Enables static export (creates /out folder)
  images: {
    unoptimized: true, // Required for next/image to work with static export
  },
  trailingSlash: true, // Optional: ensures URLs map cleanly to folders (important on IIS)
};

export default nextConfig;

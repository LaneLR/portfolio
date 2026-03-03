import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // distDir: 'docs',
  // basePath: "/",
  // assetPrefix: "/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // distDir: 'docs',
  basePath: "/portfolio",
  assetPrefix: "/portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

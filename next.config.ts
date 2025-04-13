import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // This disables image optimization since it requires a server
  images: {
    unoptimized: true,
  },
  // Ensures URLs don't have trailing slashes
  trailingSlash: false,
  // Disables 404 fallbacks for dynamic routes
  // since we're generating a static 404 page
  dynamicRoutes: {
    dynamic404: false,
  }
};

export default nextConfig;

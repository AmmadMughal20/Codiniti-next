import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "images.unsplash.com",
      port: "",
      pathname: "**", // Allows all paths under images.unsplash.com
    },],
  },
};

export default nextConfig;

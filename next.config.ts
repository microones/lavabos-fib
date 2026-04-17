import type { NextConfig } from "next";

const apiHostname = process.env.NEXT_PUBLIC_API_URL
  ? new URL(process.env.NEXT_PUBLIC_API_URL).hostname
  : "localhost";

const apiPort = process.env.NEXT_PUBLIC_API_URL
  ? new URL(process.env.NEXT_PUBLIC_API_URL).port || undefined
  : "3001";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: apiHostname,
        pathname: "/api/v1/photos/file/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: apiPort,
        pathname: "/api/v1/photos/file/**",
      },
    ],
  },
};

export default nextConfig;

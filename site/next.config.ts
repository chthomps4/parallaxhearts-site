import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/project",
        destination: "/story",
        permanent: true,
      },
      {
        source: "/website-services",
        destination: "/websites",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

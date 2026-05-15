import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2.googlesyndication.com https://*.googlesyndication.com https://*.google.com https://*.gstatic.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self' data:; frame-src 'self' https://w.soundcloud.com https://www.youtube.com https://www.youtube-nocookie.com https://*.google.com https://*.googlesyndication.com; connect-src 'self' https:; media-src 'self' https:; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'; upgrade-insecure-requests",
  },
];

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
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;

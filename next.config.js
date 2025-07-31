/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: { locales: ["ja"], defaultLocale: "ja" },
  experimental: {
    // disablePreviewMode is deprecated in Next.js 14
  },
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  generateEtags: false,
  images: {
    domains: ["images.microcms-assets.io"],
    formats: ["image/webp", "image/avif"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  headers: async () => {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

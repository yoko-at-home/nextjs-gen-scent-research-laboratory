/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: { locales: ["ja"], defaultLocale: "ja" },
  experimental: {
    disablePreviewMode: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: ["images.microcms-assets.io"],
  },
};

module.exports = nextConfig;

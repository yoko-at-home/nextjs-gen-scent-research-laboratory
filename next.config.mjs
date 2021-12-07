/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  i18n: { locales: ["ja"], defaultLocale: "ja" },
  future: { strictPostcssConfiguration: true },
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  // experimental: { concurrentFeatures: true, serverComponents: true },
  images: {
    domains: ["images.microcms-assets.io"],
  },
};

export default nextConfig;

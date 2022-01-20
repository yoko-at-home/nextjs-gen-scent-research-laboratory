/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

module.exports = withPWA({
  reactStrictMode: true,
  i18n: { locales: ["ja"], defaultLocale: "ja" },
  typescript: { ignoreDevErrors: true },
  poweredByHeader: false,
  images: {
    domains: ["images.microcms-assets.io"],
  },
  pwa: {
    dest: "public",
    register: true,
    disable: process.env.NODE_ENV === "development",
  },
});

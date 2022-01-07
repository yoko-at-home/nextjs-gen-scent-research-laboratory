const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
  },
});
module.exports = {
  i18n: { locales: ["ja"], defaultLocale: "ja" },
  reactStrictMode: true,
  typescript: { ignoreDevErrors: true },
  poweredByHeader: false,
  images: {
    domains: ["images.microcms-assets.io"],
  },
};

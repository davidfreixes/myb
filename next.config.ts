import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  i18n: {
    locales: ['es', 'en', 'cat', 'fr'],
    defaultLocale: 'es',
  },
};

export default nextConfig;

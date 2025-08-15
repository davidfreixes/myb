import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  rewrites: async () => {
    // do not leak source-maps in Vercel production deployments
    // but keep them in Vercel preview deployments with generated urls
    // for better dev experience
    const baseRewrites = [
      {
        source: "/robots.txt",
        destination: "/api/robots.txt",
      },
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap.xml",
      },
    ];
    return {
      beforeFiles: [
        ...baseRewrites,
        {
          source: "/:path*.map",
          destination: "/404",
        },
      ],
    };
  },
  reactStrictMode: true,
  i18n: {
    locales: ["es", "en", "cat", "fr"],
    defaultLocale: "es",
  },
  compress: true,
};

export default nextConfig;

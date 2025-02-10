import { NextSeoProps } from "next-seo";

const SEO: NextSeoProps = {
  title: "Menorca Yacht Brokers",
  description: "Tu Broker de Yates de confianza",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://menorcabrokers.com/",
    site_name: "Menorca Yacht Brokers",
    images: [
      {
        url: `${
          process.env.VERCEL_URL
            ? "https://" + process.env.VERCEL_URL
            : process.env.NEXT_PUBLIC_APP_URL
        }/img/logo.png`,
        width: 846,
        height: 634,
        alt: "Menorca Yacht Brokers",
        type: "image/png",
      },
    ],
    siteName: "Menorca Yacht Brokers",
  },
  twitter: {
    handle: "@MenorcaBrokers",
    site: "@MenorcaBrokers",
    cardType: "summary_large_image",
  },
};

export default SEO;

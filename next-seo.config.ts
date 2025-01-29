import { NextSeoProps } from "next-seo";

export default {
  title: "Menorca Yacht Brokers",
  description: "Menorca Yacht Brokers",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://www.url.ie/",
    site_name: "Menorca Yacht Brokers",
  },
  additionalMetaTags: [
    {
      property: "og:image",
      content: "https://www.example.ie/image.jpg",
    },
  ],
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
} as NextSeoProps;

import ArticlePerfectYacht from "@/client/home/components/article-perfect-yacht";
import CTASection from "@/client/home/components/cta-section";
import FAQSection from "@/client/home/components/faq-section";
import FeaturesSection from "@/client/home/components/features-section";
import Hero from "@/client/home/components/hero";
import ServicesSection from "@/client/home/components/services-section";
import VideoSection from "@/client/home/components/video-section";
import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";
import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // Aseguramos que i18next esté cargado
  }, []);
  if (!isLoaded) return null;

  return (
    <>
      <NextSeo
        title="Menorca Yacht Brokers | Yacht Broker & Charter in Menorca"
        description="En Menorca Yacht Brokers, te ofrecemos soluciones completas para la compraventa de yates en Menorca, charters, gestíon de cargas y asesoría náutica."
        canonical={process.env.VERCEL_URL}
        openGraph={{
          url: process.env.VERCEL_URL,
          title: "Menorca Yacht Brokers | Yacht Broker & Charter in Menorca",
          description:
            "En Menorca Yacht Brokers, te ofrecemos soluciones completas para la compraventa de yates en Menorca, charters, gestíon de cargas y asesoría náutica",
          images: [
            {
              url: "https://www.menorcabrokers.com/img/hero.jpg",
              width: 1200,
              height: 630,
              alt: "Menorca Yacht Brokers",
              type: "image/png",
            },
          ],
          siteName: "Menorca Yacht Brokers",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Header sticky={false} isTransparent={true} />
      <Hero />
      <ServicesSection />
      <VideoSection />
      <FeaturesSection />
      <ArticlePerfectYacht />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
}

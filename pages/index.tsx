import ArticlePerfectYacht from "@/client/home/components/article-perfect-yacht";
import CTASection from "@/client/home/components/cta-section";
import FAQSection from "@/client/home/components/faq-section";
import FeaturesSection from "@/client/home/components/features-section";
import Hero from "@/client/home/components/hero";
import ServicesSection from "@/client/home/components/services-section";
import VideoSection from "@/client/home/components/video-section";
import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // Aseguramos que i18next esté cargado
  }, []);
  if (!isLoaded) return null;

  return (
    <>
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

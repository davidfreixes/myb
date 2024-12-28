import FeaturesSection from "@/client/home/components/features-section";
import Hero from "@/client/home/components/hero";
import ServicesSection from "@/client/home/components/services-section";
import VideoSection from "@/client/home/components/video-section";
import { Header } from "@/client/layout/components/header";

export default function Home() {
  return (
    <>
      <Header sticky={false} isTransparent={true} />
      <Hero />
      <ServicesSection />
      <VideoSection />
      <FeaturesSection />
    </>
  );
}

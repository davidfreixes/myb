import Hero from "@/client/home/Hero";
import ServicesSection from "@/client/home/services-section";
import { Header } from "@/client/layout/header";

export default function Home() {
  return (
    <>
      <Header sticky={false} isTransparent={true} />
      <Hero />
      <ServicesSection />
    </>
  );
}

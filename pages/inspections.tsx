import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";
import Inspections from "@/client/services/components/inspections";
import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";

export default function InspectionsPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // Aseguramos que i18next esté cargado
  }, []);
  if (!isLoaded) return null;

  return (
    <>
      <NextSeo
        title="Inspección y Tasación de Yates en Menorca | Menorca Brokers"
        description="Expertos en inspección y tasación de yates en Menorca. Servicio profesional para compradores y vendedores. Obtén un informe detallado y preciso."
        canonical="https://www.menorcabrokers.com/inspections"
        openGraph={{
          url: "https://www.menorcabrokers.com/inspections",
          title: "Inspección y Tasación de Yates en Menorca | Menorca Brokers",
          description:
            "Expertos en inspección y tasación de yates en Menorca. Servicio profesional para compradores y vendedores. Obtén un informe detallado y preciso.",
          images: [
            {
              url: "https://www.menorcabrokers.com/img/inspections.jpg",
              width: 1200,
              height: 630,
              alt: "Inspección y Tasación de Yates - Menorca Brokers",
              type: "image/jpg",
            },
          ],
          siteName: "Menorca Brokers",
          locale: "es_ES",
        }}
        twitter={{
          handle: "@MenorcaBrokers",
          site: "@MenorcaBrokers",
          cardType: "summary_large_image",
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Inspección y Tasación de Yates en Menorca",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Menorca Brokers",
              "url": "https://www.menorcabrokers.com",
            },
            "serviceType": "Inspección y Tasación Marítima",
            "areaServed": {
              "@type": "Place",
              "name": "Menorca, España",
            },
            "description":
              "Servicios profesionales de inspección y tasación de yates en Menorca para compradores y vendedores.",
            "image": "https://www.menorcabrokers.com/img/inspections.jpg",
          }),
        }}
      />
      <Header sticky={false} isTransparent={true} />
      <Inspections />
      <Footer />
    </>
  );
}

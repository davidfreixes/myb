import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";
import Logistics from "@/client/services/components/logistics";
import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";

export default function LogisticsPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // Aseguramos que i18next esté cargado
  }, []);
  if (!isLoaded) return null;

  return (
    <>
      <NextSeo
        title="Logística Marítima y Aérea en Menorca | Menorca Brokers"
        description="Expertos en logística marítima y aérea en Menorca. Gestionamos importación y exportación de carga con soluciones personalizadas. Contacta con nosotros."
        canonical="https://www.menorcabrokers.com/logistics"
        openGraph={{
          url: "https://www.menorcabrokers.com/logistics",
          title: "Logística Marítima y Aérea en Menorca | Servicios de Carga",
          description:
            "Confía en Menorca Brokers para la importación y exportación de cualquier tipo de carga. Servicios de logística marítima y aérea adaptados a tus necesidades.",
          images: [
            {
              url: "https://www.menorcabrokers.com/img/logistics.jpg",
              width: 1200,
              height: 630,
              alt: "Servicios de Logística en Menorca - Menorca Brokers",
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
            "@type": "LocalBusiness",
            name: "Menorca Brokers",
            url: "https://www.menorcabrokers.com",
            image: "https://www.menorcabrokers.com/img/logistics.jpg",
            description:
              "Expertos en logística marítima y aérea en Menorca. Gestionamos importación y exportación de carga con soluciones personalizadas.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Menorca, España",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+34 608 577 091",
              contactType: "customer service",
            },
          }),
        }}
      />
      <Header sticky={false} isTransparent={true} />
      <Logistics />
      <Footer />
    </>
  );
}

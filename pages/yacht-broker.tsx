import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";
import YachtBroker from "@/client/services/yacht-broker/components/yacht-broker";
import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";

export default function YachtBrokerPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // Aseguramos que i18next esté cargado
  }, []);
  if (!isLoaded) return null;

  return (
    <>
      <NextSeo
        title="Compra y Venta de Yates en Menorca | Yacht Broker de Lujo"
        description="Accede a la mejor selección de yates en Menorca con Menorca Brokers. Servicio integral de compra y venta de embarcaciones con asesoramiento experto."
        canonical="https://www.menorcabrokers.com/yacht-broker"
        openGraph={{
          url: "https://www.menorcabrokers.com/yacht-broker",
          title: "Compra y Venta de Yates en Menorca | Yacht Broker de Lujo",
          description:
            "Accede a la mejor selección de yates en Menorca con Menorca Brokers. Servicio integral de compra y venta de embarcaciones con asesoramiento experto.",
          images: [
            {
              url: "https://www.menorcabrokers.com/img/yacht-broker.jpg",
              width: 1200,
              height: 630,
              alt: "Compra y Venta de Yates en Menorca - Menorca Brokers",
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
            image: "https://www.menorcabrokers.com/img/yacht-broker.jpg",
            description:
              "Compra y vende yates de lujo en Menorca con el mejor asesoramiento náutico. Accede a embarcaciones exclusivas y servicios de gestión integral.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Menorca, España",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+34 608 57 70 91",
              contactType: "customer service",
            },
          }),
        }}
      />
      <Header sticky={false} isTransparent={true} />
      <YachtBroker />
      <Footer />
    </>
  );
}

import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";
import BunkerSupplyPage from "@/client/services/components/bunker-supply";
import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";

export async function getStaticProps(context) {
  const homeMessages = (
    await import(`../public/locales/services/${context.locale}.json`)
  ).default;

  const quoteModal = (
    await import(`../public/locales/services/quote/${context.locale}.json`)
  ).default;

  const layoutMessages = (
    await import(`../public/locales/layout/${context.locale}.json`)
  ).default;

  const contactMessages = (
    await import(`../public/locales/contact/${context.locale}.json`)
  ).default;

  return {
    props: {
      messages: {
        ...layoutMessages,
        ...homeMessages,
        ...quoteModal,
        ...contactMessages,
      },
    },
  };
}

export default function ShipBrokerPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // Aseguramos que i18next esté cargado
  }, []);
  if (!isLoaded) return null;

  return (
    <>
      <NextSeo
        title="Suministro de Combustible Marino para Barcos en Menorca | Bunker Supply"
        description="Menorca Brokers ofrece suministro de combustible marino en Menorca y toda España. Servicio rápido, eficiente y con la mejor calidad. ¡Contáctanos!"
        canonical="https://www.menorcabrokers.com/bunker-supply"
        openGraph={{
          url: "https://www.menorcabrokers.com/bunker-supply",
          title:
            "Suministro de Combustible para Barcos en Menorca | Bunker Supply",
          description:
            "Menorca Brokers ofrece suministro de combustible marino en Menorca y toda España. Servicio rápido, eficiente y con la mejor calidad. ¡Contáctanos!",
          images: [
            {
              url: "https://www.menorcabrokers.com/img/bunker-supply.jpg",
              width: 1200,
              height: 630,
              alt: "Suministro de Combustible Marino para Barcos en Menorca - Menorca Brokers",
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
            image: "https://www.menorcabrokers.com/img/bunker-supply.jpg",
            description:
              "Menorca Brokers ofrece suministro de combustible marino en Menorca y toda España. Servicio rápido, eficiente y con la mejor calidad.",
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
      <BunkerSupplyPage />
      <Footer />
    </>
  );
}

import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";
import NauticalConsulting from "@/client/services/components/nautical-consulting";
import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";

export async function getStaticProps(context) {
  const homeMessages = (
    await import(`../public/locales/services/${context.locale}.json`)
  ).default;

  const layoutMessages = (
    await import(`../public/locales/layout/${context.locale}.json`)
  ).default;

  return {
    props: {
      messages: {
        ...layoutMessages,
        ...homeMessages,
      },
    },
  };
}

export default function NauticalConsultingPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // Aseguramos que i18next esté cargado
  }, []);
  if (!isLoaded) return null;

  return (
    <>
      <NextSeo
        title="Consultoría Náutica y Logística en Menorca | Menorca Brokers"
        description="Gestionamos la importación y exportación de carga marítima y aérea en Menorca. Servicios personalizados para embarcaciones y logística global."
        canonical="https://www.menorcabrokers.com/nautical-consulting"
        openGraph={{
          url: "https://www.menorcabrokers.com/nautical-consulting",
          title: "Consultoría Náutica y Logística en Menorca | Menorca Brokers",
          description:
            "Gestionamos la importación y exportación de carga marítima y aérea en Menorca. Servicios personalizados para embarcaciones y logística global.",
          images: [
            {
              url: "https://www.menorcabrokers.com/img/nautical-consulting.jpg",
              width: 1200,
              height: 630,
              alt: "Consultoría Náutica y Logística - Menorca Brokers",
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
            image: "https://www.menorcabrokers.com/img/nautical-consulting.jpg",
            description:
              "Especialistas en consultoría náutica y logística de carga marítima y aérea en Menorca.",
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
      <NauticalConsulting />
      <Footer />
    </>
  );
}

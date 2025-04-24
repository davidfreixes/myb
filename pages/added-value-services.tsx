import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";
import ValueAddedServices from "@/client/services/components/added-value";
import { NextSeo } from "next-seo";

export async function getStaticProps(context) {
  const homeMessages = (
    await import(`../public/locales/services/${context.locale}.json`)
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
        ...contactMessages,
      },
    },
  };
}

export default function ValueAddedServicesPage() {
  return (
    <>
      <NextSeo
        title="Servicios Exclusivos en Menorca | Traslados, Catering y Eventos"
        description="Disfruta de Menorca con nuestros servicios de valor añadido: traslados VIP, catering a bordo, rutas privadas y planificación de eventos exclusivos."
        canonical="https://www.menorcabrokers.com/value-added-services"
        openGraph={{
          url: "https://www.menorcabrokers.com/value-added-services",
          title:
            "Servicios Exclusivos en Menorca | Traslados, Catering y Eventos",
          description:
            "Vive Menorca al máximo con traslados de lujo, experiencias gastronómicas únicas, rutas personalizadas y asistencia 24/7.",
          images: [
            {
              url: "https://www.menorcabrokers.com/img/value-added-services.jpg",
              width: 1200,
              height: 630,
              alt: "Servicios de Valor Añadido - Menorca Brokers",
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
            name: "Servicios de Valor Añadido - Menorca Brokers",
            provider: {
              "@type": "LocalBusiness",
              name: "Menorca Brokers",
              url: "https://www.menorcabrokers.com",
              image:
                "https://www.menorcabrokers.com/img/value-added-services.jpg",
              description:
                "Servicios exclusivos en Menorca: traslados VIP, catering a bordo, rutas turísticas y planificación de eventos.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Menorca, España",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+34 608 57 70 91",
                contactType: "customer service",
              },
            },
            serviceType: [
              "Traslados VIP",
              "Catering a bordo",
              "Rutas turísticas privadas",
              "Eventos exclusivos",
              "Asistencia 24/7",
            ],
            areaServed: {
              "@type": "Place",
              name: "Menorca, España",
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "EUR",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />
      <Header sticky={false} isTransparent={true} />
      <ValueAddedServices />
      <Footer />
    </>
  );
}

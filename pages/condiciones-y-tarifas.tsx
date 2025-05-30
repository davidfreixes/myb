import ConditionsAndRates from "@/client/general/company/components/conditions-and-rates";
import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";
import { NextSeo } from "next-seo";

export async function getStaticProps(context) {
  const homeMessages = (
    await import(`../public/locales/company/${context.locale}.json`)
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
export default function LegalNoticePage() {
  return (
    <>
      <NextSeo
        title="Condiciones y Tarifas | Servicios Náuticos | Menorca Brokers"
        description="Consulta las tarifas y condiciones de nuestros servicios náuticos en Menorca. Compra, venta, alquiler de yates, inspecciones y tasaciones marítimas."
        canonical="https://www.menorcabrokers.com/condiciones-tarifas"
        openGraph={{
          url: "https://www.menorcabrokers.com/condiciones-tarifas",
          title: "Condiciones y Tarifas | Servicios Náuticos | Menorca Brokers",
          description:
            "Consulta las tarifas y condiciones de nuestros servicios náuticos en Menorca. Compra, venta, alquiler de yates, inspecciones y tasaciones marítimas.",
          images: [
            {
              url: "https://www.menorcabrokers.com/img/conditions-rates.jpg",
              width: 1200,
              height: 630,
              alt: "Condiciones y Tarifas - Menorca Brokers",
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
            name: "Condiciones y Tarifas de Menorca Brokers",
            provider: {
              "@type": "LocalBusiness",
              name: "Menorca Brokers",
              url: "https://www.menorcabrokers.com",
              image: "https://www.menorcabrokers.com/img/conditions-rates.jpg",
              description:
                "Compra, venta, alquiler de yates, inspecciones y tasaciones marítimas en Menorca.",
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
              "Compra y venta de yates",
              "Alquiler de yates",
              "Inspecciones marítimas",
              "Tasaciones de embarcaciones",
              "Gestión de documentación náutica",
            ],
          }),
        }}
      />
      <Header sticky={false} isTransparent={true} />
      <ConditionsAndRates />
      <Footer />
    </>
  );
}

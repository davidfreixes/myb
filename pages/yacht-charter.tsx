import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";
import YachtCharter from "@/client/services/components/yacht-charter";
import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";

export default function YachtCharterPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // Aseguramos que i18next esté cargado
  }, []);
  if (!isLoaded) return null;

  return (
    <>
      <NextSeo
        title="Alquiler de Yates en Menorca | Yacht Charter de Lujo"
        description="Descubre el mejor alquiler de yates en Menorca con Menorca Brokers. Disfruta de un charter de lujo con rutas exclusivas, tripulación profesional y servicios VIP. Reserva ahora y vive una experiencia inolvidable."
        canonical="https://www.menorcabrokers.com/yacht-charter"
        openGraph={{
          url: "https://www.menorcabrokers.com/yacht-charter",
          title: "Alquiler de Yates en Menorca | Yacht Charter de Lujo",
          description:
            "Explora Menorca desde el mar con nuestro servicio exclusivo de alquiler de yates. Disfruta de experiencias premium, tripulación experta y rutas personalizadas.",
          images: [
            {
              url: "https://www.menorcabrokers.com/img/yacht-charter.jpg",
              width: 1200,
              height: 630,
              alt: "Alquiler de Yates en Menorca - Menorca Brokers",
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
            image: "https://www.menorcabrokers.com/img/yacht-charter.jpg",
            description:
              "Alquiler de yates de lujo en Menorca con rutas personalizadas y tripulación profesional.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Menorca, España",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+34 123 456 789",
              contactType: "customer service",
            },
          }),
        }}
      />

      <Header sticky={false} isTransparent={true} />
      <YachtCharter />
      <Footer />
      <Header sticky={false} isTransparent={true} />
      <YachtCharter />
      <Footer />
    </>
  );
}

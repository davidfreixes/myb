import NauticalConsulting from "@/client/general/services/components/nautical-consulting";
import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";
import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";

export default function NauticalConsultingPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // Aseguramos que i18next esté cargado
  }, []);
  if (!isLoaded) return null;

  return (
    <>
      <NextSeo
        title="Logística de carga Marítima y Aérea | Menorca Yacht Brokers"
        description="¿Quieres importar o exportar cualquier tipo de carga? ¡Nosotros te lo gestionamos! Contacta con nosotros para más información."
        canonical={process.env.VERCEL_URL + "/nautical-consulting"}
        openGraph={{
          url: process.env.VERCEL_URL + "/nautical-consulting",
          title:
            "Logística Marítima en Menorca | Cargo y Servicios Personalizados",
          description:
            "¿Quieres importar o exportar cualquier tipo de carga? ¡Nosotros te lo gestionamos! Contacta con nosotros para más información.",
          images: [
            {
              url: `${process.env.VERCEL_URL}/img/nautical-consulting.jpg`,
              width: 846,
              height: 634,
              alt: "Menorca Yacht Brokers",
              type: "image/jpg",
            },
          ],
          siteName: "Menorca Yacht Brokers",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Header sticky={false} isTransparent={true} />
      <NauticalConsulting />
      <Footer />
    </>
  );
}

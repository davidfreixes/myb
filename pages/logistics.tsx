import Logistics from "@/client/general/services/components/logistics";
import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";
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
        title="Logística de carga Marítima y Aérea | Menorca Yacht Brokers"
        description="¿Quieres importar o exportar cualquier tipo de carga? ¡Nosotros te lo gestionamos! Contacta con nosotros para más información."
        canonical={process.env.VERCEL_URL + "/logistics"}
        openGraph={{
          url: process.env.VERCEL_URL + "/logistics",
          title:
            "Logística Marítima en Menorca | Cargo y Servicios Personalizados",
          description:
            "¿Quieres importar o exportar cualquier tipo de carga? ¡Nosotros te lo gestionamos! Contacta con nosotros para más información.",
          images: [
            {
              url: `${process.env.VERCEL_URL}/img/logistics.jpg`,
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
      <Logistics />
      <Footer />
    </>
  );
}

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
        title="Inspección y Tasación de Barcos y Yates en Menorca | Menorca Yacht Brokers"
        description="Servicios especializados de inspección y tasación marítima para compradores y vendedores"
        canonical={process.env.VERCEL_URL + "/inspections"}
        openGraph={{
          url: process.env.VERCEL_URL + "/inspections",
          title: "Inspección y Tasación de Barcos y Yates en Menorca",
          description:
            "Servicios especializados de inspección y tasación marítima para compradores y vendedores",
          images: [
            {
              url: `${process.env.VERCEL_URL}/img/inspections.jpg`,
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
      <Inspections />
      <Footer />
    </>
  );
}

import BunkerSupplyPage from "@/client/general/services/components/bunker-supply";
import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";
import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";

export default function ShipBrokerPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // Aseguramos que i18next esté cargado
  }, []);
  if (!isLoaded) return null;

  return (
    <>
      <NextSeo
        title="Menorca Brokers | Suministro de Combustible para Barcos en Menorca"
        description="Suministramos combustible para barcos en la isla de Menorca y el resto de España. Contacta con nosotros para más información."
        canonical={process.env.VERCEL_URL + "/bunker-supply"}
        openGraph={{
          url: process.env.VERCEL_URL + "/bunker-supply",
          title: "Suministro de Combustible marino en Menorca",
          description:
            "Suministramos combustible para barcos en la isla de Menorca y el resto de España. Contacta con nosotros para más información.",
          images: [
            {
              url: `${process.env.VERCEL_URL}/img/bunker-supply.jpg`,
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
      <BunkerSupplyPage />
      <Footer />
    </>
  );
}

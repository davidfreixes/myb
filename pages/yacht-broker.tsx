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
        title="Yacht Broker en Menorca | Compra y Venta de Yates de Lujo"
        description="Compra y vende yates de lujo en Menorca con el mejor asesoramiento náutico. Accede a embarcaciones exclusivas y servicios de gestión integral."
        canonical="https://www.menorcayachtbrokers.com/yacht-broker"
        openGraph={{
          url: "https://www.menorcayachtbrokers.com/yacht-broker",
          title: "Yacht Broker en Menorca | Compra y Venta de Yates de Lujo",
          description:
            "Compra y vende yates de lujo en Menorca con el mejor asesoramiento náutico. Accede a embarcaciones exclusivas y servicios de gestión integral.",
          images: [
            {
              url: "https://www.menorcayachtbrokers.com/img/logo.png",
              width: 1200,
              height: 630,
              alt: "Menorca Yacht Brokers - Compra y Venta de Yates",
              type: "image/png",
            },
          ],
          siteName: "Menorca Yacht Brokers",
        }}
        twitter={{
          handle: "@menorcayachts",
          site: "@menorcayachts",
          cardType: "summary_large_image",
        }}
      />
      ;
      <Header sticky={false} isTransparent={true} />
      <YachtBroker />
      <Footer />
    </>
  );
}

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
        title="Yacht Broker | Compra y Venta de Yates en Menorca"
        description="Especialistas en compra y venta de yates en Menorca. Amplia gama de embarcaciones de lujo y asesoramiento personalizado. "
        canonical={process.env.VERCEL_URL + "/yackt-broker"}
        openGraph={{
          url: process.env.VERCEL_URL + "/yackt-broker",
          title: "Yacht Broker | Compra y Venta de Yates en Menorca",
          description:
            "Especialistas en compra y venta de yates en Menorca. Amplia gama de embarcaciones de lujo y asesoramiento personalizado. ",
          images: [
            {
              url: `${process.env.VERCEL_URL}/img/yacht-broker.jpg`,
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
      <YachtBroker />
      <Footer />
    </>
  );
}

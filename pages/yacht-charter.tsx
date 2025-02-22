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
        title="Yacht Charter en Menorca | Alquila tu Barce en Menorca"
        description="Alquila yates de lujo en Menorca con Menorca Yacht Brokers. Disfruta de rutas personalizadas, tripulación profesional y servicios premium."
        canonical={process.env.VERCEL_URL + "/yacht-charter"}
        openGraph={{
          url: process.env.VERCEL_URL + "/yacht-charter",
          title: "Yacht Charter en Menorca | Alquila tu Barce en Menorca",
          description:
            "Alquila yates de lujo en Menorca con Menorca Yacht Brokers. Disfruta de rutas personalizadas, tripulación profesional y servicios premium.",
          images: [
            {
              url: `${process.env.VERCEL_URL}/img/yacht-charter.jpg`,
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
      <YachtCharter />
      <Footer />
    </>
  );
}

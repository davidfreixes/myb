import ValueAddedServices from "@/client/general/services/components/added-value";
import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";
import { useEffect, useState } from "react";

export default function ValueAddedServicesPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // Aseguramos que i18next esté cargado
  }, []);
  if (!isLoaded) return null;

  return (
    <>
      <Header sticky={false} isTransparent={true} />
      <ValueAddedServices />
      <Footer />
    </>
  );
}

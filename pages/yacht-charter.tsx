import YachtCharter from "@/client/general/services/components/yacht-charter";
import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";
import { useEffect, useState } from "react";

export default function YachtCharterPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // Aseguramos que i18next esté cargado
  }, []);
  if (!isLoaded) return null;

  return (
    <>
      <Header sticky={false} isTransparent={true} />
      <YachtCharter />
      <Footer />
    </>
  );
}

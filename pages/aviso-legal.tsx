import LegalNotice from "@/client/general/company/components/legal-notice";
import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";
import { useEffect, useState } from "react";

export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(`../messages/${context.locale}.json`)).default,
    },
  };
}

export default function LegalNoticePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // Aseguramos que i18next esté cargado
  }, []);
  if (!isLoaded) return null;

  return (
    <>
      <Header sticky={false} isTransparent={true} />
      <LegalNotice />
      <Footer />
    </>
  );
}

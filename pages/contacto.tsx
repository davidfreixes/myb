import ContactPage from "@/client/general/home/contact";
import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";

export default function LegalNoticePage() {
  return (
    <>
      <Header sticky={false} isTransparent={true} />
      <ContactPage />
      <Footer />
    </>
  );
}

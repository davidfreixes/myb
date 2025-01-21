import PrivacyPolicy from "@/client/general/company/components/privacy-policy";
import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";

export default function LegalNoticePage() {
  return (
    <>
      <Header sticky={false} isTransparent={true} />
      <PrivacyPolicy />
      <Footer />
    </>
  );
}

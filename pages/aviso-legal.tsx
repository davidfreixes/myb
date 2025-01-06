import LegalNotice from "@/client/general/company/legal-notice";
import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";

export default function LegalNoticePage() {
  return (
    <>
      <Header sticky={false} isTransparent={true} />
      <LegalNotice />
      <Footer />
    </>
  );
}

import ConditionsAndRates from "@/client/general/company/components/conditions-and-rates";
import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";

export default function LegalNoticePage() {
  return (
    <>
      <Header sticky={false} isTransparent={true} />
      <ConditionsAndRates />
      <Footer />
    </>
  );
}

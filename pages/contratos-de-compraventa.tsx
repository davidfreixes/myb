import PurchaseAndSale from "@/client/general/company/components/purchase-and-sale";
import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";

export default function LegalNoticePage() {
  return (
    <>
      <Header sticky={false} isTransparent={true} />
      <PurchaseAndSale />
      <Footer />
    </>
  );
}

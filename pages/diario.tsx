import PortDaily from "@/client/general/company/components/port-daily";
import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";

export default function InspectionsPage() {
  return (
    <>
      <Header sticky={false} isTransparent={true} />
      <PortDaily />
      <Footer />
    </>
  );
}

import ValueAddedServices from "@/client/general/services/added-value";
import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";

export default function YachtBrokerPage() {
  return (
    <>
      <Header sticky={false} isTransparent={true} />
      <ValueAddedServices />
      <Footer />
    </>
  );
}

import BunkerSupplyPage from "@/client/general/services/bunker-supply";
import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";

export default function ShipBrokerPage() {
  return (
    <>
      <Header sticky={false} isTransparent={true} />
      <BunkerSupplyPage />
      <Footer />
    </>
  );
}

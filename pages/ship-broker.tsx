import ShipBroker from "@/client/general/services/ship-broker";
import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";

export default function ShipBrokerPage() {
  return (
    <>
      <Header sticky={false} isTransparent={true} />
      <ShipBroker />
      <Footer />
    </>
  );
}

import YachtBroker from "@/client/general/services/components/yacht-broker";
import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";

export default function YachtBrokerPage() {
  return (
    <>
      <Header sticky={false} isTransparent={true} />
      <YachtBroker />
      <Footer />
    </>
  );
}

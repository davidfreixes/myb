import YachtCharter from "@/client/general/services/yacht-charter";
import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";

export default function YachtBrokerPage() {
  return (
    <>
      <Header sticky={false} isTransparent={true} />
      <YachtCharter />
      <Footer />
    </>
  );
}

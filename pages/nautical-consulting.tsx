import NauticalConsulting from "@/client/general/services/nautical-consulting";
import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";

export default function YachtBrokerPage() {
  return (
    <>
      <Header sticky={false} isTransparent={true} />
      <NauticalConsulting />
      <Footer />
    </>
  );
}
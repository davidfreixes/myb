import AboutUs from "@/client/general/company/components/about-us";
import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";

export default function ShipBrokerPage() {
  return (
    <>
      <Header sticky={false} isTransparent={true} />
      <AboutUs />
      <Footer />
    </>
  );
}

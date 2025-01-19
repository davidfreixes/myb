import AboutUs from "@/client/home/components/about-us";
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

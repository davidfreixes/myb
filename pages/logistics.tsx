import Logistics from "@/client/general/services/logistics";
import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";

export default function LogisticsPage() {
  return (
    <>
      <Header sticky={false} isTransparent={true} />
      <Logistics />
      <Footer />
    </>
  );
}

import Inspections from "@/client/general/services/components/inspections";
import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";

export default function InspectionsPage() {
  return (
    <>
      <Header sticky={false} isTransparent={true} />
      <Inspections />
      <Footer />
    </>
  );
}

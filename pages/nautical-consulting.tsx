import NauticalConsulting from "@/client/general/services/components/nautical-consulting";
import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";

export default function NauticalConsultingPage() {
  return (
    <>
      <Header sticky={false} isTransparent={true} />
      <NauticalConsulting />
      <Footer />
    </>
  );
}
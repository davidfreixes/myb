import YachtCharter from "@/client/general/services/components/yacht-charter";
import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";

export default function YachtCharterPage() {
  return (
    <>
      <Header sticky={false} isTransparent={true} />
      <YachtCharter />
      <Footer />
    </>
  );
}

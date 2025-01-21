import Partners from "@/client/general/company/components/suppliers-distributors";
import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";

export default function PartnersPage() {
  return (
    <>
      <Header sticky={false} isTransparent={true} />
      <Partners />
      <Footer />
    </>
  );
}

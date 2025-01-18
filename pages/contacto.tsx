import Contact from "@/client/general/home/contact";
import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";

export default function ContactPage() {
  return (
    <>
      <Header sticky={false} isTransparent={true} />
      <Contact />
      <Footer />
    </>
  );
}

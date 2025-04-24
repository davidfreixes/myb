import AboutUs from "@/client/general/company/components/about-us";
import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";

export async function getStaticProps(context) {
  const homeMessages = (
    await import(`../public/locales/company/${context.locale}.json`)
  ).default;

  const layoutMessages = (
    await import(`../public/locales/layout/${context.locale}.json`)
  ).default;

  const contactMessages = (
    await import(`../public/locales/contact/${context.locale}.json`)
  ).default;

  return {
    props: {
      messages: {
        ...layoutMessages,
        ...homeMessages,
        ...contactMessages,
      },
    },
  };
}

export default function ShipBrokerPage() {
  return (
    <>
      <Header sticky={false} isTransparent={true} />
      <AboutUs />
      <Footer />
    </>
  );
}

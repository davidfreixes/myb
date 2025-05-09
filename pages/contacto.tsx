import Contact from "@/client/general/contact/contact";
import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";

export async function getStaticProps(context) {
  const homeMessages = (
    await import(`../public/locales/contact/${context.locale}.json`)
  ).default;

  const layoutMessages = (
    await import(`../public/locales/layout/${context.locale}.json`)
  ).default;

  return {
    props: {
      messages: {
        ...layoutMessages,
        ...homeMessages,
      },
    },
  };
}

export default function ContactPage() {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_CAPTCHA_CLIENT}`;
  //   script.async = true;
  //   script.defer = true;
  //   script.onload = () => console.log("reCAPTCHA cargado");
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <>
      <Header sticky={false} isTransparent={true} />
      <Contact />
      <Footer />
    </>
  );
}

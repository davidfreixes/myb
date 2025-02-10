import Contact from "@/client/general/contact/contact";
import { Footer } from "@/client/layout/components/footer";
import { Header } from "@/client/layout/components/header";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // Aseguramos que i18next esté cargado
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_CAPTCHA_CLIENT}`;
    script.async = true;
    script.defer = true;
    script.onload = () => console.log("reCAPTCHA cargado");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  if (!isLoaded) return null;

  return (
    <>
      <Header sticky={false} isTransparent={true} />
      <Contact />
      <Footer />
    </>
  );
}

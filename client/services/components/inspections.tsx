import { NAVIGATION_LINKS } from "@/utils/navigation";
import { Button } from "@mantine/core";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import ContactModal from "../../general/contact/modal/contactModal";

export default function Inspections() {
  const [contactModalOpened, setContactModalOpened] = useState(false);
  const t = useTranslations("inspections");
  const locale = useLocale();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[340px] md:h-[60vh] w-full">
        <Image
          src="/img/inspections.jpg"
          alt="Inspecciones y tasaciones de barcos"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-0 sm:px-4 h-full flex flex-col justify-center md:max-w-[1400px] mt-3">
          <div className="max-w-3xl">
            <div className="space-y-3 md:space-y-4">
              <h1 className="font-montserrat text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-primary">
                {t("hero.title")}
              </h1>
              <h2 className="font-montserrat sm:text-lg md:text-xl text-white">
                {t.rich("hero.subtitle", {
                  p: (chunks) => <span className="text-primary">{chunks}</span>,
                })}
              </h2>
              <Button
                unstyled
                onClick={() => setContactModalOpened(true)}
                className="w-full sm:w-auto bg-primary hover:bg-transparent hover:text-white hover:border-primary hover:border border-primary border text-black font-normal text-sm sm:text-base py-2 px-4 rounded transition-colors duration-200"
              >
                {t("cta.button")}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-0 sm:px-4 py-12 md:py-12 md:max-w-[1400px] ">
        <div className="prose prose-lg max-w-none">
          <p className="font-montserrat text-lg md:text-xl text-gray-700 mb-12">
            {t.rich("intro", {
              p: (chunks) => <span className="text-primary">{chunks}</span>,
            })}
          </p>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-auto bg-white p-6 rounded-lg shadow-lg border">
              <h2 className="text-3xl text-primary font-montserrat mb-4">
                {t("services.maritimeInspections.title")}
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  {t("services.maritimeInspections.description")}
                </p>
                <div className="space-y-2">
                  <h4 className="font-montserrat text-lg text-primary">
                    {t("services.maritimeInspections.process.title")}
                  </h4>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>{t("services.maritimeInspections.process.items.0")}</li>
                    <li>{t("services.maritimeInspections.process.items.1")}</li>
                    <li>{t("services.maritimeInspections.process.items.2")}</li>
                    <li>{t("services.maritimeInspections.process.items.3")}</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-montserrat text-lg text-primary">
                    {t("services.maritimeInspections.conventions.title")}
                  </h4>
                  <p className="text-gray-700">
                    {t("services.maritimeInspections.conventions.description")}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-auto bg-white p-6 rounded-lg shadow-lg border">
              <h2 className="text-3xl text-primary font-montserrat mb-4">
                {t("services.maritimeValuations.title")}
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  {t("services.maritimeValuations.description")}
                </p>
                <div className="space-y-2">
                  <h4 className="font-montserrat text-lg text-primary">
                    {t("services.maritimeValuations.factors.title")}
                  </h4>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>{t("services.maritimeValuations.factors.items.0")}</li>
                    <li>{t("services.maritimeValuations.factors.items.1")}</li>
                    <li>{t("services.maritimeValuations.factors.items.2")}</li>
                    <li>{t("services.maritimeValuations.factors.items.3")}</li>
                    <li>{t("services.maritimeValuations.factors.items.4")}</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-montserrat text-lg text-primary">
                    {t("services.maritimeValuations.types.title")}
                  </h4>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>{t("services.maritimeValuations.types.items.0")}</li>
                    <li>{t("services.maritimeValuations.types.items.1")}</li>
                    <li>{t("services.maritimeValuations.types.items.2")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <p className="font-montserrat text-lg md:text-xl text-gray-700 mb-8">
            {t("outro.description")}
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="p-6 rounded-lg text-center inset-0 bg-gradient-to-l from-[#fff6d399] via-[#ffe47acc] to-[#f8ce24c2] sm:p-8 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-montserrat text-darkTitle mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-lg text-gray-700 mb-6">{t("cta.description")}</p>
          <a
            href={NAVIGATION_LINKS.CONTACTO(locale)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              unstyled
              className="w-full sm:w-auto bg-primary hover:bg-transparent hover:text-black hover:border-primary hover:border border-primary border text-black font-normal text-sm sm:text-base py-2 px-4 sm:py-3 sm:px-6 rounded transition-colors duration-200"
            >
              {t("cta.button")}
            </Button>
          </a>
        </div>
      </div>
      <ContactModal
        opened={contactModalOpened}
        onClose={() => setContactModalOpened(false)}
      />
    </div>
  );
}

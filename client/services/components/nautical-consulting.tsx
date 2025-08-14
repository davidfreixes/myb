"use client"; // Marcamos este archivo como componente cliente debido a las interacciones

import { NAVIGATION_LINKS } from "@/utils/navigation";
import { Button } from "@mantine/core";
import { Compass, FileText, Route, Scale, Wrench } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import ContactModal from "../../general/contact/modal/contactModal";

// Componente principal con contenido visible sin JavaScript
export default function NauticalConsulting() {
  const [contactModalOpened, setContactModalOpened] = useState(false);
  const t = useTranslations("nauticalConsulting");
  const locale = useLocale();

  const services = [
    {
      icon: <Wrench className="w-7 h-7 text-primary mb-4" />,
      title: t("services.technicalConsulting.title"),
      description: t("services.technicalConsulting.description"),
    },
    {
      icon: <FileText className="w-7 h-7 text-primary mb-4" />,
      title: t("services.legalAssistance.title"),
      description: t("services.legalAssistance.description"),
    },
    {
      icon: <Compass className="w-7 h-7 text-primary mb-4" />,
      title: t("services.feasibilityAnalysis.title"),
      description: t("services.feasibilityAnalysis.description"),
    },
    {
      icon: <Scale className="w-7 h-7 text-primary mb-4" />,
      title: t("services.vesselValuation.title"),
      description: t("services.vesselValuation.description"),
    },
    {
      icon: <Route className="w-7 h-7 text-primary mb-4" />,
      title: t("services.routePlanning.title"),
      description: t("services.routePlanning.description"),
    },
  ];

  // Clases base sin animaciones para asegurar visibilidad sin JS
  const baseClasses = {
    heroContent: "max-w-3xl",
    mainContent: "prose prose-lg max-w-none",
    serviceCard: "bg-white p-6 rounded-lg shadow-lg",
    ctaSection:
      "inset-0 bg-gradient-to-l from-[#fff6d399] via-[#ffe47acc] to-[#f8ce24c2] p-6 rounded-lg text-center md:py-20",
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section - Contenido visible sin JS */}
      <div className="relative h-[330px] md:h-[60vh] w-full">
        <Image
          src="/img/nautical-consulting.jpg"
          alt="Asesoría náutica service"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center md:max-w-[1400px] mt-2 md:mt-0">
          <div className={baseClasses.heroContent}>
            <div className="space-y-3 md:space-y-4">
              <h1 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-primary">
                {t("hero.title")}
              </h1>
              <h2 className="font-montserrat text-sm sm:text-lg md:text-xl text-white">
                {t("hero.subtitle.text")}{" "}
                <span className="text-primary">
                  {t("hero.subtitle.highlight")}
                </span>{" "}
                {t("hero.subtitle.text2")}
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

      {/* Main Content - Contenido visible sin JS */}
      <div className="container mx-auto px-4 py-7 md:py-7 md:max-w-[1400px]">
        <div className={baseClasses.mainContent}>
          <p className="font-montserrat text-base md:text-lg text-gray-700 mb-7">
            {t("intro.description")}
          </p>

          {/* Services Grid - Contenido visible sin JS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-7">
            {services.map((service, index) => (
              <div key={index} className={baseClasses.serviceCard}>
                <div className="flex gap-2">
                  {service.icon}
                  <h3 className="text-xl font-montserrat font-medium text-black mb-3">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section - Contenido visible sin JS */}
      <div className={baseClasses.ctaSection}>
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
      <ContactModal
        opened={contactModalOpened}
        onClose={() => setContactModalOpened(false)}
      />
    </div>
  );
}

import { NAVIGATION_LINKS } from "@/utils/navigation";
import { Button } from "@mantine/core";
import {
  Box,
  CheckCircle,
  Clock,
  DollarSign,
  FileText,
  Globe,
  CloudLightningIcon as Lightning,
  MapPin,
  Shield,
  User,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import ContactModal from "../../general/contact/modal/contactModal";

export default function Logistics() {
  const [contactModalOpened, setContactModalOpened] = useState(false);
  const t = useTranslations("logistics");
  const locale = useLocale();

  const doorToDoorServices = [
    {
      icon: <FileText className="w-6 h-6 text-primary" />,
      title: t("doorToDoor.services.pickup.title"),
      description: t("doorToDoor.services.pickup.description"),
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
      title: t("doorToDoor.services.documentation.title"),
      description: t("doorToDoor.services.documentation.description"),
    },
    {
      icon: <Lightning className="w-6 h-6 text-primary" />,
      title: t("doorToDoor.services.international.title"),
      description: t("doorToDoor.services.international.description"),
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: t("doorToDoor.services.delivery.title"),
      description: t("doorToDoor.services.delivery.description"),
    },
  ];

  const incoterms = [
    {
      icon: <Box className="w-6 h-6 text-primary" />,
      title: t("incoterms.terms.exw.title"),
      description: t("incoterms.terms.exw.description"),
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
      title: t("incoterms.terms.fob.title"),
      description: t("incoterms.terms.fob.description"),
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: t("incoterms.terms.cif.title"),
      description: t("incoterms.terms.cif.description"),
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: t("incoterms.terms.dap.title"),
      description: t("incoterms.terms.dap.description"),
    },
  ];

  const whyChooseUs = [
    {
      icon: <Globe className="w-6 h-6 text-darkTitle" />,
      title: t("whyChooseUs.reasons.globalCoverage.title"),
      description: t("whyChooseUs.reasons.globalCoverage.description"),
      align: "left",
    },
    {
      icon: <Clock className="w-6 h-6 text-darkTitle" />,
      title: t("whyChooseUs.reasons.support.title"),
      description: t("whyChooseUs.reasons.support.description"),
      align: "right",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-darkTitle" />,
      title: t("whyChooseUs.reasons.costOptimization.title"),
      description: t("whyChooseUs.reasons.costOptimization.description"),
      align: "left",
    },
    {
      icon: <User className="w-6 h-6 text-darkTitle" />,
      title: t("whyChooseUs.reasons.personalizedAttention.title"),
      description: t("whyChooseUs.reasons.personalizedAttention.description"),
      align: "right",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[340px] sm:h-[50vh] md:h-[60vh] w-full">
        <div className="absolute inset-0">
          <Image
            src="/img/logistics.jpg"
            alt="Logística marítima service"
            fill
            className="object-cover"
            priority
            sizes="(min-width: 1024px) 100vw"
          />
          <noscript>
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "url(/img/logistics.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </noscript>
        </div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-0 sm:px-4 h-full flex flex-col justify-center md:max-w-[1400px] mt-2 md:mt-0">
          <div className="max-w-3xl">
            <div className="space-y-2 md:space-y-4">
              <h1 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-primary">
                {t("hero.title")}
              </h1>
              <h2 className="font-montserrat text-base sm:text-lg md:text-xl text-white max-w-xl">
                {t("hero.subtitle.question")}{" "}
                <span className="text-primary">
                  {t("hero.subtitle.answer")}
                </span>
              </h2>
              <Button
                unstyled
                className="w-full sm:w-auto bg-primary hover:bg-primary/75 text-black font-normal text-sm md:text-lg py-2 px-4 rounded"
              >
                {t("cta.button")}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 sm:py-12 md:max-w-[1400px]">
        <div className="prose prose-lg max-w-none">
          <p className="font-montserrat text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-12">
            {t("intro.text")}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-montserrat font-medium text-primary text-center mb-8 sm:mb-8">
                {t("doorToDoor.title")}
              </h2>

              {/* Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12 border p-4 sm:p-5 rounded-lg shadow-lg">
                {doorToDoorServices.map((service, index) => (
                  <div key={index} className="flex gap-3 sm:gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 bg-opacity-20 flex items-center justify-center">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
                        {service.title}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Incoterms Section */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-montserrat font-medium text-primary text-center mb-8 sm:mb-8">
                {t("incoterms.title")}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12 border p-4 sm:p-5 rounded-lg shadow-lg">
                {incoterms.map((term, index) => (
                  <div key={index} className="flex gap-3 sm:gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 bg-opacity-20 flex items-center justify-center">
                      {term.icon}
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
                        {term.title}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600">
                        {term.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-8 sm:py-14 rounded-lg inset-0 bg-gradient-to-l from-[#fff6d399] via-[#ffe47acc] to-[#f8ce24c2]">
        <h3 className="text-2xl sm:text-3xl text-darkTitle font-montserrat mb-6 sm:mb-8 text-center px-4">
          {t("whyChooseUs.title")}
        </h3>
        <div className="flex justify-center px-4">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 max-w-4xl">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className={`flex ${
                  reason.align === "right"
                    ? "flex-row sm:flex-row-reverse"
                    : "flex-row"
                } gap-3 sm:gap-4 items-start`}
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 bg-opacity-20 flex items-center justify-center">
                  {reason.icon}
                </div>
                <div
                  className={`text-left ${
                    reason.align === "right" ? "sm:text-right" : ""
                  }`}
                >
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
                    {reason.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-12 sm:py-16 md:py-24">
        <div className="absolute inset-0">
          <Image
            src="/img/CTA-logistics.jpg"
            alt="Yacht at sunset"
            fill
            className="object-cover"
          />
          <noscript>
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "url(/img/CTA-logistics.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </noscript>
        </div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-montserrat text-primary mb-3 sm:mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-base sm:text-lg text-white mb-4 sm:mb-6">
            {t("cta.description")}
          </p>
          <a
            href={NAVIGATION_LINKS.CONTACTO(locale)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              unstyled
              className="w-full sm:w-auto bg-primary hover:bg-primary/75 text-black font-normal text-sm md:text-lg py-2 px-4 rounded"
            >
              {t("cta.button")}
            </Button>
          </a>
          <noscript>
            <a
              href="/contact"
              className="inline-block w-full sm:w-auto bg-primary text-black font-normal text-sm md:text-lg py-2 px-4 rounded"
            >
              {t("cta.button")}
            </a>
          </noscript>
        </div>
        <ContactModal
          opened={contactModalOpened}
          onClose={() => setContactModalOpened(false)}
        />
      </div>
    </div>
  );
}

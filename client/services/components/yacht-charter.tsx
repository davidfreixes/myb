// YachtCharter.tsx (Server Component)
import { Container, Text } from "@mantine/core";
import {
  Anchor,
  Clock,
  Compass,
  Ship,
  Star,
  Sunset,
  Users,
} from "lucide-react";
import { Metadata } from "next";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

import { NAVIGATION_LINKS } from "@/utils/navigation";
import { Button } from "@mantine/core";

// Metadata para SEO
export const metadata: Metadata = {
  title: "Yacht Charter Services",
  description:
    "Premium yacht charter services with experienced crew and exclusive routes",
  openGraph: {
    title: "Yacht Charter Services",
    description:
      "Premium yacht charter services with experienced crew and exclusive routes",
    images: ["/img/discover.jpg"],
  },
};

// Componente principal como Server Component
export default function YachtCharter() {
  const t = useTranslations("yachtCharter");

  const whyChooseUs = [
    {
      title: t("whyChooseUs.reasons.fleet.title"),
      description: t("whyChooseUs.reasons.fleet.description"),
      icon: <Ship className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
    {
      title: t("whyChooseUs.reasons.experience.title"),
      description: t("whyChooseUs.reasons.experience.description"),
      icon: <Star className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
    {
      title: t("whyChooseUs.reasons.crew.title"),
      description: t("whyChooseUs.reasons.crew.description"),
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
    {
      title: t("whyChooseUs.reasons.routes.title"),
      description: t("whyChooseUs.reasons.routes.description"),
      icon: <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
  ];

  const services = [
    {
      title: t("services.list.dailyRental.title"),
      description: t("services.list.dailyRental.description"),
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
    {
      title: t("services.list.thematicExcursions.title"),
      description: t("services.list.thematicExcursions.description"),
      icon: <Sunset className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
    {
      title: t("services.list.withoutLicense.title"),
      description: t("services.list.withoutLicense.description"),
      icon: <Ship className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
    {
      title: t("services.list.support.title"),
      description: t("services.list.support.description"),
      icon: <Anchor className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
  ];

  const questions = [
    {
      question: t("faq.licenseRequired.question"),
      answer: t("faq.licenseRequired.answer"),
    },
    {
      question: t("faq.bestTimeToRent.question"),
      answer: t("faq.bestTimeToRent.answer"),
    },
    {
      question: t("faq.boatTypes.question"),
      answer: t("faq.boatTypes.answer"),
    },
    {
      question: t("faq.rentalDuration.question"),
      answer: t("faq.rentalDuration.answer"),
    },
    {
      question: t("faq.recommendedRoutes.question"),
      answer: t("faq.recommendedRoutes.answer"),
    },
    {
      question: t("faq.includedServices.question"),
      answer: t("faq.includedServices.answer"),
    },
    {
      question: t("faq.howToBook.question"),
      answer: t("faq.howToBook.answer"),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[330px] md:h-[60vh]  w-full">
        <div className="absolute inset-0">
          <video
            src="/videos/hero-video.mp4"
            className="w-full h-full object-cover z-0"
            autoPlay
            playsInline
            muted
            loop
            poster="/img/hero-poster.jpg" // Imagen de fallback para SEO
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-0 sm:px-4 h-full flex flex-col justify-center md:max-w-[1400px]">
          <div className="max-w-4xl">
            <div className="space-y-3 sm:space-y-4 mt-10 md:mt-0">
              <h1 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-primary">
                {t("hero.title")}
              </h1>
              <h2 className="font-montserrat text-base sm:text-lg md:text-xl text-white sm:pb-2">
                {t("hero.subtitle")}
              </h2>
              <ContactButton text={t("cta.button")} />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section with Background */}
      <div className="container px-0 sm:px-6 py-12 sm:py-16 md:py-18 mx-auto bg-gray-50 md:max-w-[1400px]">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-primary">
            {t("services.title")}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border shadow-lg hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-primary/10 p-2 sm:p-3 rounded-full w-fit mb-4 sm:mb-6">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-montserrat font-medium text-black mb-2 sm:mb-4">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-700">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Introduction Section with Image */}
      <div className="inset-0 bg-gradient-to-l from-[#fff6d399] via-[#ffe47acc] to-[#f8ce24c2]">
        <div className="container mx-auto px-0 sm:px-6 py-12 sm:py-16 md:py-20 md:max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="w-full">
              <div className="relative h-[200px] sm:h-[250px] md:h-[300px] w-full rounded-lg overflow-hidden">
                <Image
                  src="/img/discover.jpg"
                  alt="Luxury yacht interior"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority
                />
              </div>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl font-montserrat text-black">
                {t("discover.title")}
              </h2>
              <p className="text-base sm:text-lg text-gray-700">
                {t("discover.description")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto px-0 sm:px-6 py-12 sm:py-16 md:py-20 md:max-w-[1400px]">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-primary mb-4">
            {t("whyChooseUs.title")}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-primary/10 p-2 sm:p-3 rounded-full">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-montserrat font-medium text-black mb-2 sm:mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*Faq Section */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-primary mb-4">
              {t("faq.title")}
            </h2>
            <Text className="text-gray-600 text-lg">
              {t("faq.description")}
            </Text>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Versión estática visible para SEO y usuarios sin JavaScript */}
            <div className="max-w-5xl mx-auto">
              {questions.map((item, index) => (
                <div
                  key={`faq-static-${index}`}
                  className="mb-6 p-4 border border-gray-200 rounded-lg"
                >
                  <h3 className="font-semibold mb-2 flex items-center">
                    <span className="text-[#FFB800] font-mono text-lg mr-2">
                      {String(index + 1).padStart(2, "0")}.
                    </span>
                    {item.question}
                  </h3>
                  <p className="text-gray-600 pl-8">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA Section with Background Image */}
      <div className="relative py-12 sm:py-16 md:py-20">
        <Image
          src="/img/contact.jpg"
          alt="Yacht at sunset"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-0 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-primary mb-4 sm:mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-base sm:text-lg text-white mb-4 sm:mb-6">
              {t("cta.description")}
            </p>
            <ContactButton text={t("cta.button")} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Botón de contacto con modal
export function ContactButton({ text }) {
  const locale = useLocale();

  return (
    <>
      <a
        href={NAVIGATION_LINKS.CONTACTO(locale)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          unstyled
          className="mt-2 w-full sm:w-auto font-semibold bg-primary hover:bg-transparent hover:text-white hover:border-primary hover:border border-primary border text-black font-normal text-sm sm:text-base py-2 px-4 rounded transition-colors duration-200"
        >
          {text}
        </Button>
      </a>
    </>
  );
}

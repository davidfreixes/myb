"use client";

import { Button } from "@mantine/core";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import ContactModal from "../../general/contact/modal/contactModal";

export default function ValueAddedServices() {
  const [contactModalOpened, setContactModalOpened] = useState(false);
  const t = useTranslations("valueAddedServices");

  // Definir los servicios fuera del JSX para mejorar la legibilidad
  const services = [
    {
      title: t("services.airportTransfer.title"),
      image: "/img/airport-transfer.jpg",
      description: t("services.airportTransfer.description"),
      features: [
        t("services.airportTransfer.features.0"),
        t("services.airportTransfer.features.1"),
        t("services.airportTransfer.features.2"),
      ],
      delay: 0.4,
    },
    {
      title: t("services.touristRoutes.title"),
      image: "/img/tourist-routes.jpg",
      description: t("services.touristRoutes.description"),
      features: [
        t("services.touristRoutes.features.0"),
        t("services.touristRoutes.features.1"),
        t("services.touristRoutes.features.2"),
        t("services.touristRoutes.features.3"),
      ],
      delay: 0.5,
    },
    {
      title: t("services.catering.title"),
      image: "/img/catering.jpg",
      description: t("services.catering.description"),
      features: [
        t("services.catering.features.0"),
        t("services.catering.features.1"),
        t("services.catering.features.2"),
      ],
      delay: 0.6,
    },
    {
      title: t("services.assistance.title"),
      image: "/img/assistance.jpg",
      description: t("services.assistance.description"),
      features: [
        t("services.assistance.features.0"),
        t("services.assistance.features.1"),
      ],
      delay: 0.7,
    },
    {
      title: t("services.events.title"),
      image: "/img/events.jpg",
      description: t("services.events.description"),
      features: [
        t("services.events.features.0"),
        t("services.events.features.1"),
      ],
      delay: 0.8,
    },
  ];

  // Puntos de "Por qué elegirnos"
  const whyChooseUsPoints = [
    {
      title: t("whyChooseUs.points.0.title"),
      description: t("whyChooseUs.points.0.description"),
    },
    {
      title: t("whyChooseUs.points.1.title"),
      description: t("whyChooseUs.points.1.description"),
    },
    {
      title: t("whyChooseUs.points.2.title"),
      description: t("whyChooseUs.points.2.description"),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Contenido visible sin JavaScript */}
      <section className="relative h-[350px] sm:h-[50vh] w-full">
        <Image
          src="/img/value-added-services.jpg"
          alt="Servicios de valor añadido"
          fill
          className="object-cover"
          priority
          sizes="(min-width: 1024px) 100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center max-w-[1400px] mt-2 md:mt-0">
          <div className="max-w-4xl">
            <div className="space-y-3 md:space-y-4 mt-3">
              <h1 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-primary">
                {t("hero.title")}
              </h1>
              <h2 className="font-montserrat text-sm sm:text-lg md:text-xl text-white">
                {t("hero.subtitle")}
              </h2>
              <Button
                unstyled
                onClick={() => setContactModalOpened(true)}
                className="w-full sm:w-auto bg-primary hover:bg-transparent border hover:text-white border-primary hover:border-primary hover:border text-black font-medium text-base sm:text-lg py-2 px-8 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                {t("cta.button")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Contenido visible sin JavaScript */}
      <main className="container mx-auto px-4 py-8 sm:py-10 md:py-12 lg:py-16 max-w-[1400px]">
        <div className="prose prose-lg max-w-none">
          {/* Services Grid - Diseño mejorado y más profesional */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16">
            {services.map((service, index) => (
              <article
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl border border-gray-100 flex flex-col h-full"
              >
                {/* Contenedor de la imagen con borde superior redondeado */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    sizes="(min-width: 1280px) 384px, (min-width: 1024px) 341px, (min-width: 768px) 304px, (min-width: 640px) 284px, calc(100vw - 32px)"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-0 left-0 right-0 text-xl font-montserrat font-semibold text-white p-4 z-10">
                    {service.title}
                  </h3>
                </div>

                {/* Contenido de la tarjeta */}
                <div className="p-5 flex-grow flex flex-col">
                  <p className="mb-4 text-gray-700">{service.description}</p>
                  <div className="mt-auto">
                    <h4 className="text-lg font-medium text-gray-900 mb-2">
                      Características:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Borde inferior con color de acento */}
                <div className="h-1 bg-primary w-full" />
              </article>
            ))}
          </section>

          {/* Why Choose Us Section */}
          <section className="max-w-6xl mx-auto bg-gray-50 rounded-xl shadow-md p-6 sm:p-8 my-12 sm:my-16 hover:shadow-lg transition-shadow duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-gray-900">
                  {t("whyChooseUs.title")}
                </h2>
                <ul className="space-y-4">
                  {whyChooseUsPoints.map((item, index) => (
                    <li key={index} className="flex flex-col space-y-1">
                      <span className="font-semibold text-primary text-lg">
                        {item.title}
                      </span>
                      <span className="text-gray-700">{item.description}</span>
                    </li>
                  ))}
                </ul>
                <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600">
                  &quot;{t("whyChooseUs.testimonial.quote")}&quot;
                  <footer className="font-semibold mt-2 text-gray-800">
                    {t("whyChooseUs.testimonial.author")}
                  </footer>
                </blockquote>
              </div>
              <div className="relative">
                <div className="w-64 h-64 mx-auto relative">
                  <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
                  <div className="relative w-full h-full">
                    <Image
                      src="/img/testimonial-charles.jpg"
                      alt="Charles Grange"
                      fill
                      className="object-cover rounded-full"
                      sizes="500px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#fff6d3] via-[#ffe47a] to-[#f8ce24] p-6 sm:p-10 rounded-lg text-center py-12 sm:py-16 md:py-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-gray-900 mb-4">
          {t("cta.title")}
        </h2>
        <p className="text-lg sm:text-xl text-gray-800 mb-6 max-w-3xl mx-auto">
          {t("cta.description")}
        </p>
        <Button
          unstyled
          onClick={() => setContactModalOpened(true)}
          className="bg-primary hover:bg-transparent border border-primary hover:border-primary hover:border text-black font-medium text-base sm:text-lg py-3 px-8 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          {t("cta.button")}
        </Button>
      </section>

      {/* Modal de contacto */}
      <ContactModal
        opened={contactModalOpened}
        onClose={() => setContactModalOpened(false)}
      />
    </div>
  );
}

import { NAVIGATION_LINKS } from "@/utils/navigation";
import { Button, Card } from "@mantine/core";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export default function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    {
      title: "Yacht Broker",
      description: (
        <>
          {t("servicesSection.services.0.description.parte1")}
          <br />
          <br />
          {t("servicesSection.services.0.description.parte2")}
        </>
      ),
      image: "/img/yacht-broker.jpg",
      link: `${NAVIGATION_LINKS.YACHT_BROKER}`,
    },
    {
      title: "Yacht Charter",
      description: (
        <>
          {t("servicesSection.services.1.description.parte1")}
          <br />
          <br />
          {t("servicesSection.services.1.description.parte2")}
        </>
      ),
      image: "/img/yacht-charter.jpg",
      link: `${NAVIGATION_LINKS.YACHT_CHARTER}`,
    },
    {
      title: "Bunker Supply",
      description: (
        <>
          {t("servicesSection.services.2.description.parte1")}
          <br />
          <br />
          {t("servicesSection.services.2.description.parte2")}
        </>
      ),
      image: "/img/ship-broker.jpg",
      link: `${NAVIGATION_LINKS.BUNKER_SUPPLY}`,
    },
    {
      title: t("servicesSection.services.3.title"),
      description: t("servicesSection.services.3.description"),
      image: "/img/inspections.jpg",
      link: `${NAVIGATION_LINKS.INSPECCIONES}`,
    },
    {
      title: t("servicesSection.services.4.title"),
      description: t("servicesSection.services.4.description"),
      image: "/img/logistics.jpg",
      link: `${NAVIGATION_LINKS.LOGÍSTICA}`,
    },
    {
      title: t("servicesSection.services.5.title"),
      description: t("servicesSection.services.5.description"),
      image: "/img/nautical-consulting.jpg",
      link: `${NAVIGATION_LINKS.ASESORIA_NAUTICA}`,
    },
    {
      title: t("servicesSection.services.6.title"),
      description: t("servicesSection.services.6.description"),
      image: "/img/value-added-services.jpg",
      link: `${NAVIGATION_LINKS.VALOR_AÑADIDO}`,
    },
  ];

  const refs = services.map(() => useRef(null));
  const inViewStates = refs.map((ref) => useInView(ref, { amount: 0.3 }));



  return (
    <section id="services-section" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-0 sm:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-medium text-primary mb-3 sm:mb-3">
            {t("servicesSection.header.title")}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            {t("servicesSection.header.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              ref={refs[index]}
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={
                inViewStates[index]
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex"
            >
              <Link href={service.link} className="w-full shadow-md">
                <Card className="h-full w-full flex flex-col shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                  <div className="relative h-48 sm:h-56 md:h-64">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-5 md:p-6 flex-grow flex flex-col">
                    <h3 className="font-montserrat text-primary text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 md:mb-4">
                      {service.title}
                    </h3>
                    <div className="text-gray-600 text-sm sm:text-base flex-grow mb-4 sm:mb-6">
                      {service.description}
                    </div>
                    <Button
                      unstyled
                      className="border-primary border-[1px] rounded text-primary hover:bg-primary hover:text-white p-1 text-sm sm:text-base w-full sm:w-auto md:w-auto"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {t("servicesSection.button")}
                    </Button>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

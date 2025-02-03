import { Button } from "@mantine/core";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ContactModal from "../../contact/modal/contactModal";

export default function ValueAddedServices() {
  const [contactModalOpened, setContactModalOpened] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Adjusted height and padding for mobile */}
      <div className="relative h-[45vh] sm:h-[50vh] md:h-[60vh] w-full ">
        <Image
          src="/img/value-added-services.jpg"
          alt="Servicios de valor añadido"
          fill
          className="object-cover"
          priority
          sizes="(min-width: 1024px) 1400px, 100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="space-y-2 md:space-y-4">
              <h1 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-medium tracking-tight text-primary">
                {t("valueAddedServices.hero.title")}
              </h1>
              <h2 className="font-montserrat text-base sm:text-lg md:text-xl text-white">
                {t("valueAddedServices.hero.subtitle")}
              </h2>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content - Adjusted padding and grid for mobile */}
      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12 lg:py-16 max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          {/* Services Grid - Modified for better mobile layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12">
            {[
              {
                title: t("valueAddedServices.services.airportTransfer.title"),
                image: "/img/airport-transfer.jpg",
                description: t(
                  "valueAddedServices.services.airportTransfer.description"
                ),
                features: [
                  t("valueAddedServices.services.airportTransfer.features.0"),
                  t("valueAddedServices.services.airportTransfer.features.1"),
                  t("valueAddedServices.services.airportTransfer.features.2"),
                ],
                delay: 0.4,
              },
              {
                title: t("valueAddedServices.services.touristRoutes.title"),
                image: "/img/tourist-routes.jpg",
                description: t(
                  "valueAddedServices.services.touristRoutes.description"
                ),
                features: [
                  t("valueAddedServices.services.touristRoutes.features.0"),
                  t("valueAddedServices.services.touristRoutes.features.1"),
                  t("valueAddedServices.services.touristRoutes.features.2"),
                  t("valueAddedServices.services.touristRoutes.features.3"),
                ],
                delay: 0.5,
              },
              {
                title: t("valueAddedServices.services.catering.title"),
                image: "/img/catering.jpg",
                description: t(
                  "valueAddedServices.services.catering.description"
                ),
                features: [
                  t("valueAddedServices.services.catering.features.0"),
                  t("valueAddedServices.services.catering.features.1"),
                  t("valueAddedServices.services.catering.features.2"),
                ],
                delay: 0.6,
              },
              {
                title: t("valueAddedServices.services.assistance.title"),
                image: "/img/assistance.jpg",
                description: t(
                  "valueAddedServices.services.assistance.description"
                ),
                features: [
                  t("valueAddedServices.services.assistance.features.0"),
                  t("valueAddedServices.services.assistance.features.1"),
                ],
                delay: 0.7,
              },
              {
                title: t("valueAddedServices.services.events.title"),
                image: "/img/events.jpg",
                description: t(
                  "valueAddedServices.services.events.description"
                ),
                features: [
                  t("valueAddedServices.services.events.features.0"),
                  t("valueAddedServices.services.events.features.1"),
                ],
                delay: 0.8,
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: service.delay }}
                className="group relative bg-gradient-to-br from-[#1a1a1aad] to-[#2d2d2d] rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border border-[#f1c001]/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#f1c001]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="text-xl sm:text-2xl font-montserrat mb-2 sm:mb-4 text-center text-[#f1c001] p-3 sm:p-4">
                  {service.title}
                </h3>
                <div className="relative h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 mx-auto mt-4 sm:mt-6">
                  <div className="absolute inset-0 rounded-full border-2 border-[#f1c001]/30" />
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="p-4 sm:p-6 text-white relative z-10">
                  <p className="mb-3 sm:mb-4 text-sm sm:text-base text-gray-300 group-hover:text-[#f1c001]">
                    {service.description}
                  </p>
                  <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-200">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="group-hover:text-[#f1c001] transition-colors duration-300"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Why Choose Us Section - Responsive adjustments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="max-w-6xl mx-auto bg-primary/20 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 my-8 sm:my-12 md:my-16 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-primary">
                  {t("valueAddedServices.whyChooseUs.title")}
                </h2>
                <ul className="space-y-3 sm:space-y-4">
                  {[
                    {
                      title: t("valueAddedServices.whyChooseUs.points.0.title"),
                      description: t(
                        "valueAddedServices.whyChooseUs.points.0.description"
                      ),
                    },
                    {
                      title: t("valueAddedServices.whyChooseUs.points.1.title"),
                      description: t(
                        "valueAddedServices.whyChooseUs.points.1.description"
                      ),
                    },
                    {
                      title: t("valueAddedServices.whyChooseUs.points.2.title"),
                      description: t(
                        "valueAddedServices.whyChooseUs.points.2.description"
                      ),
                    },
                  ].map((item, index) => (
                    <li key={index} className="flex flex-col space-y-1">
                      <span className="font-semibold text-primary text-base sm:text-lg">
                        {item.title}
                      </span>
                      <span className="text-gray-700 text-sm sm:text-base">
                        {item.description}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4 italic">
                  &quot;{t("valueAddedServices.whyChooseUs.testimonial.quote")}
                  &quot;
                  <p className="font-semibold mt-1 sm:mt-2">
                    {t("valueAddedServices.whyChooseUs.testimonial.author")}
                  </p>
                </div>
              </div>
              <div className="relative mt-4 md:mt-0">
                <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto relative">
                  <div className="absolute inset-0 rounded-full border-4 border-[#f1c001]/20" />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src="/img/testimonial-charles.jpg"
                      alt="Charles Grange"
                      fill
                      className="object-cover rounded-full"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* CTA Section - Mobile optimized */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="inset-0 bg-gradient-to-l from-[#fff6d399] via-[#ffe47acc] to-[#f8ce24c2] p-4 sm:p-6 rounded-lg text-center py-8 sm:py-12 md:py-20"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-montserrat text-darkTitle mb-2 sm:mb-4">
          {t("valueAddedServices.cta.title")}
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
          {t("valueAddedServices.cta.description")}
        </p>
        <Button
          unstyled
          onClick={() => setContactModalOpened(true)}
          className="w-full sm:w-auto bg-primary hover:bg-transparent hover:text-black hover:border-primary hover:border border-primary border text-black font-normal text-sm sm:text-base md:text-lg py-2 px-4 rounded transition-colors duration-200"
        >
          {t("valueAddedServices.cta.button")}
        </Button>
      </motion.div>
      <ContactModal
        opened={contactModalOpened}
        onClose={() => setContactModalOpened(false)}
      />
    </div>
  );
}

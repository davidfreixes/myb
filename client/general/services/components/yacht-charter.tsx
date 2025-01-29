import { Button } from "@mantine/core";
import { motion } from "framer-motion";
import {
  Anchor,
  Clock,
  Compass,
  Ship,
  Star,
  Sunset,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ContactModal from "../../contact/modal/contactModal";

export default function YachtCharter() {
  const [contactModalOpened, setContactModalOpened] = useState(false);
  const { t } = useTranslation();

  const whyChooseUs = [
    {
      title: t("yachtCharter.whyChooseUs.reasons.fleet.title"),
      description: t("yachtCharter.whyChooseUs.reasons.fleet.description"),
      icon: <Ship className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
    {
      title: t("yachtCharter.whyChooseUs.reasons.experience.title"),
      description: t("yachtCharter.whyChooseUs.reasons.experience.description"),
      icon: <Star className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
    {
      title: t("yachtCharter.whyChooseUs.reasons.crew.title"),
      description: t("yachtCharter.whyChooseUs.reasons.crew.description"),
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
    {
      title: t("yachtCharter.whyChooseUs.reasons.routes.title"),
      description: t("yachtCharter.whyChooseUs.reasons.routes.description"),
      icon: <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
  ];

  const services = [
    {
      title: t("yachtCharter.services.list.dailyRental.title"),
      description: t("yachtCharter.services.list.dailyRental.description"),
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
    {
      title: t("yachtCharter.services.list.thematicExcursions.title"),
      description: t("yachtCharter.services.list.thematicExcursions.description"),
      icon: <Sunset className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
    {
      title: t("yachtCharter.services.list.support.title"),
      description: t("yachtCharter.services.list.support.description"),
      icon: <Anchor className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] w-full">
        <Image
          src="/img/yacht-charter.jpg"
          alt="Yacht charter service"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-0 sm:px-6 h-full flex flex-col justify-center md:max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="space-y-3 sm:space-y-4 mt-10 md:mt-0">
            <h1 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight text-primary">
                {t("yachtCharter.hero.title")}
              </h1>
              <h2 className="font-montserrat text-base sm:text-lg md:text-xl text-white">
                {t("yachtCharter.hero.subtitle")}
              </h2>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Section with Background */}
      <div className="container px-0 sm:px-6 py-12 sm:py-16 md:py-18 mx-auto bg-gray-50 md:max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-primary">
            {t("yachtCharter.services.title")}
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
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
            </motion.div>
          ))}
        </div>
      </div>

      {/* Introduction Section with Image */}
      <div className="inset-0 bg-gradient-to-l from-[#fff6d399] via-[#ffe47acc] to-[#f8ce24c2]">
        <div className="container mx-auto px-0 sm:px-6 py-12 sm:py-16 md:py-20 md:max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <div className="relative h-[200px] sm:h-[250px] md:h-[300px] w-full rounded-lg overflow-hidden">
                <Image
                  src="/img/discover.jpg"
                  alt="Luxury yacht interior"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl font-montserrat text-black">
                {t("yachtCharter.discover.title")}
              </h2>
              <p className="text-base sm:text-lg text-gray-700">
                {t("yachtCharter.discover.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  unstyled
                  className="bg-primary hover:bg-transparent hover:text-black hover:border-primary hover:border border-primary border text-white py-2 px-3 sm:px-4 rounded text-sm sm:text-base transform transition duration-300"
                >
                  {t("yachtCharter.discover.button")}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto px-0 sm:px-6 py-12 sm:py-16 md:py-20 md:max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-primary mb-4">
            {t("yachtCharter.whyChooseUs.title")}
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
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
            </motion.div>
          ))}
        </div>
      </div>

      {/* Final CTA Section with Background Image */}
      <div className="relative py-12 sm:py-16 md:py-20">
        <Image
          src="/img/contact.jpg"
          alt="Yacht at sunset"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-0 sm:px-6 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-primary mb-4 sm:mb-6">
              {t("yachtCharter.cta.title")}
            </h2>
            <p className="text-base sm:text-lg text-white mb-6 sm:mb-8">
              {t("yachtCharter.cta.description")}
            </p>
            <Button
              onClick={() => setContactModalOpened(true)}
              unstyled
              className="bg-primary hover:bg-primary/75 text-black font-normal text-sm md:text-lg py-2 sm:py-3 px-4 sm:px-6 rounded w-full sm:w-auto"
            >
              {t("yachtCharter.cta.button")}
            </Button>
          </div>
        </motion.div>
      </div>
      <ContactModal
        opened={contactModalOpened}
        onClose={() => setContactModalOpened(false)}
      />
    </div>
  );
}
import { Button } from "@mantine/core";
import { motion } from "framer-motion";
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
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ContactModal from "../../contact/modal/contactModal";

export default function Logistics() {
  const [contactModalOpened, setContactModalOpened] = useState(false);
  const {t} = useTranslation();

  const doorToDoorServices = [
    {
      icon: <FileText className="w-6 h-6 text-primary" />,
      title: t("logistics.doorToDoor.services.pickup.title"),
      description: t("logistics.doorToDoor.services.pickup.description"),
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
      title: t("logistics.doorToDoor.services.documentation.title"),
      description: t("logistics.doorToDoor.services.documentation.description"),
    },
    {
      icon: <Lightning className="w-6 h-6 text-primary" />,
      title: t("logistics.doorToDoor.services.international.title"),
      description: t("logistics.doorToDoor.services.international.description"),
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: t("logistics.doorToDoor.services.delivery.title"),
      description: t("logistics.doorToDoor.services.delivery.description"),
    },
  ];

  const incoterms = [
    {
      icon: <Box className="w-6 h-6 text-primary" />,
      title: t("logistics.incoterms.terms.exw.title"),
      description: t("logistics.incoterms.terms.exw.description"),
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
      title: t("logistics.incoterms.terms.fob.title"),
      description: t("logistics.incoterms.terms.fob.description"),
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: t("logistics.incoterms.terms.cif.title"),
      description: t("logistics.incoterms.terms.cif.description"),
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: t("logistics.incoterms.terms.dap.title"),
      description: t("logistics.incoterms.terms.dap.description"),
    },
  ];

  const whyChooseUs = [
    {
      icon: <Globe className="w-6 h-6 text-darkTitle" />,
      title: t("logistics.whyChooseUs.reasons.globalCoverage.title"),
      description: t("logistics.whyChooseUs.reasons.globalCoverage.description"),
      align: "left",
    },
    {
      icon: <Clock className="w-6 h-6 text-darkTitle" />,
      title: t("logistics.whyChooseUs.reasons.support.title"),
      description: t("logistics.whyChooseUs.reasons.support.description"),
      align: "right",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-darkTitle" />,
      title: t("logistics.whyChooseUs.reasons.costOptimization.title"),
      description: t("logistics.whyChooseUs.reasons.costOptimization.description"),
      align: "left",
    },
    {
      icon: <User className="w-6 h-6 text-darkTitle" />,
      title: t("logistics.whyChooseUs.reasons.personalizedAttention.title"),
      description: t("logistics.whyChooseUs.reasons.personalizedAttention.description"),
      align: "right",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[45vh] sm:h-[50vh] md:h-[60vh] w-full">
        <Image
          src="/img/logistics.jpg"
          alt="Logística marítima service"
          fill
          className="object-cover"
          priority
          sizes="(min-width: 1024px) 800px, 100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-0 sm:px-4 h-full flex flex-col justify-center md:max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="space-y-2 md:space-y-4">
              <h1 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight text-primary">
                {t("logistics.hero.title")}
              </h1>
              <h2 className="font-montserrat text-base sm:text-lg md:text-xl text-white">
                {t("logistics.hero.subtitle.question")}{" "}
                <span className="text-primary">
                  {t("logistics.hero.subtitle.answer")}
                </span>
              </h2>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 sm:py-12 md:max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <p className="font-montserrat text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-12">
            {t("logistics.intro.text")}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-2xl sm:text-3xl font-montserrat font-medium text-primary text-center mb-8 sm:mb-8"
              >
                {t("logistics.doorToDoor.title")}
              </motion.h2>

              {/* Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12 border p-4 sm:p-5 rounded-lg shadow-lg">
                {doorToDoorServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                    className="flex gap-3 sm:gap-4 items-start"
                  >
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
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Incoterms Section */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-2xl sm:text-3xl font-montserrat font-medium text-primary text-center mb-8 sm:mb-8"
              >
                {t("logistics.incoterms.title")}
              </motion.h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12 border p-4 sm:p-5 rounded-lg shadow-lg">
                {incoterms.map((term, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                    className="flex gap-3 sm:gap-4 items-start"
                  >
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
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Why Choose Us Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="py-8 sm:py-14 rounded-lg inset-0 bg-gradient-to-l from-[#fff6d399] via-[#ffe47acc] to-[#f8ce24c2]"
      >
        <h3 className="text-2xl sm:text-3xl text-darkTitle font-montserrat mb-6 sm:mb-8 text-center px-4">
          {t("logistics.whyChooseUs.title")}
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
      </motion.div>

      {/* CTA Section */}
      <div className="relative py-12 sm:py-16 md:py-24">
        <Image
          src="/img/CTA-logistics.jpg"
          alt="Yacht at sunset"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative z-10 container mx-auto px-4 sm:px-6 text-center"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-montserrat text-primary mb-3 sm:mb-4">
            {t("logistics.cta.title")}
          </h2>
          <p className="text-base sm:text-lg text-white mb-4 sm:mb-6">
            {t("logistics.cta.description")}
          </p>
          <Button
            onClick={() => setContactModalOpened(true)}
            unstyled
            className="w-full sm:w-auto bg-primary hover:bg-primary/75 text-black font-normal text-sm md:text-lg py-2 px-4 rounded"
          >
            {t("logistics.cta.button")}
          </Button>
        </motion.div>
        <ContactModal
          opened={contactModalOpened}
          onClose={() => setContactModalOpened(false)}
        />
      </div>
    </div>
  );
}
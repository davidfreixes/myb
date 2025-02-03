import { Button } from "@mantine/core";
import { motion } from "framer-motion";
import { Compass, FileText, Route, Scale, Wrench } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ContactModal from "../../contact/modal/contactModal";

export default function NauticalConsulting() {
  const [contactModalOpened, setContactModalOpened] = useState(false);
  const { t } = useTranslation();

  const services = [
    {
      icon: <Wrench className="w-7 h-7 text-primary mb-4" />,
      title: t("nauticalConsulting.services.technicalConsulting.title"),
      description: t(
        "nauticalConsulting.services.technicalConsulting.description"
      ),
    },
    {
      icon: <FileText className="w-7 h-7 text-primary mb-4" />,
      title: t("nauticalConsulting.services.legalAssistance.title"),
      description: t("nauticalConsulting.services.legalAssistance.description"),
    },
    {
      icon: <Compass className="w-7 h-7 text-primary mb-4" />,
      title: t("nauticalConsulting.services.feasibilityAnalysis.title"),
      description: t(
        "nauticalConsulting.services.feasibilityAnalysis.description"
      ),
    },
    {
      icon: <Scale className="w-7 h-7 text-primary mb-4" />,
      title: t("nauticalConsulting.services.vesselValuation.title"),
      description: t("nauticalConsulting.services.vesselValuation.description"),
    },
    {
      icon: <Route className="w-7 h-7 text-primary mb-4" />,
      title: t("nauticalConsulting.services.routePlanning.title"),
      description: t("nauticalConsulting.services.routePlanning.description"),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[45vh] sm:h-[50vh] md:h-[60vh] w-full">
        <Image
          src="/img/nautical-consulting.jpg"
          alt="Asesoría náutica service"
          fill
          className="object-cover"
          priority
          sizes="(min-width: 1024px) 800px, 100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center md:max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="space-y-2 md:space-y-4">
              <h1 className="font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-primary">
                {t("nauticalConsulting.hero.title")}
              </h1>
              <h2 className="font-montserrat sm:text-lg md:text-xl text-white">
                {t("nauticalConsulting.hero.subtitle.text")}{" "}
                <span className="text-primary">
                  {t("nauticalConsulting.hero.subtitle.highlight")}
                </span>{" "}
                {t("nauticalConsulting.hero.subtitle.text2")}
              </h2>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-7 md:py-7 md:max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <p className="font-montserrat text-lg md:text-xl text-gray-700 mb-7">
            {t("nauticalConsulting.intro.description")}
          </p>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-7">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex gap-2">
                  {service.icon}
                  <h3 className="text-xl font-montserrat font-medium text-black mb-3">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="inset-0 bg-gradient-to-l from-[#fff6d399] via-[#ffe47acc] to-[#f8ce24c2] p-6 rounded-lg text-center md:py-20"
      >
        <h2 className="text-2xl md:text-3xl font-montserrat text-darkTitle mb-4">
          {t("nauticalConsulting.cta.title")}
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          {t("nauticalConsulting.cta.description")}
        </p>
        <Button
          onClick={() => setContactModalOpened(true)}
          unstyled
          className="bg-primary hover:bg-primary/75 text-darkTitle font-normal text-sm md:text-lg py-3 px-6 rounded-lg transition-colors"
        >
          {t("nauticalConsulting.cta.button")}
        </Button>
      </motion.div>
      <ContactModal
        opened={contactModalOpened}
        onClose={() => setContactModalOpened(false)}
      />
    </div>
  );
}

import { NAVIGATION_LINKS } from "@/utils/navigation";
import { Button } from "@mantine/core";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // Aseguramos que i18next esté cargado
  }, []);
  if (!isLoaded) return null;

  const scrollToServices = () => {
    // Navegar a la sección de servicios
    const servicesSection = document.getElementById("services-section");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-[100vh] md:h-[500px] w-full">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/img/hero.jpg"
          alt="Luxury yacht background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[100vh] xs:h-[500px] flex-col py-8 md:py-12">
          <div className="grid md:grid-cols-2 gap-20 md:gap-12 mt-12">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center space-y-4 md:space-y-6 text-white order-1 pt-4 md:pt-0"
            >
              <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-primary">
                Menorca Yacht Brokers
              </h1>
              <div className="space-y-2 md:space-y-4">
                <h2 className="text-2xl md:text-3xl font-montserrat text-white">
                  {t("mainPage.hero.subtitle.part1")}
                </h2>
                <h2 className="font-montserrat text-lg md:text-xl text-white">
                  <Trans i18nKey="mainPage.hero.subtitle.part2">
                    <span className="text-primary">Compra</span>,
                    <span className="text-primary"> vende</span> o
                    <span className="text-primary"> alquila</span> tu Yate con
                    Menorca Yacht Brokers
                  </Trans>
                </h2>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 lg:p-8 text-white order-2"
            >
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-3xl font-light text-white">
                  {t("mainPage.hero.title")}
                </h2>
                <div className="space-y-3 md:space-y-4 text-gray-200">
                  <p className="text-md md:text-base">
                    {t("mainPage.hero.description.part1")}
                  </p>
                  <p className="text-md md:text-base">
                    {t("mainPage.hero.description.part2")}
                  </p>
                </div>
                <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
                  <Button
                    unstyled
                    onClick={scrollToServices}
                    className="w-full rounded sm:w-auto bg-primary hover:bg-primary/75 text-black font-normal text-sm md:text-md py-2 px-4"
                  >
                    {t("mainPage.hero.buttons.explore_services")}
                  </Button>
                  <Button
                    component={Link}
                    href={`${NAVIGATION_LINKS.CONTACTO}`}
                    unstyled
                    className="w-full text-center rounded sm:w-auto border-primary border-2 z-10 text-white hover:bg-white/10 hover:border-primary hover:text-primary text-sm md:text-base py-2 px-4"
                  >
                    {t("mainPage.hero.buttons.contact_us")}
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { NAVIGATION_LINKS } from "@/utils/navigation";
import { Button } from "@mantine/core";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ContactModal from "../../contact/modal/contactModal";

const partners = [
  {
    name: "Boats 24",
    logo: "/img/partners/boats24-logo.png",
    href: "#",
  },
  {
    name: "Yacht World",
    logo: "/img/partners/yachtworld-logo.png",
    href: "#",
  },
  {
    name: "Boat Charter Menorca",
    logo: "/img/partners/boat-charter-menorca-logo.png",
    href: "#",
  },
  {
    name: "Nautic Center Menorca",
    logo: "/img/partners/nautic-center-logo.png",
    href: "#",
  },
  {
    name: "Sasga Yachts",
    logo: "/img/partners/sasga-yachts-logo.png",
    href: "#",
  },
  {
    name: "Ajuntament de Maó",
    logo: "/img/partners/ajuntament-mao-logo.png",
    href: "#",
  },
  {
    name: "Port de Maó",
    logo: "/img/partners/port-mao-logo.png",
    href: "#",
  },
];

export default function Partners() {
  const [contactModalOpened, setContactModalOpened] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-12 sm:py-16 md:py-20">
        <Image
          src="/img/corporate-building.jpg"
          alt="Corporate building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center h-full mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="space-y-3 sm:space-y-4">
              <h1 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight text-primary">
                {t("partners.hero.title")}
              </h1>
              <h2 className="font-montserrat text-sm sm:text-base md:text-lg lg:text-xl text-white px-2">
                {t("partners.hero.subtitle")}
              </h2>
              <Button
                component={Link}
                href={`${NAVIGATION_LINKS.CONTACTO}`}
                unstyled
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 sm:px-6 py-2.5 sm:py-3 text-sm font-medium text-white shadow-lg hover:bg-primary/90 transition-colors"
              >
                {t("partners.hero.contactButton")}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Partners Grid */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6 h-full">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain p-2 sm:p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="mt-3 sm:mt-4 text-center">
                    <h3 className="font-montserrat text-base sm:text-lg text-gray-800 group-hover:text-primary transition-colors">
                      {partner.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="inset-0 bg-gradient-to-l from-[#fff6d399] via-[#ffe47acc] to-[#f8ce24c2] py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-montserrat text-xl sm:text-2xl md:text-3xl text-darkTitle mb-4 sm:mb-6">
              {t("partners.cta.title")}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 px-2">
              {t("partners.cta.description")}
            </p>
            <Button
              onClick={() => setContactModalOpened(true)}
              unstyled
              className="bg-primary hover:bg-primary/75 text-darkTitle font-normal text-sm sm:text-base md:text-lg py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors"
            >
              {t("partners.cta.button")}
            </Button>
          </motion.div>
          <ContactModal
            opened={contactModalOpened}
            onClose={() => setContactModalOpened(false)}
          />
        </div>
      </div>
    </div>
  );
}

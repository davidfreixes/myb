import { Button } from "@mantine/core";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
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
  const t = useTranslations("partners");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[45vh] sm:h-[50vh] md:h-[60vh] w-full">
        <Image
          src="/img/corporate-building.jpg"
          alt="Corporate building"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-0 sm:px-4 h-full flex flex-col justify-center md:max-w-[1400px] mt-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight text-primary">
                {t("hero.title")}
              </h1>
              <h2 className="font-montserrat text-sm sm:text-base md:text-lg lg:text-xl text-white px-2">
                {t("hero.subtitle")}
              </h2>
              <noscript>
                <div className="inline-flex items-center justify-center rounded-md bg-primary px-4 sm:px-6 py-2.5 sm:py-3 text-sm font-medium text-white shadow-lg">
                  {t("hero.contactButton")}
                </div>
              </noscript>
              <Button
                onClick={() => setContactModalOpened(true)}
                unstyled
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 sm:px-6 py-2.5 sm:py-3 text-sm font-medium text-white shadow-lg hover:bg-primary/90 transition-colors"
              >
                {t("hero.contactButton")}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Grid */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {partners.map((partner) => (
              <div key={partner.name}>
                <div className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6 h-full">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      fill
                      className="object-contain p-2 sm:p-4 group-hover:scale-105 transition-transform duration-300"
                      sizes="200px"
                    />
                  </div>
                  <div className="mt-3 sm:mt-4 text-center">
                    <h3 className="font-montserrat text-base sm:text-lg text-gray-800 group-hover:text-primary transition-colors">
                      {partner.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="inset-0 bg-gradient-to-l from-[#fff6d399] via-[#ffe47acc] to-[#f8ce24c2] py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-montserrat text-xl sm:text-2xl md:text-3xl text-darkTitle mb-4 sm:mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 px-2">
              {t("cta.description")}
            </p>
            <noscript>
              <div className="bg-primary text-darkTitle font-normal text-sm sm:text-base md:text-lg py-2 sm:py-3 px-4 sm:px-6 rounded-lg inline-block">
                {t("cta.button")}
              </div>
            </noscript>
            <Button
              onClick={() => setContactModalOpened(true)}
              unstyled
              className="bg-primary hover:bg-primary/75 text-darkTitle font-normal text-sm sm:text-base md:text-lg py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors"
            >
              {t("cta.button")}
            </Button>
          </div>
          <ContactModal
            opened={contactModalOpened}
            onClose={() => setContactModalOpened(false)}
          />
        </div>
      </div>
    </div>
  );
}

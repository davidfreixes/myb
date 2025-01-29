import { Accordion, Button, Card, Tabs } from "@mantine/core";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import ContactModal from "../../contact/modal/contactModal";

interface YachtDetails {
  id: string;
  type: "new" | "used";
  model: string;
  price: number;
  name?: string;
  year?: number;
  length: number;
  location: string;
  displacement?: number;
  hull?: string;
  keel?: string;
  imageUrl: string;
  designer?: string;
  category?: string;
}

const sampleYachts: YachtDetails[] = [
  {
    id: "1",
    type: "used",
    model: "Salthouse 58ft Cutter",
    price: 310098,
    name: "Rory Mhor",
    year: 1989,
    length: 17.68,
    location: "South Pacific, Fiji",
    displacement: 28000,
    hull: "Steel",
    keel: "Winged Keel",
    imageUrl: "/img/yacht-broker.jpg",
    designer: "Salthouse",
    category: "Used sail boat for sale",
  },
  {
    id: "2",
    type: "new",
    model: "Salthouse 58ft Cutter",
    price: 310098,
    name: "Rory Mhor",
    year: 1989,
    length: 17.68,
    location: "South Pacific, Fiji",
    displacement: 28000,
    hull: "Steel",
    keel: "Winged Keel",
    imageUrl: "/img/yacht-broker.jpg",
    designer: "Salthouse",
    category: "Used sail boat for sale",
  },
  {
    id: "3",
    type: "used",
    model: "Salthouse 58ft Cutter",
    price: 500000,
    name: "Rory Mhor",
    year: 1989,
    length: 17.68,
    location: "South Pacific, Fiji",
    displacement: 28000,
    hull: "Steel",
    keel: "Winged Keel",
    imageUrl: "/img/yacht-broker.jpg",
    designer: "Salthouse",
    category: "Used sail boat for sale",
  },
  {
    id: "4",
    type: "new",
    model: "Salthouse 58ft Cutter",
    price: 310098,
    name: "Rory Mhor",
    year: 1989,
    length: 17.68,
    location: "South Pacific, Fiji",
    displacement: 28000,
    hull: "Steel",
    keel: "Winged Keel",
    imageUrl: "/img/yacht-broker.jpg",
    designer: "Salthouse",
    category: "Used sail boat for sale",
  },
  {
    id: "5",
    type: "new",
    model: "Salthouse 58ft Cutter",
    price: 310098,
    name: "Rory Mhor",
    year: 1989,
    length: 17.68,
    location: "South Pacific, Fiji",
    displacement: 28000,
    hull: "Steel",
    keel: "Winged Keel",
    imageUrl: "/img/yacht-broker.jpg",
    designer: "Salthouse",
    category: "Used sail boat for sale",
  },

  // Add more sample yachts here
];
function YachtCards({ yachts }: { yachts: YachtDetails[] }) {
  const { t } = useTranslation();

  return (
    <>
      {yachts.map((yacht) => (
        <Card
          key={yacht.id}
          className="overflow-hidden border shadow-sm hover:shadow-lg transition-shadow duration-300"
        >
          <div className="relative h-48 sm:h-56 md:h-64">
            <Image
              src={yacht.imageUrl || "/placeholder.svg"}
              alt={yacht.model}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-3 sm:p-4 md:p-5">
            <h3 className="text-lg sm:text-xl font-montserrat font-medium mb-2">
              {yacht.model}
            </h3>
            <p className="text-base sm:text-lg font-semibold text-primary mb-3 sm:mb-4">
              {yacht.price.toLocaleString()} €
            </p>

            <Accordion className="shadow-sm">
              <Accordion.Item value="details">
                <Accordion.Control icon={<ChevronDown className="w-4 h-4" />}>
                  <span className="text-sm sm:text-base">{t("yachtBroker.yachtDetails.viewDetails")}</span>
                </Accordion.Control>
                <Accordion.Panel>
                  <div className="space-y-2 text-xs sm:text-sm">
                    {yacht.name && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">{t("yachtBroker.yachtDetails.fields.boatName")}:</span>
                        <span>{yacht.name}</span>
                      </div>
                    )}
                    {/* Other yacht details remain the same, with text-xs sm:text-sm classes */}
                    {yacht.year && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">{t("yachtBroker.yachtDetails.fields.year")}:</span>
                        <span>{yacht.year}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t("yachtBroker.yachtDetails.fields.length")}:</span>
                      <span>{yacht.length} {t("yachtDetails.units.meters")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t("yachtBroker.yachtDetails.fields.location")}:</span>
                      <span className="text-right">{yacht.location}</span>
                    </div>
                    {yacht.displacement && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">{t("yachtBroker.yachtDetails.fields.displacement")}:</span>
                        <span>{yacht.displacement} {t("yachtBroker.yachtDetails.units.kg")}</span>
                      </div>
                    )}
                    {yacht.hull && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">{t("yachtBroker.yachtDetails.fields.hull")}:</span>
                        <span>{yacht.hull}</span>
                      </div>
                    )}
                    {yacht.keel && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">{t("yachtBroker.yachtDetails.fields.keel")}:</span>
                        <span>{yacht.keel}</span>
                      </div>
                    )}
                    {yacht.designer && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">{t("yachtBroker.yachtDetails.fields.designer")}:</span>
                        <span>{yacht.designer}</span>
                      </div>
                    )}
                    {yacht.category && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">{t("yachtBroker.yachtDetails.fields.category")}:</span>
                        <span className="text-right">{yacht.category}</span>
                      </div>
                    )}
                  </div>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </div>
        </Card>
      ))}
    </>
  );
}

export default function YachtBroker() {
  const [contactModalOpened, setContactModalOpened] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>("new");
  const newBoatsSectionRef = useRef<HTMLDivElement>(null);
  const usedBoatsSectionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const scrollToSection = (type: "new" | "used") => {
    setActiveTab(type);
    setTimeout(() => {
      const sectionRef =
        type === "new" ? newBoatsSectionRef : usedBoatsSectionRef;
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Now more responsive */}
      <div className="relative h-[45vh] sm:h-[60vh] lg:h-[70vh] w-full">
        <Image
          src="/img/yacht-broker.jpg"
          alt="Yacht broker service"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-0 sm:px-6 h-full flex flex-col justify-center items-start md:max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 w-full"
          >
            <div className="space-y-3 sm:space-y-4 mt-10 md:mt-0">
              <h1 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight text-primary max-w-4xl">
                {t("yachtBroker.hero.title")}
              </h1>
              <h2 className="font-montserrat text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-3xl ">
                <Trans i18nKey="yachtBroker.hero.subtitle">
                  Especialistas en <span className="text-primary">compra</span>{" "}
                  y <span className="text-primary">venta</span> de yates en
                  Menorca. Amplia gama de embarcaciones de lujo y asesoramiento
                  personalizado.
                </Trans>
              </h2>
            </div>
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
              <Button
                unstyled
                onClick={() => scrollToSection("new")}
                className="w-full sm:w-auto bg-primary hover:bg-transparent hover:text-white hover:border-primary hover:border border-primary border text-black py-2 px-3 sm:px-4 rounded text-sm sm:text-base transition duration-300"
              >
                {t("yachtBroker.navigation.newYachts")}
              </Button>
              <Button
                unstyled
                onClick={() => scrollToSection("used")}
                className="w-full sm:w-auto bg-primary hover:bg-transparent hover:text-white hover:border-primary hover:border border-primary border text-black py-2 px-3 sm:px-4 rounded text-sm sm:text-base transition duration-300"
              >
                {t("yachtBroker.navigation.usedYachts")}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content - Improved spacing and responsiveness */}
      <div className="container mx-auto px-0 sm:px-6 py-6 sm:py-8 md:py-12 md:max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-sm sm:prose-base lg:prose-lg max-w-none"
        >
          <p className="font-montserrat text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8">
            <Trans i18nKey="yachtBroker.description.intro">
              Consulta nuestro stock de Yates en venta a continuación o descubre
              nuestras claves y contáctarnos más abajo. Contamos con Yates de
              <span className="text-primary"> segunda mano </span>o se pueden
              realizar contactos con astilleros para entrar en contratos de{" "}
              <span className="text-primary"> nueva construcción</span>.
            </Trans>
          </p>

          {/* Yacht Catalog - Responsive grid and spacing */}
          <div className="container mx-auto py-4">
            <Tabs
              value={activeTab}
              onChange={setActiveTab}
              className="mb-6 sm:mb-8"
              color="#f1c001"
            >
              <div className="w-full sticky top-0 z-10 bg-white">
                <Tabs.List grow>
                  <div className="flex w-full">
                    <div
                      className={`flex w-full ${
                        activeTab === "new" && "bg-primary/10 rounded-tl-lg"
                      }`}
                    >
                      <Tabs.Tab value="new">
                        <h2 className="text-base sm:text-lg text-black">
                          {t("yachtBroker.navigation.newYachts")}
                        </h2>
                      </Tabs.Tab>
                    </div>
                    <div
                      className={`flex w-full ${
                        activeTab === "used" && "bg-primary/10 rounded-tr-lg"
                      }`}
                    >
                      <Tabs.Tab value="used">
                        <h2 className="text-base sm:text-lg">
                          {t("yachtBroker.navigation.usedYachts")}
                        </h2>
                      </Tabs.Tab>
                    </div>
                  </div>
                </Tabs.List>
              </div>

              <AnimatePresence mode="wait">
                <Tabs.Panel value="new" ref={newBoatsSectionRef}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6"
                  >
                    <YachtCards
                      yachts={sampleYachts.filter(
                        (yacht) => yacht.type === "new"
                      )}
                    />
                  </motion.div>
                </Tabs.Panel>

                <Tabs.Panel value="used" ref={usedBoatsSectionRef}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6"
                  >
                    <YachtCards
                      yachts={sampleYachts.filter(
                        (yacht) => yacht.type === "used"
                      )}
                    />
                  </motion.div>
                </Tabs.Panel>
              </AnimatePresence>
            </Tabs>
          </div>

          <p className="font-montserrat text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8">
            {t("yachtBroker.description.expertise")}
          </p>
        </motion.div>
      </div>

      {/* CTA Section - Improved responsive design */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="inset-0 bg-gradient-to-l from-[#fff6d399] via-[#ffe47acc] to-[#f8ce24c2] p-4 sm:p-6 md:p-8 rounded-lg text-center py-6 sm:py-8 md:py-12"
      >
        <h2 className="text-lg sm:text-2xl md:text-3xl font-montserrat text-darkTitle mb-2 sm:mb-3 md:mb-4">
          {t("yachtBroker.cta.title")}
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-3 sm:mb-4 md:mb-6">
          {t("yachtBroker.cta.description")}
        </p>
        <Button
          unstyled
          onClick={() => setContactModalOpened(true)}
          className="w-full sm:w-auto bg-primary hover:bg-transparent hover:text-black hover:border-primary hover:border border-primary border text-black font-normal text-sm sm:text-base py-2 px-4 rounded transition-colors duration-200"
        >
          {t("yachtBroker.cta.button")}
        </Button>
      </motion.div>
      <ContactModal
        opened={contactModalOpened}
        onClose={() => setContactModalOpened(false)}
      />
    </div>
  );
}

import { Accordion, Button, Card, Tabs } from "@mantine/core";
import { AnimatePresence, motion } from "framer-motion";
import { Anchor, ChevronDown, Ship, Users } from "lucide-react";
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
    type: "new",
    model: "OPEN 630",
    price: 25500,
    length: 6.3,
    location: "Maó, Illes Balears, España",
    imageUrl: "/img/yachts/open630.jpg",
    designer: "View Yachting",
  },
  {
    id: "2",
    type: "new",
    model: "SPIRIT 1500",
    price: 990000,
    length: 14.96,
    location: "Maó, Illes Balears, España",
    imageUrl: "/img/yachts/spirit1500.jpg",
    designer: "View Yachting",
  },
  // {
  //   id: "3",
  //   type: "new",
  //   model: "Salthouse 58ft Cutter",
  //   price: 310098,
  //   name: "Rory Mhor",
  //   year: 1989,
  //   length: 17.68,
  //   location: "South Pacific, Fiji",
  //   displacement: 28000,
  //   hull: "Steel",
  //   keel: "Winged Keel",
  //   imageUrl: "/img/yacht-broker.jpg",
  //   designer: "Salthouse",
  //   category: "Used sail boat for sale",
  // },

  // Add more sample yachts here
];

interface Category {
  title: string;
  description: string;
  image: string;
  keywords: string[];
}

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

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
              sizes="(min-width: 1024px) 100vw"
            />
          </div>

          <div className="p-3 sm:p-4 md:p-5">
            <h3 className="text-lg sm:text-xl font-montserrat font-medium mb-2">
              {yacht.model}
            </h3>
            <p className="text-base sm:text-lg font-semibold text-primary mb-3 sm:mb-4">
              {yacht.price.toLocaleString()} €{" "}
              {yacht.model === "SPIRIT 1500" && "+ VAT + Transport"}
            </p>

            <Accordion className="shadow-sm">
              <Accordion.Item value={`details-${yacht.id}`}>
                <Accordion.Control icon={<ChevronDown className="w-4 h-4" />}>
                  <span className="text-sm sm:text-base">
                    {t("yachtBroker.yachtDetails.viewDetails")}
                  </span>
                </Accordion.Control>
                <Accordion.Panel>
                  <div className="space-y-2 text-xs sm:text-sm">
                    {yacht.name && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          {t("yachtBroker.yachtDetails.fields.boatName")}:
                        </span>
                        <span>{yacht.name}</span>
                      </div>
                    )}
                    {/* Other yacht details remain the same, with text-xs sm:text-sm classes */}
                    {yacht.year && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          {t("yachtBroker.yachtDetails.fields.year")}:
                        </span>
                        <span>{yacht.year}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        {t("yachtBroker.yachtDetails.fields.length")}:
                      </span>
                      <span>
                        {yacht.length}{" "}
                        {t("yachtBroker.yachtDetails.units.meters")}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        {t("yachtBroker.yachtDetails.fields.location")}:
                      </span>
                      <span className="text-right">{yacht.location}</span>
                    </div>
                    {yacht.displacement && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          {t("yachtBroker.yachtDetails.fields.displacement")}:
                        </span>
                        <span>
                          {yacht.displacement}{" "}
                          {t("yachtBroker.yachtDetails.units.kg")}
                        </span>
                      </div>
                    )}
                    {yacht.hull && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          {t("yachtBroker.yachtDetails.fields.hull")}:
                        </span>
                        <span>{yacht.hull}</span>
                      </div>
                    )}
                    {yacht.keel && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          {t("yachtBroker.yachtDetails.fields.keel")}:
                        </span>
                        <span>{yacht.keel}</span>
                      </div>
                    )}
                    {yacht.designer && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          {t("yachtBroker.yachtDetails.fields.designer")}:
                        </span>
                        <span>{yacht.designer}</span>
                      </div>
                    )}
                    {yacht.category && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          {t("yachtBroker.yachtDetails.fields.category")}:
                        </span>
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

  const popularCategories: Category[] = [
    {
      title: t("yachtBroker.categories.usedBoats.title"),
      description:
        "Amplia selección de embarcaciones verificadas y en excelente estado. Encuentra barcos de segunda mano baratos, desde barcas open hasta veleros usados. Todas nuestras embarcaciones pasan por un riguroso proceso de inspección para garantizar su calidad.",
      image: "/img/yacht-broker/second-hand.jpg",
      keywords: [
        "barcos segunda mano",
        "embarcaciones segunda mano",
        "barcos usados",
        "barcas open segunda mano",
      ],
    },
    {
      title: t("yachtBroker.categories.usedSailboats.title"),
      description: t("yachtBroker.categories.usedSailboats.description"),
      image: "/img/yacht-broker/used-sailboats.jpg",
      keywords: [
        "veleros segunda mano",
        "comprar velero usado",
        "venta de veleros",
      ],
    },
    {
      title: t("yachtBroker.categories.catamarans.title"),
      description: t("yachtBroker.categories.catamarans.description"),
      image: "/img/yacht-broker/catamarans.jpg",
      keywords: [
        "comprar catamarán",
        "catamaranes segunda mano",
        "venta catamaranes",
      ],
    },
    {
      title: t("yachtBroker.categories.luxuryYachts.title"),
      description: t("yachtBroker.categories.luxuryYachts.description"),
      image: "/img/yacht-broker/luxury-yacht.jpg",
      keywords: ["comprar yate de lujo", "yates segunda mano", "venta yates"],
    },
    {
      title: t("yachtBroker.categories.openBoats.title"),
      description: t("yachtBroker.categories.openBoats.description"),
      image: "/img/yacht-broker/open-boats.jpg",
      keywords: [
        "barca open segunda mano",
        "barcas quicksilver segunda mano",
        "barca de recreo",
      ],
    },
    {
      title: t("yachtBroker.categories.newBoats.title"),
      description: t("yachtBroker.categories.newBoats.description"),
      image: "/img/yacht-1.jpg",
      keywords: [
        "comprar barco nuevo",
        "embarcaciones nuevas",
        "venta barcos nuevos",
      ],
    },
  ];

  const advantages = [
    {
      title: t("yachtBroker.advantages.experience"),
      description: t("yachtBroker.advantages.experienceDesc"),
      icon: <Ship className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
    {
      title: t("yachtBroker.advantages.selection"),
      description: t("yachtBroker.advantages.selectionDesc"),
      icon: <Anchor className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
    {
      title: t("yachtBroker.advantages.support"),
      description: t("yachtBroker.advantages.supportDesc"),
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
  ];

  const faqs: FAQ[] = [
    {
      id: "1",
      question: t("yachtBroker.faq.questions.usedBoatConsiderations.question"),
      answer: t("yachtBroker.faq.questions.usedBoatConsiderations.answer"),
    },
    {
      id: "2",
      question: t("yachtBroker.faq.questions.usedSailboatProcess.question"),
      answer: t("yachtBroker.faq.questions.usedSailboatProcess.answer"),
    },
    {
      id: "3",
      question: t("yachtBroker.faq.questions.availableBoats.question"),
      answer: t("yachtBroker.faq.questions.availableBoats.answer"),
    },
    {
      id: "4",
      question: t("yachtBroker.faq.questions.sellBoat.question"),
      answer: t("yachtBroker.faq.questions.sellBoat.answer"),
    },
    {
      id: "5",
      question: t("yachtBroker.faq.questions.financing.question"),
      answer: t("yachtBroker.faq.questions.financing.answer"),
    },
  ];

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
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section - Now more responsive */}
      <div className="relative h-[50vh] md:h-[60vh] w-full">
        <Image
          src="/img/yacht-broker.jpg"
          alt="Yacht broker service"
          fill
          className="object-cover"
          priority
          sizes="(min-width: 1024px) 100vw"
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

              <AnimatePresence>
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
      {/* Nueva sección de categorías populares */}
      <div className="container mx-auto px-0 sm:px-6 py-12 sm:py-16 md:py-20 md:max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-primary mb-4">
            {t("yachtBroker.categories.title")}
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {popularCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px 100vw"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-montserrat font-medium text-black mb-2 sm:mb-4">
                {category.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Advantages Section */};
      <div className="inset-0 bg-gradient-to-l from-[#fff6d399] via-[#ffe47acc] to-[#f8ce24c2]">
        <div className="container mx-auto px-0 sm:px-6 py-12 sm:py-16 md:py-20 md:max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-darkTitle mb-4">
              {t("yachtBroker.advantages.title")}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="bg-primary/10 w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-montserrat font-medium text-black mb-2 sm:mb-4">
                  {advantage.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* FAQ Section */};
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-primary mb-4">
            {t("yachtBroker.faq.title")}
          </h2>
          <p className="text-gray-600 text-lg">
            {t("yachtBroker.faq.description")}
          </p>
        </div>

        <Accordion
          className="max-w-5xl mx-auto"
          styles={{
            item: {
              borderRadius: "8px",
              marginBottom: "12px",
              border: "1px solid #e5e7eb",
              backgroundColor: "white",
              borderBottom: "1px solid #FFB800",
            },
            control: {
              padding: "10px",
            },
            content: {
              padding: "0 20px 20px",
            },
          }}
        >
          {faqs.map((item, index) => (
            <Accordion.Item key={item.id} value={item.id}>
              <Accordion.Control>
                <div className="flex items-center gap-2">
                  <span className="text-[#FFB800] font-mono text-lg">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  <h2 className="font-semibold">{item.question}</h2>
                </div>
              </Accordion.Control>
              <Accordion.Panel>
                <p className="text-gray-600">{item.answer}</p>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
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

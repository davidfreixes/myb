import { sampleYachts } from "@/utils/yachts";
import { Accordion, Button, Tabs } from "@mantine/core";
import { AnimatePresence, motion } from "framer-motion";
import { Anchor, Ship, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef, useState } from "react";
import ContactModal from "../../../general/contact/modal/contactModal";
import { YachtCards } from "./yachtChards";

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

export default function YachtBroker() {
  const [contactModalOpened, setContactModalOpened] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>("new");
  const newBoatsSectionRef = useRef<HTMLDivElement>(null);
  const usedBoatsSectionRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("yachtBroker");

  const popularCategories: Category[] = [
    {
      title: t("categories.usedBoats.title"),
      description: t("categories.usedBoats.description"),
      image: "/img/yacht-broker/second-hand.jpg",
      keywords: [
        "barcos segunda mano",
        "embarcaciones segunda mano",
        "barcos usados",
        "barcas open segunda mano",
      ],
    },
    {
      title: t("categories.usedSailboats.title"),
      description: t("categories.usedSailboats.description"),
      image: "/img/yacht-broker/used-sailboats.jpg",
      keywords: [
        "veleros segunda mano",
        "comprar velero usado",
        "venta de veleros",
      ],
    },
    {
      title: t("categories.catamarans.title"),
      description: t("categories.catamarans.description"),
      image: "/img/yacht-broker/catamarans.jpg",
      keywords: [
        "comprar catamarán",
        "catamaranes segunda mano",
        "venta catamaranes",
      ],
    },
    {
      title: t("categories.luxuryYachts.title"),
      description: t("categories.luxuryYachts.description"),
      image: "/img/yacht-broker/luxury-yacht.jpg",
      keywords: ["comprar yate de lujo", "yates segunda mano", "venta yates"],
    },
    {
      title: t("categories.openBoats.title"),
      description: t("categories.openBoats.description"),
      image: "/img/yacht-broker/open-boats.jpg",
      keywords: [
        "barca open segunda mano",
        "barcas quicksilver segunda mano",
        "barca de recreo",
      ],
    },
    {
      title: t("categories.newBoats.title"),
      description: t("categories.newBoats.description"),
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
      title: t("advantages.experience"),
      description: t("advantages.experienceDesc"),
      icon: <Ship className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
    {
      title: t("advantages.selection"),
      description: t("advantages.selectionDesc"),
      icon: <Anchor className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
    {
      title: t("advantages.support"),
      description: t("advantages.supportDesc"),
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
  ];

  const faqs: FAQ[] = [
    {
      id: "1",
      question: t("faq.questions.usedBoatConsiderations.question"),
      answer: t("faq.questions.usedBoatConsiderations.answer"),
    },
    {
      id: "2",
      question: t("faq.questions.usedSailboatProcess.question"),
      answer: t("faq.questions.usedSailboatProcess.answer"),
    },
    {
      id: "3",
      question: t("faq.questions.availableBoats.question"),
      answer: t("faq.questions.availableBoats.answer"),
    },
    {
      id: "4",
      question: t("faq.questions.sellBoat.question"),
      answer: t("faq.questions.sellBoat.answer"),
    },
    {
      id: "5",
      question: t("faq.questions.financing.question"),
      answer: t("faq.questions.financing.answer"),
    },
  ];

  // const scrollToSection = (type: "new" | "used") => {
  //   setActiveTab(type);
  //   setTimeout(() => {
  //     const sectionRef =
  //       type === "new" ? newBoatsSectionRef : usedBoatsSectionRef;
  //     if (sectionRef.current) {
  //       sectionRef.current.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }, 100);
  // };

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
                {t("hero.title")}
              </h1>
              <h2 className="font-montserrat text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-3xl ">
                {t.rich("hero.subtitle", {
                  p: (chunks) => <span className="text-primary">{chunks}</span>,
                })}
              </h2>
            </div>
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button
                unstyled
                onClick={() => setContactModalOpened(true)}
                className="w-full sm:w-auto bg-primary hover:bg-transparent hover:text-white hover:border-primary hover:border border-primary border text-black font-normal text-sm sm:text-base py-2 px-4 rounded transition-colors duration-200"
              >
                {t("cta.button")}
              </Button>
              <Button
                unstyled
                // onClick={() => scrollToSection("new")}
                className="w-full sm:w-auto bg-primary hover:bg-transparent hover:text-white hover:border-primary hover:border border-primary border text-black py-2 px-3 sm:px-4 rounded text-base transition duration-300"
              >
                Customized Boat
              </Button>
              {/* <Button
                unstyled
                onClick={() => scrollToSection("new")}
                className="w-full sm:w-auto bg-primary hover:bg-transparent hover:text-white hover:border-primary hover:border border-primary border text-black py-2 px-3 sm:px-4 rounded text-base transition duration-300"
              >
                {t("navigation.newYachts")}
              </Button>
              <Button
                unstyled
                onClick={() => scrollToSection("used")}
                className="w-full sm:w-auto bg-primary hover:bg-transparent hover:text-white hover:border-primary hover:border border-primary border text-black py-2 px-3 sm:px-4 rounded text-base transition duration-300"
              >
                {t("navigation.usedYachts")}
              </Button> */}
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
            {t.rich("description.intro", {
              p: (chunks) => <span className="text-primary">{chunks}</span>,
            })}
          </p>

          {/* Yacht Catalog - Enhanced responsive design */}
          <div className="container mx-auto border px-2 md:px-4 lg:px-6 rounded-md">
            <Tabs
              value={activeTab}
              onChange={setActiveTab}
              className="mb-4 md:mb-6 lg:mb-8"
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
                        <h2 className="text-sm md:text-base lg:text-lg text-black">
                          {t("navigation.newYachts")}
                        </h2>
                      </Tabs.Tab>
                    </div>
                    <div
                      className={`flex w-full ${
                        activeTab === "used" && "bg-primary/10 rounded-tr-lg"
                      }`}
                    >
                      <Tabs.Tab value="used">
                        <h2 className="text-sm md:text-base lg:text-lg">
                          {t("navigation.usedYachts")}
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
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 mt-3 md:mt-4 lg:mt-6"
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
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 mt-3 md:mt-4 lg:mt-6"
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

          <p className="font-montserrat text-sm sm:text-base md:text-lg text-gray-700 sm:pt-4">
            {t("description.expertise")}
          </p>
        </motion.div>
      </div>
      {/* Nueva sección de categorías populares */}
      <div className="container mx-auto px-0 sm:px-6 py-12 sm:py-14 md:max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-primary mb-4">
            {t("categories.title")}
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
              {t("advantages.title")}
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
            {t("faq.title")}
          </h2>
          <p className="text-gray-600 text-lg">{t("faq.description")}</p>
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
          {t("cta.title")}
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-3 sm:mb-4 md:mb-6">
          {t("cta.description")}
        </p>
        <Button
          unstyled
          onClick={() => setContactModalOpened(true)}
          className="w-full sm:w-auto bg-primary hover:bg-transparent hover:text-black hover:border-primary hover:border border-primary border text-black font-normal text-sm sm:text-base py-2 px-4 rounded transition-colors duration-200"
        >
          {t("cta.button")}
        </Button>
      </motion.div>
      <ContactModal
        opened={contactModalOpened}
        onClose={() => setContactModalOpened(false)}
      />
    </div>
  );
}

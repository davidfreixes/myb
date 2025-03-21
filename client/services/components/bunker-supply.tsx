import { Accordion, Button, Tooltip } from "@mantine/core";
import { motion } from "framer-motion";
import {
  Anchor,
  BarChart2,
  Globe2,
  ShieldCheck,
  Ship,
  Users,
  Wheat,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { Trans } from "react-i18next";
import ContactModal from "../../general/contact/modal/contactModal";
import QuoteModal from "../modals/quote-modal";

export default function BunkerSupplyPage() {
  const [contactModalOpened, setContactModalOpened] = useState(false);
  const [quoteModalOpened, setQuoteModalOpened] = useState(false);

  const t = useTranslations("bunkerSupply");
  const q = useTranslations("quoteModal");

  const marketIndices = [
    {
      title: t("marketIndices.providers.shipAndBunker.title"),
      description: t("marketIndices.providers.shipAndBunker.description"),
      image: "/img/bunker-supply/ship-bunker.png",
      link: "https://shipandbunker.com/prices",
    },
    {
      title: t("marketIndices.providers.balticExchange.title"),
      description: t("marketIndices.providers.balticExchange.description"),
      image: "/img/bunker-supply/baltic-exchange.png",
      link: "https://www.balticexchange.com/en/index.html",
    },
    {
      title: t("marketIndices.providers.cepsaMoeve.title"),
      description: t("marketIndices.providers.cepsaMoeve.description"),
      images: [
        {
          src: "/img/bunker-supply/cepsa.jpg",
          alt: "CEPSA",
        },
        {
          src: "/img/bunker-supply/moeve.png",
          alt: "MOEVE",
        },
      ],
      link: "https://rafamoreno.es/rebranding-cepsa-moeve/",
    },
    {
      title: t("marketIndices.providers.stabiaOil.title"),
      description: t("marketIndices.providers.stabiaOil.description"),
      image: "/img/bunker-supply/stabia-oil.jpg",
      link: "http://www.stabiaoil.com/",
    },
  ];

  const features1 = [
    {
      title: t("experience.globalExperience.features.globalCoverage.title"),
      description: t(
        "experience.globalExperience.features.globalCoverage.description"
      ),
      icon: <Globe2 className="w-6 h-6 text-primary" />,
    },
    {
      title: t("experience.globalExperience.features.service247.title"),
      description: t(
        "experience.globalExperience.features.service247.description"
      ),
      icon: <Anchor className="w-6 h-6 text-primary" />,
    },
  ];

  const features2 = [
    {
      title: t("experience.expertKnowledge.features.expertTeam.title"),
      description: t(
        "experience.expertKnowledge.features.expertTeam.description"
      ),
      icon: <Users className="w-6 h-6 text-primary" />,
    },
    {
      title: t("experience.expertKnowledge.features.qualityGuarantee.title"),
      description: t(
        "experience.expertKnowledge.features.qualityGuarantee.description"
      ),
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    },
  ];

  const services = [
    {
      title: t("specializedServices.services.shipSalePurchase.title"),
      description: t(
        "specializedServices.services.shipSalePurchase.description"
      ),
      icon: <Ship className="w-6 h-6 text-primary" />,
    },
    {
      title: t("specializedServices.services.dryBulk.title"),
      description: t("specializedServices.services.dryBulk.description"),
      icon: <Wheat className="w-6 h-6 text-primary" />,
    },
    {
      title: t("specializedServices.services.liquidBulk.title"),
      description: t("specializedServices.services.liquidBulk.description"),
      icon: <BarChart2 className="w-6 h-6 text-primary" />,
    },
  ];

  const faqs = [
    {
      id: "faq-1",
      question: t("faq.questions.what"),
      answer: t("faq.answers.what"),
    },
    {
      id: "faq-2",
      question: t("faq.questions.special"),
      answer: t("faq.answers.special"),
    },
    {
      id: "faq-3",
      question: t("faq.questions.types"),
      answer: t("faq.answers.types"),
    },
    {
      id: "faq-4",
      question: t("faq.questions.name"),
      answer: t("faq.answers.name"),
    },
    {
      id: "faq-5",
      question: t("faq.questions.price"),
      answer: t("faq.answers.price"),
    },
    {
      id: "faq-6",
      question: t("faq.questions.difference"),
      answer: t("faq.answers.difference"),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] w-full">
        <Image
          src="/img/bunker-supply.jpg"
          alt="Ship broker service"
          fill
          className="object-cover"
          priority
          objectPosition="bottom"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-0 sm:px-6 h-full flex flex-col justify-center md:max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="space-y-3 sm:space-y-4 mt-10 md:mt-0">
              <h1 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight text-primary max-w-4xl">
                {t("hero.title")}
              </h1>
              <h2 className="font-montserrat text-base sm:text-lg md:text-xl text-white">
                {t("hero.subtitle")}
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  unstyled
                  onClick={() => setContactModalOpened(true)}
                  className="w-full sm:w-auto bg-primary hover:bg-transparent hover:text-white hover:border-primary hover:border border-primary border text-black py-2 px-3 sm:px-4 rounded text-base transition duration-300"
                >
                  <div className="flex items-center justify-center gap-2">
                    {t("dailyPosition.downloadButton")}
                  </div>
                </Button>
                <Button
                  unstyled
                  onClick={() => setQuoteModalOpened(true)}
                  className="w-full sm:w-auto bg-primary hover:bg-transparent hover:text-white hover:border-primary hover:border border-primary border text-black py-2 px-3 sm:px-4 rounded text-base transition duration-300"
                >
                  <div className="flex items-center justify-center gap-2">
                    {q("title")}
                  </div>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      {/* Daily Position Feature */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-12 sm:mb-16 mx-auto px-4 sm:px-6 max-w-[1400px] py-8 sm:py-10 md:py-12"
      >
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div className="relative h-[250px] sm:h-[300px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/img/port-sunset.jpg"
              alt="Puerto al atardecer"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 400px, (min-width: 640px) 300px, 200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 sm:p-6">
              <h3 className="text-white text-lg sm:text-xl font-montserrat mb-2">
                {t("dailyPosition.title")}
              </h3>
              <p className="text-white/80 text-xs sm:text-sm">
                {t("dailyPosition.updateStatus")}
              </p>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <h2 className="font-montserrat text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary">
              {t("dailyPosition.sectionTitle")}
            </h2>
            {/* <p className="text-base sm:text-lg text-gray-700">
              {t("dailyPosition.description")}
            </p> */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <p className="text-base sm:text-lg text-gray-700">
                <Trans i18nKey="hero.subtitle2">
                  Mediante nuestro partner{" "}
                  <span className="text-primary">Stabia Oil</span> y{" "}
                  <span className="text-primary">CEPSA</span>. Podemos
                  subministrar todo tipo de combustible marino en la isla de
                  Menorca.
                </Trans>
              </p>
              {/* <Button
                unstyled
                className="flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-normal text-sm md:text-base py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors w-full sm:w-auto"
              >
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Ver Contrato Tipo
                </div>
              </Button> */}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Market Indices Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-8 sm:py-10 inset-0 bg-gradient-to-l from-[#fff6d399] via-[#ffe47acc] to-[#f8ce24c2]"
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-[1400px] ">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-darkTitle mb-8 text-center">
            {t("marketIndices.title")}
          </h2>
          <p className="text-center text-gray-600 mb-12">
            {t("marketIndices.subtitle")}
          </p>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {marketIndices.map((item, index) => (
              <Tooltip.Floating
                label={t("marketIndices.tooltip")}
                position="right"
                key={item.title}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  onClick={() => {
                    if (item.link) {
                      window.open(item.link, "_blank", "noopener noreferrer");
                    }
                  }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow h-full flex flex-col justify-between cursor-pointer"
                >
                  <div className="relative h-32 mb-6">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain"
                        sizes="(min-width: 1024px) 400px, (min-width: 640px) 300px, 200px"
                      />
                    ) : item.images ? (
                      <div className="flex gap-4 h-full">
                        {item.images.map((img) => (
                          <div key={img.alt} className="relative flex-1">
                            <Image
                              src={img.src}
                              alt={img.alt}
                              fill
                              className="object-contain"
                              sizes="(min-width: 1024px) 400px, (min-width: 640px) 300px, 200px"
                            />
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                  <h3 className="text-xl font-montserrat text-primary mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                </motion.div>
              </Tooltip.Floating>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Introduction with Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-12 sm:mb-16"
      ></motion.div>

      {/* Services */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-12 sm:mb-16 md:mb-20 mx-auto px-4 sm:px-6 max-w-[1400px]"
      >
        <h3 className="font-montserrat text-xl sm:text-2xl md:text-4xl text-primary mb-6 sm:mb-8 text-center">
          {t("specializedServices.title")}{" "}
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-shadow border"
            >
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  {service.icon}
                </div>
                <h4 className="font-montserrat text-lg sm:text-xl font-medium text-black mb-2 sm:mb-3">
                  {service.title}
                </h4>
              </div>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                {service.description}
              </p>
              {/* <Button
                component={Link}
                href={service.link}
                unstyled
                className="inline-flex items-center text-primary hover:text-primary/75 font-medium text-sm sm:text-base"
              >
                Saber más <ArrowRight className="w-4 h-4 ml-2" />
              </Button> */}
            </motion.div>
          ))}
        </div>
        <div className="container mx-auto px-4 py-10 sm:py-12 lg:py-14 max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-montserrat text-primary mb-4">
              {t("experience.title")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("experience.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Global Experience Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border"
            >
              <div className="flex items-center gap-4 mb-6">
                <h3 className="font-montserrat text-2xl font-medium text-black">
                  {t("experience.globalExperience.title")}
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("experience.globalExperience.description")}
              </p>
              <div className="w-full grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {features1.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className=" backdrop-blur-sm rounded-xl p-6 text-center"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                      {feature.icon}
                    </div>
                    <h4 className="font-montserrat text-lg font-medium text-black mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-md">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Expert Knowledge Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border"
            >
              <div className="flex items-center gap-4 mb-6">
                <h3 className="font-montserrat text-2xl font-medium text-black">
                  {t("experience.expertKnowledge.title")}
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("experience.expertKnowledge.description")}
              </p>
              <div className="w-full grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {features2.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="backdrop-blur-sm rounded-xl p-6 text-center"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                      {feature.icon}
                    </div>
                    <h4 className="font-montserrat text-lg font-medium text-black mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-md">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="container mx-auto px-4 pb-16 max-w-[1400px]"
      >
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
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="inset-0 bg-gradient-to-l from-[#fff6d399] via-[#ffe47acc] to-[#f8ce24c2] p-8 sm:p-8 md:py-20 text-center"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-montserrat text-darkTitle mb-3 sm:mb-4 max-w-[1400px] lg:mx-auto">
          {t("cta.title")}
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 max-w-2xl mx-auto">
          {t("cta.description")}
        </p>
        <Button
          onClick={() => setContactModalOpened(true)}
          unstyled
          className="bg-primary hover:bg-primary/75 text-darkTitle font-normal text-sm sm:text-base md:text-lg py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors"
        >
          {t("cta.button")}
        </Button>
      </motion.div>
      <ContactModal
        opened={contactModalOpened}
        onClose={() => setContactModalOpened(false)}
      />
      <QuoteModal
        opened={quoteModalOpened}
        onClose={() => setQuoteModalOpened(false)}
      />
    </div>
  );
}

// const stats = [
//   { value: "15+", label: "Años de Experiencia" },
//   { value: "200+", label: "Operaciones Completadas" },
//   { value: "50+", label: "Socios Globales" },
//   { value: "24/7", label: "Soporte Disponible" },
// ];

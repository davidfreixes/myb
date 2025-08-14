import { NAVIGATION_LINKS } from "@/utils/navigation";
import { Accordion, Button } from "@mantine/core";
import {
  Anchor,
  BarChart2,
  Globe2,
  ShieldCheck,
  Ship,
  Users,
  Wheat,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import ContactModal from "../../general/contact/modal/contactModal";
import QuoteModal from "../modals/quote-modal";

export default function BunkerSupplyPage() {
  const [contactModalOpened, setContactModalOpened] = useState(false);
  const [quoteModalOpened, setQuoteModalOpened] = useState(false);

  const t = useTranslations("bunkerSupply");
  const q = useTranslations("quoteModal");
  const locale = useLocale();

  const marketIndices = [
    {
      title: t("marketIndices.providers.shipAndBunker.title"),
      description: t("marketIndices.providers.shipAndBunker.description"),
      image: {
        src: "/img/bunker-supply/ship-bunker.png",
        alt: "Ship & Bunker",
        width: 200,
        height: 80,
      },
      link: "https://shipandbunker.com/prices",
    },
    {
      title: t("marketIndices.providers.balticExchange.title"),
      description: t("marketIndices.providers.balticExchange.description"),
      image: {
        src: "/img/bunker-supply/baltic-exchange.png",
        alt: "Baltic Exchange",
        width: 200,
        height: 80,
      },
      link: "https://www.balticexchange.com/en/index.html",
    },
    {
      title: t("marketIndices.providers.cepsaMoeve.title"),
      description: t("marketIndices.providers.cepsaMoeve.description"),
      images: [
        {
          src: "/img/bunker-supply/cepsa.jpg",
          alt: "CEPSA",
          width: 100,
          height: 80,
        },
        {
          src: "/img/bunker-supply/moeve.png",
          alt: "MOEVE",
          width: 100,
          height: 80,
        },
      ],
      link: "https://rafamoreno.es/rebranding-cepsa-moeve/",
    },
    {
      title: t("marketIndices.providers.stabiaOil.title"),
      description: t("marketIndices.providers.stabiaOil.description"),
      image: {
        src: "/img/bunker-supply/stabia-oil.jpg",
        alt: "Stabia Oil",
        width: 200,
        height: 80,
      },
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
      <section className="relative h-[390px] md:h-[60vh] w-full">
        <Image
          src="/img/bunker-supply.jpg"
          alt={t("hero.title")}
          fill
          className="object-cover object-bottom"
          priority
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-0 sm:px-6 h-full flex flex-col justify-center md:max-w-[1400px]">
          <div className="max-w-4xl">
            <div className="space-y-3 sm:space-y-4 mt-10 md:mt-0">
              <h1 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-primary max-w-4xl">
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
          </div>
        </div>
      </section>

      {/* Main Content */}
      {/* Daily Position Feature */}
      <section className="mb-12 sm:mb-16 mx-auto px-4 sm:px-6 max-w-[1400px] py-8 sm:py-10 md:py-12">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div className="relative h-[250px] sm:h-[300px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
            {/* Video que se cargará con JS */}
            <div className="js-only absolute inset-0">
              <video
                src="/videos/bunker-supply.mp4"
                className="w-full h-full object-cover z-0"
                autoPlay
                playsInline
                muted
                loop
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="space-y-4 sm:space-y-6">
            <h2 className="font-montserrat text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary">
              {t("dailyPosition.sectionTitle")}
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <p className="text-base sm:text-lg text-gray-700">
                {t.rich("hero.subtitle2", {
                  p: (chunks) => (
                    <span className="font-semibold">{chunks}</span>
                  ),
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Indices Section */}
      <section className="py-8 sm:py-16 inset-0 bg-gradient-to-l from-[#fff6d399] via-[#ffe47acc] to-[#f8ce24c2]">
        <div className="container mx-auto px-4 sm:px-6 max-w-[1400px] ">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-darkTitle mb-8 text-center">
            {t("marketIndices.title")}
          </h2>
          <p className="text-center text-gray-600 mb-12">
            {t("marketIndices.subtitle")}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {marketIndices.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow h-full flex flex-col justify-between"
              >
                <div className="relative mb-6">
                  {item.image ? (
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      width={item.image.width}
                      height={item.image.height}
                      className="object-contain mx-auto"
                      quality={80}
                      sizes="(max-width: 640px) 200px, 250px"
                      style={{
                        height: "auto",
                        width: "auto",
                        maxWidth: `${item.image.width}px`,
                      }}
                    />
                  ) : item.images ? (
                    <div className="flex gap-4 h-full justify-center">
                      {item.images.map((img, idx) => (
                        <div
                          key={`${img.alt}-${idx}`}
                          className={`relative w-[${img.width}px] h-[${img.height}px]`}
                        >
                          <Image
                            src={img.src}
                            alt={img.alt}
                            width={img.width}
                            height={img.height}
                            className="object-contain"
                            quality={80}
                            sizes="(max-width: 640px) 100px, 120px"
                            style={{
                              height: "auto",
                              width: "auto",
                              maxWidth: `${img.width}px`,
                            }}
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
                {/* Enlace accesible sin JS */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {t("marketIndices.viewMore")}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}

      <section className="container mx-auto px-4 py-10 sm:py-12 lg:py-28 max-w-[1400px]">
        <div className="text-center pb-12">
          <h2 className="text-3xl sm:text-4xl font-montserrat text-primary mb-4">
            {t("experience.title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("experience.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Global Experience Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border">
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
                <div
                  key={index}
                  className="backdrop-blur-sm rounded-xl p-6 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="font-montserrat text-lg font-medium text-black mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-md">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Expert Knowledge Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border">
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
                <div
                  key={index}
                  className="backdrop-blur-sm rounded-xl p-6 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="font-montserrat text-lg font-medium text-black mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-md">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-16 inset-0 bg-gradient-to-l from-[#fff6d399] via-[#ffe47acc] to-[#f8ce24c2]">
        <div className="container mx-auto px-4 sm:px-6 max-w-[1400px] ">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-darkTitle mb-8 text-center">
            {t("specializedServices.title")}{" "}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Versión optimizada para SEO con contenido visible */}
      <section className="container mx-auto px-4 py-16 max-w-[1400px]">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-primary mb-4">
            {t("faq.title")}
          </h2>
          <p className="text-gray-600 text-lg">{t("faq.description")}</p>
        </div>

        {/* Versión optimizada para SEO con todas las respuestas visibles */}
        <div className="max-w-5xl mx-auto">
          {faqs.map((item, index) => (
            <div
              key={item.id}
              className="mb-6 border border-b-[#FFB800] rounded-lg bg-white overflow-hidden p-4"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#FFB800] font-mono text-lg">
                  {String(index + 1).padStart(2, "0")}.
                </span>
                <h3 className="font-semibold text-lg">{item.question}</h3>
              </div>
              <div className="pl-8">
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Versión interactiva con JS usando Accordion de Mantine (oculta por defecto) */}
        <div className="hidden js-only">
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
      </section>

      {/* CTA Section */}
      <section className="inset-0 bg-gradient-to-l from-[#fff6d399] via-[#ffe47acc] to-[#f8ce24c2] p-8 sm:p-8 md:py-20 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-montserrat text-darkTitle mb-3 sm:mb-4 max-w-[1400px] lg:mx-auto">
          {t("cta.title")}
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 max-w-2xl mx-auto">
          {t("cta.description")}
        </p>

        <a
          href={NAVIGATION_LINKS.CONTACTO(locale)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            unstyled
            className="bg-primary hover:bg-primary/75 text-darkTitle font-normal text-sm sm:text-base md:text-lg py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors"
          >
            {t("cta.button")}
          </Button>
        </a>
      </section>

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

import type React from "react";

import { motion } from "framer-motion";
import {
  Anchor,
  ArrowRight,
  Award,
  ChevronRight,
  Compass,
  Waves,
  X,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

import ContactModal from "@/client/general/contact/modal/contactModal";
import { Badge, Button, Divider, Modal, Tabs } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

interface SpecificationItemProps {
  label: string;
  value: string;
}

const SpecificationItem = ({ label, value }: SpecificationItemProps) => (
  <div className="flex flex-col">
    <span className="text-xs font-medium uppercase text-gray-500">{label}</span>
    <span className="font-medium text-gray-900">{value}</span>
  </div>
);

interface FeatureItemProps {
  name: string;
}

const FeatureItem = ({ name }: FeatureItemProps) => {
  const t = useTranslations("yachtCharter.romea.features");

  return (
    <Badge
      variant="outline"
      size="lg"
      radius="xl"
      px="md"
      py="xs"
      styles={{
        root: {
          backgroundColor: "white",
          borderColor: "#e5e7eb",
          cursor: "pointer",
          "&:hover": { backgroundColor: "#f9fafb" },
        },
      }}
      onClick={() => console.log(`Feature selected: ${name}`)}
    >
      {t(name)}
    </Badge>
  );
};

export default function YachtRomeaShowcase() {
  const t = useTranslations("yachtCharter.romea");
  const tSpec = useTranslations("yachtCharter.romea.specifications");
  const tHighlights = useTranslations("yachtCharter.romea.highlights");
  const tRates = useTranslations("yachtCharter.romea.rates");
  const [contactModalOpened, setContactModalOpened] = useState(false);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [modalOpened, { open: openModal, close: closeModal }] =
    useDisclosure(false);

  const specifications = [
    { label: tSpec("length.label"), value: tSpec("length.value") },
    { label: tSpec("beam.label"), value: tSpec("beam.value") },
    { label: tSpec("draft.label"), value: tSpec("draft.value") },
    { label: tSpec("grossTonnage.label"), value: tSpec("grossTonnage.value") },
    { label: tSpec("builder.label"), value: tSpec("builder.value") },
    { label: tSpec("year.label"), value: tSpec("year.value") },
    { label: tSpec("guests.label"), value: tSpec("guests.value") },
    {
      label: tSpec("cabinConfiguration.label"),
      value: tSpec("cabinConfiguration.value"),
    },
    {
      label: tSpec("interiorDesigner.label"),
      value: tSpec("interiorDesigner.value"),
    },
    { label: tSpec("crew.label"), value: tSpec("crew.value") },
    { label: tSpec("engines.label"), value: tSpec("engines.value") },
    {
      label: tSpec("cruisingSpeed.label"),
      value: tSpec("cruisingSpeed.value"),
    },
    { label: tSpec("maxSpeed.label"), value: tSpec("maxSpeed.value") },
    { label: tSpec("range.label"), value: tSpec("range.value") },
  ];

  const features = [
    "tenders",
    "beachClub",
    "spa",
    "jetskis",
    "paddleBoard",
    "gym",
    "inflatableWaterToys",
    "seabobs",
    "divingSnorkelling",
    "elevator",
    "stabilisers",
    "kayaks",
    "variousWatersport",
    "jacuzzi",
    "fishingEquipment",
  ];

  const highlights = [
    "award",
    "glassUse",
    "beachClub",
    "pool",
    "tenderBay",
    "diningOptions",
  ];

  const rates = [
    {
      season: tRates("summer.season"),
      area: tRates("summer.area"),
      high: tRates("summer.high"),
      low: tRates("summer.low"),
    },
    {
      season: tRates("winter.season"),
      area: tRates("winter.area"),
      high: tRates("winter.high"),
      low: tRates("winter.low"),
    },
  ];

  const galleryImages = [
    { src: "/img/romea/gallery-1.webp", alt: t("gallery.image1Alt") },
    { src: "/img/romea/gallery-2.webp", alt: t("gallery.image2Alt") },
    { src: "/img/romea/gallery-3.webp", alt: t("gallery.image3Alt") },
    { src: "/img/romea/gallery-4.webp", alt: t("gallery.image4Alt") },
    { src: "/img/romea/gallery-5.webp", alt: t("gallery.image5Alt") },
    { src: "/img/romea/gallery-6.webp", alt: t("gallery.image6Alt") },
  ];

  const handleInquireNow = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    console.log("Inquiry submitted");
    // Add your inquiry logic here
  };

  // const handleDownloadBrochure = (e?: React.MouseEvent) => {
  //   if (e) e.stopPropagation();
  //   console.log("Downloading brochure");
  //   // Add your download logic here
  // };

  const handleViewGalleryImage = (index: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveImageIndex(index);
    openModal();
  };

  return (
    <div className="flex flex-col bg-gray-50">
      {/* Yacht Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-50 via-amber-100 to-amber-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-2">
                    <Badge
                      unstyled
                      className="border-primary bg-primary text-white border rounded-md px-4 py-0.5 font-medium text-xs"
                      radius="sm"
                    >
                      {t("hero.exclusive")}
                    </Badge>

                    <Badge
                      unstyled
                      variant="outline"
                      className="border-primary text-primary border rounded-md px-4 py-0.5 font-medium text-xs"
                      radius="sm"
                    >
                      {t("hero.available")}
                    </Badge>
                  </div>
                  <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#0f172a]">
                    {t("hero.title")}
                  </h1>
                  <h2 className="font-sans text-lg sm:text-xl md:text-2xl text-gray-600 font-light">
                    {t("hero.subtitle")}
                  </h2>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Anchor className="w-4 h-4" />
                    <p className="text-sm sm:text-base">{t("hero.details")}</p>
                  </div>
                  <div className="pt-6 flex flex-col sm:flex-row gap-4">
                    <Button
                      unstyled
                      className="bg-primary hover:bg-primary/75 text-white font-normal text-sm md:text-base py-2 sm:py-3 px-4 sm:px-6 rounded flex items-center justify-center cursor-pointer transition-colors duration-200"
                      onClick={() => setContactModalOpened(true)}
                    >
                      <div className="flex gap-2 items-center">
                        {t("buttons.inquireNow")}
                        <ArrowRight size={16} />
                      </div>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="order-1 lg:order-2">
              <div
                className="relative h-[300px] w-full rounded-lg overflow-hidden shadow-lg cursor-pointer"
                onClick={(e) => handleViewGalleryImage(0, e)}
              >
                <Image
                  src="/img/romea/hero.jpg"
                  alt={t("hero.imageAlt")}
                  fill
                  priority
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                  <div className="bg-white/80 rounded-full p-2">
                    <ChevronRight className="h-6 w-6 text-gray-800" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 py-4">
            <div
              className="flex items-center space-x-3 p-3 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors duration-200"
              onClick={() => console.log("Length stat clicked")}
            >
              <Anchor className="h-5 w-5 text-gray-500" />
              <div>
                <p className="text-xs text-gray-500">
                  {t("quickStats.length.label")}
                </p>
                <p className="font-medium">{t("quickStats.length.value")}</p>
              </div>
            </div>
            <div
              className="flex items-center space-x-3 p-3 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors duration-200"
              onClick={() => console.log("Builder stat clicked")}
            >
              <Award className="h-5 w-5 text-gray-500" />
              <div>
                <p className="text-xs text-gray-500">
                  {t("quickStats.builder.label")}
                </p>
                <p className="font-medium">{t("quickStats.builder.value")}</p>
              </div>
            </div>
            <div
              className="flex items-center space-x-3 p-3 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors duration-200"
              onClick={() => console.log("Cruising Area stat clicked")}
            >
              <Compass className="h-5 w-5 text-gray-500" />
              <div>
                <p className="text-xs text-gray-500">
                  {t("quickStats.cruisingArea.label")}
                </p>
                <p className="font-medium">
                  {t("quickStats.cruisingArea.value")}
                </p>
              </div>
            </div>
            <div
              className="flex items-center space-x-3 p-3 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors duration-200"
              onClick={() => console.log("Weekly Rate stat clicked")}
            >
              <Waves className="h-5 w-5 text-gray-500" />
              <div>
                <p className="text-xs text-gray-500">
                  {t("quickStats.weeklyRate.label")}
                </p>
                <p className="font-medium">
                  {t("quickStats.weeklyRate.value")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-4 sm:px-6 py-16 md:pt-24 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-10 h-0.5 bg-gray-300"></div>
            <span className="text-gray-500 uppercase text-sm tracking-wider">
              {t("about.discover")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-10">
            {t("about.title")}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                {t("about.paragraph1")}
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {t("about.paragraph2")}
              </p>
            </div>
            <div>
              <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                {t("about.paragraph3")}
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {t("about.paragraph4")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Gallery Preview Section */}
      <div className="bg-white py-8 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-10 h-0.5 bg-gray-300"></div>
              <span className="text-gray-500 uppercase text-sm tracking-wider">
                {t("gallery.experience")}
              </span>
            </div>
            <div className="mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900">
                {t("gallery.title")}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group"
                  onClick={(e) => handleViewGalleryImage(index, e)}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white/80 rounded-full p-2">
                      <ChevronRight className="h-6 w-6 text-gray-800" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gallery Dialog */}
      <Modal
        opened={modalOpened}
        onClose={closeModal}
        size="xl"
        fullScreen
        padding="md"
        withCloseButton={false}
        styles={{
          content: {
            backgroundColor: "rgba(0, 0, 0, 0.9)",
          },
          body: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            padding: "1.5rem",
          },
        }}
        transitionProps={{
          transition: "fade",
          duration: 300,
        }}
        zIndex={1000}
      >
        <div className="relative w-full h-full flex flex-col">
          <div className="flex justify-end mb-4">
            <Button
              unstyled
              className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 cursor-pointer transition-colors duration-200 z-10"
              onClick={closeModal}
            >
              <span className="sr-only">{t("gallery.close")}</span>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="relative flex-1 w-full flex items-center justify-center">
            <div className="relative w-full h-full max-h-[80vh] max-w-[90vw]">
              <Image
                src={galleryImages[activeImageIndex].src || "/placeholder.svg"}
                alt={galleryImages[activeImageIndex].alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
          </div>
          <div className="flex justify-center mt-4 gap-2">
            <Button
              unstyled
              className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 cursor-pointer transition-colors duration-200"
              onClick={() =>
                setActiveImageIndex((prev) =>
                  prev > 0 ? prev - 1 : galleryImages.length - 1
                )
              }
            >
              <span className="sr-only">{t("gallery.previous")}</span>
              <ChevronRight className="h-5 w-5 rotate-180" />
            </Button>
            <Button
              unstyled
              className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 cursor-pointer transition-colors duration-200"
              onClick={() =>
                setActiveImageIndex((prev) =>
                  prev < galleryImages.length - 1 ? prev + 1 : 0
                )
              }
            >
              <span className="sr-only">{t("gallery.next")}</span>
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </Modal>

      {/* Specifications Section */}
      <div className="container mx-auto px-4 sm:px-6 py-16 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-10 h-0.5 bg-gray-300"></div>
            <span className="text-gray-500 uppercase text-sm tracking-wider">
              {t("specs.details")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-10">
            {t("specs.title")}
          </h2>

          <Tabs defaultValue="specs">
            <Tabs.List className="mb-8">
              <Tabs.Tab
                value="specs"
                className="cursor-pointer hover:bg-gray-100 transition-colors duration-200"
              >
                {t("specs.tabs.specifications")}
              </Tabs.Tab>
              <Tabs.Tab
                value="features"
                className="cursor-pointer hover:bg-gray-100 transition-colors duration-200"
              >
                {t("specs.tabs.features")}
              </Tabs.Tab>
              <Tabs.Tab
                value="highlights"
                className="cursor-pointer hover:bg-gray-100 transition-colors duration-200"
              >
                {t("specs.tabs.highlights")}
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="specs" pt="lg">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="hover:bg-gray-50 p-3 rounded-lg transition-colors duration-200 cursor-pointer"
                    onClick={() =>
                      console.log(`Specification clicked: ${spec.label}`)
                    }
                  >
                    <SpecificationItem label={spec.label} value={spec.value} />
                  </div>
                ))}
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="features" pt="lg">
              <div className="flex flex-wrap gap-3">
                {features.map((feature, index) => (
                  <FeatureItem key={index} name={feature} />
                ))}
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="highlights" pt="lg">
              <div className="flex flex-col space-y-6">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <div className="text-lg">•</div>
                    </div>
                    <p className="text-base text-gray-700">
                      {tHighlights(highlight)}
                    </p>
                  </div>
                ))}
              </div>
            </Tabs.Panel>
          </Tabs>
        </motion.div>
      </div>

      {/* Highlights Section with Image */}
      <div className="bg-gradient-to-r from-amber-50 via-amber-100 to-amber-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full order-2 lg:order-1"
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-10 h-0.5 bg-gray-400"></div>
                <span className="text-gray-600 uppercase text-sm tracking-wider">
                  {t("awardSection.excellence")}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-8">
                {t("awardSection.title")}
              </h2>
              <div className="space-y-6">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {t("awardSection.paragraph1")}
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {t("awardSection.paragraph2")}
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full order-1 lg:order-2"
            >
              <div
                className="relative h-[300px] w-full rounded-lg overflow-hidden shadow-2xl cursor-pointer"
                onClick={(e) => handleViewGalleryImage(1, e)}
              >
                <Image
                  src="/img/romea/interior.jpg"
                  alt={t("awardSection.imageAlt")}
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                  <div className="bg-white/80 rounded-full p-2">
                    <ChevronRight className="h-6 w-6 text-gray-800" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Rates Section */}
      <div className="container mx-auto px-4 sm:px-6 py-16 md:py-24 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-10 h-0.5 bg-gray-300"></div>
            <span className="text-gray-500 uppercase text-sm tracking-wider">
              {t("rates.pricing")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-10">
            {t("rates.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {rates.map((rate, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 cursor-pointer"
                onClick={() => setContactModalOpened(true)}
              >
                <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                  {index === 0 ? (
                    <Waves className="h-5 w-5 sm:h-6 sm:w-6 text-amber-500" />
                  ) : (
                    <Compass className="h-5 w-5 sm:h-6 sm:w-6 text-amber-500" />
                  )}
                  <h3 className="text-xl sm:text-2xl font-serif">
                    {rate.season} - {rate.area}
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div
                    className="p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation()
                      setContactModalOpened(true)
                    }}
                  >
                    <p className="text-xs sm:text-sm text-gray-500 mb-1">{t("rates.highSeason")}</p>
                    <p className="text-base sm:text-xl font-medium">{rate.high}</p>
                  </div>
                  <div
                    className="p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation()
                      setContactModalOpened(true)
                    }}
                  >
                    <p className="text-xs sm:text-sm text-gray-500 mb-1">{t("rates.lowSeason")}</p>
                    <p className="text-base sm:text-xl font-medium">{rate.low}</p>
                  </div>
                </div>
                <Divider className="my-4 sm:my-6" />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0">
                  <p className="text-xs sm:text-sm text-gray-500">{t("rates.priceExcludes")}</p>
                  <Button
                    unstyled
                    className="bg-transparent hover:bg-primary/10 text-primary border-primary font-normal py-1.5 px-3 rounded flex items-center cursor-pointer transition-colors duration-200"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleInquireNow(e)
                      setContactModalOpened(true)
                    }}
                  >
                    <div className="flex gap-2 items-center">
                      {t("buttons.inquireNow")}
                      <ChevronRight size={16} className="sm:w-5 sm:h-5" />
                    </div>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-6 italic">
            {t("rates.disclaimer")}
          </p>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif mb-6">
                {t("cta.title")}
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {t("cta.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  unstyled
                  className="bg-primary hover:bg-primary/75 text-white font-normal md:text-base py-3 px-4 sm:px-6 rounded flex items-center justify-center cursor-pointer transition-colors duration-200"
                  onClick={() => setContactModalOpened(true)}
                >
                  <div className="flex gap-2 items-center">
                    {t("buttons.inquireNow")}
                    <ArrowRight size={16} />
                  </div>
                </Button>
                {/* <Button
                  unstyled
                  className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-normal text-base py-2 sm:py-3 px-4 sm:px-6 rounded flex items-center justify-center cursor-pointer transition-colors duration-200"
                >
                  {t("buttons.downloadBrochure")}
                </Button> */}
              </div>
            </div>
            <div
              className="relative h-[300px] rounded-lg overflow-hidden cursor-pointer"
              onClick={(e) => handleViewGalleryImage(0, e)}
            >
              <Image
                src="/img/romea/gallery-1.webp"
                alt={t("cta.imageAlt")}
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent hover:from-black/70 transition-colors duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-xl font-medium">{t("cta.yachtName")}</p>
                <p className="text-sm text-gray-200">{t("cta.availability")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactModal
        opened={contactModalOpened}
        onClose={() => setContactModalOpened(false)}
      />
    </div>
  );
}

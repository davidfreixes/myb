"use client";

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
import Image from "next/image";
import { useState } from "react";

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

const FeatureItem = ({ name }: FeatureItemProps) => (
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
    {name}
  </Badge>
);

export default function YachtRomeaShowcase() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [modalOpened, { open: openModal, close: closeModal }] =
    useDisclosure(false);

  const specifications = [
    { label: "Length", value: "81.8 M (268.4 FT)" },
    { label: "Beam", value: "12.6 M (41.4 FT)" },
    { label: "Draft", value: "3.4M (11.4 FT)" },
    { label: "Gross Tonnage", value: "2312 GT" },
    { label: "Builder", value: "ABEKING & RASMUSSEN" },
    { label: "Year", value: "2015 / 2021" },
    { label: "Guests", value: "12 IN 7 CABINS" },
    { label: "Cabin configuration", value: "4 DOUBLE, 3 TWIN" },
    { label: "Interior Designer", value: "TERENCE DISDALE" },
    { label: "Crew", value: "CAPTAIN + 24" },
    { label: "Engines", value: "2 X CAT 3516C DIESEL" },
    { label: "Cruising Speed", value: "13 KTS" },
    { label: "Max Speed", value: "17 KTS" },
    { label: "Range", value: "4000 NM" },
  ];

  const features = [
    "Tender(s)",
    "Beach club",
    "Spa",
    "Jetski(s)",
    "Paddle board",
    "Gym",
    "Inflatable Water Toys",
    "Seabob(s)",
    "Diving / Snorkelling",
    "Elevator",
    "Stabilisers",
    "Kayak(s)",
    "Various watersport",
    "Jacuzzi",
    "Fishing Equipment",
  ];

  const highlights = [
    "2018 World Superyacht Award for Displacement Motor Yachts Below 500GT (40m & Above)",
    "Exceptional use of glass throughout with floor-to-ceiling windows that illuminate the interior with natural sunlight",
    "Massive beach club featuring a fully equipped gym, a fully dedicated spa and ocean-level fold-down balconies",
    "Glass-bottomed pool with counterflow current, designer lighting and Jacuzzi",
    "Luxurious drive-in tender bay for easy hop on/off transfers to shore",
    "Extensive indoor and outdoor dining options and seatings",
  ];

  const rates = [
    {
      season: "SUMMER",
      area: "Mediterranean",
      high: "EUR1,100,000/wk",
      low: "EUR1,100,000/wk",
    },
    {
      season: "WINTER",
      area: "Caribbean",
      high: "EUR1,100,000/wk",
      low: "EUR1,100,000/wk",
    },
  ];

  const galleryImages = [
    { src: "/img/romea/gallery-1.webp", alt: "RoMEA yacht exterior view" },
    { src: "/img/romea/gallery-2.webp", alt: "RoMEA yacht master suite" },
    { src: "/img/romea/gallery-3.webp", alt: "RoMEA yacht dining area" },
    { src: "/img/romea/gallery-4.webp", alt: "RoMEA yacht beach club" },
    { src: "/img/romea/gallery-5.webp", alt: "RoMEA yacht sundeck" },
    { src: "/img/romea/gallery-6.webp", alt: "RoMEA yacht aerial view" },
  ];

  const handleInquireNow = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    console.log("Inquiry submitted");
    // Add your inquiry logic here
  };

  const handleDownloadBrochure = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    console.log("Downloading brochure");
    // Add your download logic here
  };

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
                      EXCLUSIVE
                    </Badge>

                    <Badge
                      unstyled
                      variant="outline"
                      className="border-primary text-primary border rounded-md px-4 py-0.5 font-medium text-xs"
                      radius="sm"
                    >
                      AVAILABLE
                    </Badge>
                  </div>
                  <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#0f172a]">
                    RoMEA
                  </h1>
                  <h2 className="font-sans text-lg sm:text-xl md:text-2xl text-gray-600 font-light">
                    FOR CHARTER
                  </h2>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Anchor className="w-4 h-4" />
                    <p className="text-sm sm:text-base">
                      81.8m (268.4ft) • Abeking & Rasmussen • 2015 / 2021
                    </p>
                  </div>
                  <div className="pt-6 flex flex-col sm:flex-row gap-4">
                    <Button
                      unstyled
                      className="bg-primary hover:bg-primary/75 text-white font-normal text-sm md:text-base py-2 sm:py-3 px-4 sm:px-6 rounded flex items-center justify-center cursor-pointer transition-colors duration-200"
                      onClick={handleInquireNow}
                    >
                      <div className="flex gap-2 items-center">
                        Inquire Now
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
                  alt="RoMEA Yacht"
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
                <p className="text-xs text-gray-500">Length</p>
                <p className="font-medium">81.8 M (268.4 FT)</p>
              </div>
            </div>
            <div
              className="flex items-center space-x-3 p-3 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors duration-200"
              onClick={() => console.log("Builder stat clicked")}
            >
              <Award className="h-5 w-5 text-gray-500" />
              <div>
                <p className="text-xs text-gray-500">Builder</p>
                <p className="font-medium">ABEKING & RASMUSSEN</p>
              </div>
            </div>
            <div
              className="flex items-center space-x-3 p-3 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors duration-200"
              onClick={() => console.log("Cruising Area stat clicked")}
            >
              <Compass className="h-5 w-5 text-gray-500" />
              <div>
                <p className="text-xs text-gray-500">Cruising Area</p>
                <p className="font-medium">Mediterranean / Caribbean</p>
              </div>
            </div>
            <div
              className="flex items-center space-x-3 p-3 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors duration-200"
              onClick={() => console.log("Weekly Rate stat clicked")}
            >
              <Waves className="h-5 w-5 text-gray-500" />
              <div>
                <p className="text-xs text-gray-500">Weekly Rate</p>
                <p className="font-medium">EUR1,100,000</p>
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
          className="mb-16"
        >
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-10 h-0.5 bg-gray-300"></div>
            <span className="text-gray-500 uppercase text-sm tracking-wider">
              Discover
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-10">
            ABOUT RoMEA
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                Introducing RoMEA, the epitome of superyacht luxury and
                sophistication. This magnificent vessel, measuring 81.8 metres
                in length, was meticulously crafted in Germany by the renowned
                shipyard Abeking & Rasmussen, known for their exceptional
                craftsmanship. Delivered in 2015 and refitted in 2021, RoMEA
                exudes timeless elegance and offers a peerless yachting
                experience.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                With a top speed of 17 knots and a remarkable maximum range of
                4000 nautical miles at economical speed, RoMEA effortlessly
                combines power and efficiency. Two Caterpillar diesel engines
                provide an impressive propulsion, ensuring smooth and seamless
                voyages across vast oceans.
              </p>
            </div>
            <div>
              <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                Step on board, and you&apos;ll discover a world of opulence and
                comfort. Accommodating up to 12 guests in 7 staterooms, RoMEA
                offers the utmost privacy and indulgence. Impeccably designed by
                the visionary Terence Disdale, who also crafted the stunning
                interior, this superyacht is a masterpiece in every sense.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                RoMEA&apos;s exceptional design earned her the prestigious 2018
                World Superyacht Award for Displacement Motor Yachts Below
                500GT. Her expansive beach club, glass-bottomed pool, and
                luxurious spa facilities create an unparalleled experience for
                the most discerning guests.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Gallery Preview Section */}
      <div className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-10 h-0.5 bg-gray-300"></div>
              <span className="text-gray-500 uppercase text-sm tracking-wider">
                Experience
              </span>
            </div>
            <div className="mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900">
                GALLERY
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
              <span className="sr-only">Close</span>
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
              <span className="sr-only">Previous</span>
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
              <span className="sr-only">Next</span>
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </Modal>

      {/* Specifications Section */}
      <div className="container mx-auto px-4 sm:px-6 py-16 md:py-24 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-10 h-0.5 bg-gray-300"></div>
            <span className="text-gray-500 uppercase text-sm tracking-wider">
              Details
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-10">
            SPECIFICATIONS
          </h2>

          <Tabs defaultValue="specs">
            <Tabs.List className="mb-8">
              <Tabs.Tab
                value="specs"
                className="cursor-pointer hover:bg-gray-100 transition-colors duration-200"
              >
                Specifications
              </Tabs.Tab>
              <Tabs.Tab
                value="features"
                className="cursor-pointer hover:bg-gray-100 transition-colors duration-200"
              >
                Features
              </Tabs.Tab>
              <Tabs.Tab
                value="highlights"
                className="cursor-pointer hover:bg-gray-100 transition-colors duration-200"
              >
                Highlights
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
                    <p className="text-base text-gray-700">{highlight}</p>
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
                  Excellence
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-8">
                Award-Winning Design
              </h2>
              <div className="space-y-6">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  RoMEA stands as a testament to exceptional craftsmanship and
                  design excellence. Her prestigious 2018 World Superyacht Award
                  recognizes the meticulous attention to detail and innovative
                  features that set her apart.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  The yacht&apos;s interior, crafted by the legendary Terence
                  Disdale, creates an atmosphere of refined luxury with natural
                  materials, sophisticated color palettes, and thoughtful
                  spatial design that maximizes both comfort and elegance.
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
                  alt="RoMEA yacht interior"
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
          className="mb-16"
        >
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-10 h-0.5 bg-gray-300"></div>
            <span className="text-gray-500 uppercase text-sm tracking-wider">
              Pricing
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-10">
            AREAS & RATES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rates.map((rate, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 cursor-pointer"
                onClick={() =>
                  console.log(
                    `Rate card clicked: ${rate.season} - ${rate.area}`
                  )
                }
              >
                <div className="flex items-center space-x-3 mb-6">
                  {index === 0 ? (
                    <Waves className="h-6 w-6 text-amber-500" />
                  ) : (
                    <Compass className="h-6 w-6 text-amber-500" />
                  )}
                  <h3 className="text-2xl font-serif">
                    {rate.season} - {rate.area}
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div
                    className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log(`High season rate clicked: ${rate.high}`);
                    }}
                  >
                    <p className="text-sm text-gray-500 mb-1">High Season</p>
                    <p className="text-xl font-medium">{rate.high}</p>
                  </div>
                  <div
                    className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log(`Low season rate clicked: ${rate.low}`);
                    }}
                  >
                    <p className="text-sm text-gray-500 mb-1">Low Season</p>
                    <p className="text-xl font-medium">{rate.low}</p>
                  </div>
                </div>
                <Divider className="my-6" />
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">
                    Price excludes VAT + 30% Expenses
                  </p>
                  <Button
                    unstyled
                    className="bg-transparent hover:bg-primary/10 text-primary border-primary font-normal py-1.5 px-3 rounded flex items-center cursor-pointer transition-colors duration-200"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleInquireNow(e);
                    }}
                  >
                    <div className="flex gap-2 items-center">
                      Inquire Now
                      <ChevronRight size={14} />{" "}
                    </div>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-6 italic">
            Not offered for sale or charter to U.S. residents while in U.S.
            waters
          </p>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif mb-6">
                Experience Unparalleled Luxury
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Charter the magnificent RoMEA for your next luxury vacation. Our
                team is ready to create a bespoke experience tailored to your
                preferences, ensuring an unforgettable journey across the
                world&apos;s most beautiful waters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  unstyled
                  className="bg-primary hover:bg-primary/75 text-white font-normal text-sm md:text-base py-2 sm:py-3 px-4 sm:px-6 rounded flex items-center justify-center cursor-pointer transition-colors duration-200"
                  rightSection={<ArrowRight size={16} />}
                  onClick={(e) => handleInquireNow(e)}
                >
                  Inquire Now
                </Button>
                <Button
                  unstyled
                  className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-normal text-sm md:text-base py-2 sm:py-3 px-4 sm:px-6 rounded flex items-center justify-center cursor-pointer transition-colors duration-200"
                  onClick={(e) => handleDownloadBrochure(e)}
                >
                  Download Brochure
                </Button>
              </div>
            </div>
            <div
              className="relative h-[300px] rounded-lg overflow-hidden cursor-pointer"
              onClick={(e) => handleViewGalleryImage(0, e)}
            >
              <Image
                src="/img/romea/gallery-1.webp"
                alt="RoMEA yacht exterior"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent hover:from-black/70 transition-colors duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-xl font-medium">RoMEA</p>
                <p className="text-sm text-gray-200">Available for Charter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

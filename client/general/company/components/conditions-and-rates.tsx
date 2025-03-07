import { Button } from "@mantine/core";
import { motion } from "framer-motion";
import {
  Anchor,
  Building2,
  CalendarClock,
  CreditCard,
  FileSignature,
  Info,
  Mail,
  ShieldCheck,
  Ship,
  Star,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import ContactModal from "../../contact/modal/contactModal";

export default function ConditionsAndRates() {
  const [activeTab, setActiveTab] = useState("yates");
  const [contactModalOpened, setContactModalOpened] = useState(false);
  const t = useTranslations("conditionsAndRates");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative py-8 sm:py-12 md:py-16 lg:py-16">
        <Image
          src="/img/conditions-and-rates.jpg"
          alt="Corporate building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center h-full mt-8 sm:mt-8 md:mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center px-4"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-medium text-primary mb-4 sm:mb-6">
              {t("hero.title")}
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8">
              {t("hero.subtitle")}
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-10">
        {/* Tabs */}
        <div className="flex flex-col sm:flex-row justify-center mb-6 sm:mb-8 bg-white sticky top-0 z-10">
          <Button
            unstyled
            onClick={() => setActiveTab("yates")}
            className={`px-4 sm:px-6 py-3 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none font-montserrat text-base sm:text-lg transition-colors ${
              activeTab === "yates"
                ? "bg-primary text-black"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <Ship className="w-4 h-4 sm:w-5 sm:h-5 mr-2 inline-block" />
            {t("tabs.yachts.label")}
          </Button>
          <Button
            unstyled
            onClick={() => setActiveTab("brokerage")}
            className={`px-4 sm:px-6 py-3 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none font-montserrat text-base sm:text-lg transition-colors ${
              activeTab === "brokerage"
                ? "bg-primary text-black"
                : "bg-gray-200 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <Building2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 inline-block" />
            {t("tabs.brokerage.label")}
          </Button>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === "yates" ? <YatesContent /> : <BrokerageContent />}
        </div>
      </div>

      {/* FAQ and Contact Section */}
      <div className="mt-8 sm:mt-12 md:mt-16 p-4 sm:p-6 md:p-8 text-center inset-0 bg-primary/30 py-8 sm:py-12 md:py-16">
        <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
          <h2 className="text-xl sm:text-3xl font-montserrat font-semibold text-primary mb-2 sm:mb-4">
            {t("contact.title")}
          </h2>
        </div>
        <p className="text-gray-700 mb-4 sm:mb-6 px-4">
          {t("contact.description")}
        </p>
        <Button
          onClick={() => setContactModalOpened(true)}
          unstyled
          className="bg-primary hover:bg-primary/60 text-darkTitle font-normal text-sm sm:text-base md:text-lg py-2 px-4 rounded-lg transition-colors"
        >
          <div className="flex gap-2 items-center">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            {t("contact.button")}
          </div>
        </Button>
      </div>
      <ContactModal
        opened={contactModalOpened}
        onClose={() => setContactModalOpened(false)}
      />
    </div>
  );
}

function YatesContent() {
  const t = useTranslations("conditionsAndRates");

  const inspectionPlans = [
    {
      title: t("yachts.inspections.plans.0.title"),
      price: t("yachts.inspections.plans.0.price"),
      description: t(
        "yachts.inspections.plans.0.description"
      ),
      features: [
        t("yachts.inspections.plans.0.features.0"),
        t("yachts.inspections.plans.0.features.1"),
        t("yachts.inspections.plans.0.features.2"),
        t("yachts.inspections.plans.0.features.3"),
      ],
    },
    {
      title: t("yachts.inspections.plans.1.title"),
      price: t("yachts.inspections.plans.1.price"),
      description: t(
        "yachts.inspections.plans.1.description"
      ),
      features: [
        t("yachts.inspections.plans.1.features.0"),
        t("yachts.inspections.plans.1.features.1"),
        t("yachts.inspections.plans.1.features.2"),
        t("yachts.inspections.plans.1.features.3"),
      ],
    },
    {
      title: t("yachts.inspections.plans.2.title"),
      price: t("yachts.inspections.plans.2.price"),
      description: t(
        "yachts.inspections.plans.2.description"
      ),
      features: [
        t("yachts.inspections.plans.2.features.0"),
        t("yachts.inspections.plans.2.features.1"),
        t("yachts.inspections.plans.2.features.2"),
        t("yachts.inspections.plans.2.features.3"),
      ],
    },
  ];

  const valuationPlans = [
    {
      title: t("yachts.valuations.plans.0.title"),
      price: t("yachts.valuations.plans.0.price"),
      description: t(
        "yachts.valuations.plans.0.description"
      ),
    },
    {
      title: t("yachts.valuations.plans.1.title"),
      price: t("yachts.valuations.plans.1.price"),
      description: t(
        "yachts.valuations.plans.1.description"
      ),
    },
    {
      title: t("yachts.valuations.plans.2.title"),
      price: t("yachts.valuations.plans.2.price"),
      description: t(
        "yachts.valuations.plans.2.description"
      ),
    },
  ];

  const otherServices = [
    {
      title: t("yachts.otherServices.services.0.title"),
      price: t("yachts.otherServices.services.0.price"),
      unit: t("yachts.otherServices.services.0.unit"),
    },
    {
      title: t("yachts.otherServices.services.1.title"),
      price: t("yachts.otherServices.services.1.price"),
      unit: t("yachts.otherServices.services.1.unit"),
    },
  ];

  const conditions = [
    {
      title: t("yachts.conditions.items.0.title"),
      description: t(
        "yachts.conditions.items.0.description"
      ),
      icon: <CreditCard className="w-6 h-6 text-primary" />,
      benefits: [
        t("yachts.conditions.items.0.benefits.0"),
        t("yachts.conditions.items.0.benefits.1"),
        t("yachts.conditions.items.0.benefits.2"),
      ],
    },
    {
      title: t("yachts.conditions.items.1.title"),
      description: t(
        "yachts.conditions.items.1.description"
      ),
      icon: <Info className="w-6 h-6 text-primary" />,
      benefits: [
        t("yachts.conditions.items.1.benefits.0"),
        t("yachts.conditions.items.1.benefits.1"),
        t("yachts.conditions.items.1.benefits.2"),
      ],
    },
    {
      title: t("yachts.conditions.items.2.title"),
      description: t(
        "yachts.conditions.items.2.description"
      ),
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      benefits: [
        t("yachts.conditions.items.2.benefits.0"),
        t("yachts.conditions.items.2.benefits.1"),
        t("yachts.conditions.items.2.benefits.2"),
      ],
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8 sm:space-y-12 max-w-8xl mx-auto px-2 sm:px-4"
    >
      <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-base sm:text-lg text-gray-700">
            {t("tabs.yachts.intro")}
          </p>
        </motion.div>

        {/* Brokeraje Section */}
        <section className="mt-8 sm:mt-12 md:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-montserrat text-primary">
                {t("yachts.brokerage.title")}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-sm border-2 border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="text-lg sm:text-xl font-montserrat mb-3 sm:mb-4 flex items-center gap-2 font-medium">
                  <Anchor className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  {t(
                    "yachts.brokerage.saleAndPurchase.title"
                  )}
                </h3>
                <ul className="list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                  <li>
                    {t(
                      "yachts.brokerage.saleAndPurchase.points.0"
                    )}
                  </li>
                  <li>
                    {t(
                      "yachts.brokerage.saleAndPurchase.points.1"
                    )}
                  </li>
                  <li>
                    {t(
                      "yachts.brokerage.saleAndPurchase.points.2"
                    )}
                  </li>
                </ul>
              </div>
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-sm border-2 border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="text-lg sm:text-xl font-montserrat mb-3 sm:mb-4 flex items-center gap-2 font-medium">
                  <Ship className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  {t("yachts.brokerage.charter.title")}
                </h3>
                <ul className="list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                  <li>
                    {t("yachts.brokerage.charter.points.0")}
                  </li>
                  <li>
                    {t("yachts.brokerage.charter.points.1")}
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Inspecciones Section */}
        <section className="mt-8 sm:mt-12 md:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-montserrat text-primary">
                {t("yachts.inspections.title")}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {inspectionPlans.map((plan, index) => (
                <motion.div
                  key={plan.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group"
                >
                  <div className="bg-primary/10 p-4 sm:p-6 md:p-8 rounded-xl shadow-sm border-2 border-primary/20 h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <h3 className="text-lg sm:text-xl font-montserrat mb-2 font-medium">
                      {plan.title}
                    </h3>
                    <p className="text-2xl sm:text-3xl font-semibold text-primary mb-3 sm:mb-4">
                      {plan.price}
                    </p>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                      {plan.description}
                    </p>
                    <ul className="space-y-2 sm:space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm sm:text-base text-gray-700"
                        >
                          <span className="text-primary mt-1">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Tasaciones Section */}
        <section className="mt-8 sm:mt-12 md:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-montserrat text-primary">
                {t("yachts.valuations.title")}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {valuationPlans.map((plan, index) => (
                <motion.div
                  key={plan.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group"
                >
                  <div className="bg-primary/10 p-4 sm:p-6 md:p-8 rounded-xl shadow-sm border-2 border-primary/20 h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <h3 className="text-lg sm:text-xl font-montserrat mb-2 font-medium">
                      {plan.title}
                    </h3>
                    <p className="text-2xl sm:text-3xl font-semibold text-primary mb-3 sm:mb-4">
                      {plan.price}
                    </p>
                    <p className="text-sm sm:text-base text-gray-600">
                      {plan.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Otros Servicios Section */}
        <section className="mt-8 sm:mt-12 md:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-montserrat text-primary">
                {t("yachts.otherServices.title")}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {otherServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group"
                >
                  <div className="bg-primary/10 p-4 sm:p-6 md:p-8 rounded-xl shadow-sm border-2 border-primary/20 h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <h3 className="text-lg sm:text-xl font-montserrat mb-2 font-medium">
                      {service.title}
                    </h3>
                    <p className="text-2xl sm:text-3xl font-semibold text-primary mb-3 sm:mb-4">
                      {service.price}
                      <span className="text-gray-700 text-base sm:text-lg font-normal">
                        {" "}
                        {service.unit}
                      </span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Condiciones Section */}
        <section className="mt-8 sm:mt-12 md:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-montserrat text-primary">
                {t("yachts.conditions.title")}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {conditions.map((condition, index) => (
                <motion.div
                  key={condition.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group"
                >
                  <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:scale-105">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="p-2 sm:p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        {condition.icon}
                      </div>
                      <h3 className="font-montserrat font-medium text-lg sm:text-xl">
                        {condition.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                      {condition.description}
                    </p>
                    <div className="space-y-2 sm:space-y-3">
                      {condition.benefits.map((benefit, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-xs sm:text-sm text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
}

function BrokerageContent() {
  const t = useTranslations("conditionsAndRates");

  const conditions = [
    {
      title: t(
        "shipBrokerage.contractConditions.conditions.0.title"
      ),
      description: t(
        "shipBrokerage.contractConditions.conditions.0.description"
      ),
      icon: <CalendarClock className="w-6 h-6 text-primary" />,
      benefits: [
        t(
          "shipBrokerage.contractConditions.conditions.0.benefits.0"
        ),

        t(
          "shipBrokerage.contractConditions.conditions.0.benefits.1"
        ),
        ,
        t(
          "shipBrokerage.contractConditions.conditions.0.benefits.2"
        ),
      ],
    },
    {
      title: t(
        "shipBrokerage.contractConditions.conditions.1.title"
      ),
      description: t(
        "shipBrokerage.contractConditions.conditions.1.description"
      ),
      icon: <Star className="w-6 h-6 text-primary" />,
      benefits: [
        t(
          "shipBrokerage.contractConditions.conditions.1.benefits.0"
        ),

        t(
          "shipBrokerage.contractConditions.conditions.1.benefits.1"
        ),
        ,
        t(
          "shipBrokerage.contractConditions.conditions.1.benefits.2"
        ),
      ],
    },
    {
      title: t(
        "shipBrokerage.contractConditions.conditions.2.title"
      ),
      description: t(
        "shipBrokerage.contractConditions.conditions.2.description"
      ),
      icon: <FileSignature className="w-6 h-6 text-primary" />,
      benefits: [
        t(
          "shipBrokerage.contractConditions.conditions.2.benefits.0"
        ),

        t(
          "shipBrokerage.contractConditions.conditions.2.benefits.1"
        ),
        ,
        t(
          "shipBrokerage.contractConditions.conditions.2.benefits.2"
        ),
      ],
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 sm:space-y-8"
    >
      <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
        <p className="text-base sm:text-lg text-gray-700 px-4 sm:px-0">
          {t("tabs.brokerage.intro")}
        </p>

        <section className="mt-6 sm:mt-8">
          <h2 className="text-2xl sm:text-3xl font-montserrat text-primary mb-4 px-4 sm:px-0">
            {t("shipBrokerage.commissions.title")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 px-4 sm:px-0">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border-2 border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-lg sm:text-xl font-montserrat mb-3 sm:mb-4 font-medium">
                {t(
                  "shipBrokerage.commissions.standard.title"
                )}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                {t(
                  "shipBrokerage.commissions.standard.description"
                )}
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border-2 border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-lg sm:text-xl font-montserrat mb-3 sm:mb-4 font-medium">
                {t(
                  "shipBrokerage.commissions.payment.title"
                )}
              </h3>
              <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700">
                <li>
                  {t(
                    "shipBrokerage.commissions.payment.points.0"
                  )}
                </li>
                <li>
                  {t(
                    "shipBrokerage.commissions.payment.points.1"
                  )}
                </li>
                <li>
                  {t(
                    "shipBrokerage.commissions.payment.points.2"
                  )}
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-6 sm:mt-8">
          <h2 className="text-2xl sm:text-3xl font-montserrat text-primary mb-4 px-4 sm:px-0">
            {t("shipBrokerage.responsibilities.title")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 px-4 sm:px-0">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border-2 border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-lg sm:text-xl font-montserrat mb-3 sm:mb-4 font-medium">
                {t(
                  "shipBrokerage.responsibilities.intermediation.title"
                )}
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                {t(
                  "shipBrokerage.responsibilities.intermediation.description"
                )}
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border-2 border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-lg sm:text-xl font-montserrat mb-3 sm:mb-4 font-medium">
                {t(
                  "shipBrokerage.responsibilities.confidentiality.title"
                )}{" "}
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                {t(
                  "shipBrokerage.responsibilities.confidentiality.description"
                )}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-6 sm:mt-8">
          <h2 className="text-2xl sm:text-3xl font-montserrat text-primary mb-4 px-4 sm:px-0">
            {t("shipBrokerage.chartererCommissions.title")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 px-4 sm:px-0">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border-2 border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-lg sm:text-xl font-montserrat mb-3 sm:mb-4 font-medium">
                {t(
                  "shipBrokerage.chartererCommissions.charter.title"
                )}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                {t(
                  "shipBrokerage.chartererCommissions.charter.description"
                )}
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border-2 border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-lg sm:text-xl font-montserrat mb-3 sm:mb-4 font-medium">
                {t(
                  "shipBrokerage.chartererCommissions.additional.title"
                )}
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                {t(
                  "shipBrokerage.chartererCommissions.additional.description"
                )}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-6 sm:mt-8">
          <h2 className="text-2xl sm:text-3xl font-montserrat text-primary mb-4 px-4 sm:px-0">
            {t(
              "shipBrokerage.chartererResponsibilities.title"
            )}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 px-4 sm:px-0">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border-2 border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-lg sm:text-xl font-montserrat mb-3 sm:mb-4 font-medium">
                {t(
                  "shipBrokerage.chartererResponsibilities.negotiation.title"
                )}
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                {t(
                  "shipBrokerage.chartererResponsibilities.negotiation.description"
                )}
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border-2 border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-lg sm:text-xl font-montserrat mb-3 sm:mb-4 font-medium">
                {t(
                  "shipBrokerage.chartererResponsibilities.compliance.title"
                )}
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                {t(
                  "shipBrokerage.chartererResponsibilities.compliance.description"
                )}
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-montserrat text-primary mb-3 sm:mb-4">
                {t("shipBrokerage.contractConditions.title")}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl">
                {t(
                  "shipBrokerage.contractConditions.subtitle"
                )}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {conditions.map((condition, index) => (
                <motion.div
                  key={condition.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group"
                >
                  <div className="bg-primary/10 p-6 sm:p-8 rounded-xl border-2 border-primary/20 h-full transition-all duration-300 hover:shadow-lg hover:bg-primary/15">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="p-2 sm:p-3 bg-white rounded-lg group-hover:bg-primary/10 transition-colors">
                        {condition.icon}
                      </div>
                      <h3 className="font-montserrat font-medium text-lg sm:text-xl">
                        {condition.title}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                      {condition.description}
                    </p>

                    <div className="space-y-2 sm:space-y-3">
                      {condition.benefits.map((benefit, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-xs sm:text-sm text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}

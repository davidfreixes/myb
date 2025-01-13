import { NAVIGATION_LINKS } from "@/utils/navigation";
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
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ConditionsAndRates() {
  const [activeTab, setActiveTab] = useState("yates");

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
              Condiciones de Contratación y Tarifas
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8">
              Información detallada sobre nuestros servicios y tarifas
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
            Ámbito de Yates
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
            Ship Brokerage y Charterer
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
          <h2 className="text-xl sm:text-2xl font-montserrat font-semibold text-primary mb-2 sm:mb-4">
            ¿Tienes alguna pregunta?
          </h2>
        </div>
        <p className="text-gray-700 mb-4 sm:mb-6 px-4">
          Nuestro equipo está disponible para resolver cualquier duda sobre
          nuestras condiciones y tarifas.
        </p>
        <Button
          component={Link}
          href={`${NAVIGATION_LINKS.CONTACTO}`}
          unstyled
          className="bg-primary hover:bg-primary/75 text-black font-normal text-base sm:text-lg py-2 sm:py-3 px-4 sm:px-6 rounded inline-flex items-center"
        >
          <div className="flex gap-2 items-center">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            Contactar
          </div>
        </Button>
      </div>
    </div>
  );
}

function YatesContent() {
  const inspectionPlans = [
    {
      title: "Inspección básica",
      price: "500€",
      description: "Yate hasta 12 metros",
      features: [
        "Inspección visual del casco",
        "Revisión del motor",
        "Sistema eléctrico",
        "Sistema de navegación",
      ],
    },
    {
      title: "Inspección avanzada",
      price: "1,000€",
      description: "Yate hasta 24 metros",
      features: [
        "Todo lo de inspección básica",
        "Sistemas de seguridad",
        "Prueba de navegación",
        "Evaluación completa",
      ],
    },
    {
      title: "Inspección completa",
      price: "2,000€",
      description: "Yate superior a 24 metros",
      features: [
        "Informe completo",
        "Pruebas exhaustivas",
        "Sistemas hidráulicos",
        "Sistemas de propulsión",
      ],
    },
  ];

  const valuationPlans = [
    {
      title: "Tasación básica",
      price: "300€",
      description: "Yate hasta 12 metros",
    },
    {
      title: "Tasación avanzada",
      price: "600€",
      description: "Yate hasta 24 metros",
    },
    {
      title: "Tasación completa",
      price: "1,200€",
      description: "Yate superior a 24 metros",
    },
  ];

  const otherServices = [
    {
      title: "Asesoría y Consultoría Náutica",
      price: "150€",
      unit: "/ hora",
    },
    {
      title: "Gestión de documentación",
      price: "300€",
      unit: "por transacción",
    },
  ];

  const conditions = [
    {
      title: "Métodos de pago",
      description:
        "Aceptamos pagos por transferencia bancaria, tarjeta de crédito o PayPal. Los pagos deben realizarse antes de la entrega de los informes finales.",
      icon: <CreditCard className="w-6 h-6 text-primary" />,
      benefits: ["Transferencia bancaria", "Tarjeta de crédito", "PayPal"],
    },
    {
      title: "Política de Cancelaciones",
      description:
        "En caso de cancelación con menos de 24 horas de antelación, se cobrará el 50% de la tarifa acordada.",
      icon: <Info className="w-6 h-6 text-primary" />,
      benefits: ["Flexibilidad", "Transparencia", "Sin costes ocultos"],
    },
    {
      title: "Validez y Garantías",
      description:
        "Las tarifas están sujetas a cambios anuales según la revisión de precios del mercado.",
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      benefits: [
        "Precios competitivos",
        "Revisión anual",
        "Garantía de servicio",
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
            En Menorca Yacht Brokers, ofrecemos una amplia gama de servicios
            relacionados con la compra, venta y alquiler de yates, incluyendo
            inspecciones y tasaciones marítimas. A continuación, detallamos
            nuestras tarifas y condiciones para cada uno de los servicios que
            ofrecemos.
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
                1. Servicios de Brokeraje de Yates
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-sm border-2 border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="text-lg sm:text-xl font-montserrat mb-3 sm:mb-4 flex items-center gap-2">
                  <Anchor className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  Compra y Venta de Yates:
                </h3>
                <ul className="list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                  <li>Comisión del 5% sobre el precio de venta.</li>
                  <li>
                    Comisión mínima de €2,000 para transacciones por debajo de
                    €40,000.
                  </li>
                  <li>
                    El pago de la comisión se realiza al cierre de la
                    transacción.
                  </li>
                </ul>
              </div>
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-sm border-2 border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="text-lg sm:text-xl font-montserrat mb-3 sm:mb-4 flex items-center gap-2">
                  <Ship className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  Alquiler y Charter de Yates:
                </h3>
                <ul className="list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                  <li>Comisión del 10% sobre el precio de alquiler.</li>
                  <li>
                    Condiciones específicas para alquileres de larga duración
                    (más de 30 días).
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
                2. Inspecciones Marítimas
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
                    <h3 className="text-lg sm:text-xl font-montserrat mb-2">
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
                3. Tasaciones Marítimas
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
                    <h3 className="text-lg sm:text-xl font-montserrat mb-2">
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
                4. Otros Servicios
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
                    <h3 className="text-lg sm:text-xl font-montserrat mb-2">
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
                5. Condiciones Generales
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
                      <h3 className="font-montserrat font-semibold text-lg sm:text-xl">
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
  const conditions = [
    {
      title: "Duración del Contrato",
      description:
        "Vigente hasta la finalización del acuerdo comercial, salvo otro plazo establecido.",
      icon: <CalendarClock className="w-6 h-6 text-primary" />,
      benefits: [
        "Flexibilidad temporal",
        "Adaptable a necesidades",
        "Renovación automática opcional",
      ],
    },
    {
      title: "Exclusividad",
      description:
        "Puede establecerse según los términos acordados en cada caso particular.",
      icon: <Star className="w-6 h-6 text-primary" />,
      benefits: [
        "Acuerdos personalizados",
        "Términos negociables",
        "Garantía de servicio",
      ],
    },
    {
      title: "Modificaciones",
      description:
        "Cualquier modificación debe ser acordada por escrito entre las partes.",
      icon: <FileSignature className="w-6 h-6 text-primary" />,
      benefits: [
        "Transparencia total",
        "Documentación formal",
        "Seguridad jurídica",
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
          En Menorca Brokers, seguimos las normativas internacionales
          reconocidas por BIMCO (Baltic and International Maritime Council) para
          garantizar que todos nuestros acuerdos sean claros, justos y
          transparentes.
        </p>

        <section className="mt-6 sm:mt-8">
          <h2 className="text-2xl sm:text-3xl font-montserrat text-primary mb-4 px-4 sm:px-0">
            1. Comisiones para Ship Broker
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 px-4 sm:px-0">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border-2 border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-lg sm:text-xl font-montserrat mb-3 sm:mb-4">
                Comisión Estándar:
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                La comisión habitual es del 1.25% al 2.5% del flete bruto,
                precio de venta del buque o valor del contrato de fletamento.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border-2 border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-lg sm:text-xl font-montserrat mb-3 sm:mb-4">
                Pago de la Comisión:
              </h3>
              <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700">
                <li>
                  Fletamento: Al cobro del primer flete o inicio del contrato.
                </li>
                <li>
                  Venta de Buques: Tras la firma del MOA y entrega del buque.
                </li>
                <li>
                  Renovaciones y Extensiones: Comisión adicional según acuerdo
                  previo.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-6 sm:mt-8">
          <h2 className="text-2xl sm:text-3xl font-montserrat text-primary mb-4 px-4 sm:px-0">
            2. Responsabilidades del Ship Broker
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 px-4 sm:px-0">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border-2 border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-lg sm:text-xl font-montserrat mb-3 sm:mb-4">
                Intermediación
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Actuamos como intermediario imparcial entre las partes,
                facilitando la negociación.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border-2 border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-lg sm:text-xl font-montserrat mb-3 sm:mb-4">
                Confidencialidad
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Mantenemos la confidencialidad de toda la información sensible.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-6 sm:mt-8">
          <h2 className="text-2xl sm:text-3xl font-montserrat text-primary mb-4 px-4 sm:px-0">
            3. Comisiones para Charterer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 px-4 sm:px-0">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border-2 border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-lg sm:text-xl font-montserrat mb-3 sm:mb-4">
                Comisión de Fletamento:
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                Varía entre 1% a 2% del valor total del fletamento acordado.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border-2 border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-lg sm:text-xl font-montserrat mb-3 sm:mb-4">
                Compensación por Ingreso Adicional:
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Compensación adicional en caso de renovación o modificación del
                contrato.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-6 sm:mt-8">
          <h2 className="text-2xl sm:text-3xl font-montserrat text-primary mb-4 px-4 sm:px-0">
            4. Responsabilidades del Charterer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 px-4 sm:px-0">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border-2 border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-lg sm:text-xl font-montserrat mb-3 sm:mb-4">
                Negociación y Fletamento
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                El Charterer se encarga de negociar las condiciones del contrato
                y asegurar el cumplimiento normativo.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border-2 border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-lg sm:text-xl font-montserrat mb-3 sm:mb-4">
                Cumplimiento de Contrato
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Garantizar el cumplimiento de las condiciones establecidas y
                gestionar posibles disputas.
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
                Condiciones del Contrato
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl">
                Aspectos fundamentales que rigen nuestros acuerdos comerciales.
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
                      <h3 className="font-montserrat font-semibold text-lg sm:text-xl">
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

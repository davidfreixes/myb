import { Button } from "@mantine/core";
import { motion } from "framer-motion";
import {
  BookOpen,
  CheckCircle,
  ClipboardCheck,
  Clock,
  FileText,
  Globe,
  MessageSquareMore,
  Scale,
  Shield,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PurchaseAndSale() {
  const benefits = [
    {
      title: "Claridad y transparencia",
      description: "Los términos y condiciones están claramente definidos.",
      icon: <MessageSquareMore className="w-6 h-6 text-primary" />,
    },
    {
      title: "Protección legal",
      description:
        "Garantiza la protección de todas las partes involucradas en la transacción.",
      icon: <Shield className="w-6 h-6 text-primary" />,
    },
    {
      title: "Flexibilidad",
      description:
        "Se adapta a diversas necesidades, desde alquileres de corta duración hasta acuerdos completos de compraventa.",
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
    },
    {
      title: "Estándares internacionales",
      description:
        "Reconocido globalmente por brokers, operadores y propietarios de yates.",
      icon: <Globe className="w-6 h-6 text-primary" />,
    },
  ];

  const components = [
    {
      title: "Detalles del yate",
      description:
        "Incluye especificaciones como nombre, eslora, tripulación y equipamiento.",
      icon: <ClipboardCheck className="w-6 h-6 text-primary" />,
    },
    {
      title: "Duración y términos del acuerdo",
      description:
        "Fechas específicas de alquiler o condiciones de compraventa.",
      icon: <Clock className="w-6 h-6 text-primary" />,
    },
    {
      title: "Política de cancelaciones",
      description:
        "Establece las condiciones en caso de fuerza mayor o cancelación.",
      icon: <FileText className="w-6 h-6 text-primary" />,
    },
    {
      title: "Costos y depósitos",
      description: "Define los precios, tarifas adicionales y pagos iniciales.",
      icon: <Scale className="w-6 h-6 text-primary" />,
    },
    {
      title: "Términos de uso",
      description:
        "Describe cómo se utilizará el yate y las responsabilidades del cliente.",
      icon: <BookOpen className="w-6 h-6 text-primary" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative py-8 sm:py-12 md:py-16 lg:py-16">
      <Image
          src="/img/purchase-and-sale.jpg"
          alt="Corporate building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center h-full mt-8 sm:mt-8 md:mt-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-montserrat text-primary mb-6">
              Contratos de Compraventa de Yates
            </h1>
            <p className="text-2xl text-white">
              Página Informativa: Contratos MYBA en Menorca Brokers
            </p>
          </motion.div>
        </div>
      </div>
      {/* Introduction Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl mx-auto mb-8 py-10"
      >
        <div className="bg-primary/10 p-8 rounded-xl border-2 border-primary/20">
          <h2 className="text-2xl font-montserrat text-primary mb-4">
            ¿Qué es un Contrato MYBA?
          </h2>
          <p className="text-gray-700 mb-6">
            En Menorca Brokers, nos aseguramos de que cada transacción de yates
            se realice bajo los más altos estándares de la industria. Para
            garantizar transparencia, seguridad y confianza, utilizamos los
            Contratos MYBA, una de las formas contractuales más reconocidas y
            aceptadas en el mundo del alquiler y la venta de yates.
          </p>
          <p className="text-gray-700">
            El contrato MYBA (Mediterranean Yacht Brokers Association) es un
            documento estándar que regula los términos y condiciones de las
            transacciones relacionadas con yates, como alquileres y ventas. Este
            contrato establece de manera clara los derechos y obligaciones tanto
            del propietario como del cliente, minimizando riesgos y posibles
            malentendidos.
          </p>
        </div>
      </motion.div>

      {/* Benefits Section */}
      <div className="inset-0 bg-primary/10 py-8 sm:py-12 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16 max-w-[1400px] mx-auto px-4"
        >
          <h2 className="text-4xl font-montserrat text-primary mb-8 text-center">
            Principales Beneficios
          </h2>
          <div className="grid md:grid-cols-2 gap-8 ">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    {benefit.icon}
                  </div>
                  <h3 className="font-montserrat font-semibold text-xl">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Components Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mb-16 max-w-[1400px] mx-auto px-4 py-10"
      >
        <h2 className="text-4xl font-montserrat text-primary mb-8 text-center">
          Componentes del Contrato MYBA
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {components.map((component, index) => (
            <motion.div
              key={component.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="bg-primary/10 p-6 rounded-xl border-2 border-primary/20 hover:bg-primary/15 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white rounded-lg">{component.icon}</div>
                <h3 className="font-montserrat font-semibold">
                  {component.title}
                </h3>
              </div>
              <p className="text-gray-700">{component.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Why Choose Us Section */}
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
            transition={{ duration: 0.6, delay: 0.8 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-montserrat text-primary mb-6">
                Por qué elegir Menorca Brokers
              </h2>
              <p className="text-gray-700 mb-6">
                Nuestra experiencia en el sector nos permite asesorarte en cada
                paso del proceso, garantizando que tu contrato MYBA esté
                adaptado a tus necesidades específicas. Ya sea que busques
                alquilar o adquirir un yate, trabajamos para que disfrutes de
                una experiencia sin preocupaciones.
              </p>
              <p className="text-gray-700">
                Contacta con nosotros para más información sobre cómo los
                contratos MYBA pueden respaldar tu próxima transacción náutica.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-8 sm:mt-12 md:mt-16 p-4 sm:p-6 md:p-8 text-center inset-0 bg-primary/30 py-8 sm:py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <Button
            component={Link}
            href="/contact"
            unstyled
            className="bg-primary hover:bg-primary/75 text-black font-normal text-lg py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Contáctanos
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

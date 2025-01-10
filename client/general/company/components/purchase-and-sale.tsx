import { NAVIGATION_LINKS } from "@/utils/navigation";
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
      icon: (
        <MessageSquareMore className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
      ),
    },
    {
      title: "Protección legal",
      description:
        "Garantiza la protección de todas las partes involucradas en la transacción.",
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
    {
      title: "Flexibilidad",
      description:
        "Se adapta a diversas necesidades, desde alquileres de corta duración hasta acuerdos completos de compraventa.",
      icon: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
    {
      title: "Estándares internacionales",
      description:
        "Reconocido globalmente por brokers, operadores y propietarios de yates.",
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
  ];

  const components = [
    {
      title: "Detalles del yate",
      description:
        "Incluye especificaciones como nombre, eslora, tripulación y equipamiento.",
      icon: <ClipboardCheck className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
    {
      title: "Duración y términos del acuerdo",
      description:
        "Fechas específicas de alquiler o condiciones de compraventa.",
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
    {
      title: "Política de cancelaciones",
      description:
        "Establece las condiciones en caso de fuerza mayor o cancelación.",
      icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
    {
      title: "Costos y depósitos",
      description: "Define los precios, tarifas adicionales y pagos iniciales.",
      icon: <Scale className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
    {
      title: "Términos de uso",
      description:
        "Describe cómo se utilizará el yate y las responsabilidades del cliente.",
      icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative py-10 sm:py-14 md:py-20">
        <Image
          src="/img/purchase-and-sale.jpg"
          alt="Corporate building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center h-full mt-4">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-montserrat text-primary mb-4 sm:mb-6">
              Contratos de Compraventa de Yates
            </h1>
            <p className="text-xl sm:text-2xl text-white">
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
        className="max-w-4xl mx-auto mb-8 px-4 sm:px-6 py-6 sm:py-10"
      >
        <div className="bg-primary/10 p-4 sm:p-8 rounded-xl border-2 border-primary/20">
          <h2 className="text-xl sm:text-2xl font-montserrat text-primary mb-4">
            ¿Qué es un Contrato MYBA?
          </h2>
          <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
            En Menorca Brokers, nos aseguramos de que cada transacción de yates
            se realice bajo los más altos estándares de la industria. Para
            garantizar transparencia, seguridad y confianza, utilizamos los
            Contratos MYBA, una de las formas contractuales más reconocidas y
            aceptadas en el mundo del alquiler y la venta de yates.
          </p>
          <p className="text-gray-700 text-sm sm:text-base">
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
      <div className="bg-primary/10 py-6 sm:py-10 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 sm:mb-16 max-w-[1400px] mx-auto px-4 sm:px-6"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-primary mb-6 sm:mb-8 text-center">
            Principales Beneficios
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-lg">
                    {benefit.icon}
                  </div>
                  <h3 className="font-montserrat font-semibold text-lg sm:text-xl">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">
                  {benefit.description}
                </p>
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
        className="mb-8 sm:mb-16 max-w-[1400px] mx-auto px-4 sm:px-6 py-6 sm:py-10"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-primary mb-6 sm:mb-8 text-center">
          Componentes del Contrato MYBA
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {components.map((component, index) => (
            <motion.div
              key={component.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="bg-primary/10 p-4 sm:p-6 rounded-xl border-2 border-primary/20 hover:bg-primary/15 transition-all duration-300"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-white rounded-lg">
                  {component.icon}
                </div>
                <h3 className="font-montserrat font-semibold text-sm sm:text-base">
                  {component.title}
                </h3>
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                {component.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Why Choose Us Section */}
      <div className="relative py-12 sm:py-16 md:py-20">
        <Image
          src="/img/conditions-and-rates.jpg"
          alt="Corporate building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="max-w-4xl mx-auto mb-8 sm:mb-16"
          >
            <div className="bg-white p-4 sm:p-8 rounded-xl shadow-lg border border-gray-100">
              <h2 className="text-xl sm:text-2xl font-montserrat text-primary mb-4 sm:mb-6">
                Por qué elegir Menorca Brokers
              </h2>
              <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
                Nuestra experiencia en el sector nos permite asesorarte en cada
                paso del proceso, garantizando que tu contrato MYBA esté
                adaptado a tus necesidades específicas. Ya sea que busques
                alquilar o adquirir un yate, trabajamos para que disfrutes de
                una experiencia sin preocupaciones.
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                Contacta con nosotros para más información sobre cómo los
                contratos MYBA pueden respaldar tu próxima transacción náutica.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-8 sm:py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10 rounded-lg text-center"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-montserrat text-primary mb-3 sm:mb-4">
            ¿Interesado en nuestros servicios?
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Contáctanos para descubrir cómo podemos ayudarte a encontrar el yate
            perfecto para tus necesidades
          </p>
          <div className="flex justify-center">
            <Button
              unstyled
              component={Link}
              href={`${NAVIGATION_LINKS.CONTACTO}`}
              className="w-full sm:w-auto bg-primary hover:bg-primary/75 text-black font-normal text-sm sm:text-base md:text-lg py-3 px-6 sm:px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Contactar ahora
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

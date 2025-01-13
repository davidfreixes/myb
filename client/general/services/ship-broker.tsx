import { NAVIGATION_LINKS } from "@/utils/navigation";
import { Button } from "@mantine/core";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart2,
  Download,
  FileText,
  Ship,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ShipBroker() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative h-[50vh] sm:h-[60vh] w-full">
        <Image
          src="/img/ship-broker.jpg"
          alt="Ship broker service"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="relative z-10 mx-auto px-4 sm:px-6 h-full flex flex-col justify-center max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="space-y-2 md:space-y-4">
              <h1 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight text-primary">
                Ship Sale and Purchase Broker, Charterer & Bunker Trader
              </h1>
              <h2 className="font-montserrat text-base sm:text-lg md:text-xl text-white">
                Especialistas en{" "}
                <span className="text-primary">conectar armadores</span> y{" "}
                <span className="text-primary">fletadores</span>, ofreciendo
                soluciones integrales
              </h2>
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
        className="mb-12 sm:mb-16 mx-auto px-4 sm:px-6 max-w-[1400px] py-8 sm:py-12 md:py-16"
      >
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div className="relative h-[250px] sm:h-[300px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/img/port-sunset.jpg"
              alt="Puerto al atardecer"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 sm:p-6">
              <h3 className="text-white text-lg sm:text-xl font-montserrat mb-2">
                Daily Position
              </h3>
              <p className="text-white/80 text-xs sm:text-sm">
                Actualizado diariamente
              </p>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <h2 className="font-montserrat text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary">
              Menorca Brokers - Daily Position
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
              A continuación, puedes descargarte nuestro daily, consultar
              nuestro contrato tipo y consultar las navieras españolas en
              activo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                unstyled
                className="bg-primary hover:bg-primary/75 text-white font-normal text-sm md:text-base py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors w-full sm:w-auto"
              >
                <div className="flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Descargar Daily Position
                </div>
              </Button>
              <Button
                unstyled
                className="flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-normal text-sm md:text-base py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors w-full sm:w-auto"
              >
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Ver Contrato Tipo
                </div>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Introduction with Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-12 sm:mb-16"
      >
        <div className="inset-0 bg-gradient-to-l from-[#fff6d399] via-[#ffe47acc] to-[#f8ce24c2] p-6 sm:p-8 md:p-12 lg:py-20">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 mx-auto px-4 sm:px-6 max-w-[1400px]">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="font-montserrat text-lg sm:text-xl md:text-2xl text-darkTitle">
                Experiencia Global
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                En Menorca Brokers, somos especialistas en conectar armadores y
                fletadores, ofreciendo soluciones integrales para la compra,
                venta y alquiler de buques o charter por tiempo.
              </p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h3 className="font-montserrat text-lg sm:text-xl md:text-2xl text-darkTitle">
                Conocimiento Experto
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Combinamos un profundo conocimiento del sector marítimo con una
                red global de contactos, lo que nos permite garantizar acuerdos
                eficientes y personalizados.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-[1400px] mx-auto px-4 sm:px-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-darkTitle mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-darkTitle">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Services */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-12 sm:mb-16 md:mb-20 mx-auto px-4 sm:px-6 max-w-[1400px]"
      >
        <h3 className="font-montserrat text-xl sm:text-2xl md:text-3xl text-primary mb-6 sm:mb-8 text-center">
          Servicios Especializados
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  {service.icon}
                </div>
                <h4 className="font-montserrat text-lg sm:text-xl text-primary mb-2 sm:mb-3">
                  {service.title}
                </h4>
              </div>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                {service.description}
              </p>
              <Button
                component={Link}
                href={service.link}
                unstyled
                className="inline-flex items-center text-primary hover:text-primary/75 font-medium text-sm sm:text-base"
              >
                Saber más <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="inset-0 bg-gradient-to-l from-[#fff6d399] via-[#ffe47acc] to-[#f8ce24c2] p-8 sm:p-8 md:py-20 text-center"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-montserrat text-darkTitle mb-3 sm:mb-4 max-w-[1400px] lg:mx-auto">
          ¿Buscas un Ship Broker?
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 max-w-2xl mx-auto">
          Contáctanos para cerrar fixtures o saber más sobre nuestros servicios.
          Nuestro equipo está listo para ayudarte.
        </p>
        <Button
          component={Link}
          href={`${NAVIGATION_LINKS.CONTACTO}`}
          unstyled
          className="bg-primary hover:bg-primary/75 text-darkTitle font-normal text-sm sm:text-base md:text-lg py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors"
        >
          Contactar Ahora
        </Button>
      </motion.div>
    </div>
  );
}

const stats = [
  { value: "15+", label: "Años de Experiencia" },
  { value: "200+", label: "Operaciones Completadas" },
  { value: "50+", label: "Socios Globales" },
  { value: "24/7", label: "Soporte Disponible" },
];

const services = [
  {
    title: "Ship Sale & Purchase",
    description:
      "Desde buques de carga hasta yates de lujo, te guiamos en cada paso del proceso, asegurándonos de que cada operación sea fluida, rentable y satisfactoria.",
    icon: <Ship className="w-6 h-6 text-primary" />,
    link: "/services/ship-broker/sale-purchase",
  },
  {
    title: "Dry Bulk Cargo",
    description:
      "Especialistas certificados por el Institute of Chartered Shipbrokers en el manejo y gestión de cargas secas a granel.",
    icon: <Truck className="w-6 h-6 text-primary" />,
    link: "/services/ship-broker/dry-bulk",
  },
  {
    title: "Liquid Bulk Cargo",
    description:
      "Expertos en el transporte de cargas líquidas a granel, ofreciendo soluciones especializadas y seguras para cada tipo de carga.",
    icon: <BarChart2 className="w-6 h-6 text-primary" />,
    link: "/services/ship-broker/liquid-bulk",
  },
];

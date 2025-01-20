import { NAVIGATION_LINKS } from "@/utils/navigation";
import { Button, Tooltip } from "@mantine/core";
import { motion } from "framer-motion";
import {
  Anchor,
  BarChart2,
  Download,
  Globe2,
  ShieldCheck,
  Ship,
  Truck,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BunkerSupplyPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative h-[50vh] sm:h-[50vh] w-full">
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
                Suministro de Combustible Marino en Menorca
              </h1>
              {/* <h2 className="font-montserrat text-base sm:text-lg md:text-xl text-white">
                Suministramos combustible marino en la isla de Menorca.
              </h2> */}
              <h2 className="font-montserrat text-base sm:text-lg md:text-xl text-white">
                Mediante nuestro partner{" "}
                <span className="text-primary">Stabia Oil</span> y{" "}
                <span className="text-primary">CEPSA</span>. Podemos
                subministrar todo tipo de combustible marino en la isla de
                Menorca.
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
        className="mb-12 sm:mb-16 mx-auto px-4 sm:px-6 max-w-[1400px] py-8 sm:py-10 md:py-12"
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
                component={Link}
                href="https://drive.google.com/drive/folders/1ZWu3DTd9eiAOyjdhFq1MpZsxdDt4K8ho"
                className="bg-primary hover:bg-primary/75 text-white font-normal text-sm md:text-base py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors w-full sm:w-auto"
              >
                <div className="flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Descargar Daily Position
                </div>
              </Button>
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
            Nuestros índices y proveedores del mercado marítimo
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Obtenemos los últimos precios usando los datos proporcionados por
            nuestros partners.
          </p>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {marketIndices.map((item, index) => (
              <Tooltip.Floating
                label="Visitar página web"
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
              className="bg-primary/5 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-shadow border"
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
              Nuestra Experiencia
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Más de una década de experiencia en el sector marítimo nos
              respalda
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Global Experience Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-primary/5 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border"
            >
              <div className="flex items-center gap-4 mb-6">
                <h3 className="font-montserrat text-2xl text-primary">
                  Experiencia Global
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                En Menorca Brokers, somos especialistas en conectar armadores y
                fletadores, ofreciendo soluciones integrales para la compra,
                venta y alquiler de buques o charter por tiempo.
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
                    <h4 className="font-montserrat text-lg text-primary mb-2">
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
              className="bg-primary/5 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border"
            >
              <div className="flex items-center gap-4 mb-6">
                <h3 className="font-montserrat text-2xl text-primary">
                  Conocimiento Experto
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Combinamos un profundo conocimiento del sector marítimo con una
                red global de contactos, lo que nos permite garantizar acuerdos
                eficientes y personalizados.
              </p>
              <div className="w-full grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {features2.map((feature, index) => (
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
                    <h4 className="font-montserrat text-lg text-primary mb-2">
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

// const stats = [
//   { value: "15+", label: "Años de Experiencia" },
//   { value: "200+", label: "Operaciones Completadas" },
//   { value: "50+", label: "Socios Globales" },
//   { value: "24/7", label: "Soporte Disponible" },
// ];

const marketIndices = [
  {
    title: "Shipandbunker",
    description:
      "Consulta los precios del mercado de combustibles marinos en los principales puertos del mundo.",
    image: "/img/bunker-supply/ship-bunker.png",
    link: "https://shipandbunker.com/prices",
  },
  {
    title: "Baltic Exchange",
    description:
      "Consulta el mercado de la carga actualizado a diario con el Baltic Exchange.",
    image: "/img/bunker-supply/baltic-exchange.png",
    link: "https://www.balticexchange.com/en/index.html",
  },
  {
    title: "CEPSA & MOEVE",
    description: "Cargamos combustible CEPSA - MOEVE",
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
    title: "STABIAOIL",
    description: "STABIAOIL es nuestro proveedor de servicios.",
    image: "/img/bunker-supply/stabia-oil.jpg",
    link: "http://www.stabiaoil.com/",
  },
];

export const features1 = [
  {
    title: "Cobertura Global",
    description: "Operaciones en los principales puertos internacionales",
    icon: <Globe2 className="w-6 h-6 text-primary" />,
  },
  {
    title: "Servicio 24/7",
    description: "Soporte continuo para todas tus necesidades",
    icon: <Anchor className="w-6 h-6 text-primary" />,
  },
];

export const features2 = [
  {
    title: "Equipo Experto",
    description: "Profesionales altamente cualificados",
    icon: <Users className="w-6 h-6 text-primary" />,
  },
  {
    title: "Garantía de Calidad",
    description: "Cumplimiento de estándares internacionales",
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
  },
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

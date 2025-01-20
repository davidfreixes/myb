import { NAVIGATION_LINKS } from "@/utils/navigation";
import { Button } from "@mantine/core";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ValueAddedServices() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Adjusted height and padding for mobile */}
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] w-full ">
        <Image
          src="/img/value-added-services.jpg"
          alt="Servicios de valor añadido"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="space-y-2 md:space-y-4">
              <h1 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight text-primary">
                Servicios de Valor Añadido | Más que Chartering en Menorca
              </h1>
              <h2 className="font-montserrat text-base sm:text-lg md:text-xl text-white">
                Disfruta de Menorca al máximo con nuestros servicios
                adicionales: traslados, catering, rutas turísticas y
                planificación de eventos exclusivos.
              </h2>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content - Adjusted padding and grid for mobile */}
      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12 lg:py-16 max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          {/* Services Grid - Modified for better mobile layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12">
            {[
              {
                title: "Recogida y Traslado al Aeropuerto",
                image: "/img/airport-transfer.jpg",
                description:
                  "Disfruta de un inicio sin preocupaciones. Ofrecemos servicios de traslado privados y puntuales desde el aeropuerto hasta tu embarcación, hotel o cualquier destino en Menorca.",
                features: [
                  "Flota de vehículos de lujo",
                  "Conductores multilingües y profesionales",
                  "Opciones de traslado de ida y vuelta",
                ],
                delay: 0.4,
              },
              {
                title: "Rutas Turísticas Privadas",
                image: "/img/tourist-routes.jpg",
                description:
                  "Descubre Menorca desde una nueva perspectiva. Organizamos visitas guiadas exclusivas a:",
                features: [
                  "Calas escondidas y playas paradisíacas",
                  "Parapente",
                  "Monumentos históricos y culturales",
                  "Experiencias de senderismo y ciclismo guiado",
                ],
                delay: 0.5,
              },
              {
                title: "Catering Personalizado a Bordo",
                image: "/img/catering.jpg",
                description:
                  "Saborea Menorca desde el mar con menús personalizados que se adaptan a tus gustos y necesidades.",
                features: [
                  "Chefs locales y cocina mediterránea",
                  "Opciones veganas, vegetarianas y sin gluten",
                  "Bebidas premium y catas de vinos",
                ],
                delay: 0.6,
              },
              {
                title: "Asistencia 24/7 Durante tu Viaje",
                image: "/img/assistance.jpg",
                description:
                  "Nuestro equipo está disponible en todo momento para garantizar que tu experiencia sea perfecta. Te ayudamos con:",
                features: [
                  "Reservas de última hora",
                  "Resolución de cualquier inconveniente durante el viaje",
                ],
                delay: 0.7,
              },
              {
                title: "Planificación de Eventos Exclusivos",
                image: "/img/events.jpg",
                description:
                  "Celebra momentos especiales a bordo de un yate o en los lugares más emblemáticos de Menorca.",
                features: [
                  "Bodas, aniversarios y eventos corporativos",
                  "Decoración temática y entretenimiento en vivo",
                ],
                delay: 0.8,
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: service.delay }}
                className="group relative bg-gradient-to-br from-[#1a1a1aad] to-[#2d2d2d] rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border border-[#f1c001]/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#f1c001]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="text-xl sm:text-2xl font-montserrat mb-2 sm:mb-4 text-center text-[#f1c001] p-3 sm:p-4">
                  {service.title}
                </h3>
                <div className="relative h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 mx-auto mt-4 sm:mt-6">
                  <div className="absolute inset-0 rounded-full border-2 border-[#f1c001]/30" />
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="p-4 sm:p-6 text-white relative z-10">
                  <p className="mb-3 sm:mb-4 text-sm sm:text-base text-gray-300 group-hover:text-[#f1c001]">
                    {service.description}
                  </p>
                  <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-200">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="group-hover:text-[#f1c001] transition-colors duration-300"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Why Choose Us Section - Responsive adjustments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="max-w-6xl mx-auto bg-primary/20 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 my-8 sm:my-12 md:my-16 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-primary">
                  ¿Por qué elegir Menorca Brokers.com?
                </h2>
                <ul className="space-y-3 sm:space-y-4">
                  {[
                    {
                      title: "Atención al cliente excepcional:",
                      description:
                        "Se enfocan en cada detalle para garantizar que disfrutes de un servicio impecable.",
                    },
                    {
                      title: "Experiencia local con alcance global:",
                      description:
                        "Son expertos en Menorca y ofrecen conexiones internacionales.",
                    },
                    {
                      title: "Flexibilidad y personalización:",
                      description: "Adaptan cada servicio a tus preferencias.",
                    },
                  ].map((item, index) => (
                    <li key={index} className="flex flex-col space-y-1">
                      <span className="font-semibold text-primary text-base sm:text-lg">
                        {item.title}
                      </span>
                      <span className="text-gray-700 text-sm sm:text-base">
                        {item.description}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4 italic">
                  &quot;Un servicio excepcional que superó todas mis
                  expectativas&quot;
                  <p className="font-semibold mt-1 sm:mt-2">
                    Charles Grange, 28 años
                  </p>
                </div>
              </div>
              <div className="relative mt-4 md:mt-0">
                <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto relative">
                  <div className="absolute inset-0 rounded-full border-4 border-[#f1c001]/20" />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src="/img/testimonial-charles.jpg"
                      alt="Charles Grange"
                      fill
                      className="object-cover rounded-full"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* CTA Section - Mobile optimized */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="inset-0 bg-gradient-to-l from-[#fff6d399] via-[#ffe47acc] to-[#f8ce24c2] p-4 sm:p-6 rounded-lg text-center py-8 sm:py-12 md:py-20"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-montserrat text-darkTitle mb-2 sm:mb-4">
          ¿Interesado en nuestros servicios?
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
          Contáctanos para personalizar tu experiencia en Menorca
        </p>
        <Button
          unstyled
          component={Link}
          href={`${NAVIGATION_LINKS.CONTACTO}`}
          className="bg-primary hover:bg-primary/75 text-darkTitle font-normal text-sm sm:text-base md:text-lg py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors"
        >
          Contactar
        </Button>
      </motion.div>
    </div>
  );
}

import { NAVIGATION_LINKS } from "@/utils/navigation";
import { Button } from "@mantine/core";
import { motion } from "framer-motion";
import {
  Anchor,
  Clock,
  Compass,
  Ship,
  Star,
  Sunset,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function YachtCharter() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] w-full">
        <Image
          src="/img/yacht-charter.jpg"
          alt="Yacht charter service"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 h-full flex flex-col justify-center md:max-w-8xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="space-y-2 md:space-y-4">
              <h1 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight text-primary">
                Yacht Charter | Alquila tu Barco y Yate en Menorca
              </h1>
              <h2 className="font-montserrat text-base sm:text-lg md:text-xl text-white">
                Alquila yates de lujo en Menorca con Menorca Yacht Brokers.
                Disfruta de rutas personalizadas, tripulación profesional y
                servicios premium.
              </h2>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Section with Background */}
      <div className="container px-4 sm:px-6 py-12 sm:py-16 md:py-18 mx-auto bg-gray-50 md:max-w-8xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-primary">
            Nuestros Servicios de Charter
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border shadow-lg hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-primary/10 p-2 sm:p-3 rounded-full w-fit mb-4 sm:mb-6">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-montserrat text-black mb-2 sm:mb-4">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-700">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Introduction Section with Image */}
      <div className="inset-0 bg-gradient-to-l from-[#fff6d399] via-[#ffe47acc] to-[#f8ce24c2]">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 md:max-w-8xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <div className="relative h-[200px] sm:h-[250px] md:h-[300px] w-full rounded-lg overflow-hidden">
                <Image
                  src="/img/discover.jpg"
                  alt="Luxury yacht interior"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl font-montserrat text-black">
                Descubre el Lujo en el Mar
              </h2>
              <p className="text-base sm:text-lg text-gray-700">
                En Menorca Brokers, te ofrecemos la oportunidad de descubrir
                Menorca desde una perspectiva única: a bordo de una embarcación
                de lujo. Nuestro servicio de chartering está diseñado para
                brindarte una experiencia personalizada y exclusiva, en la que
                cada detalle se ajusta a tus preferencias para que disfrutes de
                unas vacaciones inolvidables en el mar.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  unstyled
                  className="bg-primary hover:bg-primary/75 text-black font-normal text-sm md:text-base py-2 px-4 rounded w-full sm:w-auto text-center"
                >
                  Ver Flota
                </Button>
                <Button
                  unstyled
                  className="border border-primary text-black hover:bg-primary hover:text-white font-normal text-sm md:text-base py-2 px-4 rounded w-full sm:w-auto text-center"
                >
                  Explorar Rutas
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 md:max-w-8xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-primary mb-4">
            ¿Por qué elegir Menorca Brokers para tu charter náutico?
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-primary/10 p-2 sm:p-3 rounded-full">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-montserrat text-black mb-2 sm:mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Final CTA Section with Background Image */}
      <div className="relative py-12 sm:py-16 md:py-20">
        <Image
          src="/img/contact.jpg"
          alt="Yacht at sunset"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-4 sm:px-6 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-primary mb-4 sm:mb-6">
              Haz de Tus Vacaciones una Aventura Única en el Mar
            </h2>
            <p className="text-base sm:text-lg text-white mb-6 sm:mb-8">
              Con Menorca Brokers, puedes relajarte sabiendo que te ofrecemos un
              charter sin preocupaciones y repleto de experiencias inolvidables.
              Navega por aguas cristalinas, disfruta de la tranquilidad de calas
              escondidas y déjate llevar por la belleza natural de Menorca.
            </p>
            <Button
              component={Link}
              href={`${NAVIGATION_LINKS.CONTACTO}`}
              unstyled
              className="bg-primary hover:bg-primary/75 text-black font-normal text-sm md:text-lg py-2 sm:py-3 px-4 sm:px-6 rounded w-full sm:w-auto"
            >
              Reserva Tu Charter
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const whyChooseUs = [
  {
    title: "Flota de Embarcaciones de Alta Gama",
    description:
      "Contamos con una amplia selección de yates, catamaranes y embarcaciones de lujo, cuidadosamente seleccionados para satisfacer diferentes gustos y presupuestos.",
    icon: <Ship className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
  },
  {
    title: "Experiencia Personalizada",
    description:
      "Desde rutas privadas y deportes acuáticos hasta cenas exclusivas a bordo, diseñamos cada charter para que tengas una experiencia totalmente adaptada a tus deseos.",
    icon: <Star className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
  },
  {
    title: "Tripulación Profesional y Atención al Detalle",
    description:
      "Nuestras tripulaciones están capacitadas para ofrecerte un servicio de calidad, mientras te guían a los rincones más hermosos y menos explorados de Menorca.",
    icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
  },
  {
    title: "Rutas a Medida y Lugares Icónicos",
    description:
      "Te llevamos a explorar calas escondidas, playas vírgenes y otros puntos emblemáticos, creando una aventura única y memorable en cada charter.",
    icon: <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
  },
];

const services = [
  {
    title: "Alquiler por Día, Semana o Temporada",
    description:
      "Flexibilidad para que disfrutes del charter el tiempo que prefieras, desde una escapada de un día hasta unas vacaciones completas en el mar.",
    icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
  },
  {
    title: "Excursiones Temáticas y Actividades Exclusivas",
    description:
      "Ofrecemos opciones como excursiones para ver el atardecer, rutas de buceo, y experiencias gastronómicas a bordo, para hacer de cada charter algo especial.",
    icon: <Sunset className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
  },
  {
    title: "Soporte 24/7 Durante Tu Charter",
    description:
      "Nos aseguramos de que tengas un soporte dedicado para resolver cualquier necesidad o consulta durante toda tu travesía.",
    icon: <Anchor className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
  },
];

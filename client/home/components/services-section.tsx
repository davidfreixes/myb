import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Yacht Broker",
    description: (
      <>
        Te ayudamos a encontrar el mejor Yate para ti. Según tus gustos, te
        daremos las opciones más posibles de compra de Yates.
        <br />
        <br />
        Yates de nueva construcción o de segunda mano. Las dos opciones son
        buenas y te ayudamos a descubrirlas.
      </>
    ),
    image: "/img/yacht-broker.jpg",
  },
  {
    title: "Yacht Charter",
    description: (
      <>
        ¿Buscas pasar una semana por las Baleares?
        <br />
        <br />
        Contáctanos y usando todos los recursos a nuestro alcanze podemos
        organiarlo todo des del aeropuerto hasta marcha de tus vaciones. Dinos
        que necesitas y encontraremos un barco (con patrón si hace falta) para
        que tus vacacioens sean perfectas
      </>
    ),
    image: "/img/yacht-charter.jpg",
  },
  {
    title: "Inspecciones y Tasaciones de Yates",
    description: (
      <>
        Realizamos inspecciones de Yates previas a Ports State Control, ventas o
        pruebas de mar. También realizamos tasaciones previas a compraventas
        para asegurar el valor de la embarcación o buque.
      </>
    ),
    image: "/img/inspections.jpg",
  },
  {
    title: "Gestión de Carga y Logística",
    description:
      "En fusión con On Line Traders & Shipping, gestionamos cargas con las empresas de la isla con el fin de ayudar y optimizar los procesos.",
    image: "/img/logistics.jpg",
  },
  {
    title: "Asesoría Náutica",
    description:
      "Gestión de documentación, matriculaciones o dudas. Nuestros asesores estan aquí para ayudar cualquier duda o gestión del sector.",
    image: "/img/nautical-consulting.jpg",
  },
  {
    title: "Ship Broker & Charterer",
    description:
      "Actuamos de Ship Broker y Charterer. Consulta nuestro daily y contáctanos si quieres cerrar un fixture.",
    image: "/img/ship-broker.jpg",
  },
  {
    title: "Servicios de Valor Añadido",
    description:
      "A parte de todos los servicios, podemos añadir recogidas en el aeropuerto o aerodrómo, en el puerto o desplazamientos. También excursiones, visitas sofisticadas o rutas por la isla segun el gusto del cliente.",
    image: "/img/value-added-services.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-medium text-primary mb-3 sm:mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Descubre nuestra amplia gama de servicios náuticos profesionales
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex"
            >
              <Card className="h-full w-full flex flex-col hover:shadow-2xl transition-shadow duration-300">
                <CardMedia
                  component="div"
                  className="relative h-48 sm:h-56 md:h-64"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </CardMedia>
                <CardContent className="p-4 sm:p-5 md:p-6 flex-grow flex flex-col">
                  <Typography
                    variant="h5"
                    component="h3"
                    className="font-montserrat text-primary text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 md:mb-4"
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    className="text-gray-600 text-sm sm:text-base flex-grow mb-4 sm:mb-6"
                  >
                    {service.description}
                  </Typography>
                  <Button
                    variant="outlined"
                    className="border-primary text-primary hover:bg-primary hover:text-white normal-case text-sm sm:text-base w-full sm:w-auto"
                  >
                    Accede al servicio
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

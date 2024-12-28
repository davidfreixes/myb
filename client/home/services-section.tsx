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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-montserrat font-medium text-primary mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra amplia gama de servicios náuticos profesionales
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-2xl transition-shadow duration-300">
                <CardMedia component="div" className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-co
                    er"
                  />
                </CardMedia>
                <CardContent className="p-6">
                  <Typography
                    variant="h5"
                    component="h3"
                    className="font-montserrat text-primary mb-4"
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body1" className="text-gray-600 mb-6">
                    {service.description}
                  </Typography>
                  <Button
                    variant="outlined"
                    className="border-primary text-primary hover:bg-primary hover:text-white normal-case"
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

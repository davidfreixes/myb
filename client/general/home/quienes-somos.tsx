"use client";

import { NAVIGATION_LINKS } from "@/utils/navigation";
import { Button } from "@mantine/core";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Andreu Martinez",
    role: "Yacht Broker & Charterer",
    image: "/img/team/andreu-martinez.jpg",
    bio: [
      "Andreu Martínez Parera es un broker con una sólida formación académica en el ámbito marítimo.",
      "Formado en el Instituto Marítimo Español y en el Institute of Chartered Shipbrokers de Londres. Además, cuenta con una carrera en Náutica, habiendo obtenido su título en Ciencias Náuticas con especialización en Transporte Marítimo. Su educación se complementa con un Máster en Gestión del Transporte Marítimo y una formación de Postgrado en Logística y Supply Chain, lo que le ha permitido desarrollar una visión integral del sector.",
      "Desde 2017, Andreu ha acumulado una experiencia significativa en el mundo marítimo y logístico. Su carrera comenzó en APM Terminals, parte del Grupo MAERSK, donde fue miembro del departamento de operaciones en Barcelona. En esta etapa, se involucró activamente en la optimización de procesos logísticos y la gestión de operaciones portuarias, lo que le brindó una comprensión profunda de la cadena de suministro global.",
      "En 2019, Andreu asumió la responsabilidad de la gestión de operaciones en la naviera CMA CGM en Marsella. Durante más de 4 años y medio, optimizó la eficiencia de las operaciones así como la coordinación de las actividades de carga resultando en grandes resultados de productividad y stowage.",
      "Simultáneamente a su carrera profesional, Andreu compartió su experiencia y conocimientos como profesor universitario en el área de Negocios Marítimos de la Universitat Politécnica de Catalunya. A lo largo de su trayectoria, formó a nuevas generaciones de profesionales del sector, transmitiendo sus conocimientos sobre logística y operaciones marítimas.",
      "Actualmente, Andreu dirige Menorca Yacht Brokers, un proyecto que ofrece una amplia gama de servicios de ship brokerage, charter y asesoría náutica. Gracias a su formación académica y su experiencia práctica, Andreu ha desarrollado una comprensión profunda del sector marítimo y sus necesidades específicas.",
    ],
  },
];


export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/img/yacht-1.jpg"
          alt="Interior de yate de lujo"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center max-w-8xl mt-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl flex items-center justify-center mx-auto"
          >
            <div className="space-y-3 sm:space-y-4 flex flex-col items-center ">
              <h1 className="font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-primary mb-4 text-center">
                Quiénes Somos en Menorca Brokers
              </h1>
              <h2 className="font-montserrat text-sm sm:text-base md:text-lg lg:text-xl text-white px-2 text-center">
                Estamos listos para ofrecerte la mejor asesoría y garantizar una
                experiencia de compra exitosa.
              </h2>
              <Button
                component={Link}
                href={`${NAVIGATION_LINKS.CONTACTO}`}
                unstyled
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-white shadow-lg hover:bg-primary/90 transition-colors"
              >
                ¡Conócenos!
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content Section */}
      {/* <div className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-montserrat text-3xl md:text-4xl text-primary mb-4">
              Menorca Brokers
            </h2>
            <h3 className="text-xl md:text-2xl text-gray-600 mb-8">
              Tu Consultora de Confianza
            </h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              En Menorca Brokers, nos dedicamos a facilitar la compraventa de
              yates y barcos mediante un servicio de brokeraje innovador y
              confiable.
            </p>
          </motion.div>
        </div>
      </div> */}

      {/* Team Section */}
      <div className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-montserrat text-3xl md:text-4xl text-primary mb-4">
              Un mar de conocimiento
            </h2>
            <p className="text-lg text-gray-600">
              Conoce a nuestro equipo de expertos en el sector náutico
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
                className="bg-white rounded-lg shadow-lg overflow-hidden mb-12"
              >
                <div className="md:grid md:grid-cols-3 gap-8 p-8 bg-primary/20 border rounded-lg shadow-lg overflow-hidden">
                  <div className="col-span-1 mb-8 md:mb-0">
                    <div className="relative w-48 h-48 mx-auto md:w-full md:h-72">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="text-center mt-4">
                      <h3 className="font-montserrat text-2xl text-primary mb-2">
                        {member.name}
                      </h3>
                      <p className="text-gray-600 font-medium">{member.role}</p>
                    </div>
                  </div>
                  <div className="col-span-2 space-y-4">
                    {member.bio.map((paragraph, i) => (
                      <p key={i} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative bg-gray-50 py-16 md:py-24 inset-0 bg-gradient-to-l from-[#fff6d399] via-[#ffe47acc] to-[#f8ce24c2] ">
        <div className="container mx-auto px-4 max-w-6xl ">
          
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6 flex flex-col justify-center items-center "
            >
              <h2 className="font-montserrat text-3xl md:text-4xl text-primary font-semibold">
                ¿Listo Para Empezar Tu Viaje?
              </h2>
              <h3 className="text-xl md:text-2xl text-gray-600">
                Contáctanos Hoy
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                Descubre cómo Menorca Brokers puede ayudarte a alcanzar tus
                objetivos en la compraventa de embarcaciones. Nuestro equipo
                está disponible para responder a tus preguntas y ofrecerte una
                consulta personalizada.
              </p>
              <Button
                component={Link}
                href="/contact"
                unstyled
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-darkTitle shadow-lg hover:bg-primary/90 transition-colors"
              >
                Contáctanos
              </Button>
            </motion.div>
        </div>
      </div>
    </div>
  );
}

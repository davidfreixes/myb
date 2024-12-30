import { Button } from "@mantine/core";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function YachtBroker() {
  return (
    <div className="flex flex-col min-h-screen ">
      {/* Hero Section */}
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] w-full">
        <Image
          src="/img/yacht-broker.jpg"
          alt="Yacht broker service"
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
            className="max-w-3xl space-y-4"
          >
            <div className="space-y-2 sm:space-y-4">
              <h1 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight text-primary">
                Yacht Broker | Compra de Barcos y Yates en Menorca
              </h1>
              <h2 className="font-montserrat text-base sm:text-lg md:text-xl text-white">
                Especialistas en <span className="text-primary">compra</span> y{" "}
                <span className="text-primary">venta</span> de yates en Menorca.
                Amplia gama de embarcaciones de lujo y asesoramiento
                personalizado.
              </h2>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12 md:max-w-8xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <p className="font-montserrat text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-12">
            Consulta nuestro stock de Yates en venta a continuación o descubre
            nuestras claves y contáctarnos más abajo. Contamos con Yates de
            segunda mano o se pueden realizar contactos con astilleros para
            entrar en contratos de nueva construcción.
          </p>

          {/* Yacht Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative h-[300px] sm:h-[350px] md:h-[400px] group cursor-pointer"
            >
              <Link
                href="/yacht-broker/new"
                className="block w-full h-full shadow-md"
              >
                <Image
                  src="/img/new-construction.jpg"
                  alt="Yates de Nueva Construcción"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors rounded-lg" />
                <div className="absolute inset-0 flex flex-col p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl text-primary font-montserrat mb-4">
                    Yates de Nueva Construcción
                  </h3>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
                  <Button
                    unstyled
                    className="border-primary border-[1px] rounded text-primary hover:bg-primary hover:text-white py-2 px-4 text-sm sm:text-base w-full sm:w-auto transition-colors duration-200"
                  >
                    Visitar
                  </Button>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative h-[300px] sm:h-[350px] md:h-[400px] group cursor-pointer"
            >
              <div className="w-full h-full shadow-md">
                <Image
                  src="/img/second-hand.jpg"
                  alt="Yates de Segunda Mano"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors rounded-lg" />
                <div className="absolute inset-0 flex flex-col p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl text-primary font-montserrat mb-4">
                    Yates de Segunda Mano
                  </h3>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
                  <Button
                    unstyled
                    className="border-primary border-[1px] rounded text-primary hover:bg-primary hover:text-white py-2 px-4 text-sm sm:text-base w-full sm:w-auto transition-colors duration-200"
                  >
                    Visitar
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          <p className="font-montserrat text-base sm:text-lg md:text-xl text-gray-700 mb-8">
            En Menorca Yacht Brokers, transformamos la compra y venta de yates
            en una experiencia fluida, profesional y personalizada. Nuestro
            equipo de expertos combina un profundo conocimiento del mercado
            náutico con un enfoque centrado en el cliente, garantizando que cada
            transacción sea un éxito.
          </p>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="px-4 sm:px-6 py-8 sm:py-10 rounded-lg text-center mb-6 sm:mb-10"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-montserrat text-primary mb-3 sm:mb-4">
          ¿Interesado en nuestros servicios?
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
          Contáctanos para descubrir cómo podemos ayudarte a encontrar el yate
          perfecto
        </p>
        <Button
          unstyled
          className="w-full sm:w-auto bg-primary hover:bg-primary/75 text-black font-normal text-sm sm:text-base md:text-lg py-2 px-4 rounded transition-colors duration-200"
        >
          Contactar
        </Button>
      </motion.div>
    </div>
  );
}

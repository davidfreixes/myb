import { Button } from "@mantine/core";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function YachtBroker() {
  return (
    <div className="flex flex-col min-h-screen ">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full ">
        <Image
          src="/img/yacht-broker.jpg"
          alt="Yacht broker service"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center max-w-8xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="space-y-2 md:space-y-4">
              <h1 className="font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-primary">
                Yacht Broker | Compra de Barcos y Yates en Menorca
              </h1>
              <h2 className="font-montserrat sm:text-lg md:text-xl text-white">
                Especialistas en <span className="text-primary"> compra </span>y{" "}
                <span className="text-primary">venta </span>de yates en Menorca.
                Amplia gama de embarcaciones de lujo y asesoramiento
                personalizado.
              </h2>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-12 max-w-8xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <p className="font-montserrat text-lg md:text-xl text-gray-700 mb-12">
            Consulta nuestro stock de Yates en venta a continuación o descubre
            nuestras claves y contáctarnos más abajo. Contamos con Yates de
            segunda mano o se pueden realizar contactos con astilleros para
            entrar en contratos de nueva construcción.
          </p>

          {/* Yacht Categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative h-[400px] group cursor-pointer"
            >
              <Link href={"/yacht-broker/new"} className="w-full shadow-md">
                <Image
                  src="/img/new-construction.jpg"
                  alt="Yates de Nueva Construcción"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors rounded-lg" />
                <div className="absolute inset-0 flex flex-col p-6 ">
                  <h3 className="text-2xl text-primary font-montserrat mb-4">
                    Yates de Nueva Construcción
                  </h3>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <Button
                    unstyled
                    className="border-primary border-[1px] rounded text-primary hover:bg-primary hover:text-white p-1 text-sm sm:text-base w-full sm:w-auto md:w-auto"
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
              className="relative h-[400px] group cursor-pointer"
            >
              <Image
                src="/img/second-hand.jpg"
                alt="Yates de Segunda Mano"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors rounded-lg" />
              <div className="absolute inset-0 flex flex-col p-6 ">
                <h3 className="text-2xl text-primary font-montserrat mb-4">
                  Yates de Segunda Mano
                </h3>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <Button
                  unstyled
                  className="border-primary border-[1px] rounded text-primary hover:bg-primary hover:text-white p-1 text-sm sm:text-base w-full sm:w-auto md:w-auto"
                >
                  Visitar
                </Button>
              </div>
            </motion.div>
          </div>
          <p className="font-montserrat text-lg md:text-xl text-gray-700 mb-8">
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
        className="p-6 rounded-lg text-center mb-10"
      >
        <h2 className="text-2xl md:text-3xl font-montserrat text-primary mb-4">
          ¿Interesado en nuestros servicios?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Contáctanos para descubrir cómo podemos ayudarte a encontrar el yate
          perfecto
        </p>
        <Button
          unstyled
          className="w-full rounded sm:w-auto bg-primary hover:bg-primary/75 text-black font-normal text-sm md:text-lg py-2 px-4"
        >
          Contactar
        </Button>
      </motion.div>
    </div>
  );
}

"use client";

import { Button } from "@mantine/core";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ShipBroker() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/img/ship-broker.jpg"
          alt="Ship broker service"
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
                Ship Sale and Purchase Broker, Charterer & Bunker Trader
              </h1>
              <h2 className="font-montserrat sm:text-lg md:text-xl text-white">
                Especialistas en <span className="text-primary">conectar armadores</span> y <span className="text-primary">fletadores</span>, ofreciendo soluciones integrales
              </h2>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-12 max-w-8xl">
        {/* Daily Position Feature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex gap-4">
            <div className="w-1/2 justify-center md:flex">
              <div className="flex w-1/2 justify-center bg-gray-50 rounded-2xl overflow-hidden relative h-[200px] w[300px] md:h-[300px] md:w-[400px]">
                <Image
                  src="/img/port-sunset.jpg"
                  alt="Puerto al atardecer"
                  fill
                />
              </div>
            </div>
            <div className="w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="font-montserrat text-2xl md:text-3xl lg:text-4xl text-primary mb-6">
                Menorca Brokers - Daily Position
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                A continuación, puedes descargarte nuestro daily, consultar
                nuestro contrato tipo y consultar las navieras españolas en
                activo.
              </p>
              <div className="flex gap-4">
                <Button
                //   component={Link}
                //   href="/ship-broker/daily"
                  unstyled
                  className="w-full sm:w-auto bg-primary hover:bg-primary/75 text-white font-normal text-sm md:text-lg py-3 px-6 rounded"
                >
                  Descargar Daily Position
                </Button>
                <Button
                //   component={Link}
                //   href="/ship-broker/contract"
                  unstyled
                  className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white font-normal text-sm md:text-lg py-3 px-6 rounded"
                >
                  Ver Contrato Tipo
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="prose prose-lg max-w-none mb-12"
        >
          <div className="space-y-6">
            <h3 className="font-montserrat text-lg md:text-2xl text-gray-700">
              En Menorca Brokers, somos especialistas en conectar armadores y
              fletadores, ofreciendo soluciones integrales para la compra, venta
              y alquiler de buques o charter por tiempo.
            </h3>
            <h3 className="font-montserrat text-lg md:text-2xl text-gray-700">
              Combinamos un profundo conocimiento del sector marítimo con una
              red global de contactos, lo que nos permite garantizar acuerdos
              eficientes y personalizados.
            </h3>
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-xl p-8 shadow-sm mb-12"
        >
          <h3 className="font-montserrat text-2xl text-primary mb-6">
            Servicios Especializados
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-montserrat text-xl mb-4">
                Ship Sale & Purchase
              </h4>
              <p className="text-gray-700">
                Desde buques de carga hasta yates de lujo, te guiamos en cada
                paso del proceso, asegurándonos de que cada operación sea
                fluida, rentable y satisfactoria.
              </p>
            </div>
            <div>
              <h4 className="font-montserrat text-xl mb-4">
                Dry & Liquid Bulk Cargo
              </h4>
              <p className="text-gray-700">
                Gracias a la formación recibida en el Institute of Chartered
                Shipbrokers, somos especialistas en Dry y Liquid Bulk Cargo
                Brokerage.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-montserrat text-primary mb-4">
            ¿Buscas un Ship Broker?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Contáctanos para cerrar fixtures o saber más sobre nuestros
            servicios
          </p>
          <Button
            component={Link}
            href="/contact"
            unstyled
            className="w-full rounded sm:w-auto bg-primary hover:bg-primary/75 text-black font-normal text-sm md:text-lg py-2 px-4"
          >
            Contactar
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import { Button } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative max-h-[500px] w-full">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/img/hero.jpg"
          alt="Luxury yacht background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex max-h-[500px] flex-col justify-center py-20">
          <div className="grid lg:grid-cols-2 gap-12 py-20">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center space-y-6 text-white"
            >
              <h1 className="font-montserrat mb-6 text-4xl font-medium tracking-tight text-primary sm:text-5xl md:text-6xl">
                Menorca Yacht Brokers
              </h1>
              <div className="space-y-4">
                <h2 className="text-2xl font-light text-white sm:text-3xl">
                  Tu Broker de Yates de confianza
                </h2>
                <h2 className="text-lg md:text-xl text-white">
                  Compra, vende o alquila tu Yate con Menorca Yacht Brokers
                </h2>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center bg-white/10 backdrop-blur-md rounded-xl p-8 text-white"
            >
              <div className="space-y-6">
                <h2 className="text-2xl font-light text-white sm:text-3xl">
                  Bienvenido a Menorca Yacht Brokers
                </h2>
                <div className="space-y-4 text-gray-200">
                  <p>
                    En Menorca Yacht Brokers, te ofrecemos soluciones completas
                    para la compraventa de yates en Menorca, charters, gestión
                    de cargas y asesoría náutica.
                  </p>
                  <p>
                    Estamos listos para guiarte en cada paso del proceso con
                    profesionalismo y dedicación.
                  </p>
                  {/* <p>
                    Descubre Menorca Yacht Brokers: expertos en compra, venta y
                    alquiler de yates, logística marítima y servicios
                    personalizados. Calidad y lujo en cada detalle.
                  </p> */}
                </div>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button className="bg-primary hover:bg-primary/75 text-black font-normal">
                    Explora Nuestros Servicios
                    {/* <ChevronRight className="ml-2 h-4 w-4" /> */}
                  </Button>
                  <Button className="border-primary border-2 z-10 text-white hover:bg-white/10 hover:border-primary hover:text-primary">
                    Contactar
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
          {/* <div className="max-w-2xl">
            <h1 className="font-montserrat mb-6 text-4xl font-medium tracking-tight text-primary sm:text-5xl md:text-6xl">
              MENORCA YACHT BROKERS
            </h1>

            <div className="space-y-6">
              <h2 className="text-2xl font-light text-white sm:text-3xl">
                Tu Broker de Yates de confianza
              </h2>

              <p className="text-lg text-white">
                Compra, vende o alquila tu Yate con Menorca Yacht Brokers
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button className="bg-primary hover:bg-primary-600 text-primary-foreground font-semibold">
                Explora Nuestros Servicios */}
          {/* <ChevronRight className="ml-2 h-4 w-4" /> */}
          {/* </Button>
              <Button className="border-white text-white hover:bg-white/10 hover:border-primary hover:text-primary">
                Contactar
              </Button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

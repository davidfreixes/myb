"use client";

import { motion } from "framer-motion";

export default function AboutVideoSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f1c1018f] via-[#e8f69960] to-[#47639edc]" />

      {/* Content container */}
      <div className="container relative mx-auto px-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Video Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg bg-gray-900">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/HZGWb2684IM?si=qLrwDI4yFQ9VSDdo?autoplay=0"
                  title="Menorca Yacht Brokers"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-montserrat font-medium text-gray-800 mb-4">
                Tu Consultora de Confianza
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                En Menorca Brokers, nos dedicamos a facilitar la compraventa de
                yates y barcos mediante un servicio de brokerage innovador y
                confiable. Nuestro equipo profesional está listo para ofrecerte
                la mejor asesoría y garantizar una experiencia de compra
                exitosa.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

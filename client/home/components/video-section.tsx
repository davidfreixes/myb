"use client";

import { motion } from "framer-motion";

export default function AboutVideoSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-16 lg:py-16 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#f8ce24c2] via-[#ffe47acc] to-[#ffeda7cc]" />

      {/* Content container */}
      <div className="container relative mx-auto px-4 sm:px-6 md:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-20">
          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-3/5 relative"
          >
            <div className="absolute inset-0 bg-white/50 backdrop-blur-sm shadow-xl left-[calc(-50vw+50%)] rounded-r-2xl sm:rounded-r-3xl" />
            <div className="relative p-4 sm:p-6 flex justify-end h-[380px]">
              <div className="aspect-video rounded-lg sm:rounded-xl overflow-hidden shadow-lg bg-gray-900">
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
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-2/5 mt-6 lg:mt-0"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-montserrat font-medium text-gray-800 mb-6">
              Tu Consultora de Confianza
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              En Menorca Brokers, nos dedicamos a facilitar la compraventa de
              yates y barcos mediante un servicio de brokerage innovador y
              confiable. Nuestro equipo profesional está listo para ofrecerte la
              mejor asesoría y garantizar una experiencia de compra exitosa.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

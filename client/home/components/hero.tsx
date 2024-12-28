import { Button } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative min-h-[600px] md:min-h-[500px] w-full">
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
        <div className="flex min-h-[600px] md:min-h-[500px] flex-col justify-center py-8 md:py-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center space-y-4 md:space-y-6 text-white order-1 pt-16 md:pt-0"
            >
              <h1 className="font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-primary">
                Menorca Yacht Brokers
              </h1>
              <div className="space-y-2 md:space-y-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-white">
                  Tu Broker de Yates de confianza
                </h2>
                <h2 className="text-base sm:text-lg md:text-xl text-white">
                  Compra, vende o alquila tu Yate con Menorca Yacht Brokers
                </h2>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 lg:p-8 text-white order-2"
            >
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-white">
                  Bienvenido a Menorca Yacht Brokers
                </h2>
                <div className="space-y-3 md:space-y-4 text-gray-200">
                  <p className="text-sm md:text-base">
                    En Menorca Yacht Brokers, te ofrecemos soluciones completas
                    para la compraventa de yates en Menorca, charters, gestión
                    de cargas y asesoría náutica.
                  </p>
                  <p className="text-sm md:text-base">
                    Estamos listos para guiarte en cada paso del proceso con
                    profesionalismo y dedicación.
                  </p>
                </div>
                <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
                  <Button 
                    className="w-full sm:w-auto bg-primary hover:bg-primary/75 text-black font-normal text-sm md:text-base py-2 px-4"
                    size="large"
                  >
                    Explora Nuestros Servicios
                  </Button>
                  <Button 
                    className="w-full sm:w-auto border-primary border-2 z-10 text-white hover:bg-white/10 hover:border-primary hover:text-primary text-sm md:text-base py-2 px-4"
                    size="large"
                  >
                    Contactar
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}


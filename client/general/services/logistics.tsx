import {
  BoxIcon,
  CheckCircleIcon,
  ClockIcon,
  CurrencyIcon,
  DocumentIcon,
  GlobeIcon,
  LightningIcon,
  LocationIcon,
  ShieldIcon,
  UserIcon,
} from "@/public/svg/logistics-icons";
import { Button } from "@mantine/core";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Logistics() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/img/logistics.jpg"
          alt="Logística marítima service"
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
                Logística Marítima en Menorca | Cargo y Servicios Personalizados
              </h1>
              <h2 className="font-montserrat sm:text-lg md:text-xl text-white">
                ¿Quieres importar o exportar cualquier tipo de carga?{" "}
                <span className="text-primary">
                  ¡Nosotros te lo gestionamos!
                </span>
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
            En Menorca Yacht Brokers, ofrecemos un servicio logístico{" "}
            <span className="text-primary">completo </span> y{" "}
            <span className="text-primary">personalizado </span>para la
            importación y exportación de cualquier tipo de carga. Desde
            mercancías generales hasta envíos especializados, gestionamos cada
            paso del proceso con precisión y profesionalismo.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-montserrat font-medium text-primary text-center mb-12"
              >
                Servicios de Logística &quot;Door to Door&quot;
              </motion.h2>

              {/* Services Grid */}

              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12 border p-5 rounded-lg shadow-lg">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 bg-opacity-20 flex items-center justify-center">
                    <DocumentIcon />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      Recogida en origen
                    </h4>
                    <p className="text-gray-600">
                      Coordinamos el transporte terrestre inicial para asegurar
                      que tu carga comience su viaje de manera eficiente.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 bg-opacity-20 flex items-center justify-center">
                    <CheckCircleIcon />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      Gestión de documentos
                    </h4>
                    <p className="text-gray-600">
                      Garantizamos que todos los permisos y trámites aduaneros
                      estén en regla para un proceso sin contratiempos.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 bg-opacity-20 flex items-center justify-center">
                    <LightningIcon />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      Transporte internacional
                    </h4>
                    <p className="text-gray-600">
                      Ofrecemos soluciones eficientes por mar, tierra o aire
                      adaptadas a tus necesidades específicas.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 bg-opacity-20 flex items-center justify-center">
                    <LocationIcon />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      Entrega en destino
                    </h4>
                    <p className="text-gray-600">
                      Llevamos tu carga directamente a la puerta de tu cliente,
                      garantizando una entrega puntual y segura.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-montserrat font-medium text-primary text-center mb-12"
              >
                Incoterms: Tu Transporte, Tus Reglas
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12 border p-5 rounded-lg shadow-lg">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 bg-opacity-20 flex items-center justify-center">
                    <BoxIcon />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      EXW (Ex Works)
                    </h4>
                    <p className="text-gray-600">
                      Coordinamos todo el transporte desde el origen hasta el
                      destino.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 bg-opacity-20 flex items-center justify-center">
                    <CheckCircleIcon />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      FOB (Free On Board)
                    </h4>
                    <p className="text-gray-600">
                      Supervisamos la carga en el puerto de origen.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 bg-opacity-20 flex items-center justify-center">
                    <ShieldIcon />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      CIF (Cost, Insurance, and Freight)
                    </h4>
                    <p className="text-gray-600">
                      Aseguramos la protección de tu mercancía.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 bg-opacity-20 flex items-center justify-center">
                    <LocationIcon />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      DAP (Delivered at Place)
                    </h4>
                    <p className="text-gray-600">
                      Entregamos directamente en la ubicación acordada.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Why Choose Us Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="py-14 rounded-lg mb-12 inset-0 bg-gradient-to-l from-[#fff6d399] via-[#ffe47acc] to-[#f8ce24c2]"
      >
        <h3 className="text-3xl text-darkTitle font-montserrat mb-8 flex justify-center">
          ¿Por Qué Elegir Menorca Brokers?
        </h3>
        <div className="flex justify-center">
          <div className="grid sm:grid-cols-1 gap-8 max-w-4xl">
            {/* Icono a la izquierda */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 bg-opacity-20 flex items-center justify-center">
                <GlobeIcon />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Cobertura global
                </h4>
                <p className="text-gray-600">
                  Una red de socios estratégicos que nos permite operar en todo
                  el mundo.
                </p>
              </div>
            </div>

            {/* Icono a la derecha */}
            <div className="flex flex-row-reverse gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 bg-opacity-20 flex items-center justify-center">
                <ClockIcon />
              </div>
              <div className="text-right">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Soporte 24/7
                </h4>
                <p className="text-gray-600">
                  Estamos disponibles para resolver cualquier incidencia durante
                  el transporte.
                </p>
              </div>
            </div>

            {/* Icono a la izquierda */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 bg-opacity-20 flex items-center justify-center">
                <CurrencyIcon />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Optimización de costos
                </h4>
                <p className="text-gray-600">
                  Diseñamos soluciones logísticas que se ajustan a tu
                  presupuesto y necesidades.
                </p>
              </div>
            </div>

            {/* Icono a la derecha */}
            <div className="flex flex-row-reverse gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 bg-opacity-20 flex items-center justify-center">
                <UserIcon />
              </div>
              <div className="text-right">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Atención personalizada
                </h4>
                <p className="text-gray-600">
                  Adaptamos cada envío a las características específicas de tu
                  carga.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="p-6 rounded-lg text-center mb-10"
      >
        <h2 className="text-2xl md:text-3xl font-montserrat text-primary mb-4">
          ¿Necesitas una solución logística personalizada?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Contáctanos para diseñar una solución logística hecha a medida para ti
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
  );
}

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
            En Menorca Yacht Brokers, ofrecemos un servicio logístico completo y
            personalizado para la importación y exportación de cualquier tipo de
            carga. Desde mercancías generales hasta envíos especializados,
            gestionamos cada paso del proceso con precisión y profesionalismo.
          </p>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl text-primary font-montserrat mb-6">
                Servicios de Logística &quot;Door to Door&quot;
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  Recogida en origen: Coordinamos el transporte terrestre
                  inicial
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  Gestión de documentos: Garantizamos que todos los permisos y
                  trámites aduaneros estén en regla
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  Transporte internacional: Ofrecemos soluciones eficientes por
                  mar, tierra o aire
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  Entrega en destino: Llevamos tu carga directamente a la puerta
                  de tu cliente
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl text-primary font-montserrat mb-6">
                Incoterms: Tu Transporte, Tus Reglas
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <strong>EXW (Ex Works):</strong> Coordinamos todo el
                  transporte desde el origen hasta el destino
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <strong>FOB (Free On Board):</strong> Supervisamos la carga en
                  el puerto de origen
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <strong>CIF (Cost, Insurance, and Freight):</strong>{" "}
                  Aseguramos la protección de tu mercancía
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <strong>DAP (Delivered at Place):</strong> Entregamos
                  directamente en la ubicación acordada
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Why Choose Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gray-50 p-8 rounded-lg mb-12"
          >
            <h3 className="text-2xl text-primary font-montserrat mb-6">
              ¿Por Qué Elegir Menorca Brokers?
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <div>
                    <strong>Cobertura global:</strong>
                    <p>
                      Una red de socios estratégicos que nos permite operar en
                      todo el mundo.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <div>
                    <strong>Soporte 24/7:</strong>
                    <p>
                      Estamos disponibles para resolver cualquier incidencia
                      durante el transporte.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <div>
                    <strong>Optimización de costos:</strong>
                    <p>
                      Diseñamos soluciones logísticas que se ajustan a tu
                      presupuesto y necesidades.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <div>
                    <strong>Atención personalizada:</strong>
                    <p>
                      Adaptamos cada envío a las características específicas de
                      tu carga.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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

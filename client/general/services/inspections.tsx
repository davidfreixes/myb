"use client";

import { NAVIGATION_LINKS } from "@/utils/navigation";
import { Button } from "@mantine/core";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Inspections() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/img/inspections.jpg"
          alt="Inspecciones y tasaciones de barcos"
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
                Inspecciones y Tasaciones de Barcos en Menorca
              </h1>
              <h2 className="font-montserrat sm:text-lg md:text-xl text-white">
                Servicios especializados de{" "}
                <span className="text-primary">inspección</span> y{" "}
                <span className="text-primary">tasación</span> marítima para
                compradores y vendedores
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
            En Menorca Yacht Brokers, contamos con una experiencia sólida en la
            realización de <span className="text-primary">inspecciones</span> y{" "}
            <span className="text-primary">tasaciones marítimas</span>. Como
            parte de nuestro compromiso con la calidad y la transparencia,
            ofrecemos servicios especializados tanto para compradores como para
            vendedores de yates y embarcaciones.
          </p>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative h-auto bg-white p-6 rounded-lg shadow-lg border"
            >
              <h3 className="text-2xl text-primary font-montserrat mb-4">
                Inspecciones Marítimas
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Las inspecciones marítimas son fundamentales para evaluar el
                  estado y la seguridad de cualquier embarcación. Seguimos
                  rigurosos procedimientos técnicos con estándares
                  internacionales.
                </p>
                <div className="space-y-2">
                  <h4 className="font-montserrat text-lg text-primary">
                    ¿Cómo realizamos las inspecciones?
                  </h4>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Revisión detallada del casco</li>
                    <li>Sistemas mecánicos, eléctricos y de seguridad</li>
                    <li>Prueba de navegación</li>
                    <li>Verificación de certificaciones SOLAS e IMO</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-montserrat text-lg text-primary">
                    Convenios Internacionales
                  </h4>
                  <p className="text-gray-700">
                    Trabajamos en cumplimiento con Lloyd&apos;s Register, garantizando una evaluación precisa y confiable.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative h-auto bg-white p-6 rounded-lg shadow-lg border"
            >
              <h3 className="text-2xl text-primary font-montserrat mb-4">
                Tasaciones Marítimas
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Realizamos tasaciones precisas y actualizadas basadas en
                  nuestra experiencia y en las tendencias actuales del mercado.
                </p>
                <div className="space-y-2">
                  <h4 className="font-montserrat text-lg text-primary">
                    Factores de Tasación
                  </h4>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Año de fabricación y modelo</li>
                    <li>Condiciones del motor y sistemas</li>
                    <li>Estado del casco y sistemas de seguridad</li>
                    <li>Equipamiento adicional y personalización</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-montserrat text-lg text-primary">
                    Tipos de Valoraciones
                  </h4>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Valoraciones para Compra o Venta</li>
                    <li>Valoraciones para Seguros</li>
                    <li>Informes Detallados de Estado</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          <p className="font-montserrat text-lg md:text-xl text-gray-700 mb-8">
            Nos enorgullece ofrecer un servicio completo y profesional de
            inspecciones y tasaciones marítimas. Nuestro equipo de expertos está
            disponible para asesorarte en cada paso del proceso, garantizando
            que tomes decisiones informadas y seguras al comprar, vender o
            asegurar tu yate.
          </p>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="p-6 rounded-lg text-center mb-10 max-w-4xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-montserrat text-primary mb-4">
          ¿Necesitas una Inspección o Tasación en Menorca?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Si deseas obtener más información sobre nuestras inspecciones o
          tasaciones, o para solicitar nuestros servicios, no dudes en
          contactarnos directamente a través del formulario en nuestra página de
          contacto o llamarnos al número indicado.
        </p>
        <Button
          component={Link}
          href={`${NAVIGATION_LINKS.CONTACTO}`}
          unstyled
          className="w-full rounded sm:w-auto bg-primary hover:bg-primary/75 text-black font-normal text-sm md:text-lg py-2 px-4"
        >
          Contactar
        </Button>
      </motion.div>
    </div>
  );
}

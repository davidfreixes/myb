"use client";

import { NAVIGATION_LINKS } from "@/utils/navigation";
import { Button } from "@mantine/core";
import { motion } from "framer-motion";
import { Compass, FileText, Route, Scale, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NauticalConsulting() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/img/nautical-consulting.jpg"
          alt="Asesoría náutica service"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center md:max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="space-y-2 md:space-y-4">
              <h1 className="font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-primary">
                Asesoría Marítima y Náutica: Expertos a Tu Servicio
              </h1>
              <h2 className="font-montserrat sm:text-lg md:text-xl text-white">
                Soluciones integrales y{" "}
                <span className="text-primary">
                  asesoramiento especializado
                </span>{" "}
                para el sector marítimo y náutico en Menorca
              </h2>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-7 md:py-7 md:max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <p className="font-montserrat text-lg md:text-xl text-gray-700 mb-7">
            En Menorca Yacht Brokers, ofrecemos un servicio integral de asesoría
            marítima y náutica diseñado para ayudarte a tomar decisiones
            estratégicas en el mundo marítimo. Nuestra experiencia y
            conocimiento técnico nos convierten en el socio ideal para resolver
            cualquier desafío relacionado con la industria naval y el transporte
            marítimo.
          </p>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex gap-2">
                <Wrench className="w-7 h-7 text-primary mb-4" />
                <h3 className="text-xl font-montserrat text-primary mb-3">
                  Consultoría Técnica
                </h3>
              </div>
              <p className="text-gray-600">
                Evaluamos y recomendamos soluciones personalizadas para
                optimizar tus operaciones marítimas, desde la compra de
                embarcaciones hasta la implementación de tecnologías avanzadas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex gap-2">
                <FileText className="w-7 h-7 text-primary mb-4" />
                <h3 className="text-xl font-montserrat text-primary mb-3">
                  Asistencia Legal y Reglamentaria
                </h3>
              </div>
              <p className="text-gray-600">
                Te guiamos en el cumplimiento de normativas internacionales,
                como el Convenio SOLAS, el Código IMDG, y regulaciones locales.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex gap-2">
                <Compass className="w-7 h-7 text-primary mb-4" />
                <h3 className="text-xl font-montserrat text-primary mb-3">
                  Análisis de Viabilidad
                </h3>
              </div>
              <p className="text-gray-600">
                Realizamos estudios económicos y técnicos para nuevos proyectos
                marítimos, asegurando que cada decisión esté basada en datos
                sólidos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex gap-2">
                <Scale className="w-7 h-7 text-primary mb-4" />
                <h3 className="text-xl font-montserrat text-primary mb-3">
                  Valoración de Embarcaciones
                </h3>
              </div>
              <p className="text-gray-600">
                Ofrecemos tasaciones precisas y objetivas para compraventa,
                alquiler o financiación de yates y barcos comerciales.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex gap-2">
                <Route className="w-7 h-7 text-primary mb-4" />
                <h3 className="text-xl font-montserrat text-primary mb-3">
                  Planificación de Rutas y Logística
                </h3>
              </div>
              <p className="text-gray-600">
                Diseñamos estrategias para optimizar el tiempo y costos en tus
                operaciones de transporte marítimo.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="inset-0 bg-gradient-to-l from-[#fff6d399] via-[#ffe47acc] to-[#f8ce24c2] p-6 rounded-lg text-center md:py-20"
      >
        <h2 className="text-2xl md:text-3xl font-montserrat text-darkTitle mb-4">
          ¿Necesitas asesoramiento náutico profesional?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Contacta con nuestro equipo de expertos para una consulta
          personalizada
        </p>
        <Button
          component={Link}
          href={`${NAVIGATION_LINKS.CONTACTO}`}
          unstyled
          className="bg-primary hover:bg-primary/75 text-darkTitle font-normal text-sm md:text-lg py-3 px-6 rounded-lg transition-colors"
          >
          Contactar
        </Button>
      </motion.div>
    </div>
  );
}

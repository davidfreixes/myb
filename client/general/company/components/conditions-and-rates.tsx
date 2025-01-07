"use client";

import { Button } from "@mantine/core";
import { motion } from "framer-motion";
import { Building2, HelpCircle, Mail, Ship } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ConditionsAndRates() {
  const [activeTab, setActiveTab] = useState("yates");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#47639e99] to-[#47639edc] py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-montserrat font-medium text-white mb-6">
              Condiciones de Contratación y Tarifas
            </h1>
            <h2 className="text-2xl text-white mb-8">
              Información detallada sobre nuestros servicios y tarifas
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Tabs */}
        <div className="flex flex-col justify-center md:flex-row mb-8">
          <Button
            unstyled
            onClick={() => setActiveTab("yates")}
            className={`px-6 py-3 rounded-lg font-montserrat text-lg transition-colors ${
              activeTab === "yates"
                ? "bg-primary text-black"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <Ship className="w-5 h-5 mr-2 inline-block" />
            Ámbito de Yates
          </Button>
          <Button
            unstyled
            onClick={() => setActiveTab("brokerage")}
            className={`px-6 py-3 rounded-lg font-montserrat text-lg transition-colors ${
              activeTab === "brokerage"
                ? "bg-primary text-black"
                : "bg-gray-200 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <Building2 className="w-5 h-5 mr-2 inline-block" />
            Ship Brokerage y Charterer
          </Button>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === "yates" ? <YatesContent /> : <BrokerageContent />}
        </div>

        {/* FAQ and Contact Section */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8 text-center">
          <div className="flex gap-2 md:flex-row justify-center">
            <HelpCircle className="w-7 h-7 text-primary" />
            <h2 className="text-2xl font-montserrat text-primary mb-4">
              ¿Tienes alguna pregunta?
            </h2>
          </div>
          <p className="text-gray-700 mb-6">
            Nuestro equipo está disponible para resolver cualquier duda sobre
            nuestras condiciones y tarifas.
          </p>
          <Button
            component={Link}
            href="/contact"
            unstyled
            className="bg-primary hover:bg-primary/75 text-black font-normal text-lg py-3 px-6 rounded inline-flex items-center"
          >
            <div className="flex gap-2 items-center">
              <Mail className="w-5 h-5" />
              Contactar
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}

function YatesContent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700">
          En Menorca Yacht Brokers, ofrecemos una amplia gama de servicios
          relacionados con la compra, venta y alquiler de yates, incluyendo
          inspecciones y tasaciones marítimas. A continuación, detallamos
          nuestras tarifas y condiciones para cada uno de los servicios que
          ofrecemos.
        </p>

        <section className="mt-8">
          <h2 className="text-2xl font-montserrat text-primary mb-4">
            1. Servicios de Brokeraje de Yates
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-montserrat mb-4">
              Compra y Venta de Yates:
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Comisión del 5% sobre el precio de venta.</li>
              <li>
                Comisión mínima de €2,000 para transacciones por debajo de
                €40,000.
              </li>
              <li>
                El pago de la comisión se realiza al cierre de la transacción.
              </li>
            </ul>

            <h3 className="text-xl font-montserrat mt-6 mb-4">
              Alquiler y Charter de Yates:
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Comisión del 10% sobre el precio de alquiler.</li>
              <li>
                Condiciones específicas para alquileres de larga duración (más
                de 30 días).
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-montserrat text-primary mb-4">
            2. Inspecciones Marítimas
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border-2">
              <h3 className="text-xl font-montserrat mb-2">
                Inspección básica
              </h3>
              <p className="text-2xl font-bold text-primary mb-4">€500</p>
              <p className="text-gray-600 mb-4">Yate hasta 12 metros</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>✓ Inspección visual del casco</li>
                <li>✓ Revisión del motor</li>
                <li>✓ Sistema eléctrico</li>
                <li>✓ Sistema de navegación</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-2">
              <h3 className="text-xl font-montserrat mb-2">
                Inspección avanzada
              </h3>
              <p className="text-2xl font-bold text-primary mb-4">€1,000</p>
              <p className="text-gray-600 mb-4">Yate hasta 24 metros</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>✓ Todo lo de inspección básica</li>
                <li>✓ Sistemas de seguridad</li>
                <li>✓ Prueba de navegación</li>
                <li>✓ Evaluación completa</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-2">
              <h3 className="text-xl font-montserrat mb-2">
                Inspección completa
              </h3>
              <p className="text-2xl font-bold text-primary mb-4">€2,000</p>
              <p className="text-gray-600 mb-4">Yate superior a 24 metros</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>✓ Informe completo</li>
                <li>✓ Pruebas exhaustivas</li>
                <li>✓ Sistemas hidráulicos</li>
                <li>✓ Sistemas de propulsión</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-montserrat text-primary mb-4">
            3. Tasaciones Marítimas
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-montserrat mb-2">Tasación básica</h3>
              <p className="text-2xl font-bold text-primary mb-4">€300</p>
              <p className="text-gray-600">Yate hasta 12 metros</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-montserrat mb-2">
                Tasación avanzada
              </h3>
              <p className="text-2xl font-bold text-primary mb-4">€600</p>
              <p className="text-gray-600">Yate hasta 20 metros</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-montserrat mb-2">
                Tasación completa
              </h3>
              <p className="text-2xl font-bold text-primary mb-4">€1,200</p>
              <p className="text-gray-600">Yate superior a 20 metros</p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-montserrat text-primary mb-4">
            4. Otros Servicios
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-montserrat mb-2">
                  Asesoría y Consultoría Náutica
                </h3>
                <p className="text-gray-700">€150/hora</p>
              </div>
              <div>
                <h3 className="text-xl font-montserrat mb-2">
                  Gestión de documentación
                </h3>
                <p className="text-gray-700">€300 por transacción</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-montserrat text-primary mb-4">
            Condiciones Generales
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <div>
              <h3 className="font-montserrat font-medium mb-2">
                Métodos de pago
              </h3>
              <p className="text-gray-700">
                Aceptamos pagos por transferencia bancaria, tarjeta de crédito o
                PayPal. Los pagos deben realizarse antes de la entrega de los
                informes finales.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-medium mb-2">
                Cancelaciones
              </h3>
              <p className="text-gray-700">
                En caso de cancelación con menos de 24 horas de antelación, se
                cobrará el 50% de la tarifa acordada.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-medium mb-2">
                Validez de las tarifas
              </h3>
              <p className="text-gray-700">
                Las tarifas están sujetas a cambios anuales según la revisión de
                precios del mercado.
              </p>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}

function BrokerageContent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700">
          En Menorca Brokers, seguimos las normativas internacionales
          reconocidas por BIMCO (Baltic and International Maritime Council) para
          garantizar que todos nuestros acuerdos sean claros, justos y
          transparentes.
        </p>

        <section className="mt-8">
          <h2 className="text-2xl font-montserrat text-primary mb-4">
            1. Comisiones para Ship Broker
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-montserrat mb-4">Comisión Estándar:</h3>
            <p className="text-gray-700 mb-4">
              La comisión habitual es del 1.25% al 2.5% del flete bruto, precio
              de venta del buque o valor del contrato de fletamento.
            </p>

            <h3 className="text-xl font-montserrat mt-6 mb-4">
              Pago de la Comisión:
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Fletamento: Al cobro del primer flete o inicio del contrato.
              </li>
              <li>
                Venta de Buques: Tras la firma del MOA y entrega del buque.
              </li>
              <li>
                Renovaciones y Extensiones: Comisión adicional según acuerdo
                previo.
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-montserrat text-primary mb-4">
            2. Responsabilidades del Ship Broker
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-montserrat mb-4">Intermediación</h3>
              <p className="text-gray-700">
                Actuamos como intermediario imparcial entre las partes,
                facilitando la negociación.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-montserrat mb-4">Confidencialidad</h3>
              <p className="text-gray-700">
                Mantenemos la confidencialidad de toda la información sensible.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-montserrat text-primary mb-4">
            3. Comisiones para Charterer
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-montserrat mb-4">
              Comisión de Fletamento:
            </h3>
            <p className="text-gray-700 mb-4">
              Varía entre 1% a 2% del valor total del fletamento acordado.
            </p>

            <h3 className="text-xl font-montserrat mt-6 mb-4">
              Compensación por Ingreso Adicional:
            </h3>
            <p className="text-gray-700">
              Compensación adicional en caso de renovación o modificación del
              contrato.
            </p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-montserrat text-primary mb-4">
            4. Responsabilidades del Charterer
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="space-y-4">
              <div>
                <h3 className="font-montserrat font-medium mb-2">
                  Negociación y Fletamento
                </h3>
                <p className="text-gray-700">
                  El Charterer se encarga de negociar las condiciones del
                  contrato y asegurar el cumplimiento normativo.
                </p>
              </div>
              <div>
                <h3 className="font-montserrat font-medium mb-2">
                  Cumplimiento de Contrato
                </h3>
                <p className="text-gray-700">
                  Garantizar el cumplimiento de las condiciones establecidas y
                  gestionar posibles disputas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-montserrat text-primary mb-4">
            5. Condiciones Generales
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <div>
              <h3 className="font-montserrat font-medium mb-2">
                Duración del Contrato
              </h3>
              <p className="text-gray-700">
                Vigente hasta la finalización del acuerdo comercial, salvo otro
                plazo establecido.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-medium mb-2">Exclusividad</h3>
              <p className="text-gray-700">
                Puede establecerse según los términos acordados en cada caso
                particular.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-medium mb-2">
                Modificaciones
              </h3>
              <p className="text-gray-700">
                Cualquier modificación debe ser acordada por escrito entre las
                partes.
              </p>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}

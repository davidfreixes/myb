import { Button, Radio, TextInput } from "@mantine/core";
import { motion } from "framer-motion";
import { Calendar, Clock, Mail, Phone, User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const services = [
//   {
//     id: "reunion",
//     title: "Reunión Presencial",
//     duration: "30 min",
//     category: "all",
//   },
//   {
//     id: "presentation",
//     title: "Llamada de presentación",
//     duration: "30 min",
//     category: "all",
//   },
  // Yacht Broker services
  {
    id: "market-analysis",
    title: "Análisis de mercado de compraventa",
    duration: "1h",
    price: "€50.00",
    category: "yacht-broker",
  },
  {
    id: "yacht-sale",
    title: "Oferta de venta de un Yate o embarcación",
    duration: "30m",
    category: "yacht-broker",
  },
  {
    id: "yacht-purchase",
    title: "Compra de Yate o embarcación",
    duration: "30m",
    category: "yacht-broker",
  },
  // Yacht Charter services
  {
    id: "charter-request",
    title: "Solicitud de charter",
    duration: "30m",
    category: "yacht-charter",
  },
  // Inspecciones y Tasaciones
  {
    id: "basic-appraisal",
    title: "Tasación básica",
    duration: "2h",
    price: "€300.00",
    category: "inspections",
  },
  // Consultoría Náutica
  {
    id: "nautical-consulting",
    title: "Consultoría náutica",
    duration: "1h",
    category: "consulting",
  },
  // Servicios de Valor Añadido
  {
    id: "value-added-services",
    title: "Solicitud de Servicios de Valor Añadido",
    duration: "30m",
    category: "value-added",
  },
  // Ship Sale & Purchase Broker
  {
    id: "ship-sale-purchase",
    title: "Ship Sale & Purchase analysis and service request",
    duration: "1h",
    category: "ship-broker",
  },
  // Charter Broker
  {
    id: "charter-service",
    title: "Charter service",
    duration: "30m",
    category: "charter-broker",
  },
];

const categories = [
  { value: "all", label: "TODO" },
  { value: "yacht-broker", label: "Yacht Broker" },
  { value: "yacht-charter", label: "Yacht Charter" },
  { value: "inspections", label: "Inspecciones y Tasaciones" },
  { value: "consulting", label: "Consultoría Náutica" },
  { value: "value-added", label: "Servicios de Valor Añadido" },
  { value: "ship-broker", label: "Ship Sale & Purchase Broker" },
  { value: "charter-broker", label: "Charter Broker" },
];

const steps = [
  { id: "service", label: "Servicio" },
  { id: "datetime", label: "Fecha & Hora" },
  { id: "details", label: "Detalles básicos" },
  { id: "summary", label: "Resumen" },
];

export default function Appointment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [scheduleData, setScheduleData] = useState({
    category: "",
    service: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const filteredServices = services.filter(
    (service) =>
      scheduleData.category === "all" ||
      service.category === scheduleData.category ||
      service.category === "all"
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-base sm:text-lg font-medium mb-4">
                Seleccione la categoría
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.value}
                    unstyled
                    className={`p-2 text-sm sm:text-base rounded border ${
                      scheduleData.category === category.value
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-gray-200 hover:border-primary"
                    }`}
                    onClick={() =>
                      setScheduleData({
                        ...scheduleData,
                        category: category.value,
                        service: "", // Reset service when category changes
                      })
                    }
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-medium mb-4">
                Seleccione el servicio
              </h3>
              <div className="space-y-3">
                {filteredServices.map((service) => (
                  <div
                    key={service.id}
                    className={`p-3 sm:p-4 rounded border cursor-pointer transition-all ${
                      scheduleData.service === service.id
                        ? "border-primary bg-primary/10"
                        : "border-gray-200 hover:border-primary"
                    }`}
                    onClick={() =>
                      setScheduleData({
                        ...scheduleData,
                        service: service.id,
                      })
                    }
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <Image
                          src="/placeholder.svg"
                          alt=""
                          width={20}
                          height={20}
                          className="w-4 h-4 sm:w-5 sm:h-5"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm sm:text-base">
                          {service.title}
                        </h4>
                        <div className="text-xs sm:text-sm text-gray-500">
                          Duración: {service.duration}
                          {service.price && ` · Precio: ${service.price}`}
                        </div>
                      </div>
                      <Radio
                        checked={scheduleData.service === service.id}
                        onChange={() => {}}
                        className="mt-1"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <TextInput
              required
              type="date"
              label="Fecha Preferida"
              rightSection={<Calendar size={16} />}
              value={scheduleData.date}
              onChange={(e) =>
                setScheduleData({ ...scheduleData, date: e.target.value })
              }
              min={new Date().toISOString().split("T")[0]}
            />
            <TextInput
              required
              type="time"
              label="Hora Preferida"
              rightSection={<Clock size={16} />}
              value={scheduleData.time}
              onChange={(e) =>
                setScheduleData({ ...scheduleData, time: e.target.value })
              }
            />
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <TextInput
              required
              label="Nombre"
              placeholder="Tu nombre completo"
              rightSection={<User size={16} />}
              value={scheduleData.name}
              onChange={(e) =>
                setScheduleData({ ...scheduleData, name: e.target.value })
              }
            />
            <TextInput
              required
              label="Email"
              placeholder="tu@email.com"
              rightSection={<Mail size={16} />}
              value={scheduleData.email}
              onChange={(e) =>
                setScheduleData({ ...scheduleData, email: e.target.value })
              }
            />
            <TextInput
              required
              label="Teléfono"
              placeholder="Tu número de teléfono"
              rightSection={<Phone size={16} />}
              value={scheduleData.phone}
              onChange={(e) =>
                setScheduleData({ ...scheduleData, phone: e.target.value })
              }
            />
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <div className="bg-gray-50 p-3 sm:p-4 rounded">
              <h3 className="font-medium mb-2 text-sm sm:text-base">
                Resumen de la reserva
              </h3>
              <dl className="space-y-2 text-sm sm:text-base">
                <div className="flex justify-between">
                  <dt className="text-gray-600">Servicio:</dt>
                  <dd>
                    {services.find((s) => s.id === scheduleData.service)?.title}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Fecha:</dt>
                  <dd>{scheduleData.date}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Hora:</dt>
                  <dd>{scheduleData.time}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Nombre:</dt>
                  <dd>{scheduleData.name}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Email:</dt>
                  <dd>{scheduleData.email}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Teléfono:</dt>
                  <dd>{scheduleData.phone}</dd>
                </div>
              </dl>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg border"
    >
      <h2 className="text-xl sm:text-2xl font-montserrat text-primary mb-4 sm:mb-6">
        Reserva una Cita
      </h2>

      <div className="flex mb-6 sm:mb-8 overflow-x-auto pb-2">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`flex items-start ${
              index < steps.length - 1 ? "flex-1" : ""
            }`}
          >
            <div className="flex flex-col gap-1 sm:gap-2 justify-center items-center">
              <div
                className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm ${
                  index <= currentStep
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {index + 1}
              </div>
              <div
                className={`text-xs sm:text-sm ${
                  index <= currentStep ? "text-primary" : "text-gray-500"
                }`}
              >
                {step.label}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-0.5 mx-1 sm:mx-2 mt-3 sm:mt-4 ${
                  index < currentStep ? "bg-primary" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <div className="min-h-[300px] sm:min-h-[400px]">
        {renderStepContent()}
      </div>

      <div className="flex justify-between mt-6 sm:mt-8">
        {currentStep > 0 && (
          <Button
            unstyled
            onClick={handleBack}
            className="px-3 sm:px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 text-sm sm:text-base"
          >
            Anterior
          </Button>
        )}
        <Button
          unstyled
          onClick={currentStep === steps.length - 1 ? undefined : handleNext}
          type={currentStep === steps.length - 1 ? "submit" : "button"}
          className="ml-auto bg-primary hover:bg-primary/90 text-white py-2 px-3 sm:px-4 rounded text-sm sm:text-base"
        >
          {currentStep === steps.length - 1 ? "Confirmar Reserva" : "Siguiente"}
        </Button>
      </div>
    </motion.div>
  );
}

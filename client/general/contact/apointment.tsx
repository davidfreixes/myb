import { Button, Radio, TextInput } from "@mantine/core";
import { motion } from "framer-motion";
import {
  Anchor,
  Building2,
  Clipboard,
  Mail,
  PackageSearch,
  Phone,
  PlaneTakeoff,
  Ship,
  ShipWheel,
  User,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// First, let's add the service icons mapping
const serviceIcons = {
  reunion: User,
  presentation: Phone,
  "Análisis de mercado de compraventa": PackageSearch,
  "Oferta de venta de un Yate o embarcación": Ship,
  "Compra de Yate o embarcación": Anchor,
  "Solicitud de charter": ShipWheel,
  "Tasación básica": Clipboard,
  "Consultoría náutica": Building2,
  "Solicitud de Servicios de Valor Añadido": PlaneTakeoff,
  "Ship Sale & Purchase analysis and service request": Ship,
  "Charter service": ShipWheel,
};

interface FormData {
  type: string;
  category: string;
  service: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
}

export default function Appointment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [confirmData, setConfirmData] = useState(false);
  const { t } = useTranslation();

  const steps = [
    { id: "service", label: t("contact.appointment.steps.service") },
    { id: "datetime", label: t("contact.appointment.steps.datetime") },
    { id: "details", label: t("contact.appointment.steps.details") },
    { id: "summary", label: t("contact.appointment.steps.summary") },
  ];

  const services = [
    {
      id: "Reunión Presencial",
      title: t("contact.appointment.services.options.meeting.title"),
      duration: t("contact.appointment.services.options.meeting.duration"),
      category: "TODO",
    },
    {
      id: "Llamada de presentación",
      title: t("contact.appointment.services.options.call.title"),
      duration: t("contact.appointment.services.options.call.duration"),
      category: "TODO",
    },
    {
      id: "Análisis de mercado de compraventa",
      title: t("contact.appointment.services.options.marketAnalysis.title"),
      duration: t(
        "contact.appointment.services.options.marketAnalysis.duration"
      ),
      price: t("contact.appointment.services.options.marketAnalysis.price"),
      category: "Yacht Broker",
    },
    {
      id: "Oferta de venta de un Yate o embarcación",
      title: t("contact.appointment.services.options.yachtSale.title"),
      duration: t("contact.appointment.services.options.yachtSale.duration"),
      category: "Yacht Broker",
    },
    {
      id: "Compra de Yate o embarcación",
      title: t("contact.appointment.services.options.yachtPurchase.title"),
      duration: t(
        "contact.appointment.services.options.yachtPurchase.duration"
      ),
      category: "Yacht Broker",
    },
    {
      id: "Solicitud de charter",
      title: t("contact.appointment.services.options.charterRequest.title"),
      duration: t(
        "contact.appointment.services.options.charterRequest.duration"
      ),
      category: "Yacht Charter",
    },
    {
      id: "Tasación básica",
      title: t("contact.appointment.services.options.basicValuation.title"),
      duration: t(
        "contact.appointment.services.options.basicValuation.duration"
      ),
      price: t("contact.appointment.services.options.basicValuation.price"),
      category: "Inspecciones y Tasaciones",
    },
    {
      id: "Consultoría náutica",
      title: t("contact.appointment.services.options.nauticalConsulting.title"),
      duration: t(
        "contact.appointment.services.options.nauticalConsulting.duration"
      ),
      category: "Consultoría náutica",
    },
    {
      id: "Solicitud de Servicios de Valor Añadido",
      title: t("contact.appointment.services.options.valueAddedServices.title"),
      duration: t(
        "contact.appointment.services.options.valueAddedServices.duration"
      ),
      category: "Servicios de Valor Añadido",
    },
    {
      id: "Ship Sale & Purchase analysis and service request",
      title: t("contact.appointment.services.options.shipSalePurchase.title"),
      duration: t(
        "contact.appointment.services.options.shipSalePurchase.duration"
      ),
      category: "Ship broker",
    },
    {
      id: "Charter service",
      title: t("contact.appointment.services.options.charterService.title"),
      duration: t(
        "contact.appointment.services.options.charterService.duration"
      ),
      category: "Charter broker",
    },
  ];
  // Define available time slots
  const timeSlots = [
    {
      id: "13:15-14:15",
      label: t("contact.appointment.datetime.time.slots.slot1"),
    },
    {
      id: "14:15-15:15",
      label: t("contact.appointment.datetime.time.slots.slot2"),
    },
    {
      id: "15:15-16:15",
      label: t("contact.appointment.datetime.time.slots.slot3"),
    },
  ];

  const categories = [
    { value: "all", label: t("contact.appointment.categories.options.all") },
    {
      value: "Yacht Broker",
      label: t("contact.appointment.categories.options.yachtBroker"),
    },
    {
      value: "Yacht Charter",
      label: t("contact.appointment.categories.options.yachtCharter"),
    },
    {
      value: "Inspecciones y Tasaciones",
      label: t("contact.appointment.categories.options.inspections"),
    },
    {
      value: "Consultoría náutica",
      label: t("contact.appointment.categories.options.consulting"),
    },
    {
      value: "Servicios de Valor Añadido",
      label: t("contact.appointment.categories.options.valueAdded"),
    },
    {
      value: "Ship broker",
      label: t("contact.appointment.categories.options.shipBroker"),
    },
    {
      value: "Charter broker",
      label: t("contact.appointment.categories.options.charterBroker"),
    },
  ];

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const [scheduleData, setScheduleData] = useState<FormData>({
    type: "RESERVA DE UNA CITA",
    category: "",
    service: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
  });

  // Add useEffect for real-time validation
  useEffect(() => {
    const newErrors = { ...errors }; // Base para la validación

    // Validar los campos del paso actual
    switch (currentStep) {
      case 0:
        if (scheduleData.category) {
          delete newErrors.category;
        }
        if (scheduleData.service) {
          delete newErrors.service;
        }
        break;
      case 1:
        if (scheduleData.date) {
          delete newErrors.date;
        }
        if (scheduleData.time) {
          delete newErrors.time;
        }
        break;
      case 2:
        if (scheduleData.name) {
          delete newErrors.name;
        }
        if (scheduleData.email) {
          if (/\S+@\S+\.\S+/.test(scheduleData.email)) {
            delete newErrors.email;
          }
        }
        if (scheduleData.phone) {
          delete newErrors.phone;
        }
        break;
    }

    setErrors(newErrors); // Actualiza los errores
  }, [scheduleData, currentStep]); // Excluir `errors`
  // Only re-run when scheduleData, currentStep, or errors changes

  // Modified validateStep to handle validation without clearing previous errors
  const validateStep = (step: number): boolean => {
    const newErrors: { [key: string]: string } = { ...errors };

    switch (step) {
      case 0:
        if (!scheduleData.category) {
          newErrors.category = t(
            "contact.appointment.validation.required.category"
          );
        }
        if (!scheduleData.service) {
          newErrors.service = t(
            "contact.appointment.validation.required.service"
          );
        }
        break;
      case 1:
        if (!scheduleData.date) {
          newErrors.date = t("contact.appointment.validation.required.date");
        }
        if (!scheduleData.time) {
          newErrors.time = t("contact.appointment.validation.required.time");
        }
        break;
      case 2:
        if (!scheduleData.name) {
          newErrors.name = t("contact.appointment.validation.required.name");
        }
        if (!scheduleData.email) {
          newErrors.email = t("contact.appointment.validation.required.email");
        } else if (!/\S+@\S+\.\S+/.test(scheduleData.email)) {
          newErrors.email = t("contact.appointment.validation.invalid.email");
        }
        if (!scheduleData.phone) {
          newErrors.phone = t("contact.appointment.validation.required.phone");
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Only proceed if we're on the final step and all validations pass
    if (confirmData && currentStep === steps.length - 1 && validateStep(2)) {
      setIsLoading(true);
      setSubmitStatus({ type: null, message: "" });

      try {
        const submitFormData = new FormData();
        submitFormData.append(
          "access_key",
          "9ad33da4-1059-4457-9fd4-c21eeb8d1e37"
        );

        Object.entries(scheduleData).forEach(([key, value]) => {
          submitFormData.append(key, value);
        });

        const selectedService = services.find(
          (s) => s.id === scheduleData.service
        );
        if (selectedService && selectedService.price) {
          submitFormData.append("service_price", selectedService.price);
        }

        const object = Object.fromEntries(submitFormData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: json,
        });

        const result = await response.json();

        if (result.success) {
          setSubmitStatus({
            type: "success",
            message: t("contact.appointment.messages.success"),
          });
          setScheduleData({
            type: "RESERVA DE UNA CITA",
            category: "",
            service: "",
            date: "",
            time: "",
            name: "",
            email: "",
            phone: "",
          });
          setCurrentStep(0);
        } else {
          throw new Error("Error al procesar la reserva");
        }
      } catch {
        setSubmitStatus({
          type: "error",
          message: t("contact.appointment.messages.error"),
        });
      } finally {
        setIsLoading(false);
        setConfirmData(false);
      }
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
    setErrors({}); // Clear errors when going back
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
                {t("contact.appointment.categories.title")}
              </h3>
              {errors.category && (
                <p className="text-red-500 text-sm mb-2">{errors.category}</p>
              )}
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
                {t("contact.appointment.services.title")}
              </h3>
              {errors.service && (
                <p className="text-red-500 text-sm mb-2">{errors.service}</p>
              )}
              <div className="space-y-3 overflow-y-auto max-h-[400px]">
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
                        {React.createElement(
                          serviceIcons[
                            service.id as keyof typeof serviceIcons
                          ] || User,
                          {
                            className: "w-4 h-4 sm:w-5 sm:h-5",
                          }
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm sm:text-base">
                          {service.title}
                        </h4>
                        <div className="text-xs sm:text-sm text-gray-500">
                          {t("contact.appointment.services.duration")}:{" "}
                          {service.duration}
                          {service.price &&
                            ` · ${t("contact.appointment.services.price")}: ${
                              service.price
                            }`}
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
              label={t("contact.appointment.datetime.date.label")}
              value={scheduleData.date}
              onChange={(e) =>
                setScheduleData({ ...scheduleData, date: e.target.value })
              }
              min={new Date().toISOString().split("T")[0]}
              error={errors.date}
            />
            <div className="space-y-2">
              <label className="text-sm font-medium">
                {t("contact.appointment.datetime.time.label")}
              </label>
              {errors.time && (
                <p className="text-red-500 text-sm">{errors.time}</p>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {timeSlots.map((slot) => (
                  <Button
                    key={slot.id}
                    unstyled
                    className={`p-2 text-sm rounded border ${
                      scheduleData.time === slot.id
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-gray-200 hover:border-primary"
                    }`}
                    onClick={() =>
                      setScheduleData({ ...scheduleData, time: slot.id })
                    }
                  >
                    {slot.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <TextInput
              required
              label={t("contact.appointment.contactDetails.name.label")}
              placeholder={t(
                "contact.appointment.contactDetails.name.placeholder"
              )}
              rightSection={<User size={16} />}
              value={scheduleData.name}
              onChange={(e) =>
                setScheduleData({ ...scheduleData, name: e.target.value })
              }
              error={errors.name}
            />
            <TextInput
              required
              label={t("contact.appointment.contactDetails.email.label")}
              placeholder={t(
                "contact.appointment.contactDetails.email.placeholder"
              )}
              rightSection={<Mail size={16} />}
              value={scheduleData.email}
              onChange={(e) =>
                setScheduleData({ ...scheduleData, email: e.target.value })
              }
              error={errors.email}
            />
            <TextInput
              required
              label={t("contact.appointment.contactDetails.phone.label")}
              placeholder={t(
                "contact.appointment.contactDetails.phone.placeholder"
              )}
              rightSection={<Phone size={16} />}
              value={scheduleData.phone}
              onChange={(e) =>
                setScheduleData({ ...scheduleData, phone: e.target.value })
              }
              error={errors.phone}
            />
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <div className="bg-gray-50 p-3 sm:p-4 rounded">
              <h3 className="font-medium mb-2 text-sm sm:text-base">
                {t("contact.appointment.summary.title")}
              </h3>
              <dl className="space-y-2 text-sm sm:text-base">
                <div className="flex justify-between">
                  <dt className="text-gray-600">
                    {t("contact.appointment.summary.fields.service")}:
                  </dt>
                  <dd>
                    {services.find((s) => s.id === scheduleData.service)?.title}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">
                    {t("contact.appointment.summary.fields.date")}:
                  </dt>
                  <dd>{scheduleData.date}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">
                    {t("contact.appointment.summary.fields.time")}:
                  </dt>
                  <dd>{scheduleData.time}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">
                    {t("contact.appointment.summary.fields.name")}:
                  </dt>
                  <dd>{scheduleData.name}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">
                    {t("contact.appointment.summary.fields.email")}:
                  </dt>
                  <dd>{scheduleData.email}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">
                    {t("contact.appointment.summary.fields.phone")}:
                  </dt>
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
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl sm:text-2xl font-montserrat text-primary mb-4 sm:mb-7">
        {t("contact.appointment.title")}
      </h2>

      <div className="flex my-auto mb-6 overflow-x-auto pb-2">
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

      <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
        <div className="flex-1">{renderStepContent()}</div>

        {submitStatus.type && (
          <div
            className={`mt-2 mb-4 p-4 rounded-lg text-sm sm:text-base ${
              submitStatus.type === "success"
                ? "bg-green-50 text-green-800"
                : "bg-red-50 text-red-800"
            }`}
          >
            {submitStatus.message}
          </div>
        )}
        <div className="flex justify-between mt-4 sm:mt-4">
          {currentStep > 0 && (
            <Button
              unstyled
              onClick={handleBack}
              className="px-3 sm:px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 text-sm sm:text-base"
              disabled={isLoading}
            >
              {t("contact.appointment.buttons.previous")}
            </Button>
          )}
          {currentStep === steps.length - 1 ? (
            <Button
              unstyled
              onClick={() => setConfirmData(true)}
              type="submit"
              className={`ml-auto bg-primary hover:bg-white hover:text-black hover:border-primary border text-white py-2 px-3 sm:px-4 rounded text-sm sm:text-base transform transition duration-300 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading && confirmData
                ? t("contact.appointment.buttons.processing")
                : t("contact.appointment.buttons.confirm")}
            </Button>
          ) : (
            <Button
              unstyled
              onClick={handleNext}
              type="button"
              className="ml-auto bg-primary hover:bg-white hover:text-black hover:border-primary border text-white py-2 px-3 sm:px-4 rounded text-sm sm:text-base transform transition duration-300"
            >
              {t("contact.appointment.buttons.next")}
            </Button>
          )}
        </div>
      </form>
    </motion.div>
  );
}

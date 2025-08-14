import type React from "react";

import type { YachtDetails } from "@/utils/yachts";
import { Modal } from "@mantine/core";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

interface ContactModalProps {
  yacht: YachtDetails | null;
  opened: boolean;
  onClose: () => void;
}

interface SubmitStatus {
  type: "success" | "error" | null;
  message: string;
}

export function ContactSellerModal({
  yacht,
  opened,
  onClose,
}: ContactModalProps) {
  const t = useTranslations("yachtBroker.contactSellerModal");

  const [formData, setFormData] = useState({
    type: t("formType"),
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    type: null,
    message: "",
  });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = t("validation.nameRequired");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("validation.emailRequired");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("validation.emailInvalid");
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t("validation.phoneRequired");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const submitFormData = new FormData();
      submitFormData.append(
        "access_key",
        "ad8b8a66-1708-45fd-9f5d-68feae1da60e"
      );

      // Añadir información del yate al formulario
      const enhancedFormData = {
        ...formData,
        yacht_model: yacht?.model,
        yacht_price: yacht?.price,
        yacht_location: yacht?.location,
      };

      Object.entries(enhancedFormData).forEach(([key, value]) => {
        if (value !== undefined) {
          submitFormData.append(key, value.toString());
        }
      });

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(submitFormData)),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: t("status.messageSent"),
        });
        setFormData({
          type: t("formType"),
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setErrors({});
      } else {
        throw new Error(result.message || t("status.errorSending"));
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error ? error.message : t("status.errorSending"),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!yacht) return null;

  return (
    <Modal opened={opened} onClose={onClose} size="xl" withCloseButton={false}>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Detalles del yate */}
        <div className="w-full md:w-1/3 bg-gray-50 rounded-lg p-4">
          <div className="relative h-48 rounded-lg overflow-hidden mb-4">
            <Image
              src={yacht.imageUrl || "/placeholder.svg"}
              alt={yacht.model}
              fill
              className="object-cover"
              quality={80}
              sizes="(max-width: 640px) 100vw, 33vw"
              priority={false}
              placeholder={yacht.imageUrl?.includes('data:image') ? 'blur' : 'empty'}
              blurDataURL={yacht.imageUrl?.includes('data:image') ? yacht.imageUrl : undefined}
            />
          </div>
          <h3 className="font-semibold text-lg mb-2">{yacht.model}</h3>
          <div className="space-y-2 text-sm">
            <p className="flex justify-between">
              <span className="text-gray-600">{t("yachtDetails.price")}</span>
              <span className="font-medium">
                {yacht.price.toLocaleString()}€
              </span>
            </p>
            <p className="flex justify-between">
              <span className="text-gray-600">{t("yachtDetails.length")}</span>
              <span className="font-medium">{yacht.length}m</span>
            </p>
            <p className="flex justify-between">
              <span className="text-gray-600 mr-2">
                {t("yachtDetails.location")}
              </span>
              <span className="text-right font-medium">{yacht.location}</span>
            </p>
            {yacht.year && (
              <p className="flex justify-between">
                <span className="text-gray-600">{t("yachtDetails.year")}</span>
                <span className="font-medium">{yacht.year}</span>
              </p>
            )}
          </div>
        </div>

        {/* Formulario */}
        <div className="flex-1">
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">{t("form.title")}</h3>
            <p className="text-gray-600 text-sm">
              {t("form.description", { yachtModel: yacht.model })}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t("form.fields.fullName")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder={t("form.fields.namePlaceholder")}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500">{errors.name}</p>
              )}
            </div>
            <div className="flex gap-4">
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("form.fields.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder={t("form.fields.emailPlaceholder")}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              <div className="w-full">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("form.fields.phone")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder={t("form.fields.phonePlaceholder")}
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t("form.fields.message")}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
                placeholder={t("form.fields.messagePlaceholder")}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500">{errors.message}</p>
              )}
              <p className="mt-1 text-xs text-gray-500">
                {t("form.fields.messageHelp")}
              </p>
            </div>

            <div className="text-xs text-gray-500 mt-4">
              {t("form.privacy")}
            </div>
            {submitStatus.type && (
              <div
                className={`mb-4 p-4 rounded-lg ${
                  submitStatus.type === "success"
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {submitStatus.message}
              </div>
            )}
            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-700 bg-gray-300 rounded-lg hover:bg-gray-200 transition-colors"
              >
                {t("form.buttons.cancel")}
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-primary hover:bg-transparent hover:text-black hover:border-primary hover:border border-primary border text-black font-normal text-sm sm:text-base py-2 px-4 rounded transition-colors duration-200"
              >
                {isSubmitting
                  ? t("form.buttons.sending")
                  : t("form.buttons.submit")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}

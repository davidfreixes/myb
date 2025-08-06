import { Button, Select, TextInput, Textarea } from "@mantine/core";
import { Mail, Phone, User } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

interface FormData {
  type: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactForm() {
  const t = useTranslations("contact.contactForm");

  const [formData, setFormData] = useState<FormData>({
    type: "FORMULARIO DE CONTACTO",
    name: "",
    email: "",
    phone: "",
    country: "ES",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validación del nombre
    if (!formData.name.trim()) {
      newErrors.name = t("form.validation.name.required");
    } else if (formData.name.length < 2) {
      newErrors.name = t("form.validation.name.minLength");
    }

    // Validación del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = t("form.validation.email.required");
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = t("form.validation.email.invalid");
    }

    // Validación del teléfono
    const phoneRegex = /^\+?[\d\s-]{6,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = t("form.validation.phone.required");
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = t("form.validation.phone.invalid");
    }

    // Validación del mensaje
    if (!formData.message.trim()) {
      newErrors.message = t("form.validation.message.required");
    } else if (formData.message.length < 4) {
      newErrors.message = t("form.validation.message.minLength");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatPhoneNumber = (phone: string, country: string): string => {
    const prefixes: { [key: string]: string } = {
      ES: "+34",
      UK: "+44",
      DE: "+49",
      FR: "+33",
    };

    const cleanPhone = phone.replace(/^\+\d{2}/, "").trim();
    return `${prefixes[country]} ${cleanPhone}`;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const submitFormData = new FormData();
      submitFormData.append(
        "access_key",
        "ad8b8a66-1708-45fd-9f5d-68feae1da60e" //process.env.WEB3FORMS_ACCESS_KEY || ""
      );

      // Formatear el teléfono antes de enviarlo
      const formattedData = {
        ...formData,
        phone: formatPhoneNumber(formData.phone, formData.country),
      };

      Object.entries(formattedData).forEach(([key, value]) => {
        submitFormData.append(key, value);
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
          message: t("form.submit.success"),
        });
        setFormData({
          type: "",
          name: "",
          email: "",
          phone: "",
          country: "ES",
          message: "",
        });
        setErrors({});
      } else {
        throw new Error(result.message || t("form.submit.error"));
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error ? error.message : t("form.submit.error"),
      });
    } finally {
      setIsLoading(false);
    }
  };

  const countryData = [
    { value: "ES", label: t("form.countries.ES") },
    { value: "UK", label: t("form.countries.UK") },
    { value: "DE", label: t("form.countries.DE") },
    { value: "FR", label: t("form.countries.FR") },
  ];

  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-montserrat text-primary mb-4 sm:mb-4  ">
        {t("title")}
      </h2>

      <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-6">
        <div className="flex items-center gap-2 text-gray-700 text-base font-semibold">
          <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          <a href="tel:+34633326156" className="hover:text-primary">
            +34 633 326 156
          </a>
        </div>
        <div className="flex items-center gap-2 text-gray-700 text-base">
          <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          <a
            href="mailto:contact@menorcabrokers.com"
            className="hover:text-primary"
          >
            contact@menorcabrokers.com
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <TextInput
          required
          label={t("form.labels.name")}
          placeholder={t("form.placeholders.name")}
          rightSection={<User size={16} />}
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
            if (errors.name) setErrors({ ...errors, name: undefined });
          }}
          error={errors.name}
          disabled={isLoading}
        />

        <TextInput
          required
          label={t("form.labels.email")}
          placeholder={t("form.placeholders.email")}
          rightSection={<Mail size={16} />}
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            if (errors.email) setErrors({ ...errors, email: undefined });
          }}
          error={errors.email}
          disabled={isLoading}
        />

        <div className="flex flex-col sm:flex-row gap-4">
          <Select
            label={t("form.labels.country")}
            placeholder={t("form.placeholders.country")}
            data={countryData}
            value={formData.country}
            onChange={(value) =>
              setFormData({ ...formData, country: value || "ES" })
            }
            className="flex-1"
            disabled={isLoading}
          />
          <TextInput
            required
            label={t("form.labels.phone")}
            placeholder={t("form.placeholders.phone")}
            rightSection={<Phone size={16} />}
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              if (errors.phone) setErrors({ ...errors, phone: undefined });
            }}
            error={errors.phone}
            className="flex-1"
            disabled={isLoading}
          />
        </div>

        <Textarea
          required
          label={t("form.labels.message")}
          placeholder={t("form.placeholders.message")}
          rows={4}
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (errors.message) setErrors({ ...errors, message: undefined });
          }}
          error={errors.message}
          disabled={isLoading}
        />

        {submitStatus.type && (
          <div
            className={`p-4 rounded-lg text-sm sm:text-base ${
              submitStatus.type === "success"
                ? "bg-green-50 text-green-800"
                : "bg-red-50 text-red-800"
            }`}
          >
            {submitStatus.message}
          </div>
        )}
        <Button
          type="submit"
          fullWidth
          unstyled
          className={`w-full bg-primary hover:bg-white hover:text-black hover:border-primary hover:border border-primary border text-white py-2
             px-3 sm:px-4 rounded text-sm sm:text-base transform transition duration-300 ${
               isLoading ? "opacity-50 cursor-not-allowed" : ""
             }`}
          disabled={isLoading}
        >
          {isLoading ? t("form.submit.sending") : t("form.submit.button")}{" "}
        </Button>
      </form>
    </div>
  );
}

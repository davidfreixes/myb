import { Button, Select, TextInput, Textarea } from "@mantine/core";
import { motion } from "framer-motion";
import { Mail, Phone, User } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "ES",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const submitFormData = new FormData();
      // Añadir la access key de Web3Forms
      submitFormData.append(
        "access_key",
        "9ad33da4-1059-4457-9fd4-c21eeb8d1e37"
      );

      // Añadir los datos del formulario
      Object.entries(formData).forEach(([key, value]) => {
        submitFormData.append(key, value);
      });

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
          message:
            "¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          country: "ES",
          message: "",
        });
      } else {
        throw new Error("Error al enviar el formulario");
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message:
          "Ha ocurrido un error al enviar el mensaje. Por favor, inténtalo de nuevo.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full h-full flex flex-col bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg border"
    >
      <h2 className="text-xl sm:text-2xl font-montserrat text-primary mb-4 sm:mb-6">
        Formulario de Contacto
      </h2>

      <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
        <div className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
          <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          <a href="tel:+34608577091" className="hover:text-primary">
            +34 608 577 091
          </a>
        </div>
        <div className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
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
          label="Nombre"
          placeholder="Tu nombre completo"
          rightSection={<User size={16} />}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          disabled={isLoading}
        />

        <TextInput
          required
          label="Email"
          placeholder="tu@email.com"
          rightSection={<Mail size={16} />}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          disabled={isLoading}
        />

        <div className="flex flex-col sm:flex-row gap-4">
          <Select
            label="País"
            placeholder="Seleccionar"
            data={[
              { value: "ES", label: "España (+34)" },
              { value: "UK", label: "Reino Unido (+44)" },
              { value: "DE", label: "Alemania (+49)" },
              { value: "FR", label: "Francia (+33)" },
            ]}
            value={formData.country}
            onChange={(value) =>
              setFormData({ ...formData, country: value || "ES" })
            }
            className="flex-1"
            disabled={isLoading}
          />
          <TextInput
            required
            label="Teléfono"
            placeholder="Tu número de teléfono"
            rightSection={<Phone size={16} />}
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="flex-1"
            disabled={isLoading}
          />
        </div>

        <Textarea
          required
          label="Mensaje"
          placeholder="¿En qué podemos ayudarte?"
          rows={4}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          disabled={isLoading}
        />

        {submitStatus.type && (
          <div
            className={`mb-4 p-4 rounded-lg text-sm sm:text-base ${
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
          className={`bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded text-sm sm:text-base transition-opacity ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Enviando..." : "Enviar Mensaje"}
        </Button>
      </form>
    </motion.div>
  );
}

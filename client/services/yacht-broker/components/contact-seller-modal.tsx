import { YachtDetails } from "@/utils/yachts";
import { Modal } from "@mantine/core";
import Image from "next/image";
import { useState } from "react";

interface ContactModalProps {
  yacht: YachtDetails | null;
  opened: boolean;
  onClose: () => void;
}

export function ContactSellerModal({
  yacht,
  opened,
  onClose,
}: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simular envío
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    onClose();
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
            />
          </div>
          <h3 className="font-semibold text-lg mb-2">{yacht.model}</h3>
          <div className="space-y-2 text-sm">
            <p className="flex justify-between">
              <span className="text-gray-600">Precio:</span>
              <span className="font-medium">
                {yacht.price.toLocaleString()}€
              </span>
            </p>
            <p className="flex justify-between">
              <span className="text-gray-600">Eslora:</span>
              <span className="font-medium">{yacht.length}m</span>
            </p>
            <p className="flex justify-between">
              <span className="text-gray-600">Ubicación:</span>
              <span className="text-right font-medium">{yacht.location}</span>
            </p>
            {yacht.year && (
              <p className="flex justify-between">
                <span className="text-gray-600">Año:</span>
                <span className="font-medium">{yacht.year}</span>
              </p>
            )}
          </div>
        </div>

        {/* Formulario */}
        <div className="flex-1">
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">
              ¿Interesado en este yate?
            </h3>
            <p className="text-gray-600 text-sm">
              Complete el formulario y nuestro equipo de ventas se pondrá en
              contacto con usted a la mayor brevedad para proporcionarle toda la
              información que necesite sobre el {yacht.model}.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nombre completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Introduzca su nombre"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="flex gap-4">
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="ejemplo@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="+34 600 000 000"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Mensaje *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Me gustaría recibir más información sobre este yate, especialmente sobre..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
              <p className="mt-1 text-xs text-gray-500">
                Indique cualquier pregunta específica o información adicional
                que necesite.
              </p>
            </div>

            <div className="text-xs text-gray-500 mt-4">
              Al enviar este formulario, acepta que procesemos sus datos
              personales de acuerdo con nuestra política de privacidad.
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-700 bg-gray-300 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-primary hover:bg-transparent hover:text-black hover:border-primary hover:border border-primary border text-black font-normal text-sm sm:text-base py-2 px-4 rounded transition-colors duration-200"
                >
                {isSubmitting ? "Enviando..." : "Enviar solicitud"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}

import type React from "react";

import { Button, Modal, Text } from "@mantine/core";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

interface QuoteModalProps {
  opened: boolean;
  onClose: () => void;
}

export default function QuoteModal({ opened, onClose }: QuoteModalProps) {
  const t = useTranslations("quoteModal");
  const [successModalOpened, setSuccessModalOpened] = useState(false);
  const [formData, setFormData] = useState({
    vesselName: "",
    imoNumber: "",
    flag: "",
    portOfDelivery: "",
    deliveryDate: "",
    productRequired: "",
    deliveryMethod: "",
    consigneeName: "",
    contactEmail: "",
    contactPhone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Aquí iría la lógica para enviar el correo con la información
    console.log("Enviando datos:", formData);

    // Mostrar modal de éxito
    setSuccessModalOpened(true);
    onClose();
  };

  const closeSuccessModal = () => {
    setSuccessModalOpened(false);
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={onClose}
        size="xl"
        withCloseButton={false}
      >
        <div className="px-4 py-2 relative">
          <h2 className="text-xl font-bold mb-2">{t("title")}</h2>
          <p className="text-gray-600 mb-4">{t("description")}</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="vesselName"
                  className="block text-sm font-medium"
                >
                  {t("fields.vesselName.label")}
                </label>
                <input
                  id="vesselName"
                  name="vesselName"
                  value={formData.vesselName}
                  onChange={handleChange}
                  placeholder={t("fields.vesselName.placeholder")}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="imoNumber"
                  className="block text-sm font-medium"
                >
                  {t("fields.imoNumber.label")}
                </label>
                <input
                  id="imoNumber"
                  name="imoNumber"
                  value={formData.imoNumber}
                  onChange={handleChange}
                  placeholder={t("fields.imoNumber.placeholder")}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="flag" className="block text-sm font-medium">
                  {t("fields.flag.label")}
                </label>
                <input
                  id="flag"
                  name="flag"
                  value={formData.flag}
                  onChange={handleChange}
                  placeholder={t("fields.flag.placeholder")}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="portOfDelivery"
                  className="block text-sm font-medium"
                >
                  {t("fields.portOfDelivery.label")}
                </label>
                <input
                  id="portOfDelivery"
                  name="portOfDelivery"
                  value={formData.portOfDelivery}
                  onChange={handleChange}
                  placeholder={t("fields.portOfDelivery.placeholder")}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="deliveryDate"
                  className="block text-sm font-medium"
                >
                  {t("fields.deliveryDate.label")}
                </label>
                <input
                  id="deliveryDate"
                  name="deliveryDate"
                  type="date"
                  value={formData.deliveryDate}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="productRequired"
                  className="block text-sm font-medium"
                >
                  {t("fields.productRequired.label")}
                </label>
                <input
                  id="productRequired"
                  name="productRequired"
                  value={formData.productRequired}
                  onChange={handleChange}
                  placeholder={t("fields.productRequired.placeholder")}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="deliveryMethod"
                  className="block text-sm font-medium"
                >
                  {t("fields.deliveryMethod.label")}
                </label>
                <input
                  id="deliveryMethod"
                  name="deliveryMethod"
                  value={formData.deliveryMethod}
                  onChange={handleChange}
                  placeholder={t("fields.deliveryMethod.placeholder")}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label
                  htmlFor="consigneeName"
                  className="block text-sm font-medium"
                >
                  {t("fields.consigneeName.label")}
                </label>
                <input
                  id="consigneeName"
                  name="consigneeName"
                  value={formData.consigneeName}
                  onChange={handleChange}
                  placeholder={t("fields.consigneeName.placeholder")}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contactEmail"
                  className="block text-sm font-medium"
                >
                  {t("fields.contactEmail.label")}
                </label>
                <input
                  id="contactEmail"
                  name="contactEmail"
                  type="email"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  placeholder={t("fields.contactEmail.placeholder")}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contactPhone"
                  className="block text-sm font-medium"
                >
                  {t("fields.contactPhone.label")}
                </label>
                <input
                  id="contactPhone"
                  name="contactPhone"
                  type="tel"
                  value={formData.contactPhone}
                  onChange={handleChange}
                  placeholder={t("fields.contactPhone.placeholder")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <Button
                unstyled
                type="submit"
                className="mt-4 w-full sm:w-auto bg-primary hover:bg-transparent hover:border-primary hover:border border-primary border text-black py-2 px-3 sm:px-4 rounded text-sm sm:text-base transition duration-300"
              >
                {t("submitButton")}
              </Button>
            </div>
          </form>
        </div>
      </Modal>

      <Modal
        opened={successModalOpened}
        onClose={closeSuccessModal}
        size="md"
        centered
        withCloseButton={false}
      >
        <div className="text-center p-4">
          <Check className="text-green-500 mx-auto mb-4 w-10 h-10" />
          <Text size="lg" className="mb-2 font-medium">
            {t("success.title")}
          </Text>
          <Text size="sm" color="dimmed" className="mb-4">
            {t("success.message")}
          </Text>
          <Button
            onClick={closeSuccessModal}
            fullWidth
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white"
          >
            {t("success.closeButton")}
          </Button>
        </div>
      </Modal>
    </>
  );
}

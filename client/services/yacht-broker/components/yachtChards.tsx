import { YachtDetails } from "@/utils/yachts";
import { Accordion } from "@mantine/core";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { ContactSellerModal } from "./contact-seller-modal";

export function YachtCards({ yachts }: { yachts: YachtDetails[] }) {
  const t = useTranslations("yachtBroker.yachtDetails");
  const [selectedYacht, setSelectedYacht] = useState<YachtDetails | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  //   const [favorites, setFavorites] = useState<string[]>([]);
  //   const toggleFavorite = (id: string) => {
  //     setFavorites((prev) =>
  //       prev.includes(id) ? prev.filter((fId) => fId !== id) : [...prev, id]
  //     );
  //   };

  const handleContactClick = (yacht: YachtDetails) => {
    setSelectedYacht(yacht);
    setIsContactModalOpen(true);
  };

  return (
    <>
      {yachts.map((yacht) => (
        <motion.div
          key={yacht.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="group overflow-hidden border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 bg-white p-6">
            <div className="relative">
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                  src={yacht.imageUrl || "/placeholder.svg"}
                  alt={yacht.model}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                  sizes="(min-width: 1024px) 100vw"
                />
                {/* <button
                  onClick={() => toggleFavorite(yacht.id)}
                  className={`absolute top-4 right-4 z-10 rounded-full p-2 transition-colors ${
                    favorites.includes(yacht.id)
                      ? "bg-primary text-white"
                      : "bg-white/80 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Heart
                    className={`w-5 h-5 ${
                      favorites.includes(yacht.id) ? "fill-current" : ""
                    }`}
                  />
                </button> */}
                <span
                  className={`absolute top-4 left-4 px-2 py-1 text-xs font-semibold rounded-full ${
                    yacht.type === "new"
                      ? "bg-green-100 text-green-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {yacht.type === "new" ? "New" : "Used"}
                </span>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-montserrat font-medium">
                    {yacht.model}
                  </h3>
                  <p className="text-gray-600 text-sm">{yacht.location}</p>
                </div>
                <p className="text-xl font-semibold text-primary">
                  {yacht.price.toLocaleString()} €
                  {yacht.model === "SPIRIT 1500" && (
                    <span className="text-xs block text-gray-500">
                      + VAT + Transport
                    </span>
                  )}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 py-3 border-y">
                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    {t("fields.length")}
                  </p>
                  <p className="font-medium">{yacht.length} m</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    {t("fields.designer")}
                  </p>
                  <p className="font-medium">{yacht.designer || "-"}</p>
                </div>
              </div>

              <Accordion variant="separated">
                <Accordion.Item value={`details-${yacht.id}`}>
                  <Accordion.Control icon={<ChevronDown className="w-4 h-4" />}>
                    <span className="text-sm">
                      {t("viewDetails")}
                    </span>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <div className="space-y-2 text-sm">
                      {yacht.name && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            {t("fields.boatName")}:
                          </span>
                          <span>{yacht.name}</span>
                        </div>
                      )}
                      {/* Other yacht details remain the same, with text-xs sm:text-sm classes */}
                      {yacht.year && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            {t("fields.year")}:
                          </span>
                          <span>{yacht.year}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          {t("fields.length")}:
                        </span>
                        <span>
                          {yacht.length}{" "}
                          {t("units.meters")}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          {t("fields.location")}:
                        </span>
                        <span className="text-right">{yacht.location}</span>
                      </div>
                      {yacht.displacement && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            {t("fields.displacement")}:
                          </span>
                          <span>
                            {yacht.displacement}{" "}
                            {t("units.kg")}
                          </span>
                        </div>
                      )}
                      {yacht.hull && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            {t("fields.hull")}:
                          </span>
                          <span>{yacht.hull}</span>
                        </div>
                      )}
                      {yacht.keel && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            {t("fields.keel")}:
                          </span>
                          <span>{yacht.keel}</span>
                        </div>
                      )}
                      {yacht.designer && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            {t("fields.designer")}:
                          </span>
                          <span>{yacht.designer}</span>
                        </div>
                      )}
                      {yacht.category && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            {t("fields.category")}:
                          </span>
                          <span className="text-right">{yacht.category}</span>
                        </div>
                      )}
                    </div>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>

              <div className="flex pt-3">
                <button
                  onClick={() => handleContactClick(yacht)}
                  className="w-full bg-primary hover:bg-transparent hover:text-black hover:border-primary hover:border border-primary border text-black font-normal text-sm sm:text-base py-2 px-4 rounded transition-colors duration-200"
                >
                  Contact Seller
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      <ContactSellerModal
        yacht={selectedYacht}
        opened={isContactModalOpen}
        onClose={() => {
          setIsContactModalOpen(false);
          setSelectedYacht(null);
        }}
      />
    </>
  );
}

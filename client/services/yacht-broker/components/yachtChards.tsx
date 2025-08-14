import type { YachtDetails } from "@/utils/yachts";
import { Accordion } from "@mantine/core";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { ContactSellerModal } from "./contact-seller-modal";
import YachtModalGallery from "./yacht-modal-gallery";

interface YachtCardsProps {
  yachts: YachtDetails[];
}

export function YachtCards({ yachts }: YachtCardsProps) {
  const t = useTranslations("yachtBroker.yachtDetails");
  const [selectedYacht, setSelectedYacht] = useState<YachtDetails | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Gallery modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [galleryYacht, setGalleryYacht] = useState<YachtDetails | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get images for a yacht - use images array if available, otherwise just the main imageUrl
  const getYachtImages = (yacht: YachtDetails): string[] => {
    if (yacht.images && yacht.images.length > 0) {
      return yacht.images;
    }
    return [yacht.imageUrl];
  };

  const handleImageClick = (yacht: YachtDetails) => {
    const images = getYachtImages(yacht);
    // Only open gallery if there are images to show
    if (images.length > 0) {
      setGalleryYacht(yacht);
      setCurrentImageIndex(0);
      setModalOpen(true);
    }
  };

  const handleContactClick = (yacht: YachtDetails) => {
    setSelectedYacht(yacht);
    setIsContactModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {yachts.map((yacht) => {
        const images = getYachtImages(yacht);
        const hasMultipleImages = images.length > 1;

        return (
          <div
            key={yacht.id}
            className="group overflow-hidden border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 bg-white p-6"
          >
            <div className="relative">
              <div
                className={`relative h-64 overflow-hidden rounded-lg ${
                  hasMultipleImages ? "cursor-pointer" : ""
                }`}
                onClick={() => handleImageClick(yacht)}
              >
                <Image
                  src={yacht.imageUrl || "/placeholder.svg"}
                  alt={yacht.model}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                  quality={80}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={yachts.indexOf(yacht) < 3} // Priorizar las primeras 3 imágenes
                />

                {/* Only show gallery overlay if there are multiple images */}
                {hasMultipleImages && (
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                      View Gallery ({images.length} photos)
                    </div>
                  </div>
                )}

                {/* Image count indicator for multiple images */}
                {hasMultipleImages && (
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                    1/{images.length}
                  </div>
                )}

                <span
                  className={`absolute top-4 left-4 px-2 py-1 text-xs font-semibold rounded-full ${
                    yacht.type === "new"
                      ? "bg-green-100 text-green-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {yacht.type === "new" ? "New" : ""}
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
                <p className="text-xl font-semibold text-primary min-w-[90px]">
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
                  <p className="text-sm text-gray-500">{t("fields.length")}</p>
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
                    <span className="text-sm">{t("viewDetails")}</span>
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
                          {yacht.length} {t("units.meters")}
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
                            {yacht.displacement} {t("units.kg")}
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
                  {t("contactButton")}
                </button>
              </div>
            </div>
          </div>
        );
      })}

      {/* Contact Seller Modal */}
      <ContactSellerModal
        yacht={selectedYacht}
        opened={isContactModalOpen}
        onClose={() => {
          setIsContactModalOpen(false);
          setSelectedYacht(null);
        }}
      />

      {/* Gallery Modal */}
      {galleryYacht && (
        <YachtModalGallery
          isOpen={modalOpen}
          onClose={closeModal}
          images={getYachtImages(galleryYacht)}
          currentIndex={currentImageIndex}
        />
      )}
    </>
  );
}

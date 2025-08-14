import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface ModalGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
}

export default function YachtModalGallery({
  isOpen,
  onClose,
  images,
  currentIndex,
}: ModalGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(currentIndex);

  useEffect(() => {
    setActiveIndex(currentIndex);
  }, [currentIndex]);

  const navigateNext = useCallback(() => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const navigatePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        navigatePrev();
      } else if (e.key === "ArrowRight") {
        navigateNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, activeIndex, images.length, navigateNext, navigatePrev, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full max-w-4xl max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>

        {images.length > 1 && (
          <button
            className="absolute left-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            onClick={navigatePrev}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        <div className="relative w-full h-full flex items-center justify-center p-4">
          <div className="relative w-full h-full">
            <Image
              src={images[activeIndex] || "/placeholder.svg"}
              alt={`Yacht image ${activeIndex + 1} of ${images.length}`}
              fill
              className="object-contain"
              quality={85}
              priority={activeIndex < 3} // Priorizar las primeras 3 imágenes
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 70vw"
              placeholder={images[activeIndex]?.includes('data:image') ? 'blur' : 'empty'}
              blurDataURL={images[activeIndex]?.includes('data:image') ? images[activeIndex] : undefined}
            />
          </div>
        </div>

        {images.length > 1 && (
          <button
            className="absolute right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            onClick={navigateNext}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeIndex ? "bg-primary" : "bg-white/50"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

import { Text } from "@mantine/core";
import { useTranslations } from "next-intl";
import { useRef } from "react";

export default function AboutVideoSection() {
  const t = useTranslations("mainPage.aboutVideoSection");
  const ref = useRef(null);

  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-16 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#f8ce24c2] via-[#ffe47acc] to-[#ffeda7cc]" />

      {/* Content container */}
      <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-20">
          {/* Video Section */}
          <div className="w-full lg:w-3/5 relative">
            {/* Background blur effect - adjusted for mobile */}
            <div className="absolute inset-0 bg-white/50 backdrop-blur-sm shadow-xl -left-4 sm:-left-6 md:-left-8 lg:left-[calc(-50vw+50%)] rounded-r-xl sm:rounded-r-2xl md:rounded-r-3xl" />

            {/* Video container - responsive height */}
            <div className="relative p-3 sm:p-4 md:p-6 flex justify-end h-[200px] xs:h-[250px] sm:h-[300px] md:h-[350px] lg:h-[380px]">
              <div
                ref={ref}
                className="aspect-video rounded-lg sm:rounded-xl overflow-hidden shadow-lg bg-gray-900"
              >
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/HZGWb2684IM?si=qLrwDI4yFQ9VSDdo?autoplay=0"
                  title="Menorca Yacht Brokers"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              {/* Optional: Add a noscript fallback */}
              <noscript>
                <p className="text-center p-4 bg-gray-100 rounded">
                  Video: Menorca Yacht Brokers - Please enable JavaScript to
                  view this video or visit our YouTube channel.
                </p>
              </noscript>
            </div>
          </div>

          <div className="w-full lg:w-2/5 mt-4 sm:mt-6 lg:mt-0 px-2 sm:px-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-montserrat font-medium text-darkTitle mb-3 sm:mb-4 md:mb-6">
              {t("title")}
            </h2>

            <Text
              size="lg"
              className="text-base sm:text-lg md:text-xl text-darkDescription leading-relaxed"
            >
              {t("description")}
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
}

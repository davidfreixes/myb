import { NAVIGATION_LINKS } from "@/utils/navigation";
import { Button } from "@mantine/core";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const t = useTranslations("mainPage.hero");

  return (
    <div className="flex relative h-[100vh] max-h-[100vh] md:h-[500px] w-full">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/img/hero.jpg"
          alt="Luxury yacht background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="flex relative z-10 mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[100vh] xs:h-[500px] flex-col py-8 md:py-12">
          <div className="grid md:grid-cols-2 gap-4 md:gap-2 lg:gap-10 mt-12">
            {/* Left Column */}
            <div className="flex flex-col justify-center space-y-4 md:space-y-6 text-white order-1 pt-2 md:pt-0">
              <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-primary">
                Menorca Yacht Brokers
              </h1>
              <div className="space-y-2 md:space-y-4">
                <h2 className="text-2xl md:text-3xl font-montserrat text-white">
                  {t("subtitle.part1")}
                </h2>
                <h2 className="font-montserrat text-lg md:text-xl text-white">
                  {t.rich("subtitle.part2", {
                    p: (chunks) => (
                      <span className="text-primary">{chunks}</span>
                    ),
                  })}
                </h2>
              </div>
              <div className="sm:hidden mt-6 md:mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  unstyled
                  component={Link}
                  href="#services-section"
                  className="w-full text-center rounded sm:w-auto bg-primary hover:bg-primary/75 text-black font-normal text-md py-2 px-4"
                >
                  {t("buttons.explore_services")}
                </Button>
                <Button
                  component={Link}
                  href={`${NAVIGATION_LINKS.CONTACTO}`}
                  unstyled
                  className="w-full text-center rounded sm:w-auto border-primary border-2 z-10 text-white hover:bg-white/10 hover:border-primary hover:text-primary text-base py-2 px-4"
                >
                  {t("buttons.contact_us")}
                </Button>
              </div>
            </div>

            {/* Right Column */}
            <div className="hidden sm:flex flex-col justify-center bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 lg:p-8 text-white order-2">
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-3xl font-light text-white">{t("title")}</h2>
                <div className="space-y-3 md:space-y-4 text-gray-200">
                  <p className="text-md md:text-base">
                    {t("description.part1")}
                  </p>
                  <p className="text-md md:text-base">
                    {t("description.part2")}
                  </p>
                </div>
                <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
                  <Button
                    component={Link}
                    href="#services-section"
                    unstyled
                    className="w-full flex items-center text-center rounded sm:w-auto bg-primary hover:bg-primary/75 text-black font-normal text-sm md:text-md py-2 px-4"
                  >
                    {t("buttons.explore_services")}
                  </Button>
                  <Button
                    component={Link}
                    href={`${NAVIGATION_LINKS.CONTACTO}`}
                    unstyled
                    className="w-full text-center rounded sm:w-auto border-primary border-2 z-10 text-white hover:bg-white/10 hover:border-primary hover:text-primary text-sm md:text-base py-2 px-4"
                  >
                    {t("buttons.contact_us")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

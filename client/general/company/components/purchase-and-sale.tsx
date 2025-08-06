import { NAVIGATION_LINKS } from "@/utils/navigation";
import { Button, Text } from "@mantine/core";
import {
  BookOpen,
  CheckCircle,
  ClipboardCheck,
  Clock,
  FileText,
  Globe,
  Mail,
  MessageSquareMore,
  Scale,
  Shield,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ContactModal from "../../contact/modal/contactModal";

export default function PurchaseAndSale() {
  const [contactModalOpened, setContactModalOpened] = useState(false);
  const t = useTranslations("purchaseAndSale");
  const locale = useLocale();

  const benefits = [
    {
      title: t("benefits.items.0.title"),
      description: t("benefits.items.0.description"),
      icon: (
        <MessageSquareMore className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
      ),
    },
    {
      title: t("benefits.items.1.title"),
      description: t("benefits.items.1.description"),
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
    {
      title: t("benefits.items.2.title"),
      description: t("benefits.items.2.description"),
      icon: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
    {
      title: t("benefits.items.3.title"),
      description: t("benefits.items.3.description"),
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
  ];

  const components = [
    {
      title: t("components.items.0.title"),
      description: t("components.items.0.description"),
      icon: <ClipboardCheck className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
    {
      title: t("components.items.1.title"),
      description: t("components.items.1.description"),
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
    {
      title: t("components.items.2.title"),
      description: t("components.items.2.description"),
      icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
    {
      title: t("components.items.3.title"),
      description: t("components.items.3.description"),
      icon: <Scale className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
    {
      title: t("components.items.4.title"),
      description: t("components.items.4.description"),
      icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative py-8 sm:py-12 md:py-16 lg:py-16">
        <div className="absolute inset-0">
          <Image
            src="/img/purchase-and-sale.jpg"
            alt="Corporate building"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center h-full mt-8 sm:mt-8 md:mt-10">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-medium text-primary mb-4 sm:mb-6">
              {t("hero.title")}
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8">
              {t("hero.subtitle")}
            </h2>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-4xl mx-auto mb-8 px-4 sm:px-6 py-6 sm:py-10">
        <div className="bg-primary/10 p-4 sm:p-8 rounded-xl border-2 border-primary/20">
          <h2 className="text-xl sm:text-2xl font-montserrat text-primary mb-4">
            {t("introduction.title")}
          </h2>
          <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
            {t("introduction.paragraph1")}
          </p>
          <p className="text-gray-700 text-sm sm:text-base">
            {t("introduction.paragraph2")}
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-primary/10 py-6 sm:py-10 md:py-14">
        <div className="mb-8 sm:mb-16 max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-primary mb-6 sm:mb-8 text-center">
            {t("benefits.title")}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-lg">
                    {benefit.icon}
                  </div>
                  <h3 className="font-montserrat font-medium text-lg sm:text-xl">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Components Section */}
      <div className="mb-8 sm:mb-16 max-w-[1400px] mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-primary mb-6 sm:mb-8 text-center">
          {t("components.title")}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {components.map((component) => (
            <div
              key={component.title}
              className="bg-primary/10 p-4 sm:p-6 rounded-xl border-2 border-primary/20 hover:bg-primary/15 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-white rounded-lg">
                  {component.icon}
                </div>
                <h3 className="font-montserrat font-medium text-lg sm:text-xl">
                  {component.title}
                </h3>
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                {component.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="relative py-12 sm:py-16 md:py-20">
        <Image
          src="/img/conditions-and-rates.jpg"
          alt="Corporate building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center h-full">
          <div className="max-w-4xl mx-auto mb-8 sm:mb-16">
            <div className="bg-white p-4 sm:p-8 rounded-xl shadow-lg border border-gray-100">
              <h2 className="text-xl sm:text-2xl font-montserrat text-primary mb-4 sm:mb-6">
                {t("whyChooseUs.title")}
              </h2>
              <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
                {t("whyChooseUs.paragraph1")}
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                {t("whyChooseUs.paragraph2")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-8 sm:py-12 md:py-16 inset-0 bg-gradient-to-l from-[#fff6d399] via-[#ffe47acc] to-[#f8ce24c2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10 rounded-lg text-center ">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-montserrat text-darkTitle mb-2 sm:mb-3 md:mb-4">
            {t("cta.title")}
          </h2>
          <div className=" mb-3 sm:mb-4 md:mb-6 max-w-2xl mx-auto">
            <Text className="text-sm sm:text-base md:text-lg text-gray-700 ">
              {t("cta.description")}
            </Text>
          </div>

          <div className="flex justify-center">
            <Button
              component={Link}
              href={`${NAVIGATION_LINKS.CONTACTO(locale)}`}
              unstyled
              className="bg-primary hover:bg-primary/60 text-darkTitle font-normal text-sm sm:text-base md:text-lg py-2 px-4 rounded-lg transition-colors"
            >
              <div className="flex gap-2 items-center">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                {t("cta.button")}
              </div>
            </Button>
          </div>
        </div>
      </div>
      <ContactModal
        opened={contactModalOpened}
        onClose={() => setContactModalOpened(false)}
      />
    </div>
  );
}

import ContactModal from "@/client/general/contact/modal/contactModal";
import { NAVIGATION_LINKS } from "@/utils/navigation";
import { Button, Text } from "@mantine/core";
import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function CTASection() {
  const [contactModalOpened, setContactModalOpened] = useState(false);
  const t = useTranslations("mainPage.ctaSection");

  return (
    <div className="inset-0 bg-gradient-to-l from-[#fff6d399] via-[#ffe47acc] to-[#f8ce24c2] p-4 sm:p-6 md:p-8 rounded-lg text-center py-6 sm:py-8 md:py-12">
      <h2 className="text-lg sm:text-2xl md:text-3xl font-montserrat text-darkTitle mb-2 sm:mb-3 md:mb-4">
        {t("title")}
      </h2>
      <div className=" mb-3 sm:mb-4 md:mb-6 max-w-2xl mx-auto">
        <Text className="text-sm sm:text-base md:text-lg text-gray-700 ">
          {t("description")}
        </Text>
      </div>
      <a
        href={NAVIGATION_LINKS.CONTACTO}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          unstyled
          className="bg-primary hover:bg-primary/75 text-black font-normal text-sm md:text-lg py-2 sm:py-3 px-4 rounded transition-colors duration-200"
        >
          <div className="flex gap-2 items-center">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            {t("button")}
          </div>
        </Button>
      </a>
      <ContactModal
        opened={contactModalOpened}
        onClose={() => setContactModalOpened(false)}
      />
    </div>
  );
}

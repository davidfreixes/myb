import ContactModal from "@/client/general/contact/modal/contactModal";
import { Button, Text } from "@mantine/core";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function CTASection() {
  const [contactModalOpened, setContactModalOpened] = useState(false);
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="inset-0 bg-gradient-to-l from-[#fff6d399] via-[#ffe47acc] to-[#f8ce24c2] p-4 sm:p-6 md:p-8 rounded-lg text-center py-6 sm:py-8 md:py-12"
    >
      <h2 className="text-lg sm:text-2xl md:text-3xl font-montserrat text-darkTitle mb-2 sm:mb-3 md:mb-4">
        {t("mainPage.ctaSection.title")}
      </h2>
      <div className=" mb-3 sm:mb-4 md:mb-6 max-w-2xl mx-auto">
        <Text className="text-sm sm:text-base md:text-lg text-gray-700 ">
          {t("mainPage.ctaSection.description")}
        </Text>
      </div>
      <Button
        unstyled
        onClick={() => setContactModalOpened(true)}
        className="bg-primary hover:bg-primary/75 text-black font-normal text-sm md:text-lg py-2 sm:py-3 px-4 rounded transition-colors duration-200"
      >
        <div className="flex gap-2 items-center">
          <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
          {t("mainPage.ctaSection.button")}
        </div>
      </Button>

      <ContactModal
        opened={contactModalOpened}
        onClose={() => setContactModalOpened(false)}
      />
    </motion.div>
  );
}

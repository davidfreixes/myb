import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function PrivacyPolicy() {
  const t = useTranslations("privacyPolicy");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[25vh] sm:h-[30vh] md:h-[35vh] w-full">
        <Image
          src="/img/legal-notice.jpg"
          alt="Privacy policy hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-primary mb-2 sm:mb-4 text-center">
              {t("hero.title")}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12 max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-sm sm:prose-base lg:prose-lg max-w-none"
        >
          <div className="space-y-12">
            {/* Section 1 */}
            <section>
              <h2 className="font-montserrat text-2xl text-primary mb-4">
                {t("sections.generalInfo.title")}
              </h2>
              <p>{t("sections.generalInfo.content")}</p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-montserrat text-2xl text-primary mb-4">
                {t("sections.personalData.title")}
              </h2>
              <p>{t("sections.personalData.intro")}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t("sections.personalData.items.0")}</li>
                <li>{t("sections.personalData.items.1")}</li>
                <li>{t("sections.personalData.items.2")}</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-montserrat text-2xl text-primary mb-4">
                {t("sections.purposes.title")}
              </h2>
              <p>{t("sections.purposes.intro")}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t("sections.purposes.items.0")}</li>
                <li>{t("sections.purposes.items.1")}</li>
                <li>{t("sections.purposes.items.2")}</li>
                <li>{t("sections.purposes.items.3")}</li>
                <li>{t("sections.purposes.items.4")}</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-montserrat text-2xl text-primary mb-4">
                {t("sections.legalBasis.title")}
              </h2>
              <p>{t("sections.legalBasis.intro")}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t("sections.legalBasis.items.0")}</li>
                <li>{t("sections.legalBasis.items.1")}</li>
                <li>{t("sections.legalBasis.items.2")}</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-montserrat text-2xl text-primary mb-4">
                {t("sections.dataRecipients.title")}
              </h2>
              <p>{t("sections.dataRecipients.content")}</p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-montserrat text-2xl text-primary mb-4">
                {t("sections.internationalTransfers.title")}
              </h2>
              <p>{t("sections.internationalTransfers.content")}</p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="font-montserrat text-2xl text-primary mb-4">
                {t("sections.userRights.title")}
              </h2>
              <p>{t("sections.userRights.intro")}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t("sections.userRights.items.0")}</li>
                <li>{t("sections.userRights.items.1")}</li>
                <li>{t("sections.userRights.items.2")}</li>
                <li>{t("sections.userRights.items.3")}</li>
                <li>{t("sections.userRights.items.4")}</li>
                <li>{t("sections.userRights.items.5")}</li>
              </ul>
              <p className="mt-4">{t("sections.userRights.contact")}</p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="font-montserrat text-2xl text-primary mb-4">
                {t("sections.dataRetention.title")}
              </h2>
              <p>{t("sections.dataRetention.content")}</p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="font-montserrat text-2xl text-primary mb-4">
                {t("sections.dataSecurity.title")}
              </h2>
              <p>{t("sections.dataSecurity.content")}</p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="font-montserrat text-2xl text-primary mb-4">
                {t("sections.policyChanges.title")}
              </h2>
              <p>{t("sections.policyChanges.content")}</p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="font-montserrat text-2xl text-primary mb-4">
                {t("sections.contact.title")}
              </h2>
              <p>{t("sections.contact.content")}</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

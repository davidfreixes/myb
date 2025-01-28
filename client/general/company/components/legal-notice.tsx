import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function LegalNotice() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[30vh] sm:h-[35vh] md:h-[40vh] w-full">
        <Image
          src="/img/legal-notice.jpg"
          alt="Yacht broker service"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-primary mb-2 sm:mb-4 text-center">
              {t("legalNotice.hero.title")}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12 max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-sm sm:prose-base lg:prose-lg max-w-none"
        >
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {/* Section 1 */}
            <section>
              <h2 className="font-montserrat text-xl sm:text-2xl text-primary mb-3 sm:mb-4">
                {t("legalNotice.sections.identification.title")}
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base">
                  {t("legalNotice.sections.identification.content.0")}
                </p>
                <p className="text-sm sm:text-base">
                  {t("legalNotice.sections.identification.content.1")}
                </p>
                <p className="text-sm sm:text-base">
                  {t("legalNotice.sections.identification.content.2")}
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-montserrat text-xl sm:text-2xl text-primary mb-3 sm:mb-4">
                {t("legalNotice.sections.intellectualProperty.title")}
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base">
                  {t("legalNotice.sections.intellectualProperty.content.0")}
                </p>
                <p className="text-sm sm:text-base">
                  {t("legalNotice.sections.intellectualProperty.content.1")}
                </p>
                <p className="font-semibold text-sm sm:text-base">
                  {t("legalNotice.sections.intellectualProperty.content.2")}
                </p>
                <p className="text-sm sm:text-base">
                  {t("legalNotice.sections.intellectualProperty.content.3")}
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-montserrat text-xl sm:text-2xl text-primary mb-3 sm:mb-4">
                {t("legalNotice.sections.usage.title")}
              </h2>
              <p className="text-sm sm:text-base">
                {t("legalNotice.sections.usage.content")}
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-montserrat text-xl sm:text-2xl text-primary mb-3 sm:mb-4">
                {t("legalNotice.sections.liability.title")}
              </h2>
              <p className="text-sm sm:text-base">
                {t("legalNotice.sections.liability.content")}
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-montserrat text-xl sm:text-2xl text-primary mb-3 sm:mb-4">
                {t("legalNotice.sections.privacy.title")}
              </h2>
              <p className="text-sm sm:text-base">
                {t("legalNotice.sections.privacy.content")}
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-montserrat text-xl sm:text-2xl text-primary mb-3 sm:mb-4">
                {t("legalNotice.sections.links.title")}
              </h2>
              <p className="text-sm sm:text-base">
                {t("legalNotice.sections.links.content")}
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="font-montserrat text-xl sm:text-2xl text-primary mb-3 sm:mb-4">
                {t("legalNotice.sections.jurisdiction.title")}
              </h2>
              <p className="text-sm sm:text-base">
                {t("legalNotice.sections.jurisdiction.content")}
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

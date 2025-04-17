import { Button } from "@mantine/core";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ContactModal from "../../contact/modal/contactModal";

export default function PortDaily() {
  const [contactModalOpened, setContactModalOpened] = useState(false);
  const t = useTranslations("portDaily");

  const newsArticles = [
    {
      title: t("news.articles.0.title"),
      image: "/img/diary.jpg",
      url: "https://www.portsdebalears.com/es/noticias/la-apb-saca-para-20-anos-la-gestion-de-los-puestos-de-amarre-del-muelle-de-poniente-en-el",
    },
    {
      title: t("news.articles.1.title"),
      image: "/img/diary.jpg",
      url: "https://www.menorca.info/menorca/local/2024/12/25/2295825/amarres-del-moll-ponent-salen-concesion-por-millones-euros-para-anos.html",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-12 sm:py-16 md:py-20 lg:py-24">
        <Image
          src="/img/port-of-mahon.jpg"
          alt="Corporate building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center h-full mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="space-y-3 sm:space-y-4">
              <h1 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight text-primary">
                {t("hero.title")}
              </h1>
              <h2 className="font-montserrat text-sm sm:text-base md:text-lg lg:text-xl text-white px-2">
                {t("hero.subtitle")}
              </h2>
            </div>
          </motion.div>
        </div>
      </div>

      {/* News Grid */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <div className="grid md:grid-cols-4 gap-8 md:gap-12">
            {newsArticles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <Link
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 h-full"
                >
                  <div className="relative aspect-[3/2] w-full mb-6">
                    <Image
                      src={article.image}
                      alt="Periódico del Puerto de Mahón"
                      fill
                      className="object-cover rounded-lg"
                      sizes="500px"
                    />
                  </div>
                  <div className="space-y-4">
                    <h2 className="font-montserrat text-xl md:text-xl text-gray-800 group-hover:text-primary transition-colors line-clamp-4">
                      {article.title}
                    </h2>
                    <div className="flex items-center text-primary">
                      <span className="text-sm">{t("news.readMore")}</span>
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Submit News Section */}
      <div className="py-16 md:py-24 bg-white inset-0 bg-gradient-to-l from-[#fff6d399] via-[#ffe47acc] to-[#f8ce24c2] sm:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center "
          >
            <h2 className="font-montserrat text-2xl md:text-3xl text-darkTitle mb-6">
              {t("submitNews.title")}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t("submitNews.description")}
            </p>
            <div className="flex justify-center gap-4">
              <Button
                component={Link}
                href="mailto:contact@menorcabrokers.com"
                unstyled
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-darkTitle shadow-lg hover:bg-primary/50 transition-colors"
              >
                {t("submitNews.submitButton")}
              </Button>
              <Button
                onClick={() => setContactModalOpened(true)}
                unstyled
                className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium text-darkTitle border-2 border-primary hover:bg-primary/50 transition-colors"
              >
                {t("submitNews.contactButton")}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      <ContactModal
        opened={contactModalOpened}
        onClose={() => setContactModalOpened(false)}
      />
    </div>
  );
}

import { Container, Text } from "@mantine/core";
import { useTranslations } from "next-intl";

export default function FAQSection() {
  const t = useTranslations("mainPage.faq");

  const questions = [
    {
      question: t("bestTimeToBuy.question"),
      answer: t("bestTimeToBuy.answer"),
    },
    {
      question: t("servicesOffered.question"),
      answer: t("servicesOffered.answer"),
    },
    {
      question: t("purchaseProcess.question"),
      answer: t("purchaseProcess.answer"),
    },
    {
      question: t("maintenanceCosts.question"),
      answer: t("maintenanceCosts.answer"),
    },
    {
      question: t("financingOptions.question"),
      answer: t("financingOptions.answer"),
    },
    {
      question: t("requiredDocuments.question"),
      answer: t("requiredDocuments.answer"),
    },
    {
      question: t("prePurchaseInspection.question"),
      answer: t("prePurchaseInspection.answer"),
    },
    {
      question: t("charterService.question"),
      answer: t("charterService.answer"),
    },
  ];

  // Schema.org para SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.replace(/<[^>]+>/g, ""),
      },
    })),
  };

  return (
    <section className="py-16 bg-white">
      <Container size="lg">
        <div className="text-center mb-12">
          <h1 className="text-primary text-3xl md:text-4xl font-bold mb-4">
            {t("title")}
          </h1>
          <Text className="text-gray-600 text-lg">{t("description")}</Text>
        </div>

        <div className="max-w-5xl mx-auto space-y-0" role="list">
          {questions.map((faq, index) => (
            <details
              key={index}
              className="group border-b border-gray-200"
              open={index === 0}
            >
              <summary
                className="flex justify-between items-center w-full py-5 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-expanded="false"
                role="button"
              >
                <div className="flex items-center">
                  <span className="text-lg text-primary font-medium mr-3 w-8">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  <span className="text-lg font-semibold text-darkBlue">
                    {faq.question}
                  </span>
                </div>
                <svg
                  className="w-5 h-5 text-darkBlue transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div
                className="pl-11 pr-4 pb-5 text-darkBlue leading-relaxed"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </details>
          ))}
        </div>
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}

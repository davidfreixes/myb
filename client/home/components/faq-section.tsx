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

  return (
    <section className="py-16">
      <Container size="lg">
        <div className="text-center mb-12">
          <h1 className="text-primary text-3xl md:text-4xl font-bold mb-4">
            {t("title")}
          </h1>
          <Text className="text-gray-600 text-lg">{t("description")}</Text>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Versión estática visible para SEO y usuarios sin JavaScript */}
          <div className="max-w-5xl mx-auto">
            {questions.map((item, index) => (
              <div
                key={`faq-static-${index}`}
                className="mb-6 p-4 border border-gray-200 rounded-lg"
              >
                <h3 className="font-semibold mb-2 flex items-center">
                  <span className="text-[#FFB800] font-mono text-lg mr-2">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  {item.question}
                </h3>
                <p className="text-gray-600 pl-8">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

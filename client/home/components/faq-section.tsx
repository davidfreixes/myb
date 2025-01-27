import { Accordion, Container, Text } from "@mantine/core";
import { useTranslation } from "react-i18next";

export default function FAQSection() {
  const { t } = useTranslation();

  const questions = [
    {
      question: t("mainPage.faq.bestTimeToBuy.question"),
      answer: t("mainPage.faq.bestTimeToBuy.answer"),
    },
    {
      question: t("mainPage.faq.servicesOffered.question"),
      answer: t("mainPage.faq.servicesOffered.answer"),
    },
    {
      question: t("mainPage.faq.purchaseProcess.question"),
      answer: t("mainPage.faq.purchaseProcess.answer"),
    },
    {
      question: t("mainPage.faq.maintenanceCosts.question"),
      answer: t("mainPage.faq.maintenanceCosts.answer"),
    },
    {
      question: t("mainPage.faq.financingOptions.question"),
      answer: t("mainPage.faq.financingOptions.answer"),
    },
    {
      question: t("mainPage.faq.requiredDocuments.question"),
      answer: t("mainPage.faq.requiredDocuments.answer"),
    },
    {
      question: t("mainPage.faq.prePurchaseInspection.question"),
      answer: t("mainPage.faq.prePurchaseInspection.answer"),
    },
    {
      question: t("mainPage.faq.charterService.question"),
      answer: t("mainPage.faq.charterService.answer"),
    },
  ];

  return (
    <section className="py-16">
      <Container size="lg">
        <div className="text-center mb-12">
          <h1 className="text-primary text-3xl md:text-4xl font-bold mb-4">
            {t("mainPage.faq.title")}
          </h1>
          <Text className="text-gray-600 text-lg">
            {t("mainPage.faq.description")}
          </Text>
        </div>

        <Accordion
          className="max-w-5xl mx-auto"
          styles={{
            item: {
              borderRadius: "8px",
              marginBottom: "12px",
              border: "1px solid #e5e7eb",
              backgroundColor: "white",
              borderBottom: "1px solid #FFB800",
            },
            control: {
              padding: "10px",
            },
            content: {
              padding: "0 20px 20px",
            },
          }}
        >
          {questions.map((item, index) => (
            <Accordion.Item key={`faq-${index}`} value={`question-${index}`}>
              <Accordion.Control>
                <div className="flex items-center gap-2">
                  <span className="text-[#FFB800] font-mono text-lg">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  <h2 className="font-semibold">{item.question}</h2>
                </div>
              </Accordion.Control>
              <Accordion.Panel>
                <Text className="text-gray-600">{item.answer}</Text>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}

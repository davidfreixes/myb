import { Accordion, Container, Text } from "@mantine/core";
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
          <Text className="text-gray-600 text-lg">
            {t("description")}
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

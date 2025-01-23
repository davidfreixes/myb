import { Container, Text, Accordion } from "@mantine/core";

export default function FAQSection() {
  const questions = [
    {
      question: "¿Cuál es el mejor momento para comprar un yate en Menorca?",
      answer:
        "La temporada baja (octubre a marzo) suele ser el mejor momento para comprar, ya que los precios pueden ser más competitivos. Sin embargo, en Menorca Yacht Brokers te ayudamos a encontrar las mejores oportunidades durante todo el año, adaptándonos a tus necesidades y presupuesto.",
    },
    {
      question: "¿Qué servicios ofrece Menorca Yacht Brokers?",
      answer:
        "Ofrecemos una gama completa de servicios que incluyen: compraventa de yates, servicios de charter, inspecciones y tasaciones, gestión de carga y logística, y asesoría náutica integral. Nuestro enfoque personalizado garantiza que cada cliente reciba la atención y el servicio que necesita.",
    },
    {
      question: "¿Cómo es el proceso de compra de un yate?",
      answer:
        "El proceso comienza con una consulta inicial donde entendemos tus necesidades, seguido por la búsqueda y selección de embarcaciones, inspecciones, negociación, y finalmente el cierre de la compra. Te acompañamos en cada paso, asegurando una transacción segura y satisfactoria.",
    },
    {
      question:
        "¿Qué costes de mantenimiento debo considerar al comprar un yate?",
      answer:
        "Los principales costes incluyen: amarre, seguros, mantenimiento regular, combustible, y posibles reparaciones. En Menorca Yacht Brokers te asesoramos sobre estos aspectos para que puedas planificar adecuadamente y disfrutar de tu embarcación sin preocupaciones.",
    },
    {
      question: "¿Ofrecen opciones de financiación para la compra de yates?",
      answer:
        "Sí, trabajamos con diferentes entidades financieras y podemos ayudarte a encontrar la mejor opción de financiación que se adapte a tu situación. Te asesoramos sobre las diferentes alternativas disponibles y los requisitos necesarios.",
    },
    {
      question: "¿Qué documentación necesito para comprar un yate en Menorca?",
      answer:
        "La documentación básica incluye identificación personal, documentación fiscal, y dependiendo del tipo de embarcación, pueden requerirse licencias específicas. Nuestro equipo te guiará en todo el proceso de documentación para asegurar que todo esté en orden.",
    },
    {
      question:
        "¿Por qué es importante realizar una inspección antes de comprar?",
      answer:
        "La inspección previa a la compra es fundamental para evaluar el estado real de la embarcación, identificar posibles problemas y verificar que la inversión sea segura. Nuestros expertos realizan inspecciones detalladas para garantizar tu tranquilidad en la compra.",
    },
    {
      question: "¿Cómo funciona el servicio de charter de yates?",
      answer:
        "Nuestro servicio de charter te permite alquilar yates por días o semanas, con o sin patrón. Nos encargamos de toda la logística, desde la selección de la embarcación ideal hasta la planificación de tu ruta por las mejores calas de Menorca.",
    },
  ];

  return (
    <section className="py-16">
      <Container size="lg">
        <div className="text-center mb-12">
          <h1 className="text-primary text-3xl md:text-4xl font-bold mb-4">
            Preguntas Frecuentes
          </h1>
          <Text className="text-gray-600 text-lg">
            Resolvemos tus dudas sobre la compra, venta y gestión de yates en
            Menorca
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

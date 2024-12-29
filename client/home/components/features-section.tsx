import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Navegando tu éxito en Menorca",
    description:
      "Menorca Yacht Brokers no solo se enfoca en conectar a sus clientes con oportunidades de calidad en la compra, venta y gestión de yates, sino que también se compromete a brindar un servicio integral que destaca la esencia única de la isla. La empresa se ha ganado una reputación por su conocimiento profundo del mercado menorquín, permitiendo a sus clientes encontrar embarcaciones que se ajusten perfectamente a sus necesidades y disfrutar de una experiencia de navegación excepcional.",
    image: "/img/sail-menorca.jpg",
    imageAlt: "Navegar Menorca",
  },
  {
    title: "Conectando oportunidades en el Mediterráneo",
    description:
      "Otro de los lemas que define a Menorca Yacht Brokers y refleja su misión de unir a personas y empresas con una misma pasión por el mar. Desde la primera consulta hasta el cierre de cada operación, MenorcaBrokers.com acompaña a sus clientes en cada paso, ofreciendo un servicio de calidad con un enfoque en el detalle y la satisfacción total del cliente.",
    image: "/img/mediterranean.jpg",
    imageAlt: "Mediterráneo",
  },
  {
    title: "Experiencia local, alcance global",
    description: (
      <>
        En el mercado de servicios náuticos en el Mediterráneo, Menorca Yacht
        Brokers se está destacando como una empresa pionera con una combinación
        única de <strong>&quot;Experiencia local, alcance global&quot;</strong>. Esta
        innovadora compañía menorquina ha logrado establecer una presencia
        significativa en el sector.
      </>
    ),
    image: "/img/maritime-manage.jpg",
    imageAlt: "Gestión Marítima",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col justify-center gap-8 sm:gap-10 md:gap-24 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center`}
            >
              {/* Image Container */}
              <div className="w-full sm:w-4/5 md:w-3/4 lg:w-[400px] mx-auto lg:mx-0">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content Container */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-medium text-primary mb-4 sm:mb-6">
                  {feature.title}
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

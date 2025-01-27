import { Text } from "@mantine/core";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Trans, useTranslation } from "react-i18next";

export default function FeaturesSection() {
  const { t } = useTranslation();

  const features = [
    {
      title: t("featuresSection.features.0.title"),
      description: t("featuresSection.features.0.description"),
      image: "/img/sail-menorca.jpg",
      imageAlt: t("featuresSection.features.0.imageAlt"),
    },
    {
      title: t("featuresSection.features.1.title"),
      description: t("featuresSection.features.1.description"),
      image: "/img/mediterranean.jpg",
      imageAlt: t("featuresSection.features.1.imageAlt"),
    },
    {
      title: t("featuresSection.features.2.title"),
      description: (
        <Trans i18nKey="featuresSection.features.2.description">
          En el mercado de servicios náuticos en el Mediterráneo, Menorca Yacht
          Brokers se está destacando como una empresa pionera con una
          combinación única de{" "}
          <strong>&quot;Experiencia local, alcance global&quot;</strong>. Esta
          innovadora compañía menorquina ha logrado establecer una presencia
          significativa en el sector.
        </Trans>
      ),
      image: "/img/maritime-manage.jpg",
      imageAlt: t("featuresSection.features.2.imageAlt"),
    },
  ];
  // const refs = features.map(() => useRef(null));
  // const inViewStates = refs.map((ref) => useInView(ref, { amount: 0.3 }));
  // Create individual refs and inView states for each feature
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const refs = [ref1, ref2, ref3];

  const isInView1 = useInView(ref1, { amount: 0.3 });
  const isInView2 = useInView(ref2, { amount: 0.3 });
  const isInView3 = useInView(ref3, { amount: 0.3 });
  const inViewStates = [isInView1, isInView2, isInView3];
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16 sm:space-y-16 md:space-y-16">
          {features.map((feature, index) => (
            <motion.div
              ref={refs[index]}
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={
                inViewStates[index]
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col justify-center gap-8 sm:gap-10 md:gap-24 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center`}
            >
              {/* Image Container */}
              <div className="w-full sm:w-4/5 md:w-3/4 lg:w-[400px] mx-auto lg:mx-0">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={feature.image || "/placeholder.svg"}
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
                <Text
                  size="lg"
                  className="text-base sm:text-lg text-gray-600 leading-relaxed"
                >
                  {feature.description}
                </Text>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

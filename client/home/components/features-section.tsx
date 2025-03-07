import { Text } from "@mantine/core";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";

export default function FeaturesSection() {
  const t = useTranslations("mainPage.featuresSection");

  const features = [
    {
      title: t("features.0.title"),
      description: t("features.0.description"),
      image: "/img/sail-menorca.jpg",
      imageAlt: t("features.0.imageAlt"),
    },
    {
      title: t("features.1.title"),
      description: t("features.1.description"),
      image: "/img/mediterranean.jpg",
      imageAlt: t("features.1.imageAlt"),
    },
    {
      title: t("features.2.title"),
      description: (
        <>
          {t.rich("features.2.description", {
            p: (chunks) => <span className="text-primary">{chunks}</span>,
          })}
        </>
      ),
      image: "/img/maritime-manage.jpg",
      imageAlt: t("features.2.imageAlt"),
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
                    sizes="(min-width: 1024px) 400px, (min-width: 640px) 300px, 200px"
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

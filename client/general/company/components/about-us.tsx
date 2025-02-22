import { Button } from "@mantine/core";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ContactModal from "../../contact/modal/contactModal";

const teamMembers = [
  {
    name: "Andreu Martinez",
    role: "Yacht Broker & Charterer",
    image: "/img/team/andreu.jpeg",
    location: "Spain",
    email: "contact@menorcabrokers.com",
    bio: [
      "Andreu Martínez Parera es un broker con una sólida formación académica en el ámbito marítimo.",
      "Formado en el Instituto Marítimo Español y en el Institute of Chartered Shipbrokers de Londres. Además, cuenta con una carrera en Náutica, habiendo obtenido su título en Ciencias Náuticas con especialización en Transporte Marítimo. Su educación se complementa con un Máster en Gestión del Transporte Marítimo y una formación de Postgrado en Logística y Supply Chain, lo que le ha permitido desarrollar una visión integral del sector.",
      "Desde 2017, Andreu ha acumulado una experiencia significativa en el mundo marítimo y logístico. Su carrera comenzó en APM Terminals, parte del Grupo MAERSK, donde fue miembro del departamento de operaciones en Barcelona. En esta etapa, se involucró activamente en la optimización de procesos logísticos y la gestión de operaciones portuarias, lo que le brindó una comprensión profunda de la cadena de suministro global.",
      "En 2019, Andreu asumió la responsabilidad de la gestión de operaciones en la naviera CMA CGM en Marsella. Durante más de 4 años y medio, optimizó la eficiencia de las operaciones así como la coordinación de las actividades de carga resultando en grandes resultados de productividad y stowage.",
      "Simultáneamente a su carrera profesional, Andreu compartió su experiencia y conocimientos como profesor universitario en el área de Negocios Marítimos de la Universitat Politécnica de Catalunya. A lo largo de su trayectoria, formó a nuevas generaciones de profesionales del sector, transmitiendo sus conocimientos sobre logística y operaciones marítimas.",
      "Actualmente, Andreu dirige Menorca Yacht Brokers, un proyecto que ofrece una amplia gama de servicios de ship brokerage, charter y asesoría náutica. Gracias a su formación académica y su experiencia práctica, Andreu ha desarrollado una comprensión profunda del sector marítimo y sus necesidades específicas.",
    ],
  },
  {
    name: "Daniel Ortega",
    role: "Freelance Yacht Broker & Event Planning",
    location: "Belgium",
    email: "daniel@menorcabrokers.com",
    image: "/img/team/daniel-ortega.jpg",
  },
  {
    name: "Grigoris Psomas",
    role: "Freelance Yacht & Charter Broker",
    location: "The Netherlands",
    email: "grigoris@menorcabrokers.com",
    image: "/img/team/grigoris-psomas.jpg",
  },
  {
    name: "Christine Giannouli",
    role: "Freelance Yacht & Charter Broker",
    location: "Greece",
    email: "christine@menorcabrokers.com",
    image: "/img/team/christine-giannouli.jpg",
  },
  {
    name: "Adriano Enrique Medina",
    role: "Freelance Yacht & Charter Broker",
    location: "Spain",
    email: "adriano@menorcabrokers.com",
    image: "/img/team/adriano-enrique.png",
  },
  {
    name: "David Freixes",
    role: "IT Developer & Co-Owner",
    location: "Spain",
    image: "/img/team/david-freixes.jpg",
  },
];

export default function AboutUs() {
  const [contactModalOpened, setContactModalOpened] = useState(false);
  const { t } = useTranslation();

  const teamSectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    if (teamSectionRef.current) {
      teamSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Adjusted height for mobile */}
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[55vh] w-full">
        <Image
          src="/img/yacht-1.jpg"
          alt="Interior de yate de lujo"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center max-w-8xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl flex items-center justify-center mx-auto"
          >
            <div className="space-y-3 sm:space-y-4 flex flex-col items-center px-4 mt-12">
              <h1 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight text-primary mb-2 sm:mb-4 text-center">
                {t("aboutUs.hero.title")}{" "}
              </h1>
              <h2 className="font-montserrat text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white px-2 text-center">
                {t("aboutUs.hero.subtitle")}
              </h2>
              <Button
                onClick={scrollToSection}
                unstyled
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 sm:px-5 py-2 text-md font-medium text-white shadow-lg hover:bg-primary/90 transition-colors mt-4"
              >
                {t("aboutUs.hero.button")}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      <section className="py-12 sm:py-16 bg-white max-w-[1400px] mx-auto">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-medium text-primary mb-4">
              {t("aboutUs.team.title")}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">
              {t("aboutUs.team.description")}
            </p>
          </motion.div>

          <div
            ref={teamSectionRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="flex justify-center">
                    <div className="relative h-40 w-40">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover object-center rounded-full group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-montserrat font-medium text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-4">
                      {member.role}
                    </p>
                    <div className="space-y-2 mb-7">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{member.location}</span>
                      </div>
                      {member.email && (
                        <div className="flex items-center text-gray-600">
                          <Mail className="w-4 h-4 mr-2" />
                          <span className="text-sm">{member.email}</span>
                        </div>
                      )}
                    </div>
                    {member.email && (
                      <Button
                        component="a"
                        href={`mailto:${member.email}`}
                        variant="outline"
                        color="#f1c001"
                      >
                        {t("aboutUs.team.contactButton")}
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Responsive adjustments */}
      <div className="relative bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-18 inset-0 bg-gradient-to-l from-[#fff6d399] via-[#ffe47acc] to-[#f8ce24c2]">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-4 sm:space-y-6 flex flex-col justify-center items-center"
          >
            <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl text-primary font-semibold text-center">
              {t("aboutUs.contact.title")}
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl text-darkTitle text-center">
              {t("aboutUs.contact.subtitle")}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-center px-4 sm:px-6 md:px-8 max-w-2xl">
              {t("aboutUs.contact.description")}
            </p>
            <Button
              onClick={() => setContactModalOpened(true)}
              unstyled
              className="bg-primary hover:bg-primary/60 text-darkTitle font-normal text-sm sm:text-base md:text-lg py-2 px-4 sm:px-6 rounded-lg transition-colors"
            >
              {t("aboutUs.contact.button")}{" "}
            </Button>
          </motion.div>
          <ContactModal
            opened={contactModalOpened}
            onClose={() => setContactModalOpened(false)}
          />
        </div>
      </div>
    </div>
  );
}

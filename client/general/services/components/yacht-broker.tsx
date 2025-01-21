import { Accordion, Button, Card, Tabs } from "@mantine/core";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ContactModal from "../../contact/modal/contactModal";

interface YachtDetails {
  id: string;
  type: "new" | "used";
  model: string;
  price: number;
  year?: number;
  length: number;
  location: string;
  displacement?: number;
  hull?: string;
  keel?: string;
  imageUrl: string;
  designer?: string;
  category?: string;
}

const sampleYachts: YachtDetails[] = [
  {
    id: "1",
    type: "used",
    model: "Salthouse 58ft Cutter",
    price: 310098,
    year: 1989,
    length: 17.68,
    location: "South Pacific, Fiji",
    displacement: 28000,
    hull: "Steel",
    keel: "Winged Keel",
    imageUrl: "/img/yacht-broker.jpg",
    designer: "Salthouse",
    category: "Used sail boat for sale",
  },
  // Add more sample yachts here
];

function YachtCards({ yachts }: { yachts: YachtDetails[] }) {
  return (
    <>
      {yachts.map((yacht) => (
        <Card key={yacht.id} className="overflow-hidden">
          <div className="relative h-48">
            <Image
              src={yacht.imageUrl || "/placeholder.svg"}
              alt={yacht.model}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-4">
            <h3 className="text-xl font-montserrat font-medium mb-2">
              {yacht.model}
            </h3>
            <p className="text-lg font-semibold text-primary mb-4">
              €{yacht.price.toLocaleString()}
            </p>

            <Accordion>
              <Accordion.Item value="details">
                <Accordion.Control icon={<ChevronDown className="w-4 h-4" />}>
                  Ver Detalles
                </Accordion.Control>
                <Accordion.Panel>
                  <div className="space-y-2 text-sm">
                    {yacht.year && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Año:</span>
                        <span>{yacht.year}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-600">Eslora:</span>
                      <span>{yacht.length} metros</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ubicación:</span>
                      <span>{yacht.location}</span>
                    </div>
                    {yacht.displacement && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Desplazamiento:</span>
                        <span>{yacht.displacement} kg</span>
                      </div>
                    )}
                    {yacht.hull && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Casco:</span>
                        <span>{yacht.hull}</span>
                      </div>
                    )}
                    {yacht.keel && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Quilla:</span>
                        <span>{yacht.keel}</span>
                      </div>
                    )}
                    {yacht.designer && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Diseñador:</span>
                        <span>{yacht.designer}</span>
                      </div>
                    )}
                    {yacht.category && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Categoría:</span>
                        <span>{yacht.category}</span>
                      </div>
                    )}
                  </div>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </div>
        </Card>
      ))}
    </>
  );
}

export default function YachtBroker() {
  const [contactModalOpened, setContactModalOpened] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>("new");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] w-full">
        <Image
          src="/img/yacht-broker.jpg"
          alt="Yacht broker service"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 h-full flex flex-col justify-center md:max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl space-y-4"
          >
            <div className="space-y-2 sm:space-y-4">
              <h1 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight text-primary">
                Yacht Broker | Compra de Barcos y Yates en Menorca
              </h1>
              <h2 className="font-montserrat text-base sm:text-lg md:text-xl text-white">
                Especialistas en <span className="text-primary">compra</span> y{" "}
                <span className="text-primary">venta</span> de yates en Menorca.
                Amplia gama de embarcaciones de lujo y asesoramiento
                personalizado.
              </h2>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12 md:max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <p className="font-montserrat text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-12">
            Consulta nuestro stock de Yates en venta a continuación o descubre
            nuestras claves y contáctarnos más abajo. Contamos con Yates de
            segunda mano o se pueden realizar contactos con astilleros para
            entrar en contratos de nueva construcción.
          </p>

          {/* Yacht Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative h-[300px] sm:h-[350px] md:h-[400px] group cursor-pointer"
            >
              <Link
                href="/yacht-broker/new"
                className="block w-full h-full shadow-md"
              >
                <Image
                  src="/img/new-construction.jpg"
                  alt="Yates de Nueva Construcción"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors rounded-lg" />
                <div className="absolute inset-0 flex flex-col p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl text-primary font-montserrat mb-4">
                    Yates de Nueva Construcción
                  </h3>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
                  <Button
                    unstyled
                    className="border-primary border-[1px] rounded text-primary hover:bg-primary hover:text-white py-2 px-4 text-sm sm:text-base w-full sm:w-auto transition-colors duration-200"
                  >
                    Visitar
                  </Button>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative h-[300px] sm:h-[350px] md:h-[400px] group cursor-pointer"
            >
              <div className="w-full h-full shadow-md">
                <Image
                  src="/img/second-hand.jpg"
                  alt="Yates de Segunda Mano"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors rounded-lg" />
                <div className="absolute inset-0 flex flex-col p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl text-primary font-montserrat mb-4">
                    Yates de Segunda Mano
                  </h3>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
                  <Button
                    unstyled
                    className="border-primary border-[1px] rounded text-primary hover:bg-primary hover:text-white py-2 px-4 text-sm sm:text-base w-full sm:w-auto transition-colors duration-200"
                  >
                    Visitar
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Yacht Catalog */}
          <div className="container mx-auto px-4 py-8">
            <Tabs value={activeTab} onChange={setActiveTab} className="mb-8">
              <Tabs.List grow>
                <Tabs.Tab value="new">Yates Nuevos</Tabs.Tab>
                <Tabs.Tab value="used">Yates de Segunda Mano</Tabs.Tab>
              </Tabs.List>

              <AnimatePresence mode="wait">
                <Tabs.Panel value="new">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
                  >
                    <YachtCards
                      yachts={sampleYachts.filter(
                        (yacht) => yacht.type === "new"
                      )}
                    />
                  </motion.div>
                </Tabs.Panel>

                <Tabs.Panel value="used">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
                  >
                    <YachtCards
                      yachts={sampleYachts.filter(
                        (yacht) => yacht.type === "used"
                      )}
                    />
                  </motion.div>
                </Tabs.Panel>
              </AnimatePresence>
            </Tabs>
          </div>

          <p className="font-montserrat text-base sm:text-lg md:text-xl text-gray-700 mb-8">
            En Menorca Yacht Brokers, transformamos la compra y venta de yates
            en una experiencia fluida, profesional y personalizada. Nuestro
            equipo de expertos combina un profundo conocimiento del mercado
            náutico con un enfoque centrado en el cliente, garantizando que cada
            transacción sea un éxito.
          </p>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="inset-0 bg-gradient-to-l from-[#fff6d399] via-[#ffe47acc] to-[#f8ce24c2] p-4 sm:p-6 rounded-lg text-center py-8 sm:py-12 md:py-20"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-montserrat text-darkTitle mb-3 sm:mb-4">
          ¿Interesado en nuestros servicios?
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
          Contáctanos para descubrir cómo podemos ayudarte a encontrar el yate
          perfecto
        </p>
        <Button
          unstyled
          onClick={() => setContactModalOpened(true)}
          className="w-full sm:w-auto bg-primary hover:bg-transparent hover:text-black hover:border-primary hover:border border-primary border text-black font-normal text-sm sm:text-base md:text-lg py-2 px-4 rounded transition-colors duration-200"
        >
          Contactar
        </Button>
      </motion.div>
      <ContactModal
        opened={contactModalOpened}
        onClose={() => setContactModalOpened(false)}
      />
    </div>
  );
}

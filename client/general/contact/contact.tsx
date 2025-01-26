import { motion } from "framer-motion";
import Image from "next/image";
import Appointment from "./apointment";
import ContactForm from "./contact-form";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[30vh] sm:h-[35vh] md:h-[40vh] w-full">
        <Image
          src="/img/contact.jpg"
          alt="Contact us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center max-w-8xl mt-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-montserrat text-primary mb-2 sm:mb-4 text-center">
              Contacto
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-white max-w-2xl text-center px-4">
              Estamos aquí para ayudarte. Elige cómo prefieres contactar con
              nosotros.
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Contact Options */}
      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12 lg:py-14 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row w-full gap-6 sm:gap-8 md:gap-10 lg:gap-10">
          {/* ContactForm and Appointment will be full width on mobile/tablet and side by side on desktop */}
          <div className="w-full h-full lg:w-1/2 flex flex-col bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg border">
            <ContactForm />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg border">
            <Appointment />
          </div>
        </div>
      </div>
    </div>
  );
}

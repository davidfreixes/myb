import { Modal, Button, Text } from "@mantine/core";
import { Check, MoveRight } from "lucide-react";
import { useState } from "react";
import ContactForm from "../contact-form";
import Appointment from "../apointment";

interface SuggestionModalProps {
  opened: boolean;
  onClose: () => void;
}

export default function ContactModal({
  opened,
  onClose,
}: SuggestionModalProps) {
  const [successModalOpened, setSuccessModalOpened] = useState(false);
  const [contactFormOpened, setcontactFormOpened] = useState(true);

  const closeSuccessModal = () => {
    setSuccessModalOpened(false);
    onClose();
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={onClose}
        size="lg"
        withCloseButton={false}
      >
        <div className="px-2 xs:px-3 lg:px-4 relative">
          {contactFormOpened ? (
            <>
              <div
                onClick={() => setcontactFormOpened(false)}
                className="absolute top-2 sm:top-1 right-2 xs:right-3 sm:right-4 text-base xs:text-lg sm:text-md font-montserrat text-primary hover:text-darkTitle mb-2 xs:mb-3 sm:mb-6 cursor-pointer transition-colors duration-200"
              >
                <div className="flex gap-1 xs:gap-2 items-center">
                  <span className="hidden xs:inline">Reserva una Cita</span>
                  <span className="xs:hidden">Cita</span>
                  <MoveRight className="w-4 h-4 xs:w-5 xs:h-5" />
                </div>
              </div>
              <div className="pt-12 sm:pt-0">
                <ContactForm />
              </div>
            </>
          ) : (
            <>
              <div
                onClick={() => setcontactFormOpened(true)}
                className="absolute top-2 sm:top-1 right-2 xs:right-3 sm:right-4 text-base xs:text-lg sm:text-md font-montserrat text-primary hover:text-darkTitle mb-2 xs:mb-3 sm:mb-6 cursor-pointer transition-colors duration-200"
              >
                <div className="flex gap-1 xs:gap-2 items-center">
                  <span className="hidden xs:inline">
                    Formulario de Contacto
                  </span>
                  <span className="xs:hidden">Contacto</span>
                  <MoveRight className="w-4 h-4 xs:w-5 xs:h-5" />
                </div>
              </div>
              <div className="pt-12 sm:pt-0">
                <Appointment />
              </div>
            </>
          )}
        </div>
      </Modal>
      <Modal
        opened={successModalOpened}
        onClose={closeSuccessModal}
        size="md"
        centered
        withCloseButton={false}
      >
        <div className="text-center p-4">
          <Check className="text-green-500 mx-auto mb-3 sm:mb-4 w-8 h-8 sm:w-10 sm:h-10" />
          <Text size="lg" className="mb-2 font-medium">
            ¡Gracias por contactar!
          </Text>
          <Text size="sm" color="dimmed" className="mb-4">
            Tu sugerencia ha sido enviada correctamente.
          </Text>
          <Button
            onClick={closeSuccessModal}
            fullWidth
            className="mt-2 sm:mt-4"
          >
            Cerrar
          </Button>
        </div>
      </Modal>
    </>
  );
}

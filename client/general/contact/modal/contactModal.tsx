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
        size={"750px"}
        withCloseButton={false}
      >
        <div className="px-4">
          {contactFormOpened ? (
            <>
              <div
                onClick={() => setcontactFormOpened(false)}
                className="absolute top-5 right-4 text-lg sm:text-xl font-montserrat text-primary mb-4 sm:mb-6 cursor-pointer"
              >
                <div className="flex gap-2 items-center">
                  Reserva una Cita
                  <MoveRight />
                </div>
              </div>
              <ContactForm />
            </>
          ) : (
            <>
              <div
                onClick={() => setcontactFormOpened(true)}
                className="absolute top-5 right-4 text-lg sm:text-xl font-montserrat text-primary mb-4 sm:mb-6 cursor-pointer"
              >
                <div className="flex gap-2 items-center">
                  Formulario de Contacto
                  <MoveRight />
                </div>
              </div>
              <Appointment />
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
        <div className="text-center">
          <Check className="text-green-500 mx-auto mb-4" />
          <Text size="xl" className="mb-2">
            ¡Gracias contactar!
          </Text>
          <Text size="md" color="dimmed" className="mb-4">
            Tu sugerencia ha sido enviada correctamente.
          </Text>
          <Button onClick={closeSuccessModal} fullWidth>
            Cerrar
          </Button>
        </div>
      </Modal>
    </>
  );
}

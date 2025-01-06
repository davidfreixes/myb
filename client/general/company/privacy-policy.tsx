import { motion } from "framer-motion";
import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[25vh] sm:h-[30vh] md:h-[35vh] w-full">
        <Image
          src="/img/legal-notice.jpg"
          alt="Privacy policy hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-primary mb-2 sm:mb-4 text-center">
              Política de Privacidad
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12 max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-sm sm:prose-base lg:prose-lg max-w-none"
        >
          <div className="space-y-12">
            {/* Section 1 */}
            <section>
              <h2 className="font-montserrat text-2xl text-primary mb-4">
                1. Información general
              </h2>
              <p>
                En Menorca Brokers S.L., con domicilio en C/ Ramón y Cajal, 45,
                07760, Menorca, Islas Baleares, España, somos responsables del
                tratamiento de los datos personales de nuestros usuarios,
                conforme a la normativa vigente sobre protección de datos
                personales, especialmente el Reglamento (UE) 2016/679 del
                Parlamento Europeo y del Consejo, de 27 de abril de 2016,
                relativo a la protección de las personas físicas en lo que
                respecta al tratamiento de datos personales y a la libre
                circulación de estos datos (RGPD).
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-montserrat text-2xl text-primary mb-4">
                2. Datos personales que recabamos
              </h2>
              <p>
                Recabamos los siguientes tipos de datos personales cuando los
                usuarios interactúan con nuestro sitio web:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Datos identificativos (nombre, apellidos, correo electrónico,
                  teléfono, dirección).
                </li>
                <li>
                  Datos relacionados con la actividad comercial y transacciones.
                </li>
                <li>
                  Información relacionada con la navegación web (dirección IP,
                  cookies, etc.).
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-montserrat text-2xl text-primary mb-4">
                3. Finalidades del tratamiento
              </h2>
              <p>
                Los datos personales que recogemos se utilizarán para las
                siguientes finalidades:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Gestionar los servicios ofrecidos a través de nuestro sitio
                  web.
                </li>
                <li>Responder a consultas y solicitudes de información.</li>
                <li>
                  Enviar comunicaciones comerciales relacionadas con nuestros
                  servicios (si el usuario ha dado su consentimiento para ello).
                </li>
                <li>
                  Realizar análisis estadísticos y mejorar la experiencia de
                  navegación del sitio web.
                </li>
                <li>Cumplir con las obligaciones legales y fiscales.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-montserrat text-2xl text-primary mb-4">
                4. Base legal para el tratamiento
              </h2>
              <p>
                La base legal para el tratamiento de los datos personales es:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  El consentimiento del usuario, en los casos en que sea
                  necesario.
                </li>
                <li>
                  La ejecución de un contrato o medidas precontractuales, en el
                  caso de que el usuario haya solicitado algún servicio.
                </li>
                <li>
                  El cumplimiento de una obligación legal por parte de Menorca
                  Brokers S.L..
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-montserrat text-2xl text-primary mb-4">
                5. Destinatarios de los datos
              </h2>
              <p>
                Menorca Brokers S.L. no cederá los datos personales a terceros,
                salvo en los casos en que sea necesario para cumplir con la ley,
                o si el usuario ha dado su consentimiento para ello. Sin
                embargo, los datos podrán ser compartidos con proveedores de
                servicios que nos ayudan a operar nuestro negocio, como
                proveedores de alojamiento web o servicios de correo
                electrónico.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-montserrat text-2xl text-primary mb-4">
                6. Transferencias internacionales de datos
              </h2>
              <p>
                En caso de que sea necesario, los datos personales pueden ser
                transferidos a países fuera del Espacio Económico Europeo (EEE),
                en cuyo caso se garantizarán las medidas de protección adecuadas
                conforme a la legislación aplicable.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="font-montserrat text-2xl text-primary mb-4">
                7. Derechos de los usuarios
              </h2>
              <p>Los usuarios tienen derecho a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Acceder a sus datos personales.</li>
                <li>Rectificar sus datos si son incorrectos o incompletos.</li>
                <li>
                  Suprimir sus datos personales cuando ya no sean necesarios
                  para los fines para los que fueron recogidos.
                </li>
                <li>
                  Limitar el tratamiento de sus datos en determinadas
                  circunstancias.
                </li>
                <li>
                  Oponerse al tratamiento de sus datos por motivos relacionados
                  con su situación particular.
                </li>
                <li>
                  Solicitar la portabilidad de sus datos en un formato
                  estructurado y de uso común.
                </li>
              </ul>
              <p className="mt-4">
                Para ejercer estos derechos, el usuario puede ponerse en
                contacto con nosotros a través del correo electrónico.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="font-montserrat text-2xl text-primary mb-4">
                8. Conservación de los datos
              </h2>
              <p>
                Los datos personales serán conservados durante el tiempo
                necesario para cumplir con las finalidades para las que fueron
                recabados y conforme a los plazos establecidos por la
                legislación vigente.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="font-montserrat text-2xl text-primary mb-4">
                9. Seguridad de los datos
              </h2>
              <p>
                Menorca Brokers S.L. implementa medidas de seguridad técnicas y
                organizativas para proteger los datos personales frente a
                accesos no autorizados, alteraciones, pérdidas o destrucción de
                los mismos.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="font-montserrat text-2xl text-primary mb-4">
                10. Cambios en la Política de Privacidad
              </h2>
              <p>
                Nos reservamos el derecho a modificar esta Política de
                Privacidad en cualquier momento, siendo cualquier cambio
                publicado en este sitio web. Recomendamos revisar esta política
                periódicamente para estar informado sobre cómo protegemos tus
                datos.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="font-montserrat text-2xl text-primary mb-4">
                11. Contacto
              </h2>
              <p>
                Si tienes alguna duda sobre nuestra Política de Privacidad o
                sobre el tratamiento de tus datos personales, puedes
                contactarnos.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

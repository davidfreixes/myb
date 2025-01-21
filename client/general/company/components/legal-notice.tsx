import { motion } from "framer-motion";
import Image from "next/image";

export default function LegalNotice() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[30vh] sm:h-[35vh] md:h-[40vh] w-full">
        <Image
          src="/img/legal-notice.jpg"
          alt="Yacht broker service"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-primary mb-2 sm:mb-4 text-center">
              Aviso Legal
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12 max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-sm sm:prose-base lg:prose-lg max-w-none"
        >
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {/* Section 1 */}
            <section>
              <h2 className="font-montserrat text-xl sm:text-2xl text-primary mb-3 sm:mb-4">
                1. Identificación del titular del sitio web
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base">
                  El presente sitio web, MenorcaBrokers.com.
                </p>
                <p className="text-sm sm:text-base">
                  Menorca Yacht Brokers se identifica como la marca comercial de
                  www.menorcabrokers.com
                </p>
                <p className="text-sm sm:text-base">
                  Domicilio social: Menorca, Islas Baleares, España.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-montserrat text-xl sm:text-2xl text-primary mb-3 sm:mb-4">
                2. Propiedad intelectual e industrial
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base">
                  Todos los contenidos del sitio web, incluyendo textos,
                  imágenes, gráficos, logotipos, iconos, software y demás
                  elementos de este sitio, son propiedad de Menorca Brokers o de
                  sus licenciantes, y están protegidos por las leyes de
                  propiedad intelectual e industrial. Queda prohibida la
                  reproducción, distribución, modificación, transformación,
                  comunicación pública o cualquier otra actividad similar sin la
                  previa autorización expresa de Menorca Brokers.
                </p>
                <p className="text-sm sm:text-base">
                  La propiedad del dominio www.menorcabrokers.com así como de
                  todos sus derivados y de la propia página web son de:
                </p>
                <p className="font-semibold text-sm sm:text-base">
                  Andreu Martínez Parera.
                </p>
                <p className="text-sm sm:text-base">
                  Contactar mediante los canales oficiales para más información.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-montserrat text-xl sm:text-2xl text-primary mb-3 sm:mb-4">
                3. Uso del sitio web
              </h2>
              <p className="text-sm sm:text-base">
                El usuario se compromete a utilizar este sitio web conforme a la
                ley, el presente Aviso Legal y las condiciones que en su caso se
                establezcan para cada servicio. Asimismo, el usuario se
                compromete a no utilizar el sitio web para fines ilícitos o
                lesivos de los derechos e intereses de Menorca Brokers o de
                terceros.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-montserrat text-xl sm:text-2xl text-primary mb-3 sm:mb-4">
                4. Exoneración de responsabilidad
              </h2>
              <p className="text-sm sm:text-base">
                Menorca Brokers no se hace responsable de los daños derivados
                del uso del sitio web o de sus contenidos. Asimismo, no
                garantiza la disponibilidad continua de los servicios del sitio
                web, pudiendo suspender temporalmente el acceso por tareas de
                mantenimiento o por causas ajenas a su control.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-montserrat text-xl sm:text-2xl text-primary mb-3 sm:mb-4">
                5. Política de privacidad
              </h2>
              <p className="text-sm sm:text-base">
                La información personal que se reciba a través de este sitio web
                será tratada conforme a nuestra Política de Privacidad, la cual
                está disponible en la página web.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-montserrat text-xl sm:text-2xl text-primary mb-3 sm:mb-4">
                6. Enlaces a otros sitios web
              </h2>
              <p className="text-sm sm:text-base">
                Este sitio web puede contener enlaces a otros sitios externos.
                Menorca Brokers S.L. no se responsabiliza de los contenidos,
                políticas de privacidad o prácticas de otros sitios web.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="font-montserrat text-xl sm:text-2xl text-primary mb-3 sm:mb-4">
                7. Ley aplicable y jurisdicción
              </h2>
              <p className="text-sm sm:text-base">
                La relación entre Menorca Brokers y el usuario se regirá por la
                normativa española. En caso de disputa, las partes se someterán
                a los tribunales competentes de Menorca, Islas Baleares, España.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

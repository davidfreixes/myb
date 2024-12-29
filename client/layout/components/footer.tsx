import { Text } from "@mantine/core";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0B2847] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex w-full">
          <div className="w-[40%] flex flex-col items-center mb-12">
            <Link href="/" className="mb-4">
              <Image
                src="/img/logo.png"
                alt="Menorca Yacht Brokers"
                width={150}
                height={150}
              />
            </Link>
            <Text className="text-center text-gray-300">
              Moll de Llevant, 3, 07701 Maó, Illes Balears
              <br />
              España
            </Text>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Servicios Náuticos */}
            <div>
              <h3 className="text-lg font-semibold mb-4">SERVICIOS NÁUTICOS</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/servicios/yacht-broker"
                    className="text-gray-300 hover:text-primary"
                  >
                    Yacht Broker
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicios/yacht-charter"
                    className="text-gray-300 hover:text-primary"
                  >
                    Yacht Charter
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicios/inspecciones"
                    className="text-gray-300 hover:text-primary"
                  >
                    Inspecciones y Tasaciones
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicios/asesoria"
                    className="text-gray-300 hover:text-primary"
                  >
                    Asesoría Náutica
                  </Link>
                </li>
              </ul>
            </div>

            {/* Servicios */}
            <div>
              <h3 className="text-lg font-semibold mb-4">SERVICIOS</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/servicios/compra"
                    className="text-gray-300 hover:text-primary"
                  >
                    Compra de Yates
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicios/venta"
                    className="text-gray-300 hover:text-primary"
                  >
                    Venta de Yates
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicios/alquiler"
                    className="text-gray-300 hover:text-primary"
                  >
                    Alquiler de Yates
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicios/valor-anadido"
                    className="text-gray-300 hover:text-primary"
                  >
                    Servicios de Valor Añadido
                  </Link>
                </li>
              </ul>
            </div>

            {/* Empresa */}
            <div>
              <h3 className="text-lg font-semibold mb-4">EMPRESA</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/quienes-somos"
                    className="text-gray-300 hover:text-primary"
                  >
                    Sobre nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    href="/quienes-somos/historia"
                    className="text-gray-300 hover:text-primary"
                  >
                    Nuestra Historia
                  </Link>
                </li>
                <li>
                  <Link
                    href="/quienes-somos/equipo"
                    className="text-gray-300 hover:text-primary"
                  >
                    Nuestro Equipo
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacto"
                    className="text-gray-300 hover:text-primary"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Social Links and Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              2024 © Menorca Yacht Brokers
            </div>
            <div className="flex gap-4">
              <Link
                href="/legal"
                className="text-sm text-gray-400 hover:text-primary"
              >
                Condiciones generales de uso
              </Link>
              <Link
                href="/privacidad"
                className="text-sm text-gray-400 hover:text-primary"
              >
                Política de privacidad
              </Link>
              <Link
                href="/aviso-legal"
                className="text-sm text-gray-400 hover:text-primary"
              >
                Aviso legal
              </Link>
            </div>
            <div className="flex gap-4">
              <Link
                href="https://linkedin.com"
                className="text-gray-400 hover:text-primary"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://facebook.com"
                className="text-gray-400 hover:text-primary"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                className="text-gray-400 hover:text-primary"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://youtube.com"
                className="text-gray-400 hover:text-primary"
              >
                <Youtube size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

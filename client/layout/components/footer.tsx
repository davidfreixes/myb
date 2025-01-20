import { NAVIGATION_LINKS } from "@/utils/navigation";
import { Text } from "@mantine/core";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0B2847] text-white py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col w-full lg:flex-row">
          {/* Logo and Address Section */}
          <div className="w-full lg:w-[40%] flex flex-col items-center mb-8 lg:mb-12">
            <Link href="/" className="mb-4">
              <Image
                src="/img/logo.png"
                alt="Menorca Yacht Brokers"
                width={150}
                height={150}
              />
            </Link>
            <Text className="text-center text-gray-300">
              07701 Maó, Illes Balears
              <br />
              España
            </Text>
          </div>

          {/* Navigation Links Section */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 lg:mb-12">
            {/* Servicios Náuticos */}
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold mb-4">SERVICIOS NÁUTICOS</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href={`${NAVIGATION_LINKS.YACHT_BROKER}`}
                    className="text-gray-300 hover:text-primary block"
                  >
                    Yacht Broker
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${NAVIGATION_LINKS.YACHT_CHARTER}`}
                    className="text-gray-300 hover:text-primary block"
                  >
                    Yacht Charter
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${NAVIGATION_LINKS.INSPECCIONES}`}
                    className="text-gray-300 hover:text-primary block"
                  >
                    Inspecciones y Tasaciones
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${NAVIGATION_LINKS.ASESORIA_NAUTICA}`}
                    className="text-gray-300 hover:text-primary block"
                  >
                    Asesoría Náutica
                  </Link>
                </li>
              </ul>
            </div>

            {/* Servicios */}
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold mb-4">SERVICIOS</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href={`${NAVIGATION_LINKS.YACHT_BROKER}`}
                    className="text-gray-300 hover:text-primary block"
                  >
                    Compra de Yates
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${NAVIGATION_LINKS.YACHT_BROKER}`}
                    className="text-gray-300 hover:text-primary block"
                  >
                    Venta de Yates
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${NAVIGATION_LINKS.YACHT_CHARTER}`}
                    className="text-gray-300 hover:text-primary block"
                  >
                    Alquiler de Yates
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${NAVIGATION_LINKS.VALOR_AÑADIDO}`}
                    className="text-gray-300 hover:text-primary block"
                  >
                    Servicios de Valor Añadido
                  </Link>
                </li>
              </ul>
            </div>

            {/* Empresa */}
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold mb-4">EMPRESA</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href={`${NAVIGATION_LINKS.QUIENES_SOMOS}`}
                    className="text-gray-300 hover:text-primary block"
                  >
                    Sobre nosotros
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href=""
                    className="text-gray-300 hover:text-primary block"
                  >
                    Nuestra Historia
                  </Link>
                </li> */}
                <li>
                  <Link
                    href={`${NAVIGATION_LINKS.QUIENES_SOMOS}`}
                    className="text-gray-300 hover:text-primary block"
                  >
                    Nuestro Equipo
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${NAVIGATION_LINKS.CONTACTO}`}
                    className="text-gray-300 hover:text-primary block"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 pt-6 md:pt-8">
          <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-between">
            {/* Copyright */}
            <div className="text-sm text-gray-400 order-3 md:order-1">
              2025 © Menorca Yacht Brokers
            </div>

            {/* Legal Links */}
            <div className="flex flex-col sm:flex-row gap-4 text-center order-2">
              {/* <Link
                href="/legal"
                className="text-sm text-gray-400 hover:text-primary"
              >
                Condiciones generales de uso
              </Link> */}
              <Link
                href={`${NAVIGATION_LINKS.POLITICA_DE_PRIVACIDAD}`}
                className="text-sm text-gray-400 hover:text-primary"
              >
                Política de privacidad
              </Link>
              <Link
                href={`${NAVIGATION_LINKS.AVISO_LEGAL}`}
                className="text-sm text-gray-400 hover:text-primary"
              >
                Aviso legal
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 order-1 md:order-3">
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/menorca_yacht_brokers/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
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

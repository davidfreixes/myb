import { NAVIGATION_LINKS } from "@/utils/navigation";
import { Text } from "@mantine/core";
import { Instagram, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

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
                width={140}
                height={140}
              />
            </Link>
            <Text className="text-center text-gray-300">
              {t("footer.address")}
              <br />
              {t("footer.country")}
            </Text>
          </div>

          {/* Navigation Links Section */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 lg:mb-12">
            {/* Servicios Náuticos */}
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold mb-4">
                {t("footer.services_nauticos.title")}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href={`${NAVIGATION_LINKS.YACHT_BROKER}`}
                    className="text-gray-300 hover:text-primary block"
                  >
                    {t("footer.services_nauticos.yacht_broker")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${NAVIGATION_LINKS.YACHT_CHARTER}`}
                    className="text-gray-300 hover:text-primary block"
                  >
                    {t("footer.services_nauticos.yacht_charter")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${NAVIGATION_LINKS.INSPECCIONES}`}
                    className="text-gray-300 hover:text-primary block"
                  >
                    {t("footer.services_nauticos.inspecciones")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${NAVIGATION_LINKS.ASESORIA_NAUTICA}`}
                    className="text-gray-300 hover:text-primary block"
                  >
                    {t("footer.services_nauticos.asesoria_nautica")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Servicios */}
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold mb-4">
                {t("footer.services.title")}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href={`${NAVIGATION_LINKS.YACHT_BROKER}`}
                    className="text-gray-300 hover:text-primary block"
                  >
                    {t("footer.services.compra_yates")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${NAVIGATION_LINKS.YACHT_BROKER}`}
                    className="text-gray-300 hover:text-primary block"
                  >
                    {t("footer.services.venta_yates")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${NAVIGATION_LINKS.YACHT_CHARTER}`}
                    className="text-gray-300 hover:text-primary block"
                  >
                    {t("footer.services.alquiler_yates")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${NAVIGATION_LINKS.VALOR_AÑADIDO}`}
                    className="text-gray-300 hover:text-primary block"
                  >
                    {t("footer.services.valor_añadido")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Empresa */}
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold mb-4">
                {" "}
                {t("footer.empresa.title")}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href={`${NAVIGATION_LINKS.QUIENES_SOMOS}`}
                    className="text-gray-300 hover:text-primary block"
                  >
                    {t("footer.empresa.aboutUs")}
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
                    {t("footer.empresa.ourTeam")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${NAVIGATION_LINKS.CONTACTO}`}
                    className="text-gray-300 hover:text-primary block"
                  >
                    {t("footer.empresa.contact")}
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
                {t("footer.legal.politica_privacidad")}
              </Link>
              <Link
                href={`${NAVIGATION_LINKS.AVISO_LEGAL}`}
                className="text-sm text-gray-400 hover:text-primary"
              >
                {t("footer.legal.aviso_legal")}
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 order-1 md:order-3">
              {/* <Link
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
              </Link> */}

              <Link
                href="https://www.instagram.com/menorca_yacht_brokers/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="mailto:info@menorcabrokers.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary"
              >
                <Mail size={21} />
              </Link>
              {/* <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary"
              >
                <Youtube size={20} />
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

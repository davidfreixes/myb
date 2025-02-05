import i18n from "@/utils/i18n";
import { NAVIGATION_LINKS } from "@/utils/navigation";
import { Button, Menu, Text } from "@mantine/core";
import {
  Anchor,
  Building,
  ChevronDown,
  Database,
  FileText,
  Globe,
  MenuIcon,
  Newspaper,
  Plus,
  Scale,
  ScrollText,
  Ship,
  ShipWheel,
  Truck,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface NavItem {
  label: string;
  href: string;
  width?: string;
  items?: {
    label: string;
    href: string;
    icon?: React.ReactNode;
    description?: string;
  }[];
}

interface HeaderProps {
  sticky: boolean;
  isTransparent?: boolean;
}

export const Header = ({ sticky, isTransparent = false }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [language, setLanguage] = useState<string | null>(null);
  const { t } = useTranslation();

  const navigation: NavItem[] = [
    { label: t("header.navigation.home"), href: "/" },
    {
      label: t("header.navigation.services"),
      href: "/servicios",
      width: "550",
      items: [
        {
          label: t("header.services.yachtBroker.label"),
          href: `${NAVIGATION_LINKS.YACHT_BROKER}`,
          icon: <Ship size={20} />,
          description: t("header.services.yachtBroker.description"),
        },
        {
          label: t("header.services.yachtCharter.label"),
          href: `${NAVIGATION_LINKS.YACHT_CHARTER}`,
          icon: <Anchor size={20} />,
          description: t("header.services.yachtCharter.description"),
        },
        {
          label: t("header.services.bunkerSupply.label"),
          href: `${NAVIGATION_LINKS.BUNKER_SUPPLY}`,
          icon: <Database size={20} />,
          description: t("header.services.bunkerSupply.description"),
        },
        {
          label: t("header.services.inspections.label"),
          href: `${NAVIGATION_LINKS.INSPECCIONES}`,
          icon: <Scale size={20} />,
          description: t("header.services.inspections.description"),
        },
        {
          label: t("header.services.logistics.label"),
          href: `${NAVIGATION_LINKS.LOGÍSTICA}`,
          icon: <Truck size={20} />,
          description: t("header.services.logistics.description"),
        },
        {
          label: t("header.services.nauticalAdvisory.label"),
          href: `${NAVIGATION_LINKS.ASESORIA_NAUTICA}`,
          icon: <ShipWheel size={20} />,
          description: t("header.services.nauticalAdvisory.description"),
        },

        {
          label: t("header.services.valueAddedServices.label"),
          href: `${NAVIGATION_LINKS.VALOR_AÑADIDO}`,
          icon: <Plus size={20} />,
          description: t("header.services.valueAddedServices.description"),
        },
      ],
    },
    {
      label: t("header.navigation.company"),
      href: "/empresa",
      width: "550",
      items: [
        {
          label: t("header.company.suppliers.label"),
          href: `${NAVIGATION_LINKS.PROVEEDORES_Y_DISTRIBUIDORES}`,
          icon: <Building size={20} />,
          description: t("header.company.suppliers.description"),
        },
        {
          label: t("header.company.news.label"),
          href: `${NAVIGATION_LINKS.DIARIO_PUERTO_MAHON}`,
          icon: <Newspaper size={20} />,
          description: t("header.company.news.description"),
        },
      ],
    },
    {
      label: t("header.navigation.contracting"),
      href: "/contratacion",
      width: "650",
      items: [
        {
          label: t("header.contracting.conditionsRates.label"),
          href: `${NAVIGATION_LINKS.CONDICIONES_Y_TARIFAS}`,
          icon: <FileText size={20} />,
          description: t("header.contracting.conditionsRates.description"),
        },
        {
          label: t("header.contracting.yachtContracts.label"),
          href: `${NAVIGATION_LINKS.CONTRATOS_DE_COMPRAVENTA}`,
          icon: <ScrollText size={20} />,
          description: t("header.contracting.yachtContracts.description"),
        },
      ],
    },
    {
      label: t("header.navigation.aboutUs"),
      href: `${NAVIGATION_LINKS.QUIENES_SOMOS}`,
      width: "300",
    },
  ];

  useEffect(() => {
    // Determina el idioma en el cliente (SSR no tiene esta información)
    setLanguage(i18n.language || "es");
  }, []);

  if (!language) return null; // Evita renderizar en el servidor
  const handleChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <header
      className={`${sticky ? "fixed" : "absolute"} w-full ${
        isTransparent && !isMobileMenuOpen ? "bg-transparent" : "bg-black"
      } z-50 transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 max-w-8xl lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/img/logo.png"
              alt="Menorca Yacht Brokers"
              width={70}
              height={70}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.label}>
                {item.items ? (
                  <Menu
                    trigger="hover"
                    openDelay={100}
                    closeDelay={100}
                    shadow="md"
                    width={item.width}
                    onOpen={() => setActiveMenu(item.label)}
                    onClose={() => setActiveMenu(null)}
                  >
                    <Menu.Target>
                      <Button
                        unstyled
                        className={`hover:text-primary transition-colors py-2 ${
                          activeMenu === item.label
                            ? "underline text-primary"
                            : "hover:underline text-white"
                        }`}
                      >
                        {item.label}
                      </Button>
                    </Menu.Target>
                    <Menu.Dropdown>
                      <Menu.Label className="font-semibold text-lg">
                        {item.label.toUpperCase()}
                      </Menu.Label>
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            passHref
                          >
                            <Menu.Item
                              leftSection={
                                <div className="text-primary">
                                  {subItem.icon}
                                </div>
                              }
                              className="hover:bg-primary/10"
                            >
                              <div>
                                <Text size="md" fw={450}>
                                  {subItem.label}
                                </Text>
                                {subItem.description && (
                                  <Text size="xs" c="dimmed">
                                    {subItem.description}
                                  </Text>
                                )}
                              </div>
                            </Menu.Item>
                          </Link>
                        ))}
                      </div>
                    </Menu.Dropdown>
                  </Menu>
                ) : (
                  <Link href={item.href} passHref>
                    <Button
                      unstyled
                      className="text-white hover:text-primary transition-colors py-2 hover:underline"
                    >
                      {item.label}
                    </Button>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Contact button - desktop */}
            <Button
              unstyled
              component={Link}
              href={`${NAVIGATION_LINKS.CONTACTO}`}
              className="hidden lg:block bg-primary hover:bg-primary/90 text-black min-w-[48px] font-medium py-1 px-5 rounded-lg"
            >
              CONTACTO
            </Button>

            {/* Language Selector */}
            <Menu>
              <Menu.Target>
                <Button
                  unstyled
                  className="bg-primary hover:bg-primary/90 text-white min-w-[48px] rounded p-1"
                >
                  <div className="flex gap-2 px-2 items-center">
                    <Globe size={20} />
                    <span>{i18n.language.toUpperCase()}</span>
                    <ChevronDown size={16} />
                  </div>
                </Button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item onClick={() => handleChangeLanguage("es")}>
                  Español
                </Menu.Item>
                <Menu.Item onClick={() => handleChangeLanguage("en")}>
                  English
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>

            {/* Mobile menu button */}
            <Button
              unstyled
              className="lg:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.label} className="py-2">
                  {item.items ? (
                    <Menu shadow="md" width="100%">
                      <Menu.Target>
                        <Button
                          unstyled
                          className="w-full text-left text-white hover:text-primary transition-colors py-2 px-3"
                        >
                          {item.label}
                        </Button>
                      </Menu.Target>
                      <Menu.Dropdown>
                        <Menu.Label className="font-semibold text-lg">
                          {item.label.toUpperCase()}
                        </Menu.Label>
                        <div className="grid grid-cols-1 gap-2 mb-2">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              passHref
                            >
                              <Menu.Item
                                leftSection={
                                  <div className="text-primary">
                                    {subItem.icon}
                                  </div>
                                }
                                className="hover:bg-primary/10"
                              >
                                <div>
                                  <Text size="md" fw={450}>
                                    {subItem.label}
                                  </Text>
                                  {subItem.description && (
                                    <Text size="xs" c="dimmed">
                                      {subItem.description}
                                    </Text>
                                  )}
                                </div>
                              </Menu.Item>
                            </Link>
                          ))}
                        </div>
                      </Menu.Dropdown>
                    </Menu>
                  ) : (
                    <Link href={item.href} passHref>
                      <Button
                        unstyled
                        className="w-full text-left text-white hover:text-primary transition-colors py-2 px-3"
                      >
                        {item.label}
                      </Button>
                    </Link>
                  )}
                </div>
              ))}
              {/* Contact button - mobile */}
              <div className="flex justify-center items-center">
                <Button
                  unstyled
                  component={Link}
                  href={`${NAVIGATION_LINKS.CONTACTO}`}
                  className="w-full text-center bg-primary hover:bg-primary/90 text-black font-medium py-2 px-3 rounded-md"
                >
                  {t("header.navigation.contact")}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

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
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

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

export interface Language {
  code: string;
  name: string;
  flag?: string;
}
export const LANGUAGES: Language[] = [
  {
    code: "es",
    name: "Español",
  },
  {
    code: "en",
    name: "English",
  },
];

export const Header = ({ sticky, isTransparent = false }: HeaderProps) => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const t = useTranslations("header");
  const { locale, asPath } = router;

  const navigation: NavItem[] = [
    { label: t("navigation.home"), href: "/" },
    {
      label: t("navigation.services"),
      href: "/servicios",
      width: "550",
      items: [
        {
          label: t("services.yachtBroker.label"),
          href: `${NAVIGATION_LINKS.YACHT_BROKER}`,
          icon: <Ship size={20} />,
          description: t("services.yachtBroker.description"),
        },
        {
          label: t("services.yachtCharter.label"),
          href: `${NAVIGATION_LINKS.YACHT_CHARTER}`,
          icon: <Anchor size={20} />,
          description: t("services.yachtCharter.description"),
        },
        {
          label: t("services.bunkerSupply.label"),
          href: `${NAVIGATION_LINKS.BUNKER_SUPPLY}`,
          icon: <Database size={20} />,
          description: t("services.bunkerSupply.description"),
        },
        {
          label: t("services.inspections.label"),
          href: `${NAVIGATION_LINKS.INSPECCIONES}`,
          icon: <Scale size={20} />,
          description: t("services.inspections.description"),
        },
        {
          label: t("services.logistics.label"),
          href: `${NAVIGATION_LINKS.LOGÍSTICA}`,
          icon: <Truck size={20} />,
          description: t("services.logistics.description"),
        },
        {
          label: t("services.nauticalAdvisory.label"),
          href: `${NAVIGATION_LINKS.ASESORIA_NAUTICA}`,
          icon: <ShipWheel size={20} />,
          description: t("services.nauticalAdvisory.description"),
        },

        {
          label: t("services.valueAddedServices.label"),
          href: `${NAVIGATION_LINKS.VALOR_AÑADIDO}`,
          icon: <Plus size={20} />,
          description: t("services.valueAddedServices.description"),
        },
      ],
    },
    {
      label: t("navigation.company"),
      href: "/empresa",
      width: "550",
      items: [
        {
          label: t("company.suppliers.label"),
          href: `${NAVIGATION_LINKS.PROVEEDORES_Y_DISTRIBUIDORES}`,
          icon: <Building size={20} />,
          description: t("company.suppliers.description"),
        },
        {
          label: t("company.news.label"),
          href: `${NAVIGATION_LINKS.DIARIO_PUERTO_MAHON}`,
          icon: <Newspaper size={20} />,
          description: t("company.news.description"),
        },
      ],
    },
    {
      label: t("navigation.contracting"),
      href: "/contratacion",
      width: "650",
      items: [
        {
          label: t("contracting.conditionsRates.label"),
          href: `${NAVIGATION_LINKS.CONDICIONES_Y_TARIFAS}`,
          icon: <FileText size={20} />,
          description: t("contracting.conditionsRates.description"),
        },
        {
          label: t("contracting.yachtContracts.label"),
          href: `${NAVIGATION_LINKS.CONTRATOS_DE_COMPRAVENTA}`,
          icon: <ScrollText size={20} />,
          description: t("contracting.yachtContracts.description"),
        },
      ],
    },
    {
      label: t("navigation.aboutUs"),
      href: `${NAVIGATION_LINKS.QUIENES_SOMOS}`,
      width: "300",
    },
  ];

  const changeLanguage = (newLocale: string) => {
    // Opcional: guardar preferencia en cookie
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=${
      60 * 60 * 24 * 30
    }`;
    router.push(asPath, asPath, { locale: newLocale });
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
              src="/img/logo-no-title.png"
              alt="Menorca Yacht Brokers"
              width={55}
              height={55}
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
                <div className="bg-primary hover:bg-primary/90 text-white min-w-[48px] rounded p-1 cursor-pointer">
                  <div className="flex gap-2 px-2 items-center">
                    <Globe size={20} />
                    {(locale || "es").toLocaleUpperCase()}
                    <ChevronDown size={16} />
                  </div>
                </div>
              </Menu.Target>
              <Menu.Dropdown>
                {LANGUAGES.map((language) => (
                  <Menu.Item
                    key={language.code}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                      locale === language.code
                        ? "bg-darkBlue text-white rounded-none hover:bg-darkBlue"
                        : "text-darkBlue hover:bg-gray-200"
                    }`}
                    onClick={() => changeLanguage(language.code)}
                  >
                    <div className="flex items-center gap-2">
                      {language.flag && <span>{language.flag}</span>}
                      <span>{language.name}</span>
                    </div>
                  </Menu.Item>
                ))}
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
                  {t("navigation.contact")}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

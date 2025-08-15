import { PAGE_ROUTES } from "@/routes";
import { NAVIGATION_LINKS } from "@/utils/navigation";
import { Button, Menu, Text } from "@mantine/core";
import {
  Anchor,
  Building,
  ChevronDown,
  Database,
  FileText,
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
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

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
    flag: "/img/flags/es.webp",
  },
  {
    code: "en",
    name: "English",
    flag: "/img/flags/gb.webp",
  },
  {
    code: "cat",
    name: "Català",
    flag: "/img/flags/cat.png",
  },
  {
    code: "fr",
    name: "Français",
    flag: "/img/flags/fr.png",
  },
];

export const Header = ({ sticky, isTransparent = false }: HeaderProps) => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const t = useTranslations("header");
  const { asPath } = router;
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Skip if the click is on a link or button inside the menu
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest("a") && // Don't close if clicking on a link
        !(event.target as HTMLElement).closest("button") // Don't close if clicking on a button
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const navigation: NavItem[] = [
    { label: t("navigation.home"), href: "/" },
    {
      label: t("navigation.services"),
      href: "/servicios",
      width: "550",
      items: [
        {
          label: t("services.yachtBroker.label"),
          href: `${NAVIGATION_LINKS.YACHT_BROKER(locale)}`,
          icon: <Ship size={20} />,
          description: t("services.yachtBroker.description"),
        },
        {
          label: t("services.yachtCharter.label"),
          href: `${NAVIGATION_LINKS.YACHT_CHARTER(locale)}`,
          icon: <Anchor size={20} />,
          description: t("services.yachtCharter.description"),
        },
        {
          label: t("services.bunkerSupply.label"),
          href: `${NAVIGATION_LINKS.BUNKER_SUPPLY(locale)}`,
          icon: <Database size={20} />,
          description: t("services.bunkerSupply.description"),
        },
        {
          label: t("services.inspections.label"),
          href: `${NAVIGATION_LINKS.INSPECCIONES(locale)}`,
          icon: <Scale size={20} />,
          description: t("services.inspections.description"),
        },
        {
          label: t("services.logistics.label"),
          href: `${NAVIGATION_LINKS.LOGISTICA(locale)}`,
          icon: <Truck size={20} />,
          description: t("services.logistics.description"),
        },
        {
          label: t("services.nauticalAdvisory.label"),
          href: `${NAVIGATION_LINKS.ASESORIA_NAUTICA(locale)}`,
          icon: <ShipWheel size={20} />,
          description: t("services.nauticalAdvisory.description"),
        },

        {
          label: t("services.valueAddedServices.label"),
          href: `${NAVIGATION_LINKS.VALOR_AÑADIDO(locale)}`,
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
          href: `${NAVIGATION_LINKS.PROVEEDORES_Y_DISTRIBUIDORES(locale)}`,
          icon: <Building size={20} />,
          description: t("company.suppliers.description"),
        },
        {
          label: t("company.news.label"),
          href: `${NAVIGATION_LINKS.DIARIO_PUERTO_MAHON(locale)}`,
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
          href: `${NAVIGATION_LINKS.CONDICIONES_Y_TARIFAS(locale)}`,
          icon: <FileText size={20} />,
          description: t("contracting.conditionsRates.description"),
        },
        {
          label: t("contracting.yachtContracts.label"),
          href: `${NAVIGATION_LINKS.CONTRATOS_DE_COMPRAVENTA(locale)}`,
          icon: <ScrollText size={20} />,
          description: t("contracting.yachtContracts.description"),
        },
      ],
    },
    {
      label: t("navigation.aboutUs"),
      href: `${NAVIGATION_LINKS.QUIENES_SOMOS(locale)}`,
      width: "300",
    },
  ];

  const changeLanguage = (newLocale: string) => {
    // Guardar preferencia en cookie
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=${
      60 * 60 * 24 * 30
    }`;

    // Obtener la ruta actual sin el locale actual
    const pathWithoutLocale = asPath.replace(/^\/[a-z]{2}(\/|$)/, "/");

    // Buscar si la ruta actual coincide con alguna ruta traducida
    const currentRoute = PAGE_ROUTES.find((route) => {
      // Comprobar si la ruta actual coincide con alguna ruta en cualquier idioma
      return Object.values(route).some(
        (url) =>
          url === pathWithoutLocale ||
          (pathWithoutLocale.endsWith("/") &&
            url === pathWithoutLocale.slice(0, -1)) ||
          (!pathWithoutLocale.endsWith("/") && url === `${pathWithoutLocale}/`)
      );
    });

    // Si encontramos una ruta traducida, usarla, de lo contrario mantener la ruta actual
    const newPath = currentRoute
      ? currentRoute[newLocale as keyof typeof currentRoute] ||
        currentRoute.default
      : pathWithoutLocale;

    // Navegar a la ruta traducida con el nuevo locale
    router.push(newPath, undefined, { locale: newLocale });
  };

  const currentLanguage = LANGUAGES.find((lang) => lang.code === locale);

  return (
    <header
      className={`${sticky ? "fixed" : "absolute"} w-full ${
        isTransparent && !isMobileMenuOpen ? "bg-transparent" : "bg-black"
      } z-50`}
    >
      <div className="container mx-auto px-4 max-w-8xl lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/img/logo-no-title.webp"
              alt="Menorca Yacht Brokers"
              className="w-14 h-12"
              width={55}
              height={55}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.label}>
                {item.items ? (
                  <>
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
                    <noscript>
                      <div className="py-2">
                        <a
                          href={item.href}
                          className="text-white hover:text-primary"
                        >
                          {item.label}
                        </a>
                        <ul className="pl-4">
                          {item.items.map((subItem) => (
                            <li key={subItem.label}>
                              <a
                                href={subItem.href}
                                className="text-white text-sm py-1 block"
                              >
                                {subItem.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </noscript>
                  </>
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
              href={`${NAVIGATION_LINKS.CONTACTO(locale)}`}
              className="hidden lg:block bg-primary hover:bg-primary/90 text-black min-w-[48px] font-medium py-1 px-5 rounded-lg"
            >
              {t("navigation.contact")}
            </Button>

            {/* Language Selector */}
            <Menu>
              <Menu.Target>
                <div className="bg-primary hover:bg-primary/90 text-black min-w-[48px] rounded p-1 cursor-pointer">
                  <div className="flex gap-2 px-2 items-center">
                    {currentLanguage?.flag && (
                      <Image
                        src={currentLanguage.flag}
                        alt={currentLanguage.name}
                        width={22}
                        height={22}
                        className="text-base font-semibold"
                        style={{ width: "auto", height: "auto" }}
                      />
                    )}
                    {locale?.toUpperCase()}
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
                    <div className="flex items-center gap-3 sm:gap-2">
                      {language.flag && (
                        <Image
                          src={language.flag}
                          alt={language.name}
                          width={22}
                          height={22}
                          style={{ width: "auto", height: "auto" }}
                        />
                      )}
                      <span className="font-medium">{language.name}</span>
                    </div>
                  </Menu.Item>
                ))}
              </Menu.Dropdown>
            </Menu>

            {/* Enlaces de idioma de respaldo para SEO y sin JS */}
            <noscript>
              <div className="hidden lg:flex gap-2">
                {LANGUAGES.map((language) => (
                  <a
                    key={language.code}
                    href={`/${language.code}${asPath}`}
                    className="text-white px-2 text-sm"
                  >
                    {language.code.toUpperCase()}
                  </a>
                ))}
              </div>
            </noscript>

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
          <div ref={mobileMenuRef} className="lg:hidden bg-black">
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
                  href={`${NAVIGATION_LINKS.CONTACTO(locale)}`}
                  className="w-full text-center bg-primary hover:bg-primary/90 text-black font-medium py-2 px-3 rounded-md"
                >
                  {t("navigation.contact")}
                </Button>
              </div>
            </div>
          </div>
        )}

        <noscript>
          <div className="lg:hidden bg-black">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.label} className="py-2">
                  <a href={item.href} className="text-white block px-3 py-2">
                    {item.label}
                  </a>
                  {item.items && (
                    <ul className="pl-4">
                      {item.items.map((subItem) => (
                        <li key={subItem.label}>
                          <a
                            href={subItem.href}
                            className="text-white block px-3 py-2 text-sm"
                          >
                            {subItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              {/* Contact button - mobile sin JS */}
              <div className="py-2">
                <a
                  href={NAVIGATION_LINKS.CONTACTO(locale)}
                  className="block w-full text-center bg-primary text-black font-medium py-2 px-3 rounded-md"
                >
                  {t("navigation.contact")}
                </a>
              </div>
            </div>
          </div>
        </noscript>
      </div>
    </header>
  );
};

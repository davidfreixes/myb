"use client";

import { Button, Menu, Text } from "@mantine/core";
import {
  Anchor,
  AnchorIcon,
  Building2,
  HelpCircle,
  Package,
  Plus,
  Scale,
  Ship,
  Truck,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";

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

const navigation: NavItem[] = [
  { label: "INICIO", href: "/" },
  {
    label: "SERVICIOS",
    href: "/servicios",
    width: "550",
    items: [
      {
        label: "Yacht Broker",
        href: "/servicios/yacht-broker",
        icon: <Ship size={20} />,
        description: "Compra y venta de embarcaciones",
      },
      {
        label: "Yacht Charter",
        href: "/servicios/yacht-charter",
        icon: <Anchor size={20} />,
        description: "Alquiler de embarcaciones",
      },
      {
        label: "Inspecciones y Tasaciones",
        href: "/servicios/inspecciones",
        icon: <Scale size={20} />,
        description: "Evaluación profesional de embarcaciones",
      },
      {
        label: "Cargo & Logística",
        href: "/servicios/logistica",
        icon: <Truck size={20} />,
        description: "Servicios de transporte y logística",
      },
      {
        label: "Asesoría Náutica",
        href: "/servicios/asesoria",
        icon: <HelpCircle size={20} />,
        description: "Consultoría especializada",
      },
      {
        label: "Ship Broker & Charterer",
        href: "/servicios/ship-broker",
        icon: <AnchorIcon size={20} />,
        description: "Servicios de intermediación",
      },
      {
        label: "Servicios de Valor Añadido",
        href: "/servicios/valor-anadido",
        icon: <Plus size={20} />,
        description: "Servicios complementarios",
      },
    ],
  },
  {
    label: "EMPRESA",
    href: "/empresa",
    width: "550",
    items: [
      {
        label: "Proveedores y distribuidores",
        href: "/empresa/proveedores-y-distribuidores",
        icon: <Building2 size={20} />,
        description: "Red de colaboradores y partners",
      },
      {
        label: "Diario del Puerto de Mahón",
        href: "/empresa/diario-del-puerto-de-mahon",
        icon: <Package size={20} />,
        description: "Noticias y actualidad portuaria",
      },
    ],
  },
  {
    label: "QUIÉNES SOMOS",
    href: "/quienes-somos",
    width: "300",
    // items: [
    //   {
    //     label: "Equipo",
    //     href: "/quienes-somos/equipo",
    //     icon: <Users2 size={20} />,
    //     description: "Profesionales a tu servicio",
    //   },
    // ],
  },
];

interface HeaderProps {
  sticky: boolean;
  isTransparent?: boolean;
}

export const Header = ({ sticky, isTransparent = false }: HeaderProps) => {
  return (
    <header
      className={`${sticky ? "fixed" : "absolute"} w-full ${
        isTransparent ? "bg-transparent" : "bg-black"
      } z-50 transition-colors duration-300`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/img/logo.png"
              alt="Menorca Yacht Brokers"
              width={150}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.label}>
                {item.items ? (
                  <Menu
                    trigger="hover"
                    openDelay={100}
                    closeDelay={100}
                    shadow="md"
                    width={item.width}
                  >
                    <Menu.Target>
                      <Button
                        unstyled
                        className="text-white hover:text-primary transition-colors py-2"
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
                      className="text-white hover:text-primary transition-colors py-2"
                    >
                      {item.label}
                    </Button>
                  </Link>
                )}
              </div>
            ))}
            <Button
              unstyled
              className="bg-primary hover:bg-primary/90 text-black min-w-[48px] font-medium px-5 rounded-md"
            >
              CONTACTO
            </Button>
          </nav>

          {/* Language Selector */}
          <div className="flex items-center">
            <Button
              unstyled
              className="bg-primary hover:bg-primary/90 text-white min-w-[48px] rounded p-1"
            >
              ES
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

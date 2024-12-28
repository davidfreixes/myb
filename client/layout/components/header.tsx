import { Button } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface NavItem {
  label: string;
  href: string;
  items?: { label: string; href: string }[];
}

const navigation: NavItem[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Servicios",
    href: "/servicios",
    items: [
      { label: "Compra de Yates", href: "/servicios/compra" },
      { label: "Venta de Yates", href: "/servicios/venta" },
      { label: "Alquiler de Yates", href: "/servicios/alquiler" },
    ],
  },
  {
    label: "Quiénes somos",
    href: "/quienes-somos",
    items: [
      { label: "Nuestra Historia", href: "/quienes-somos/historia" },
      { label: "Equipo", href: "/quienes-somos/equipo" },
    ],
  },
];

interface HeaderProps {
  sticky: boolean;
  isTransparent?: boolean;
}

export const Header = ({ sticky, isTransparent = false }: HeaderProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

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
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8 relative">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Main Menu Button */}
                <Link href={item.href} passHref>
                  <Button className="text-white hover:text-primary transition-colors py-2">
                    {item.label}
                  </Button>
                </Link>
                {/* Dropdown Menu */}
                {item.items && hoveredItem === item.label && (
                  <div className="absolute left-0 mt-2 bg-white text-gray-800 shadow-lg rounded-md min-w-[200px] z-50">
                    {item.items.map((subItem) => (
                      <Link key={subItem.label} href={subItem.href} passHref>
                        <div className="px-4 py-2 hover:bg-gray-100 hover:text-primary transition-all">
                          {subItem.label}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Language Selector */}
          <div className="flex items-center">
            <Button
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

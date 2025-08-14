import { PAGE_ROUTES, translatePath } from "@/routes";

export const NAVIGATION_LINKS = {
  HOME: (locale: string) => translatePath("/", locale),

  YACHT_BROKER: (locale: string) => translatePath("/yacht-broker", locale),
  YACHT_CHARTER: (locale: string) => translatePath("/yacht-charter", locale),
  QUIENES_SOMOS: (locale: string) => translatePath("/quienes-somos", locale),
  CONTACTO: (locale: string) => translatePath("/contacto", locale),
  BLOG: (locale: string) => translatePath("/blog", locale),
  INSPECCIONES: (locale: string) => translatePath("/inspecciones", locale),
  LOGISTICA: (locale: string) => translatePath("/logistica", locale),
  ASESORIA_NAUTICA: (locale: string) =>
    translatePath("consultoria-nautica", locale),
  BUNKER_SUPPLY: (locale: string) => translatePath("bunker-supply", locale),
  VALOR_AÑADIDO: (locale: string) =>
    translatePath("servicios-valor-anadido", locale),
  PROVEEDORES_Y_DISTRIBUIDORES: (locale: string) =>
    translatePath("proveedores-y-distribuidores", locale),
  DIARIO_PUERTO_MAHON: (locale: string) =>
    translatePath("diario-del-puerto-de-mahon", locale),
  CONDICIONES_Y_TARIFAS: (locale: string) =>
    translatePath("condiciones-y-tarifas", locale),
  CONTRATOS_DE_COMPRAVENTA: (locale: string) =>
    translatePath("contratos-de-compraventa", locale),
  POLITICA_DE_PRIVACIDAD: (locale: string) =>
    translatePath("politica-de-privacidad", locale),
  AVISO_LEGAL: (locale: string) => translatePath("aviso-legal", locale),
};

export function getNavKeyFromPath(path: string): string | null {
  // Remove query and hash
  const cleanPath = path.split("?")[0].split("#")[0];
  // Normalize trailing slash
  const normalized =
    cleanPath.endsWith("/") && cleanPath.length > 1
      ? cleanPath.slice(0, -1)
      : cleanPath;

  for (const [key, fn] of Object.entries(NAVIGATION_LINKS)) {
    for (const route of PAGE_ROUTES) {
      // Check all slugs for this route
      if (
        [route.default, route.en, route.cat, route.fr].some(
          (slug) =>
            slug === normalized ||
            (slug !== "/" && normalized.startsWith(slug + "/"))
        )
      ) {
        // Key in LOCALIZED_NAVIGATION_LINKS is the logical key
        if (
          fn.toString().includes(route.default) // crude check: function uses this default route
        ) {
          return key;
        }
      }
    }
  }
  return null;
}

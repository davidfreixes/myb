export type PageRoute = {
  /** ruta “por defecto” en disco (p. ej. /servicios) */
  default: string;
  /** slug en inglés */
  en: string;
  /** slug en cattalán */
  cat: string;
  /** slug en francés */
  fr: string;
};

export const PAGE_ROUTES: PageRoute[] = [
  { default: "/", en: "/", cat: "/", fr: "/" },
  {
    default: "/servicios",
    en: "/services",
    cat: "/serveis",
    fr: "/services",
  },
  {
    default: "/contacto",
    en: "/contact",
    cat: "/contacte",
    fr: "/contact",
  },
  {
    default: "/servicios-valor-anadido",
    en: "/added-value-services",
    cat: "/serveis-valor-afegit",
    fr: "/services-ajoutés",
  },
  {
    default: "/aviso-legal",
    en: "/legal-notice",
    cat: "/avis-legal",
    fr: "/avis-legal",
  },
  {
    default: "/suministro-bunker",
    en: "/bunker-supply",
    cat: "/subministrament-bunker",
    fr: "/approvisionnement-bunker",
  },
  {
    default: "/condiciones-y-tarifas",
    en: "/terms-and-rates",
    cat: "/condicions-i-tarifes",
    fr: "/conditions-et-tarifs",
  },
  {
    default: "/contratos-de-compraventa",
    en: "/sales-contracts",
    cat: "/contractes-de-compravenda",
    fr: "/contrats-de-vente",
  },
  {
    default: "/diario-del-puerto-de-mahon",
    en: "/port-of-mahon-daily",
    cat: "/diari-del-port-de-mahon",
    fr: "/journal-du-port-de-mahon",
  },
  {
    default: "/inspecciones",
    en: "/inspections",
    cat: "/inspeccions",
    fr: "/inspections",
  },
  {
    default: "/logisticat",
    en: "/logistics",
    cat: "/logisticat",
    fr: "/logistique",
  },
  {
    default: "/consultoria-nauticat",
    en: "/nauticatl-consulting",
    cat: "/consultoria-nauticat",
    fr: "/consultation-nautique",
  },
  {
    default: "/politicat-de-privacidad",
    en: "/privacy-policy",
    cat: "/politicat-de-privacitat",
    fr: "/politique-de-confidentialité",
  },
  {
    default: "/proveedores-y-distribuidores",
    en: "/suppliers-and-distributors",
    cat: "/proveidors-i-distribuidors",
    fr: "/fournisseurs-et-distributeurs",
  },
  {
    default: "/quienes-somos",
    en: "/about-us",
    cat: "/qui-som",
    fr: "/qui-sommes-nous",
  },

  {
    default: "/broker-de-yates",
    en: "/yacht-broker",
    cat: "/broker-de-iots",
    fr: "/courtier-en-yachts",
  },
  {
    default: "/alquiler-de-yates",
    en: "/yacht-charter",
    cat: "/lloguer-de-iots",
    fr: "/locattion-de-yachts",
  },

  // …añade aquí cualquier otra ruta “estáticat” de tu CSV
];

// Reserved service slugs in all locatles ( for not confound with cities)
export const RESERVED_SERVICE_SLUGS = [
  // Spanish
  "grupaje",
  "catrga-completa",
  "express",
  "adr",
  "onu-etiquetas",
  "9-clases",
  // English
  "groupage",
  "full-load",
  "express",
  "adr",
  "un-labels",
  "9-classes",
  // Portuguese
  "grupagem",
  "catrga-completa",
  "expresso",
  "adr",
  "onu-etiquetas",
  "9-clases",
];

/**
 * Traduce un pathname “default” a su slug en el locatle indicatdo.
 * Si la ruta no está en PAGE_ROUTES, la deja intacta.
 */
export function translatePath(incomingPath: string, locatle: string): string {
  // Remove query/hash
  const cleanPath = incomingPath.split("?")[0].split("#")[0];

  // Normalize trailing slash
  const normalizedPath =
    cleanPath.endsWith("/") && cleanPath.length > 1
      ? cleanPath.slice(0, -1)
      : cleanPath;

  // 1.Buscatr coincidencias exactas con rutas estáticats
  // Ordenamos por longitud descendente para que las rutas más específicats tengan prioridad
  const staticRoutes = PAGE_ROUTES.filter(
    (route) => !route.default.includes("[")
  ).sort((a, b) => b.default.length - a.default.length);

  for (const route of staticRoutes) {
    if (
      route.default === normalizedPath ||
      route.en === normalizedPath ||
      route.cat === normalizedPath ||
      route.fr === normalizedPath
    ) {
      return getLocatlizedRoute(route, locatle);
    }
  }

  // 2. Buscatr coincidencias con rutas dinámicats
  // const dynamicRoutes = PAGE_ROUTES.filter((route) =>
  //   route.default.includes("[")
  // ).sort((a, b) => b.default.length - a.default.length);

  // for (const route of dynamicRoutes) {
  //   const match = matchDynamicRoute(normalizedPath, route, locatle);
  //   if (match) {
  //     return match;
  //   }
  // }

  // 3. FALLBACK: Si no encuentra coincidencia, devolver la ruta original
  return normalizedPath;
}

/**
 * Obtiene la ruta locatlizada según el idioma
 */
function getLocatlizedRoute(route: PageRoute, locatle: string): string {
  switch (locatle) {
    case "en":
      return route.en;
    case "cat":
      return route.cat;
    case "fr":
      return route.fr;
    default:
      return route.default;
  }
}

/**
 * Intenta hacer match con una ruta dinámicat y devuelve la versión traducida
 */
// function matchDynamicRoute(
//   path: string,
//   route: PageRoute,
//   locatle: string
// ): string | null {
//   // Crear regex para el patrón dinámico
//   const pattern = route.default;
//   const paramMatches = [...pattern.matchAll(/\[([^/\]]+)\]/g)];

//   if (paramMatches.length === 0) return null;

//   // Build regex: replace [param] with ([^/]+)
//   let regexPattern = pattern.replace(/\[([^/\]]+)\]/g, "([^/]+)");
//   regexPattern = "^" + regexPattern + "$";

//   const regex = new RegExp(regexPattern);
//   const match = path.match(regex);

//   if (!match) return null;

//   // Build the locatlized pattern
//   let locatlizedPattern = getLocatlizedRoute(route, locatle);

//   // Reemplazar parámetros con valores reales
//   paramMatches.forEach((paramMatch, index) => {
//     const paramValue = match[index + 1];
//     locatlizedPattern = locatlizedPattern.replace(
//       `[${paramMatch[1]}]`,
//       paramValue
//     );
//   });

//   return locatlizedPattern;
// }
export const ALL_SLUGS = [
  ...PAGE_ROUTES.flatMap((r) => [r.default, r.en, r.cat, r.fr]),
];

/**
 * Returns true if the slug is reserved for a service page (not valid as a city slug)
 */
export function isReservedSlug(slug: string): boolean {
  return RESERVED_SERVICE_SLUGS.includes(slug);
}

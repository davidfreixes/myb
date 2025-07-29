export type PageRoute = {
  /** ruta “por defecto” en disco (p. ej. /servicios) */
  default: string;
  /** slug en inglés */
  en: string;
  /** slug en portugués */
  pt: string;
  

};

export const PAGE_ROUTES: PageRoute[] = [
  { default: '/', en: '/', pt: '/' },
  { default: '/servicios', en: '/services', pt: '/servicos' },
  { default: '/contacto', en: '/contact', pt: '/contacto' },
  { default: '/blog', en: '/blog', pt: '/blog' },
  {
    default: '/terms-and-conditions-gdpr',
    en: '/gdpr-terms-and-conditions',
    pt: '/termos-e-condicoes-gdpr',
  },
  { default: '/api-docs', en: '/api-docs', pt: '/api-docs' },
  { default: '/api-landing', en: '/api-landing', pt: '/api-landing' },
  {
    default: '/transporte-terrestre-mercancias',
    en: '/road-freight-transport',
    pt: '/transporte-terrestre-mercadorias',
  },
  {
    default: '/transporte-terrestre-mercancias/adr',
    en: '/road-freight-transport/adr',
    pt: '/transporte-terrestre-mercadorias/adr',
  },
  {
    default: '/transporte-terrestre-mercancias/adr/onu-etiquetas',
    en: '/road-freight-transport/adr/un-labels',
    pt: '/transporte-terrestre-mercadorias/adr/onu-etiquetas',
  },
  {
    default: '/transporte-terrestre-mercancias/adr/9-clases',
    en: '/road-freight-transport/adr/9-classes',
    pt: '/transporte-terrestre-mercadorias/adr/9-clases',
  },
  {
    default: '/transporte-terrestre-mercancias/documentacion',
    en: '/road-freight-transport/documentation',
    pt: '/transporte-terrestre-mercadorias/documentacao',
  },
  {
    default: '/transporte-terrestre-mercancias/documentacion/carta-porte',
    en: '/road-freight-transport/documentation/waybill',
    pt: '/transporte-terrestre-mercadorias/documentacao/carta-porte',
  },
  {
    default: '/transporte-terrestre-mercancias/documentacion/cmr',
    en: '/road-freight-transport/documentation/cmr',
    pt: '/transporte-terrestre-mercadorias/documentacao/cmr',
  },
  {
    default: '/transporte-terrestre-mercancias/documentacion/dua',
    en: '/road-freight-transport/documentation/sad',
    pt: '/transporte-terrestre-mercadorias/documentacao/declaracao-aduaneira',
  },
  {
    default: '/transporte-terrestre-mercancias/documentacion/dae',
    en: '/road-freight-transport/documentation/ead',
    pt: '/transporte-terrestre-mercadorias/documentacao/dae',
  },
  {
    default: '/transporte-terrestre-mercancias/documentacion/eur-1',
    en: '/road-freight-transport/documentation/eur-1',
    pt: '/transporte-terrestre-mercadorias/documentacao/eur-1',
  },
  {
    default: '/transporte-terrestre-mercancias/documentacion/atr',
    en: '/road-freight-transport/documentation/atr',
    pt: '/transporte-terrestre-mercadorias/documentacao/atr',
  },
  {
    default: '/transporte-terrestre-mercancias/documentacion/transito-t1-t2',
    en: '/road-freight-transport/documentation/transit-t1-t2',
    pt: '/transporte-terrestre-mercadorias/documentacao/transito-t1-t2',
  },
  {
    default: '/transporte-terrestre-mercancias/documentacion/dgd',
    en: '/road-freight-transport/documentation/dgd',
    pt: '/transporte-terrestre-mercadorias/documentacao/dgd',
  },
  {
    default:
      '/transporte-terrestre-mercancias/documentacion/declaracion-sumaria',
    en: '/road-freight-transport/documentation/ens',
    pt: '/transporte-terrestre-mercadorias/documentacao/dse',
  },
  {
    default: '/transporte-terrestre-mercancias/seguros',
    en: '/road-freight-transport/insurance',
    pt: '/transporte-terrestre-mercadorias/seguros',
  },
  {
    default: '/transporte-terrestre-mercancias/seguros/lott',
    en: '/road-freight-transport/insurance/lott',
    pt: '/transporte-terrestre-mercadorias/seguros/lott',
  },
  {
    default: '/transporte-terrestre-mercancias/seguros/cmr',
    en: '/road-freight-transport/insurance/cmr',
    pt: '/transporte-terrestre-mercadorias/seguros/cmr',
  },
  {
    default: '/transporte-terrestre-mercancias/seguros/todo-riesgo',
    en: '/road-freight-transport/insurance/all-risk',
    pt: '/transporte-terrestre-mercadorias/seguros/todo-riesgo',
  },
  {
    default: '/aduanas',
    en: '/customs',
    pt: '/aduanas',
  },
  {
    default: '/aduanas/inspeccion-canales',
    en: '/customs/inspection-channels',
    pt: '/aduanas/inspeccion-canales',
  },
  {
    default: '/aduanas/pif',
    en: '/customs/pif',
    pt: '/aduanas/pif',
  },
  // …añade aquí cualquier otra ruta “estática” de tu CSV
];

// Reserved service slugs in all locales ( for not confound with cities)
export const RESERVED_SERVICE_SLUGS = [
  // Spanish
  'grupaje',
  'carga-completa',
  'express',
  'adr',
  'onu-etiquetas',
  '9-clases',
  // English
  'groupage',
  'full-load',
  'express',
  'adr',
  'un-labels',
  '9-classes',
  // Portuguese
  'grupagem',
  'carga-completa',
  'expresso',
  'adr',
  'onu-etiquetas',
  '9-clases',
];

/**
 * Traduce un pathname “default” a su slug en el locale indicado.
 * Si la ruta no está en PAGE_ROUTES, la deja intacta.
 */
export function translatePath(incomingPath: string, locale: string): string {
  // Remove query/hash
  const cleanPath = incomingPath.split('?')[0].split('#')[0];

  // Normalize trailing slash
  const normalizedPath =
    cleanPath.endsWith('/') && cleanPath.length > 1
      ? cleanPath.slice(0, -1)
      : cleanPath;

  // 1.Buscar coincidencias exactas con rutas estáticas
  // Ordenamos por longitud descendente para que las rutas más específicas tengan prioridad
  const staticRoutes = PAGE_ROUTES.filter(
    (route) => !route.default.includes('[')
  ).sort((a, b) => b.default.length - a.default.length);

  for (const route of staticRoutes) {
    if (
      route.default === normalizedPath ||
      route.en === normalizedPath ||
      route.pt === normalizedPath
    ) {
      return getLocalizedRoute(route, locale);
    }
  }

  // 2. Buscar coincidencias con rutas dinámicas
  const dynamicRoutes = PAGE_ROUTES.filter((route) =>
    route.default.includes('[')
  ).sort((a, b) => b.default.length - a.default.length);

  for (const route of dynamicRoutes) {
    const match = matchDynamicRoute(normalizedPath, route, locale);
    if (match) {
      return match;
    }
  }

  // 3. FALLBACK: Si no encuentra coincidencia, devolver la ruta original
  return normalizedPath;
}

/**
 * Obtiene la ruta localizada según el idioma
 */
function getLocalizedRoute(route: PageRoute, locale: string): string {
  switch (locale) {
    case 'en':
      return route.en;
    case 'pt':
      return route.pt;
    default:
      return route.default;
  }
}

/**
 * Intenta hacer match con una ruta dinámica y devuelve la versión traducida
 */
function matchDynamicRoute(
  path: string,
  route: PageRoute,
  locale: string
): string | null {
  // Crear regex para el patrón dinámico
  const pattern = route.default;
  const paramMatches = [...pattern.matchAll(/\[([^/\]]+)\]/g)];

  if (paramMatches.length === 0) return null;

  // Build regex: replace [param] with ([^/]+)
  let regexPattern = pattern.replace(/\[([^/\]]+)\]/g, '([^/]+)');
  regexPattern = '^' + regexPattern + '$';

  const regex = new RegExp(regexPattern);
  const match = path.match(regex);

  if (!match) return null;

  // Build the localized pattern
  let localizedPattern = getLocalizedRoute(route, locale);

  // Reemplazar parámetros con valores reales
  paramMatches.forEach((paramMatch, index) => {
    const paramValue = match[index + 1];
    localizedPattern = localizedPattern.replace(
      `[${paramMatch[1]}]`,
      paramValue
    );
  });

  return localizedPattern;
}
export const ALL_SLUGS = [
  ...PAGE_ROUTES.flatMap((r) => [r.default, r.en, r.pt]),
];

/**
 * Returns true if the slug is reserved for a service page (not valid as a city slug)
 */
export function isReservedSlug(slug: string): boolean {
  return RESERVED_SERVICE_SLUGS.includes(slug);
}

import { PAGE_ROUTES, translatePath } from "@/routes";
import * as fs from "fs";
import nodePath from "path";

const currDate = new Date().toISOString();

const DOMAIN_BY_LOCALE = {
  es: "https://www.menorcabrokers.com",
  en: "https://www.menorcabrokers.com",
  cat: "https://www.menorcabrokers.com",
  fr: "https://www.menorcabrokers.com",
};

// Lee las páginas del sistema de archivos
type Page = {
  url: string;
  sons: Page[];
};

export const getPagesFromFolder = (dir: string): Page[] => {
  const content = fs.readdirSync(dir);
  const result: Page[] = [];

  for (const file of content) {
    if (
      file.startsWith("_") ||
      file === "api" ||
      file.includes("404") ||
      file.includes("admin") ||
      file.includes("auth") ||
      file.includes("superadmin") ||
      file.includes("app")
    ) {
      continue;
    }
    result.push({
      url: file.includes("index") ? "/" : `/${file.replace(/\.tsx?$/, "")}`,
      sons: [],
    });
  }

  for (const page of result) {
    const full = nodePath.join(dir, page.url);
    if (
      page.url !== "/" &&
      fs.existsSync(full) &&
      fs.lstatSync(full).isDirectory()
    ) {
      page.sons = getPagesFromFolder(full);
    }
  }

  return result;
};

// Aplana el árbol de páginas en URLs completas
const collectStatic = (structure: Page[], mainDomain: string): string[] => {
  const out: string[] = [];
  const walk = (pages: Page[], prefix: string) => {
    pages.forEach((p) => {
      out.push(prefix + (p.url === "/" ? "" : p.url));
      if (p.sons.length) walk(p.sons, prefix + p.url);
    });
  };
  walk(structure, mainDomain);
  return out;
};

// Limpia y elimina duplicados
const excludeUrls = (urls: string[]) =>
  Array.from(new Set(urls.map((u) => u.replace(/\/$/, ""))));

// Genera bloques XML del sitemap
export const getSitemap = async (
  structure: Page[],
  locale: "es" | "en" | "cat" | "fr"
): Promise<string[]> => {
  const env = process.env.NODE_ENV;
  const domain =
    env === "production" ? DOMAIN_BY_LOCALE[locale] : "http://localhost:3000";

  const urls: string[] = PAGE_ROUTES.map((r) => {
    // Elige el path base correcto para el locale
    const basePath = r[locale] || r.default;
    return domain + translatePath(basePath, locale);
  });

  // 2️⃣ Añade todas las páginas estáticas (filesystem)
  urls.push(...collectStatic(structure, domain));
  const finalUrls = excludeUrls(urls);

  return finalUrls.map((u) => {
    return `
<url>
  <loc>${u}</loc>
  <lastmod>${currDate}</lastmod>
</url>`.trim();
  });
};

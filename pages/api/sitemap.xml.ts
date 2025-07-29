import { getPagesFromFolder, getSitemap } from "@/lib/seo/sitemap";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";

const DOMAIN_TO_LOCALE: Record<string, "es"> = {
  "www.menorcabrokers.com": "es",
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const hostHeader = req.headers.host || "";
  const host = hostHeader.split(":")[0];

  const locale = DOMAIN_TO_LOCALE[host] || "es";

  const pagesDir = path.join(process.cwd(), "pages");
  const structure = getPagesFromFolder(pagesDir);
  const pagesSitemap = await getSitemap(structure, locale);

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="
    http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
  "
>
  ${pagesSitemap.join("\n")}
</urlset>`.trim();

  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(sitemapXml);
}

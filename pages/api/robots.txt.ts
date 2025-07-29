import type { NextApiRequest, NextApiResponse } from "next";

const commonBlockers = `
User-agent: ia_archiver
Disallow: /
User-agent: UbiCrawler
Disallow: /
User-agent: DOC
Disallow: /
User-agent: Zao
Disallow: /
User-agent: sitecheck.internetseer.com
Disallow: /
User-agent: Zealbot
Disallow: /
User-agent: MSIECrawler
Disallow: /
User-agent: SiteSnagger
Disallow: /
User-agent: WebStripper
Disallow: /
User-agent: WebCopier
Disallow: /
User-agent: Fetch
Disallow: /
User-agent: Offline Explorer
Disallow: /
User-agent: Teleport
Disallow: /
User-agent: TeleportPro
Disallow: /
User-agent: WebZIP
Disallow: /
User-agent: linko
Disallow: /
User-agent: HTTrack
Disallow: /
User-agent: Microsoft.URL.Control
Disallow: /
User-agent: Xenu
Disallow: /
User-agent: larbin
Disallow: /
User-agent: libwww
Disallow: /
User-agent: ZyBORG
Disallow: /
User-agent: Download Ninja
Disallow: /
User-agent: Slurp
Disallow: /
User-agent: Maxthon
Disallow: /
User-agent: CNCDialer
Disallow: /
User-agent: AhrefsBot
Disallow: /

User-agent: *
Allow: /
`;

const getRobotsTxt = (host: string) => {
  const normalizedHost = host.toLowerCase().startsWith("www.")
    ? host
    : "www." + host;
  const sitemapLine = robotsByDomain[normalizedHost] || "";
  return `${commonBlockers}\n\n${sitemapLine}`.trim();
};

const robotsByDomain = {
  "www.menorcabrokers.com":
    "Sitemap: https://www.menorcabrokers.com/sitemap.xml",
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const host = req.headers.host || "";
  const content = getRobotsTxt(host);

  res.setHeader("Content-Type", "text/plain");
  res.write(content + "\n");
  res.end();
}

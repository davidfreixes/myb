export const getRobotsContent = (sitemapUrl: string): string => {
  return `
  # Agentes nocivos conocidos 
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

# Permitir todo lo demás
User-agent: *
Allow: /
  
Sitemap: ${sitemapUrl}
    `.trim();
};

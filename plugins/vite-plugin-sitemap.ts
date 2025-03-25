import { PluginOption } from 'vite';
import routes from './../src/routes/routes.json';
import fs from 'fs';

type SEO = {
  priority?: 0.0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1.0;
  changefreq?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never';
  lastmod?: string;
};

type Route = {
  path: string;
  isPublic?: boolean;
  seo?: SEO;
};

export default function vitePluginSitemap(): PluginOption {
  return {
    name: 'vite-plugin-sitemap',
    async writeBundle() {
      const publicRoutes = (routes as Route[]).filter(
        (route) => route.isPublic !== false
      );

      const sitemapContent = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${publicRoutes
    .map(
      (route) => `
  <url>
    <loc>https://multiple-services-765e6.web.app${route.path}</loc>
    <lastmod>
      ${route.seo?.lastmod || new Date().toISOString().split('T')[0]}
    </lastmod>
    ${
      route.seo?.changefreq
        ? `<changefreq>${route.seo.changefreq}</changefreq>`
        : ''
    }
    ${route.seo?.priority ? `<priority>${route.seo.priority}</priority>` : ''}
  </url>`
    )
    .join('')}
</urlset>`;

      fs.writeFileSync('./dist/sitemap.xml', sitemapContent);
      console.log('✅ sitemap.xml generado con TypeScript!');
    },
  };
}

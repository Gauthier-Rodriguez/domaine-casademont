import { writeFileSync } from 'node:fs';

const domain = 'https://domainecasademont.com'; // Replace with your domain

const pages = [
  {
    path: '',
    priority: 1.0,
    changefreq: 'weekly'
  },
  {
    path: '/wines',
    priority: 0.9,
    changefreq: 'weekly'
  },
  {
    path: '/about',
    priority: 0.8,
    changefreq: 'monthly'
  }
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(({ path, priority, changefreq }) => `
    <url>
      <loc>${domain}${path}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${changefreq}</changefreq>
      <priority>${priority}</priority>
    </url>
  `).join('')}
</urlset>`;

writeFileSync('public/sitemap.xml', sitemap); 
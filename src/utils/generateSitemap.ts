import { writeFileSync } from 'fs';

interface Page {
  path: string;
  priority: number;
  changefreq: string;
}

const domain = 'https://domainecasademont.com';

const pages: Page[] = [
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

const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${pages
    .map(
      ({ path, priority, changefreq }) => `
    <url>
      <loc>${domain}${path}</loc>
      <lastmod>${formatDate(new Date())}</lastmod>
      <changefreq>${changefreq}</changefreq>
      <priority>${priority}</priority>
    </url>`
    )
    .join('')}
</urlset>`;

try {
  writeFileSync('public/sitemap.xml', sitemap);
  console.log('Sitemap generated successfully!');
} catch (error) {
  console.error('Error generating sitemap:', error);
}
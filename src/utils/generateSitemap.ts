import { writeFileSync } from 'node:fs';

const domain = 'https://domainecasademont.com';

// Expand pages array to include all important routes
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
  },
 

];

// Add date formatting helper
const formatDate = (date) => {
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

// Format the XML to be more readable
const formattedSitemap = sitemap
  .trim()
  .replace(/>\s+</g, '><')
  .replace(/(<url>|<\/url>)/g, '\n$1')
  .replace(/(<loc>|<lastmod>|<changefreq>|<priority>)/g, '\n  $1');

try {
  writeFileSync('public/sitemap.xml', formattedSitemap);
  console.log('Sitemap generated successfully!');
} catch (error) {
  console.error('Error generating sitemap:', error);
}
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({ title, description, image, url, type = 'website' }: SEOProps) => {
  const siteUrl = 'https://domainecasademont.com'; 
  const defaultImage = 'public/favicon.svg'

  return (
    <Helmet>
      {/* Basic */}
      <title>{`${title} | Domaine Casademont`}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${siteUrl}${url || ''}`} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={`${siteUrl}${url || ''}`} />
      <meta property="og:site_name" content="Domaine Casademont" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />

      {/* Additional */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
    </Helmet>
  );
};

export default SEO; 
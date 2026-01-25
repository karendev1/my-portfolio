import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const DEFAULT_TITLE = 'Karen Santana - Frontend Developer Portfolio';
const DEFAULT_DESCRIPTION = 'Karen Santana - Frontend Developer specializing in React, TypeScript, and modern web technologies. Building responsive and performant web applications with 5+ years of experience.';
const DEFAULT_IMAGE = '/og-image.png';
const DEFAULT_URL = 'https://karen-portfolio.vercel.app';

export function SEO({ 
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = 'Karen Santana, frontend developer, React developer, TypeScript developer, web developer, JavaScript developer, portfolio, full stack developer, UI developer, UX developer',
  image = DEFAULT_IMAGE,
  url = DEFAULT_URL,
  type = 'website'
}: SEOProps) {
  const fullTitle = title === DEFAULT_TITLE ? title : `${title} | ${DEFAULT_TITLE}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Karen" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#7c3aed" />
      <meta name="msapplication-TileColor" content="#7c3aed" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      
      {/* Structured Data for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Karen Santana",
          "jobTitle": "Frontend Developer",
          "description": "Frontend Developer specializing in React, TypeScript, and modern web technologies",
          "url": "https://karen-portfolio.vercel.app",
          "sameAs": [
            "https://www.linkedin.com/in/karennascimento3/",
            "https://github.com/karendev1"
          ],
          "knowsAbout": [
            "React",
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS",
            "Tailwind CSS",
            "Next.js",
            "Node.js",
            "Angular"
          ],
          "offers": {
            "@type": "Service",
            "serviceType": "Frontend Development",
            "description": "Building responsive and performant web applications"
          }
        })}
      </script>
    </Helmet>
  );
}

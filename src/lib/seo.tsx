import { Metadata } from "next";
import { siteMetadata, structuredData } from "@/config/seo";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  author?: string;
  publishedDate?: string;
  updatedDate?: string;
  robots?: string;
  language?: string;
}

export function generateSEOMetadata(params: SEOProps): Metadata {
  const title = params.title
    ? `${params.title} | ${siteMetadata.author}`
    : siteMetadata.title;
  const description = params.description || siteMetadata.defaultDescription;
  const keywords = params.keywords
    ? [...params.keywords, ...siteMetadata.keywords]
    : siteMetadata.keywords;

  return {
    title,
    description,
    keywords,
    authors: siteMetadata.authors,
    creator: siteMetadata.author,
    publisher: siteMetadata.author,
    openGraph: {
      type: (params.ogType as any) || "website",
      title,
      description,
      url: params.canonicalUrl || siteMetadata.siteUrl,
      images: [
        {
          url: params.ogImage || siteMetadata.socialBanner,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: siteMetadata.author,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [params.ogImage || siteMetadata.socialBanner],
    },
    robots: params.robots || "index, follow",
    alternates: {
      canonical: params.canonicalUrl || siteMetadata.siteUrl,
    },
  };
}

interface JSONLDProps {
  type: "Organization" | "Event" | "WebPage" | "BreadcrumbList";
  data?: any;
}

export function JSONLDScript({ type, data }: JSONLDProps) {
  let schema =
    structuredData[type.toLowerCase() as keyof typeof structuredData];

  if (typeof schema === "function") {
    schema = schema(data);
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface SEOComponentProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  children?: React.ReactNode;
}

export function SEOHead({
  title,
  description,
  keywords,
  ogImage,
  children,
}: SEOComponentProps) {
  return (
    <>
      <title>{title || siteMetadata.title}</title>
      <meta
        name="description"
        content={description || siteMetadata.description}
      />
      {keywords && <meta name="keywords" content={keywords.join(", ")} />}
      <meta name="author" content={siteMetadata.author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || siteMetadata.title} />
      <meta
        property="og:description"
        content={description || siteMetadata.description}
      />
      <meta
        property="og:image"
        content={ogImage || siteMetadata.socialBanner}
      />
      <meta property="og:url" content={siteMetadata.siteUrl} />
      <meta property="og:site_name" content={siteMetadata.author} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || siteMetadata.title} />
      <meta
        name="twitter:description"
        content={description || siteMetadata.description}
      />
      <meta
        name="twitter:image"
        content={ogImage || siteMetadata.socialBanner}
      />
      <meta name="twitter:creator" content="@SoftPowerAwards" />

      {/* Canonical */}
      <link rel="canonical" href={siteMetadata.siteUrl} />

      {/* Alternate languages */}
      <link
        rel="alternate"
        hrefLang="fr-DZ"
        href={`${siteMetadata.siteUrl}/fr`}
      />
      <link
        rel="alternate"
        hrefLang="ar-DZ"
        href={`${siteMetadata.siteUrl}/ar`}
      />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Verification */}
      <meta
        name="google-site-verification"
        content={siteMetadata.verification.google}
      />

      {/* Additional SEO */}
      <meta name="theme-color" content="#d4af37" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="format-detection" content="email=yes" />

      {children}
    </>
  );
}

// Sitemap generator
export function generateSitemap() {
  const baseUrl = siteMetadata.siteUrl;

  const routes = [
    {
      url: "/",
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 1.0,
    },
    {
      url: "/auth/login",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: "/auth/register",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: "/dashboard/user",
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.7,
    },
    {
      url: "/dashboard/admin",
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.7,
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
  `,
    )
    .join("")}
</urlset>`;

  return sitemap;
}

// Robots.txt generator
export function generateRobots() {
  return `# Robots.txt for Algerian Soft Power Awards

User-agent: *
Allow: /
Disallow: /admin
Disallow: /dashboard
Disallow: /.env
Disallow: /private

# Crawl delay (in seconds)
Crawl-delay: 1

# Sitemap
Sitemap: https://algerian-soft-power-awards.com/sitemap.xml

# Google specific
User-agent: Googlebot
Allow: /
Crawl-delay: 0`;
}

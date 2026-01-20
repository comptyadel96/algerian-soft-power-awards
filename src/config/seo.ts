import { Metadata } from "next";

export const siteMetadata = {
  title: "Algerian Soft Power Awards | Célébrant l'excellence algérienne",
  titleTemplate: "%s | Algerian Soft Power Awards",
  description:
    "Les Awards Algerian Soft Power célèbrent les individus et organisations qui incarnent l'excellence et l'influence culturelle de l'Algérie sur la scène mondiale.",
  defaultDescription:
    "Découvrez et célébrez l'excellence algérienne avec les Awards Algerian Soft Power.",
  siteUrl: "https://algerian-soft-power-awards.com",
  socialBanner: "https://algerian-soft-power-awards.com/og-image.jpg",
  author: "Algerian Soft Power Awards",
  email: "info@aspa.com",
  phone: "+213 (0) 23 XX XX XX",
  locale: "fr_DZ",
  locales: ["fr_DZ", "ar_DZ"],
  keywords: [
    "Algerian Soft Power",
    "Awards",
    "Excellence algérienne",
    "Influence culturelle",
    "Algérie",
    "Soft Power Awards",
    "Célébration",
    "Reconnaissance",
    "Culture algérienne",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [
    {
      name: "Algerian Soft Power Awards Team",
      url: "https://algerian-soft-power-awards.com",
    },
  ],
  openGraph: {
    type: "website",
    locale: "fr_DZ",
    url: "https://algerian-soft-power-awards.com",
    title: "Algerian Soft Power Awards | Célébrant l'excellence algérienne",
    description:
      "Découvrez les individus et organisations les plus influents qui représentent l'Algérie sur la scène mondiale.",
    images: [
      {
        url: "https://algerian-soft-power-awards.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Algerian Soft Power Awards",
        type: "image/jpeg",
      },
      {
        url: "https://algerian-soft-power-awards.com/og-image-square.jpg",
        width: 800,
        height: 800,
        alt: "Algerian Soft Power Awards",
        type: "image/jpeg",
      },
    ],
    siteName: "Algerian Soft Power Awards",
  },
  twitter: {
    card: "summary_large_image",
    title: "Algerian Soft Power Awards",
    description:
      "Célébrant l'excellence algérienne et l'influence culturelle mondiale",
    creator: "@SoftPowerAwards",
    images: ["https://algerian-soft-power-awards.com/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-verification-code",
  },
  alternates: {
    canonical: "https://algerian-soft-power-awards.com",
    languages: {
      "fr-DZ": "https://algerian-soft-power-awards.com/fr",
      "ar-DZ": "https://algerian-soft-power-awards.com/ar",
      "en-US": "https://algerian-soft-power-awards.com/en",
    },
  },
};

export const generateMetadata = (): Metadata => ({
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: siteMetadata.authors,
  creator: siteMetadata.author,
  publisher: siteMetadata.author,
  robots: siteMetadata.robots,
  openGraph: siteMetadata.openGraph,
  twitter: siteMetadata.twitter,
  alternates: siteMetadata.alternates,
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: siteMetadata.title,
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
});

export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Algerian Soft Power Awards",
    url: "https://algerian-soft-power-awards.com",
    logo: "https://algerian-soft-power-awards.com/logo.png",
    description: siteMetadata.description,
    sameAs: [
      "https://www.facebook.com/softpowerawards",
      "https://www.twitter.com/SoftPowerAwards",
      "https://www.instagram.com/softpowerawards",
      "https://www.linkedin.com/company/algerian-soft-power-awards",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteMetadata.phone,
      contactType: "Customer Service",
      email: siteMetadata.email,
    },
  },

  event: {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Algerian Soft Power Awards 2026",
    description: siteMetadata.description,
    image: siteMetadata.socialBanner,
    startDate: "2026-06-01T09:00:00+01:00",
    endDate: "2026-06-30T23:59:59+01:00",
    eventAttendanceMode: "OfflineEventAttendanceMode",
    eventStatus: "EventScheduled",
    location: {
      "@type": "Place",
      name: "Algiers, Algeria",
      address: {
        "@type": "PostalAddress",
        addressCountry: "DZ",
        addressLocality: "Alger",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Algerian Soft Power Awards",
      url: "https://algerian-soft-power-awards.com",
    },
    offers: {
      "@type": "Offer",
      url: "https://algerian-soft-power-awards.com",
      price: "0",
      priceCurrency: "DZD",
      availability: "https://schema.org/PreOrder",
      validFrom: "2026-01-01T09:00:00+01:00",
    },
  },

  webpage: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: siteMetadata.title,
    description: siteMetadata.description,
    url: "https://algerian-soft-power-awards.com",
    isPartOf: {
      "@id": "https://algerian-soft-power-awards.com/#website",
    },
    potentialAction: {
      "@type": "ReadAction",
      target: ["https://algerian-soft-power-awards.com"],
    },
  },

  breadcrumb: (paths: Array<{ name: string; url: string }>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: paths.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }),
};

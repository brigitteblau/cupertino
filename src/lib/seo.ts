import type { Metadata } from "next"
import { SITE_URL } from "./constants"

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cupertino Store · iPhone a precio oficial en Argentina",
    template: "%s · Cupertino Store",
  },
  description:
    "Importamos iPhones directo. Garantía certificada Apple, 100% original sellado. Envío en 24-48hs a CABA. Consulta por WhatsApp.",
  keywords: [
    "iPhone Argentina",
    "comprar iPhone",
    "iPhone precio oficial",
    "iPhone importado",
    "iPhone sellado",
    "Cupertino Store",
    "MacBook Argentina",
    "Apple Argentina",
  ],
  authors: [{ name: "Cupertino Store" }],
  creator: "Cupertino Store",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: "Cupertino Store",
    title: "Cupertino Store · iPhone a precio oficial en Argentina",
    description:
      "Importamos iPhones directo. Garantía certificada Apple, 100% original sellado. Envío en 24-48hs a CABA.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cupertino Store - iPhones a precio oficial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cupertino Store · iPhone a precio oficial en Argentina",
    description:
      "Importamos iPhones directo. Garantía certificada Apple. Envío en 24-48hs a CABA.",
    images: ["/og-image.png"],
  },
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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cupertino Store",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+54-9-11-6121-3913",
    contactType: "customer service",
    availableLanguage: "Spanish",
  },
  sameAs: ["https://instagram.com/cupertinostoreok"],
  description:
    "Distribuidor autorizado de productos Apple importados legalmente en Argentina.",
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "Cupertino Store",
  description:
    "Importación y venta de iPhones y MacBooks a precio oficial. Garantía certificada Apple.",
  url: SITE_URL,
  telephone: "+54-9-11-6121-3913",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressRegion: "CABA",
    addressCountry: "AR",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "20:00",
  },
  priceRange: "$$$$",
  currenciesAccepted: "USD, ARS",
  paymentAccepted: "Cash, Bank Transfer",
}

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL, SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION, PUBLISHER_NAME } from "@/lib/newsData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans-editorial",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "FiscalFusion Editorial Board", url: `${SITE_URL}/team` }],
  generator: "Next.js",
  keywords: [
    "FiscalFusion",
    "financial news",
    "global markets",
    "economic analysis",
    "capital markets",
    "monetary policy",
    "business intelligence",
    "corporate strategy",
    "sovereign wealth",
    "investigative reporting"
  ],
  referrer: "origin-when-cross-origin",
  creator: PUBLISHER_NAME,
  publisher: PUBLISHER_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [{ url: "/rss.xml", title: `${SITE_NAME} RSS Feed` }],
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/us_futures_oil_prices_inflation.webp",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - ${SITE_TAGLINE}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    site: "@FiscalFusion",
    creator: "@FiscalFusion",
    images: ["/images/us_futures_oil_prices_inflation.webp"],
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
};

const rootStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NewsMediaOrganization",
      "@id": `${SITE_URL}/#organization`,
      "name": SITE_NAME,
      "url": SITE_URL,
      "legalName": PUBLISHER_NAME,
      "foundingDate": "2024",
      "description": SITE_DESCRIPTION,
      "publishingPrinciples": `${SITE_URL}/editorial-policy`,
      "ethicsPolicy": `${SITE_URL}/editorial-policy`,
      "correctionsPolicy": `${SITE_URL}/right-of-reply-policy`,
      "ownershipFundingInfo": `${SITE_URL}/ownership-and-funding`,
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "editorial newsroom",
          "email": "editorial@fiscalfusion.org",
          "availableLanguage": ["English"]
        },
        {
          "@type": "ContactPoint",
          "contactType": "legal and compliance",
          "email": "legal@fiscalfusion.org",
          "availableLanguage": ["English"]
        }
      ],
      "sameAs": [
        "https://twitter.com/FiscalFusion",
        "https://www.linkedin.com/company/fiscalfusion",
        "https://www.facebook.com/FiscalFusionNews"
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": SITE_URL,
      "name": SITE_NAME,
      "description": SITE_TAGLINE,
      "publisher": {
        "@id": `${SITE_URL}/#organization`
      },
      "inLanguage": "en-US"
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootStructuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}

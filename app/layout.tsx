import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://maxextrusions.com'),
  title: {
    default: "Max Extrusions Pvt. Ltd. | Premium Plastic Packaging Manufacturer in India",
    template: "%s | Max Extrusions Pvt. Ltd."
  },
  description: "ISO 9001:2015 certified plastic packaging manufacturer in Daman, India. Specializing in HDPE/LDPE carry bags, garbage bags, stretch wrap films, VCI films, and pharmaceutical packaging solutions since 2008. Custom manufacturing with 50+ product variants.",
  keywords: [
    // Primary Keywords
    "plastic packaging manufacturer", "plastic bags manufacturer India", "HDPE bags manufacturer", "LDPE bags manufacturer",
    // Product Keywords
    "carry bags manufacturer", "garbage bags manufacturer", "trash bags", "stretch wrap film", "stretch film rolls",
    "VCI films", "volatile corrosion inhibitor film", "anti-corrosion packaging", "pharmaceutical packaging", "hospital waste bags", "biohazard bags",
    "grocery bags", "shopping bags", "D-cut bags", "W-cut bags", "U-cut bags",
    // Location Keywords
    "plastic manufacturer Daman", "packaging manufacturer Gujarat", "plastic extrusion India",
    // Industry Keywords
    "blown film extrusion", "flexographic printing", "custom plastic packaging",
    "ISO certified manufacturer", "quality packaging solutions",
    // Brand
    "Max Extrusions", "Max Extrusions Pvt Ltd"
  ],
  authors: [{ name: "Max Extrusions Pvt. Ltd.", url: "https://maxextrusions.com" }],
  creator: "Max Extrusions Pvt. Ltd.",
  publisher: "Max Extrusions Pvt. Ltd.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Manufacturing",
  classification: "Plastic Packaging Manufacturing",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["hi_IN", "gu_IN"],
    url: "https://maxextrusions.com",
    siteName: "Max Extrusions Pvt. Ltd.",
    title: "Max Extrusions Pvt. Ltd. | ISO Certified Plastic Packaging Manufacturer",
    description: "India's leading manufacturer of high-quality plastic packaging solutions. 50+ product variants including carry bags, garbage bags, stretch films, and specialty packaging. ISO 9001:2015 certified. Serving 300+ clients across India.",
    images: [
      {
        url: "/images/hero-bg-blue.png",
        width: 1200,
        height: 630,
        alt: "Max Extrusions - State-of-the-art Plastic Packaging Manufacturing Facility in Daman, India",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Max Extrusions Pvt. Ltd. | Premium Plastic Packaging Solutions",
    description: "ISO 9001:2015 certified manufacturer of premium plastic packaging. 50+ products, 300+ clients, custom solutions available. Based in Daman, India.",
    images: ["/images/hero-bg-blue.png"],
  },
  alternates: {
    canonical: "https://maxextrusions.com",
    languages: {
      'en-US': 'https://maxextrusions.com',
      'en-IN': 'https://maxextrusions.com',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://maxextrusions.com/#organization",
    "name": "Max Extrusions Pvt. Ltd.",
    "alternateName": "Max Extrusions",
    "url": "https://maxextrusions.com",
    "logo": {
      "@type": "ImageObject",
      "@id": "https://maxextrusions.com/#logo",
      "url": "https://maxextrusions.com/logo.png",
      "contentUrl": "https://maxextrusions.com/logo.png",
      "caption": "Max Extrusions Pvt. Ltd. Logo"
    },
    "description": "ISO 9001:2015 certified plastic packaging manufacturer specializing in HDPE/LDPE bags, stretch films, and custom packaging solutions.",
    "foundingDate": "2008",
    "founders": [
      {
        "@type": "Person",
        "name": "Mr. Deepak Mistry"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Survey No.688/13, Siddhivinayak Industrial Estate, Somnath",
      "addressLocality": "Daman",
      "addressRegion": "Daman and Diu",
      "postalCode": "396210",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "20.4032",
      "longitude": "72.8450"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-6359313912",
        "contactType": "sales",
        "email": "info@maxextrusions.com",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Gujarati"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-6359313912",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Gujarati"]
      }
    ],
    "sameAs": [],
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "keywords": "plastic packaging manufacturer, carry bags, garbage bags, stretch wrap, HDPE bags, LDPE bags, Daman",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "50"
    },
    "knowsAbout": ["Plastic Extrusion", "Blown Film Extrusion", "Flexographic Printing", "Packaging Manufacturing"],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Plastic Packaging Manufacturing",
          "description": "Custom manufacturing of plastic bags and films with various sizes, colors, and printing options"
        }
      }
    ]
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://maxextrusions.com/#website",
    "url": "https://maxextrusions.com",
    "name": "Max Extrusions Pvt. Ltd.",
    "description": "Premium plastic packaging manufacturer in Daman, India",
    "publisher": {
      "@id": "https://maxextrusions.com/#organization"
    },
    "inLanguage": "en-US"
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

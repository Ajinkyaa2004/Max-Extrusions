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
    default: "Max Extrusions Pvt. Ltd. | Premium Plastic Packaging Manufacturer",
    template: "%s | Max Extrusions Pvt. Ltd."
  },
  description: "ISO certified plastic packaging manufacturer in Daman, India. Specializing in carry bags, garbage bags, stretch wrap, films, and custom packaging solutions since 1968.",
  keywords: ["plastic packaging", "carry bags", "garbage bags", "stretch wrap", "mulching film", "pharmaceutical packaging", "Daman", "India", "Max Extrusions"],
  authors: [{ name: "Max Extrusions Pvt. Ltd." }],
  creator: "Max Extrusions Pvt. Ltd.",
  publisher: "Max Extrusions Pvt. Ltd.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maxextrusions.com",
    siteName: "Max Extrusions Pvt. Ltd.",
    title: "Max Extrusions Pvt. Ltd. | Premium Plastic Packaging Manufacturer",
    description: "Leading manufacturer of high-quality plastic packaging solutions including carry bags, films, and specialty products.",
    images: [
      {
        url: "/images/hero-bg-blue.png",
        width: 1200,
        height: 630,
        alt: "Max Extrusions Factory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Max Extrusions Pvt. Ltd. | Packaging Experts",
    description: "ISO certified manufacturer of premium plastic packaging solutions.",
    images: ["/images/hero-bg-blue.png"],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ManufacturingBusiness",
    "name": "Max Extrusions Pvt. Ltd.",
    "url": "https://maxextrusions.com",
    "logo": "https://maxextrusions.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Survey No.688/13, Siddhivinayak Industrial Estate, Somnath",
      "addressLocality": "Daman",
      "postalCode": "396210",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "20.4032",
      "longitude": "72.8450"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-6359313912",
      "contactType": "sales",
      "availableLanguage": ["English", "Hindi", "Gujarati"]
    },
    "sameAs": [
      // Add social media links here if available
    ]
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

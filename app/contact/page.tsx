import { Metadata } from 'next';
import ContactClient from '@/components/contact/ContactClient';

export const metadata: Metadata = {
  title: 'Contact Max Extrusions | Get Quote for Plastic Packaging Solutions',
  description: 'Contact Max Extrusions Pvt. Ltd. for custom plastic packaging quotes and inquiries. Located in Daman, Gujarat, India. Call +91-6359313912 or email us for immediate assistance. Fast response, competitive pricing, and expert consultation.',
  keywords: [
    'contact Max Extrusions',
    'plastic packaging quote',
    'get quote Daman',
    'packaging manufacturer contact',
    'bulk order inquiry',
    'custom packaging quote',
    'Max Extrusions Daman address',
    'packaging supplier contact',
    'Gujarat manufacturer contact'
  ],
  alternates: {
    canonical: 'https://maxextrusions.com/contact',
  },
  openGraph: {
    title: 'Contact Max Extrusions | Plastic Packaging Manufacturer in Daman',
    description: 'Get in touch with our expert team for custom packaging quotes and inquiries. Fast response guaranteed. Call +91-6359313912 or visit us in Daman, Gujarat.',
    url: 'https://maxextrusions.com/contact',
    type: 'website',
    images: [
      {
        url: '/images/contact-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Max Extrusions - Your Packaging Partner',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Max Extrusions | Daman, India',
    description: 'Get custom packaging quotes. Call +91-6359313912. Expert consultation and fast response guaranteed.',
    images: ['/images/contact-og.jpg'],
  },
};

export default function ContactPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://maxextrusions.com/contact#contactpage",
    "url": "https://maxextrusions.com/contact",
    "name": "Contact Max Extrusions",
    "description": "Get in touch with Max Extrusions for your plastic packaging needs",
    "mainEntity": {
      "@id": "https://maxextrusions.com/#organization"
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://maxextrusions.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://maxextrusions.com/contact"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ContactClient />
    </>
  );
}

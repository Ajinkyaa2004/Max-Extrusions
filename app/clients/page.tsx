import { Metadata } from 'next';
import ClientsClient from '@/components/clients/ClientsClient';

export const metadata: Metadata = {
  title: 'Our Clients & Partners | Trusted by 300+ Leading Brands in India',
  description: 'Max Extrusions proudly serves 300+ clients across India including industry leaders like Godrej Interio, Prince Plastics, Cello World, and Nilkamal. Trusted partner for retail, pharmaceutical, agriculture, and industrial packaging solutions since 2008.',
  keywords: [
    'Max Extrusions clients',
    'packaging clients India',
    'Godrej supplier',
    'Cello World partner',
    'Prince Plastics supplier',
    'Nilkamal packaging',
    'trusted clients',
    'industry partners',
    'client testimonials',
    '300+ clients'
  ],
  alternates: {
    canonical: 'https://maxextrusions.com/clients',
  },
  openGraph: {
    title: 'Trusted by Industry Leaders | Max Extrusions Client Portfolio',
    description: 'Discover why 300+ leading brands trust Max Extrusions for their packaging needs. Our client portfolio includes Godrej, Cello, Prince Plastics, Nilkamal, and many more industry leaders across diverse sectors.',
    url: 'https://maxextrusions.com/clients',
    type: 'website',
    images: [
      {
        url: '/images/clients-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Max Extrusions Clients - Trusted by Leading Brands',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Clients | Trusted by 300+ Brands',
    description: 'Serving industry leaders like Godrej, Cello World, Prince Plastics. 300+ satisfied clients across India.',
    images: ['/images/clients-bg.jpg'],
  },
};

export default function ClientsPage() {
  const clientsJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://maxextrusions.com/clients#clientspage",
    "url": "https://maxextrusions.com/clients",
    "name": "Max Extrusions Clients and Partners",
    "description": "Trusted by 300+ leading brands across India for premium plastic packaging solutions",
    "mainEntity": {
      "@type": "Organization",
      "name": "Max Extrusions Pvt. Ltd.",
      "numberOfEmployees": "50+",
      "areaServed": "India",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Plastic Packaging Solutions"
      }
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
        "name": "Our Clients",
        "item": "https://maxextrusions.com/clients"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clientsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ClientsClient />
    </>
  );
}

import { Metadata } from 'next';
import InfrastructureClient from '@/components/infrastructure/InfrastructureClient';

export const metadata: Metadata = {
  title: 'Manufacturing Infrastructure & Advanced Technology | Max Extrusions',
  description: 'Explore Max Extrusions state-of-the-art manufacturing facility in Daman featuring advanced blown film extrusion lines, 6-color flexographic printing presses, automatic bag making machines, and quality control labs. ISO 9001:2015 certified infrastructure ensuring premium product quality.',
  keywords: [
    'blown film extrusion',
    'flexographic printing',
    'bag making machine',
    'manufacturing facility Daman',
    'plastic extrusion machinery',
    'quality control lab',
    'ISO certified facility',
    'production capacity',
    'advanced manufacturing',
    'state-of-the-art facility',
    'packaging machinery',
    'industrial infrastructure'
  ],
  alternates: {
    canonical: 'https://maxextrusions.com/infrastructure',
  },
  openGraph: {
    title: 'State-of-the-Art Manufacturing Infrastructure | Max Extrusions',
    description: 'Tour our world-class manufacturing facility in Daman equipped with advanced blown film extrusion, flexographic printing, and automated production lines. ISO 9001:2015 certified for quality assurance.',
    url: 'https://maxextrusions.com/infrastructure',
    type: 'website',
    images: [
      {
        url: '/images/infrastructure-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Max Extrusions Manufacturing Facility - Advanced Production Infrastructure',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manufacturing Infrastructure | Max Extrusions',
    description: 'State-of-the-art facility with advanced blown film extrusion, flexographic printing, and automated production. ISO 9001:2015 certified.',
    images: ['/images/infrastructure-preview.jpg'],
  },
};

export default function InfrastructurePage() {
  const infrastructureJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://maxextrusions.com/infrastructure#facility",
    "name": "Max Extrusions Manufacturing Facility",
    "description": "State-of-the-art plastic packaging manufacturing facility with advanced machinery and quality control systems",
    "category": "Manufacturing Facility",
    "manufacturer": {
      "@id": "https://maxextrusions.com/#organization"
    },
    "location": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Survey No.688/13, Siddhivinayak Industrial Estate, Somnath",
        "addressLocality": "Daman",
        "postalCode": "396210",
        "addressCountry": "IN"
      }
    },
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certification",
      "name": "ISO 9001:2015"
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
        "name": "Infrastructure",
        "item": "https://maxextrusions.com/infrastructure"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(infrastructureJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <InfrastructureClient />
    </>
  );
}

import { Metadata } from 'next';
import AboutClient from '@/components/about/AboutClient';

export const metadata: Metadata = {
  title: 'About Us | 17+ Years of Manufacturing Excellence in Plastic Packaging',
  description: 'Established in 2008, Max Extrusions Pvt. Ltd. is a leading ISO 9001:2015 certified plastic packaging manufacturer in Daman, India. Led by Mr. Deepak Mistry, we serve 300+ clients with 50+ product variants. Learn about our legacy, commitment to quality, and sustainable manufacturing practices.',
  keywords: [
    'Max Extrusions history',
    'plastic manufacturer Daman',
    'ISO certified manufacturer',
    'Deepak Mistry',
    'manufacturing excellence',
    'quality packaging',
    'sustainable manufacturing',
    'about Max Extrusions',
    'packaging company India',
    'established 2008'
  ],
  alternates: {
    canonical: 'https://maxextrusions.com/about',
  },
  openGraph: {
    title: 'About Max Extrusions Pvt. Ltd. | Our Legacy Since 2008',
    description: 'Discover the story of Max Extrusions - from our founding in 2008 to becoming a trusted leader in plastic packaging manufacturing. ISO 9001:2015 certified, serving 300+ clients across India with innovative solutions.',
    url: 'https://maxextrusions.com/about',
    type: 'website',
    images: [
      {
        url: '/images/about-team.jpg',
        width: 1200,
        height: 630,
        alt: 'Max Extrusions Leadership Team and Manufacturing Excellence',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Max Extrusions | 17+ Years of Excellence',
    description: 'ISO 9001:2015 certified plastic packaging manufacturer since 2008. Led by Mr. Deepak Mistry, serving 300+ clients across India.',
    images: ['/images/about-team.jpg'],
  },
};

export default function AboutPage() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://maxextrusions.com/about#aboutpage",
    "url": "https://maxextrusions.com/about",
    "name": "About Max Extrusions Pvt. Ltd.",
    "description": "Learn about Max Extrusions, a leading plastic packaging manufacturer established in 2008",
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
        "name": "About Us",
        "item": "https://maxextrusions.com/about"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <AboutClient />
    </>
  );
}

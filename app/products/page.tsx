import { Metadata } from 'next';
import ProductsClient from '@/components/products/ProductsClient';
import { products } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Premium Plastic Packaging Products | 50+ Variants | Max Extrusions',
  description: 'Explore our comprehensive range of 50+ plastic packaging products including HDPE/LDPE Carry Bags, Garbage Bags, Stretch Wrap Films, VCI Films, Pharmaceutical Packaging, and Custom Solutions. ISO 9001:2015 certified. Available in custom sizes, colors, and printing options.',
  keywords: [
    // Product categories
    'plastic carry bags', 'garbage bags', 'trash bags', 'stretch wrap film', 'stretch film',
    'courier bags', 'ice bags', 'D-cut bags', 'W-cut bags', 'U-cut bags',
    'VCI films', 'volatile corrosion inhibitor film', 'anti-corrosion packaging', 'pharma bags', 'hospital waste bags',
    'food packaging bags', 'grocery bags', 'shopping bags', 'retail bags',
    'HDPE bags', 'LDPE bags', 'LLDPE bags', 'biodegradable bags',
    // Product features
    'custom printed bags', 'eco-friendly bags', 'recyclable bags',
    'heavy duty bags', 'leak-proof bags', 'tear-resistant bags',
    // Location + product
    'plastic bags manufacturer India', 'packaging products Daman',
    // Brand
    'Max Extrusions products', 'Max Extrusions catalog'
  ],
  alternates: {
    canonical: 'https://maxextrusions.com/products',
  },
  openGraph: {
    title: 'Premium Plastic Packaging Products | 50+ Variants | Max Extrusions',
    description: 'Browse our complete catalog of high-quality plastic packaging products. Carry bags, garbage bags, stretch films, and custom solutions. ISO certified manufacturing with customization options.',
    url: 'https://maxextrusions.com/products',
    type: 'website',
    images: [
      {
        url: '/images/products/plastic-films.png',
        width: 1200,
        height: 630,
        alt: 'Max Extrusions Complete Product Range - Plastic Packaging Solutions',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Plastic Packaging Products | Max Extrusions',
    description: '50+ product variants. Custom sizes, colors & printing. ISO certified. Carry bags, garbage bags, stretch films & more.',
    images: ['/images/products/plastic-films.png'],
  },
};

export default function ProductsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "image": `https://maxextrusions.com${product.image}`,
        "url": `https://maxextrusions.com/products/${product.slug}`
      }
    }))
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
        "name": "Products",
        "item": "https://maxextrusions.com/products"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ProductsClient />
    </>
  );
}

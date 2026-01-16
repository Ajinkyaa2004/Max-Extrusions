import { Metadata } from 'next';
import ProductsClient from '@/components/products/ProductsClient';
import { products } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Premium Plastic Packaging Products | Max Extrusions',
  description: 'Explore our wide range of plastic packaging solutions including Carry Bags, Garbage Bags, Stretch Wraps, and Pharmaceutical Packaging. Custom sizes available.',
  alternates: {
    canonical: 'https://maxextrusions.com/products',
  },
  openGraph: {
    title: 'Premium Plastic Packaging Products | Max Extrusions Pvt. Ltd.',
    description: 'Explore our wide range of premium plastic packaging products including Carry Bags, Garbage Bags, Stretch Film, and more.',
    url: 'https://maxextrusions.com/products',
    images: [
      {
        url: '/images/products/plastic-films.png',
        width: 1200,
        height: 630,
        alt: 'Max Extrusions Products Range',
      },
    ],
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

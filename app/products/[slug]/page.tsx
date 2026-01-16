import { Metadata } from 'next';
import { getProductBySlug, products } from '@/lib/products';
import { notFound } from 'next/navigation';
import ProductDetailClient from '@/components/products/ProductDetailClient';

export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const product = getProductBySlug(params.slug);
    if (!product) return {};

    const url = `https://maxextrusions.com/products/${product.slug}`;

    return {
        title: `${product.name} | Max Extrusions`,
        description: product.description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: `${product.name} | Premium Plastic Packaging`,
            description: product.description,
            url: url,
            images: [
                {
                    url: product.image,
                    width: 800,
                    height: 800,
                    alt: product.name,
                },
            ],
        },
    };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
    const product = getProductBySlug(params.slug);
    if (!product) notFound();

    // JSON-LD for individual product
    const productJsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "image": `https://maxextrusions.com${product.image}`,
        "description": product.description,
        "brand": {
            "@type": "Brand",
            "name": "Max Extrusions"
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "price": "0"
        }
    };

    // JSON-LD for Breadcrumbs
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
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": product.name,
                "item": `https://maxextrusions.com/products/${product.slug}`
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <ProductDetailClient product={product} />
        </>
    );
}

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

    // Generate SEO-optimized keywords based on product
    const productKeywords = [
        product.name,
        `${product.name} manufacturer`,
        `${product.name} supplier`,
        `buy ${product.name}`,
        `${product.name} India`,
        `${product.name} Daman`,
        'Max Extrusions',
        ...product.categories,
    ];

    return {
        title: `${product.name} | Premium Quality ${product.categories[0]} | Max Extrusions`,
        description: `${product.description} ISO 9001:2015 certified manufacturing. Custom sizes, colors, and printing available. Contact Max Extrusions for bulk orders and quotes.`,
        keywords: productKeywords,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: `${product.name} | Premium Plastic Packaging | Max Extrusions`,
            description: `${product.description} Available in custom specifications. ISO certified quality.`,
            url: url,
            type: 'product',
            images: [
                {
                    url: product.image,
                    width: 800,
                    height: 800,
                    alt: `${product.name} - Max Extrusions Premium Quality`,
                    type: 'image/png',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${product.name} | Max Extrusions`,
            description: product.description.substring(0, 150),
            images: [product.image],
        },
    };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
    const product = getProductBySlug(params.slug);
    if (!product) notFound();

    // JSON-LD for individual product with enhanced schema
    const productJsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": `https://maxextrusions.com/products/${product.slug}#product`,
        "name": product.name,
        "image": `https://maxextrusions.com${product.image}`,
        "description": product.description,
        "category": product.categories.join(', '),
        "brand": {
            "@type": "Brand",
            "name": "Max Extrusions",
            "@id": "https://maxextrusions.com/#organization"
        },
        "manufacturer": {
            "@type": "Organization",
            "name": "Max Extrusions Pvt. Ltd.",
            "@id": "https://maxextrusions.com/#organization"
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "priceSpecification": {
                "@type": "PriceSpecification",
                "priceCurrency": "INR"
            },
            "seller": {
                "@type": "Organization",
                "name": "Max Extrusions Pvt. Ltd.",
                "@id": "https://maxextrusions.com/#organization"
            },
            "itemCondition": "https://schema.org/NewCondition",
            "availableAtOrFrom": {
                "@type": "Place",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Daman",
                    "addressCountry": "IN"
                }
            }
        },
        "additionalProperty": product.features?.map(feature => ({
            "@type": "PropertyValue",
            "name": "Feature",
            "value": feature
        })) || []
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

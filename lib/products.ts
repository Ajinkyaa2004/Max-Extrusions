export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  category: string;
  specifications?: string[];
  features?: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Plastic Carry Bags',
    slug: 'plastic-carry-bags',
    description: 'Durable and versatile carry bags suitable for retail, grocery, and various commercial applications.',
    image: '/images/products/carry-bags.png',
    category: 'Bags',
    features: ['Customizable sizes', 'High strength', 'Cost-effective', 'Recyclable options'],
  },
  {
    id: '2',
    name: 'Garbage Bags',
    slug: 'garbage-bags',
    description: 'Heavy-duty garbage bags designed for residential, commercial, and industrial waste management.',
    image: '/images/products/garbage-bags.png',
    category: 'Bags',
    features: ['Leak-proof', 'Tear-resistant', 'Various capacities', 'Eco-friendly variants'],
  },
  {
    id: '3',
    name: 'Courier Bags',
    slug: 'courier-bags',
    description: 'Secure and tamper-evident bags ideal for e-commerce, logistics, and postal services.',
    image: '/images/products/courier-bags.png',
    category: 'Bags',
    features: ['Tamper-proof seal', 'Water-resistant', 'Lightweight', 'Custom printing available'],
  },
  {
    id: '4',
    name: 'Ice Bags',
    slug: 'ice-bags',
    description: 'Food-grade ice packaging bags designed for safe storage and transportation of ice.',
    image: '/images/products/ice-bags.svg',
    category: 'Bags',
    features: ['Food-grade material', 'Strong sealing', 'Transparent', 'Various sizes'],
  },
  {
    id: '5',
    name: 'Plastic Films',
    slug: 'plastic-films',
    description: 'Versatile plastic films for packaging, lamination, and protective applications.',
    image: '/images/products/plastic-films.png',
    category: 'Films',
    features: ['High clarity', 'Excellent barrier properties', 'Customizable thickness', 'Multiple grades'],
  },
  {
    id: '6',
    name: 'Stretch Wrap',
    slug: 'stretch-wrap',
    description: 'High-performance stretch film for pallet wrapping and securing goods during transportation.',
    image: '/images/products/stretch-wrap.png',
    category: 'Films',
    features: ['Superior load stability', 'Puncture-resistant', 'High stretch ratio', 'Cost-effective'],
  },
  {
    id: '7',
    name: 'PVC Shrink Film',
    slug: 'pvc-shrink',
    description: 'Premium PVC shrink film for product bundling, packaging, and display applications.',
    image: '/images/products/pvc-shrink.svg',
    category: 'Films',
    features: ['Excellent clarity', 'Uniform shrinkage', 'Strong sealing', 'FDA compliant'],
  },
  {
    id: '8',
    name: 'Mulching Film',
    slug: 'mulching-film',
    description: 'Agricultural mulching films that enhance crop yield and protect soil.',
    image: '/images/products/mulching-film.svg',
    category: 'Agricultural',
    features: ['UV stabilized', 'Weed control', 'Moisture retention', 'Temperature regulation'],
  },
  {
    id: '9',
    name: 'Lamination Film',
    slug: 'lamination-film',
    description: 'High-quality lamination films for flexible packaging and printing applications.',
    image: '/images/products/lamination-film.svg',
    category: 'Films',
    features: ['Excellent adhesion', 'Heat-sealable', 'Printable surface', 'Moisture barrier'],
  },
  {
    id: '10',
    name: 'Transparent Plastic Sheets',
    slug: 'transparent-sheets',
    description: 'Clear plastic sheets suitable for glazing, signage, and protective applications.',
    image: '/images/products/transparent-sheets.svg',
    category: 'Sheets',
    features: ['High transparency', 'Impact-resistant', 'Weather-proof', 'Easy to fabricate'],
  },
  {
    id: '11',
    name: 'Breathable Films',
    slug: 'breathable-films',
    description: 'Specialized breathable films for hygiene and medical applications.',
    image: '/images/products/breathable-films.svg',
    category: 'Specialty',
    features: ['Microporous technology', 'Soft feel', 'Liquid barrier', 'Air permeable'],
  },
  {
    id: '12',
    name: 'Pharmaceutical Packaging',
    slug: 'pharmaceutical-packaging',
    description: 'Medical-grade packaging materials meeting stringent pharmaceutical standards.',
    image: '/images/products/pharmaceutical.svg',
    category: 'Specialty',
    features: ['GMP certified', 'Moisture barrier', 'Tamper-evident', 'Child-resistant options'],
  },
  {
    id: '13',
    name: 'Oxo-Biodegradable Products',
    slug: 'oxo-biodegradable',
    description: 'Environmentally responsible packaging solutions that degrade naturally over time.',
    image: '/images/products/biodegradable.svg',
    category: 'Eco-Friendly',
    features: ['Eco-friendly', 'Controlled degradation', 'Same strength as conventional', 'Certified materials'],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category);
}

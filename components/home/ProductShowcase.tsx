'use client';

import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import { Sparkles, ArrowRight } from 'lucide-react';
import Button from '@/components/Button';

export default function ProductShowcase() {
    const featuredProducts = products.slice(0, 3); // Showing top 3 for cleaner layout

    return (
        <section className="py-16 bg-gray-50 relative overflow-hidden">
            {/* Background Decorative Blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-orange/5 rounded-full blur-3xl mix-blend-multiply filter opacity-70"></div>
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent-red/5 rounded-full blur-3xl mix-blend-multiply filter opacity-70"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-red/10 text-accent-red text-xs font-medium mb-3">
                            <Sparkles className="w-3 h-3" />
                            Featured Collection
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Precision Engineered <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-red to-accent-orange">Packaging Solutions</span>
                        </h2>
                        <p className="text-gray-500 text-base">
                            Explore our range of high-performance products designed for durability and sustainability.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Upgraded Button */}
                        <Button
                            href="/products"
                            variant="primary"
                            className="hidden md:flex shadow-none hover:shadow-xl"
                            icon={<ArrowRight className="w-4 h-4" />}
                        >
                            View Full Catalog
                        </Button>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {featuredProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <ProductCard {...product} />
                        </motion.div>
                    ))}
                </div>

                <div className="text-center md:hidden">
                    <Button
                        href="/products"
                        variant="primary"
                        className="w-full justify-center"
                        icon={<ArrowRight className="w-4 h-4" />}
                    >
                        Explore All Products
                    </Button>
                </div>
            </div>
        </section>
    );
}

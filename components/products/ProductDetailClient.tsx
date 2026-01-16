'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/Button';
import { ArrowLeft, CheckCircle, Package, ArrowRight, ShieldCheck } from 'lucide-react';
import { Product } from '@/lib/products';
import Link from 'next/link';

export default function ProductDetailClient({ product }: { product: Product }) {
    return (
        <div className="min-h-screen bg-white">
            {/* Breadcrumb / Back Navigation */}
            <div className="bg-gray-50 border-b border-gray-100 pt-24 pb-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/products" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-accent-navy transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Products
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative rounded-[2rem] overflow-hidden bg-gray-100 shadow-2xl group"
                    >
                        <div className="relative aspect-square w-full">
                            <Image
                                src={product.image}
                                alt={`${product.name} - Max Extrusions`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur m-2 px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-accent-navy" />
                            <span className="font-bold text-accent-navy text-sm">Premium Quality</span>
                        </div>
                    </motion.div>

                    {/* Details Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {product.categories.map((cat) => (
                                    <span key={cat} className="px-3 py-1 rounded-full bg-accent-royal/10 text-accent-royal text-sm font-semibold">
                                        {cat}
                                    </span>
                                ))}
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{product.name}</h1>
                            <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-accent-royal pl-4">
                                {product.description}
                            </p>
                        </div>

                        {/* Features Grid */}
                        {product.features && (
                            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <Package className="w-5 h-5 text-accent-navy" />
                                    Key Features
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {product.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Call to Action */}
                        <div className="pt-8 flex flex-col sm:flex-row gap-4">
                            <Button href="/contact" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                                Request Quote
                            </Button>
                            <Button href="/contact" variant="outline" icon={<Package className="w-4 h-4" />}>
                                Order Sample
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

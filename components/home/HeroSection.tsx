'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/Button';
import { ArrowRight, CheckCircle, Play, Quote } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.png"
                    alt="Max Extrusions Factory"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/85 to-charcoal/40" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-accent-orange animate-pulse"></span>
                            <span className="text-sm font-medium text-white/90 tracking-wide">Established 1968</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
                        >
                            Setting New Standards of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange via-accent-red to-amber-500">
                                Client Satisfaction
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl"
                        >
                            Max Extrusions Pvt. Ltd. provides high-quality plastic products with customized packaging and reasonable prices.
                        </motion.p>

                        {/* Quote Block */}
                        <motion.div
                            initial={{ opacity: 0, borderLeftWidth: 0 }}
                            animate={{ opacity: 1, borderLeftWidth: 4 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            className="mb-8 pl-6 border-l-4 border-accent-orange bg-white/5 p-4 rounded-r-xl backdrop-blur-sm max-w-lg"
                        >
                            <div className="flex gap-2 text-white/90 italic text-lg leading-relaxed font-light">
                                <Quote className="w-8 h-8 text-accent-red opacity-50 -mt-2 rotate-180" />
                                <p>&quot;Our company is growing in leaps and bounds under the headship of Mr. Deepak Mistry.&quot;</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Button href="/products" variant="primary" size="md">
                                Our Products
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button href="/contact" variant="outline" size="md">
                                Contact Us
                            </Button>
                        </motion.div>

                        {/* Trust Indicators */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="mt-12 flex items-center gap-8 text-white/60"
                        >
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-accent-orange" />
                                <span className="text-sm font-medium">Ethical Business Approach</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-accent-orange" />
                                <span className="text-sm font-medium">Quality Assurance</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Abstract Visual / Floating Cards (Right Side) */}
                    <div className="hidden lg:block relative h-[600px]">
                        {/* Floating Glass Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="absolute top-10 right-10 z-20"
                        >
                            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl w-64 transform rotate-6 hover:rotate-0 transition-all duration-500 group cursor-pointer hover:bg-white/20">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-accent-red to-accent-orange flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">55+</div>
                                    <div className="text-xs text-white/50 bg-black/20 px-2 py-1 rounded-full">Since 1968</div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">Market Leaders</h3>
                                <p className="text-sm text-gray-300">Consistently delivering quality across India.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="absolute bottom-20 left-10 z-30"
                        >
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border border-white/10 shadow-2xl w-80 transform -rotate-3 hover:rotate-0 transition-all duration-500 group cursor-pointer">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-full bg-accent-orange/20 text-accent-orange group-hover:bg-accent-orange group-hover:text-white transition-colors">
                                        <Play className="w-6 h-6 fill-current" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-accent-orange uppercase tracking-wider font-semibold">Watch Now</div>
                                        <div className="text-white font-bold text-lg">Manufacturing Process</div>
                                    </div>
                                </div>
                                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-accent-red to-accent-orange"
                                        initial={{ width: "0%" }}
                                        animate={{ width: "60%" }}
                                        transition={{ duration: 2, delay: 1.5 }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-px h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0"
                />
            </motion.div>
        </section>
    );
}

'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { ArrowRight, FileText, PhoneCall } from 'lucide-react';

export default function CTASection() {
    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative rounded-[2.5rem] overflow-hidden bg-charcoal shadow-2xl"
                >
                    {/* Dynamic Background */}
                    <div className="absolute inset-0">
                        {/* Abstract Gradient Mesh */}
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-orange/10 rounded-full blur-[100px] mix-blend-screen -translate-y-1/2 translate-x-1/2 animate-pulse-slow"></div>
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-red/10 rounded-full blur-[80px] mix-blend-screen translate-y-1/2 -translate-x-1/2"></div>

                        {/* Noise Texture Overlay */}
                        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05]"></div>

                        {/* Grid Pattern */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"></div>
                    </div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center p-8 md:p-14">
                        <div className="text-left">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4"
                            >
                                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                                <span className="text-xs font-medium text-white/80 tracking-wide">Accepting New Orders</span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight"
                            >
                                Let&apos;s Shape the <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-red via-accent-orange to-amber-500">
                                    Future Together
                                </span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="text-gray-300 text-base md:text-lg mb-8 max-w-xl leading-relaxed"
                            >
                                Experience the reliability of ISO-certified manufacturing. Join 500+ enterprises optimizing their supply chain with Max Extrusions.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <Button
                                    href="/contact"
                                    variant="primary"
                                    size="md"
                                    icon={<ArrowRight className="w-4 h-4" />}
                                >
                                    Get Custom Quote
                                </Button>
                                <Button
                                    href="/products"
                                    variant="outline"
                                    size="md"
                                    icon={<FileText className="w-4 h-4" />}
                                >
                                    Browse Catalog
                                </Button>
                            </motion.div>
                        </div>

                        {/* Visual Side */}
                        <div className="relative hidden lg:block h-full min-h-[400px]">
                            {/* Floating Glass Card 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: 50, rotate: -6 }}
                                whileInView={{ opacity: 1, y: 0, rotate: -6 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="absolute top-10 right-10 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl w-64 shadow-2xl"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-green-500/20 rounded-lg">
                                        <PhoneCall className="w-6 h-6 text-green-400" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400">Support</div>
                                        <div className="text-white font-bold">24/7 Active</div>
                                    </div>
                                </div>
                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-green-500 w-[90%]"></div>
                                </div>
                            </motion.div>

                            {/* Floating Glass Card 2 */}
                            <motion.div
                                initial={{ opacity: 0, y: 80, rotate: 6 }}
                                whileInView={{ opacity: 1, y: 0, rotate: 6 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                                className="absolute bottom-20 left-10 bg-linear-to-br from-accent-red to-accent-orange p-6 rounded-2xl w-72 shadow-[0_20px_50px_rgba(200,64,52,0.3)]"
                            >
                                <h3 className="text-white font-bold text-2xl mb-2">100%</h3>
                                <p className="text-white/90 text-sm mb-4">Guaranteed Satisfaction on all bulk orders.</p>
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-white/20 border-2 border-accent-red" />
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

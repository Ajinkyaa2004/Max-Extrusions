'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { ArrowRight, FileText, PhoneCall, ShieldCheck, Star, Trophy, Sparkles } from 'lucide-react';

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
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-royal/10 rounded-full blur-[100px] mix-blend-screen -translate-y-1/2 translate-x-1/2 animate-pulse-slow"></div>
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-navy/10 rounded-full blur-[80px] mix-blend-screen translate-y-1/2 -translate-x-1/2"></div>

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
                                <span className="text-accent-royal">
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
                                    href="/Max%20Extrusions%20Corporate%20Brochure.pdf"
                                    variant="outline"
                                    size="md"
                                    target="_blank"
                                    icon={<FileText className="w-4 h-4" />}
                                >
                                    Browse Catalog
                                </Button>
                            </motion.div>
                        </div>

                        {/* Visual Side */}
                        <div className="relative hidden lg:block h-full min-h-[400px]">
                            {/* Floating Glass Card 1 - Top Right - Support */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
                                animate={{
                                    y: [0, -15, 0],
                                    rotate: -6
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.6,
                                    duration: 0.8,
                                    y: {
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }}
                                className="absolute top-10 right-10 bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl w-60 shadow-2xl z-20"
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="p-2.5 bg-green-500/20 rounded-lg">
                                        <PhoneCall className="w-5 h-5 text-green-400" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Support</div>
                                        <div className="text-white font-bold text-sm">24/7 Active</div>
                                    </div>
                                </div>
                                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-green-500 w-[90%] shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                                </div>
                            </motion.div>

                            {/* Floating Glass Card 2 - Bottom Left - Satisfaction */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, rotate: 6 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 6 }}
                                animate={{
                                    y: [0, -20, 0],
                                    rotate: 6
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.8,
                                    duration: 0.8,
                                    y: {
                                        duration: 7,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1 // offset animation
                                    }
                                }}
                                className="absolute bottom-12 left-10 overflow-hidden p-6 rounded-2xl w-72 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-30 group"
                            >
                                {/* Live Animated Background - Subtle Breathing Effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-accent-navy via-accent-royal to-blue-600"
                                    animate={{
                                        backgroundSize: ["100% 100%", "150% 150%", "100% 100%"],
                                        backgroundPosition: ["0% 0%", "50% 50%", "0% 0%"],
                                    }}
                                    transition={{
                                        duration: 10,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />

                                {/* Overlay for depth */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50"></div>

                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="text-white font-bold text-3xl">100%</h3>
                                        <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)] animate-pulse"></div>
                                    </div>
                                    <p className="text-white/90 text-sm mb-5 leading-snug">Guaranteed Satisfaction on all bulk orders.</p>
                                    <div className="flex -space-x-2">
                                        {[ShieldCheck, Star, Trophy, Sparkles].map((Icon, i) => (
                                            <div key={i} className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 flex items-center justify-center">
                                                <Icon className="w-4 h-4 text-white" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Gem, IndianRupee } from 'lucide-react';

const features = [
    {
        icon: Gem,
        title: "Quality Products",
        description: "Our products undergo strict testing processes to ensure their grade and durability.",
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: Truck,
        title: "Quick Delivery",
        description: "We facilitate our clients with quick delivery within the shortest time possible.",
        color: "from-green-500 to-emerald-500"
    },
    {
        icon: ShieldCheck,
        title: "Customized Packaging",
        description: "Tailored packaging solutions designed to meet your specific requirements.",
        color: "from-purple-500 to-violet-500"
    },
    {
        icon: IndianRupee,
        title: "Reasonable Prices",
        description: "Offering high-quality products at competitive rates with easy payment terms.",
        color: "from-accent-orange to-accent-red"
    }
];

export default function FeaturesSection() {
    return (
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="url(#gradient)" />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#2d2d2d" />
                            <stop offset="100%" stopColor="#1a1a1a" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        Our <span className="text-accent-orange">Commitment</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        We take complete care of client satisfaction through our ethical business approach.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="relative group p-8 rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition-colors duration-300"
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />

                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}>
                                <feature.icon className="w-7 h-7 text-white" />
                            </div>

                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Award, TrendingUp, Globe } from 'lucide-react';

const stats = [
    {
        id: 1,
        label: "Years of Excellence",
        value: "55",
        suffix: "+",
        icon: Award,
        description: "Setting industry benchmarks since 1968"
    },
    {
        id: 2,
        label: "Happy Clients",
        value: "500",
        suffix: "+",
        icon: Users,
        description: "Trusted by leading enterprises across India"
    },
    {
        id: 3,
        label: "Production Capacity",
        value: "1000",
        suffix: " TPA",
        icon: TrendingUp,
        description: "State-of-the-art manufacturing facility"
    },
    {
        id: 4,
        label: "Product Variants",
        value: "15",
        suffix: "+",
        icon: Globe,
        description: "Diverse range of plastic solutions"
    }
];

export default function StatsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section ref={ref} className="py-20 bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-1/4 left-10 w-64 h-64 bg-accent-orange/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-accent-red/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-accent-orange font-semibold tracking-wider uppercase text-sm">Our Impact</span>
                    <h2 className="mt-2 text-3xl md:text-5xl font-bold text-gray-900">
                        Numbers that Speak for <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-red to-accent-orange">Themselves</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="bg-gray-50/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group text-center"
                        >
                            <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 text-accent-red border border-gray-100">
                                <stat.icon className="w-7 h-7" />
                            </div>

                            <div className="flex items-center justify-center gap-1 mb-2">
                                <span className="text-4xl md:text-5xl font-extrabold text-gray-900">{stat.value}</span>
                                <span className="text-2xl font-bold text-accent-orange self-start mt-1">{stat.suffix}</span>
                            </div>

                            <h3 className="text-lg font-bold text-gray-800 mb-2">{stat.label}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed font-medium">{stat.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

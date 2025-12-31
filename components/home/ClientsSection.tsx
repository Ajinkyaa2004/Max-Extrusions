'use client';

import { motion } from 'framer-motion';
import { Building2, Users, MapPin } from 'lucide-react';

const clients = [
    "Nelson Global (India) Pvt. Ltd",
    "Godrej Tysons",
    "GT Polymer",
    "Max Packaging",
    "Aum Poly Print"
];

export default function StatsSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-orange/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Overview */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 text-accent-orange font-semibold tracking-wider uppercase text-sm mb-4">
                            <Building2 className="w-4 h-4" />
                            Overview
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            A Legacy of <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-red to-accent-orange">Excellence</span>
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Established in 1968, Max Extrusions Pvt. Ltd. has set new standards in client satisfaction. Based in Daman, we have divided our manufacturing facility into various areas for smooth production flow, equipped with state-of-the-art machinery.
                        </p>
                        <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                            <MapPin className="w-5 h-5 text-accent-red mt-1 shrink-0" />
                            <div>
                                <h4 className="font-semibold text-gray-900">Strategic Location</h4>
                                <p className="text-sm text-gray-500">Survey No.688/13 Siddhivinayak Industrial Estate, Somnath Daman, India.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Clients */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-lg"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-white rounded-xl shadow-sm">
                                <Users className="w-6 h-6 text-accent-red" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Our Esteemed Clients</h3>
                        </div>

                        <ul className="space-y-4">
                            {clients.map((client, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100 hover:border-accent-orange/30 transition-colors"
                                >
                                    <span className="w-2 h-2 rounded-full bg-accent-orange" />
                                    <span className="font-medium text-gray-700">{client}</span>
                                </motion.li>
                            ))}
                        </ul>
                        <p className="mt-6 text-sm text-gray-500 italic">
                            Serving leading names in the industry with our ethical business approach.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

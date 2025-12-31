'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/Button';
import { Users, Map, Star, BarChart, Handshake, ShoppingCart, Wheat, Pill, Package, UtensilsCrossed, Factory, ArrowRight } from 'lucide-react';

export default function ClientsPage() {
  const industries = [
    { name: 'Retail & FMCG', icon: ShoppingCart, desc: 'Packaging for major retail chains.' },
    { name: 'Agriculture', icon: Wheat, desc: 'Mulching films and protective covers.' },
    { name: 'Pharmaceuticals', icon: Pill, desc: 'GMP-certified packaging materials.' },
    { name: 'Logistics', icon: Package, desc: 'Secure courier bags and wrap.' },
    { name: 'Food & Beverage', icon: UtensilsCrossed, desc: 'Food-grade certified packaging.' },
    { name: 'Manufacturing', icon: Factory, desc: 'Industrial bulk packaging.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Clients Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <Handshake className="w-4 h-4 text-accent-orange" />
              <span className="text-sm font-medium tracking-wide">Trusted Partnerships</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              500+ <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-red to-accent-orange">Happy Clients</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Leading enterprises across India trust Max Extrusions for consistent quality, timely delivery, and ethical business practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "500+", label: "Active Clients" },
              { icon: Map, value: "15+", label: "States Served" },
              { icon: Star, value: "98%", label: "Retention Rate" },
              { icon: BarChart, value: "10K+", label: "Orders Fulfilled" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-accent-red" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-6">Industries We Serve</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Diverse sectors with unique packaging challenges, all solved by Max Extrusions.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 dashed-circle mb-6 flex items-center justify-center border-2 border-dashed border-accent-red/30 rounded-full group-hover:border-accent-red transition-colors">
                  <ind.icon className="w-6 h-6 text-accent-red" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{ind.name}</h3>
                <p className="text-gray-500 text-sm">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Clients List (Text Based) */}
      <section className="py-24 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Our Esteemed Clientele</h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Godrej Interio",
              "Nelson Global Products",
              "Prince Plastics",
              "GT Polymer",
              "Hamilton Housewares",
              "Cello World",
              "Nilkamal Ltd",
              "Supreme Industries"
            ].map((client, i) => (
              <motion.div
                key={client}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 bg-white/5 border border-white/10 rounded-xl text-center hover:bg-white/10 hover:border-accent-orange/50 transition-all cursor-default"
              >
                <span className="font-semibold text-lg text-gray-200">{client}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-charcoal mb-6">Join Our Network</h2>
          <p className="text-xl text-gray-500 mb-10">Discover why industry leaders choose Max Extrusions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
              Become a Partner
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/Button';
import { Users, Map, Star, BarChart, Handshake, ShoppingCart, Wheat, Pill, Package, Hotel, Factory, ArrowRight } from 'lucide-react';

export default function ClientsPage() {
  const industries = [
    { name: 'Retail & FMCG', icon: ShoppingCart, desc: 'Packaging for major retail chains.' },
    { name: 'Agriculture', icon: Wheat, desc: 'Mulching films and protective covers.' },
    { name: 'Pharmaceuticals', icon: Pill, desc: 'GMP-certified packaging materials.' },
    { name: 'Logistics', icon: Package, desc: 'Secure courier bags and wrap.' },
    { name: 'Hospitality', icon: Hotel, desc: 'Premium packaging for hotels and restaurants.' },
    { name: 'Manufacturing', icon: Factory, desc: 'Industrial bulk packaging.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg-blue.png"
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
              <Handshake className="w-4 h-4 text-accent-royal" />
              <span className="text-sm font-medium tracking-wide">Trusted Partnerships</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              300+ <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">Happy Clients</span>
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
              { icon: Users, value: "300+", label: "Active Clients" },
              { icon: Map, value: "8+", label: "States Served" },
              { icon: Star, value: "4.8/5", label: "Client Satisfaction" },
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
                <div className="w-16 h-16 bg-accent-royal/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-accent-royal" />
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
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-6">Industries <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-navy to-accent-royal">We Serve</span></h2>
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
                <div className="w-12 h-12 dashed-circle mb-6 flex items-center justify-center border-2 border-dashed border-accent-royal/20 rounded-full group-hover:border-accent-royal transition-colors">
                  <ind.icon className="w-6 h-6 text-accent-royal" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{ind.name}</h3>
                <p className="text-gray-500 text-sm">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Clients List (Marquee) */}
      <section className="py-32 bg-white text-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]"></div>

        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-royal/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-navy/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Esteemed Clientele</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-navy to-accent-royal mx-auto rounded-full"></div>
          </motion.div>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden py-10">
          {/* Gradient Masks for Fade Effect */}
          <div className="absolute top-0 left-0 w-32 md:w-64 h-full z-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 md:w-64 h-full z-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

          <div className="flex whitespace-nowrap">
            <motion.div
              className="flex items-center gap-16 pr-16"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 40, // Adjust speed here (higher = slower)
                ease: "linear",
              }}
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-16">
                  {[
                    "Godrej Interio",
                    "Nelson Global Products",
                    "Prince Plastics",
                    "Hamilton Housewares",
                    "Cello World",
                    "Nilkamal Ltd",
                    "Vactech Composite Pvt Ltd",
                    "Jivraj T Pvt Ltd",
                    "Allure Gift Wraps Pvt Ltd",
                    "Zetts Cosmetics Pvt Ltd"
                  ].map((client, index) => (
                    <div key={index} className="flex items-center gap-12">
                      <span className="text-3xl md:text-3xl font-bold whitespace-nowrap hover:text-accent-navy transition-colors cursor-default">
                        {client}
                      </span>
                      <div className="w-3 h-3 rounded-full bg-accent-royal/50"></div>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
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

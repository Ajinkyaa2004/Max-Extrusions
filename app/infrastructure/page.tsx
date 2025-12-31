'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/Button';
import { Factory, Building2, Settings, Globe, CheckCircle, Cpu, Zap, Microscope, ArrowRight } from 'lucide-react';

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png" // Reusing the high-quality hero bg for consistency/theme
            alt="Infrastructure Background"
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
              <Factory className="w-4 h-4 text-accent-orange" />
              <span className="text-sm font-medium tracking-wide">Daman, India</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              World-Class <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-red to-accent-orange">Manufacturing Hub</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Our state-of-the-art facility is equipped with advanced extrusion machinery, capable of delivering 1000 TPA production capacity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid (Dark Premium) */}
      <section className="py-16 bg-charcoal relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-orange/5 rounded-full blur-[100px] mix-blend-screen opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-red/5 rounded-full blur-[100px] mix-blend-screen opacity-50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Building2, value: "1000", label: "TPA Capacity", suffix: "+" },
              { icon: Settings, value: "50", label: "Product Variants", suffix: "+" },
              { icon: Globe, value: "24/7", label: "Production Cycle", suffix: "" },
              { icon: CheckCircle, value: "100%", label: "Quality Tested", suffix: "" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent-red to-accent-orange rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}<span className="text-accent-orange">{stat.suffix}</span>
                </div>
                <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Machinery & Technology - Glassmorphic Cards */}
      <section className="py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-6">Advanced Technology</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              We invest in the latest extrusion and converting machinery to ensure precision and efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Cpu, title: "Blown Film Extrusion", desc: "High-speed multi-layer lines producing films from 15 to 200 microns." },
              { icon: Zap, title: "Automated Bag Making", desc: "Inline printing, sealing, and cutting for high-volume production." },
              { icon: Settings, title: "Flexographic Printing", desc: "Precision multi-color printing with consistent registration." },
              { icon: Globe, title: "Advanced Lamination", desc: "Creating multi-layer barrier films for specialized applications." },
              { icon: Factory, title: "Slitting & Rewinding", desc: "High-speed processing for precise roll preparation." },
              { icon: Microscope, title: "Quality Testing Lab", desc: "In-house lab for tensile, seal strength, and thickness testing." }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 text-accent-red group-hover:bg-accent-red group-hover:text-white transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-accent-red/5 skew-y-3 transform origin-bottom-right"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">Visit Our Facility</h2>
          <p className="text-lg text-gray-500 mb-10">
            We welcome clients to witness our manufacturing excellence firsthand. Schedule a visit to our Daman plant.
          </p>
          <Button href="/contact" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
            Schedule a Visit
          </Button>
        </div>
      </section>
    </div>
  );
}

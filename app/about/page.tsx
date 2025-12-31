'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/Button';
import { Package, Target, Gem, Handshake, Leaf, ArrowRight, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Factory Background"
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
              <span className="flex h-2 w-2 rounded-full bg-accent-orange animate-pulse"></span>
              <span className="text-sm font-medium tracking-wide">Since 1968</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-red to-accent-orange">Excellence</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Max Extrusions Pvt. Ltd. has been at the forefront of India&apos;s plastic packaging industry, delivering quality products and trusted service for over five decades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Legacy & Leadership Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-charcoal mb-6">Our Legacy & Leadership</h2>
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  Reviewing our history, Max Extrusions Pvt. Ltd. was established with a small extrusion unit in Daman. Through decades of relentless dedication to quality and innovation, we have evolved into one of the region&apos;s most trusted manufacturing hubs.
                </p>
                <div className="border-l-4 border-accent-red pl-6 py-2 bg-gray-50 rounded-r-xl">
                  <p className="font-medium text-charcoal italic text-xl leading-relaxed">
                    &quot;Our company is growing in leaps and bounds under the headship of Mr. Deepak Mistry.&quot;
                  </p>
                </div>
                <p>
                  We have maintained our core values of <strong>reliability, quality, and customer satisfaction</strong> while serving hundreds of clients across diverse industries—from retail and agriculture to pharmaceuticals and logistics.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="text-3xl font-bold text-accent-red mb-1">55+</div>
                  <div className="text-sm text-gray-600">Years of Experience</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="text-3xl font-bold text-accent-red mb-1">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] bg-gray-900">
                {/* You can replace this with a real team/vision image if available. Using abstract for now */}
                <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-gray-800"></div>
                <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full relative">
                    {/* Abstract Representation of Growth/Leadership */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                    <div className="absolute bottom-10 left-10 z-20">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-accent-orange rounded-lg">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-white font-bold tracking-wide uppercase text-sm">Visionary Leadership</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Mr. Deepak Mistry</h3>
                      <p className="text-white/60">Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Core Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">The principles that guide every decision we make and every product we manufacture.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "Integrity", desc: "Honest and transparent in all our dealings." },
              { icon: Gem, title: "Excellence", desc: "Striving for the highest standards in everything." },
              { icon: Handshake, title: "Partnership", desc: "Building lasting relationships with clients." },
              { icon: Leaf, title: "Sustainability", desc: "Responsible manufacturing for a better future." }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-accent-red to-accent-orange rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-charcoal mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl text-gray-500 mb-10">Experience the quality difference that 55+ years of expertise brings.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
              Contact Us
            </Button>
            <Button href="/products" variant="outline" icon={<Package className="w-4 h-4" />}>
              View Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

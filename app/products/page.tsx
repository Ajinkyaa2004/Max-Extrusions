'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import Button from '@/components/Button';
import { products } from '@/lib/products';
import { Package, Filter, Sparkles, ArrowRight } from 'lucide-react';

export default function ProductsPage() {
  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Products Background"
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
              <Package className="w-4 h-4 text-accent-orange" />
              <span className="text-sm font-medium tracking-wide">Comprehensive Catalog</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-red to-accent-orange">Packaging Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              From standard carry bags to specialized industrial films, excellence is engineered into every product we manufacture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="sticky top-16 z-30 bg-white/80 backdrop-blur-xl border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide justify-center">
            <span className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-wider">
              <Filter className="w-4 h-4" /> Filter:
            </span>
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="px-6 py-2 rounded-full bg-gray-100 text-charcoal font-medium text-sm hover:bg-accent-red hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions CTA (Premium Dark Card) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-charcoal shadow-2xl p-12 md:p-24 text-center">
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-orange/10 rounded-full blur-[80px] mix-blend-screen"></div>
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-red/10 rounded-full blur-[80px] mix-blend-screen"></div>
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05]"></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-md mb-6">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium text-white/90">Custom Requirements?</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Need a Tailored Solution?</h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                We specialize in manufacturing custom-fit packaging solutions. Our engineering team works directly with clients to design products that meet unique specifications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                  Request Custom Quote
                </Button>
                <Button href="/infrastructure" variant="outline" icon={<Package className="w-4 h-4" />}>
                  View Capabilities
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

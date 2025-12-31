'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Infrastructure', href: '/infrastructure' },
    { name: 'Clients', href: '/clients' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-lg py-2'
          : 'bg-transparent py-4'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group relative z-50">
            <div className={`p-2 rounded-xl transition-all duration-300 ${scrolled ? 'bg-gradient-to-br from-accent-red to-accent-orange text-white' : 'bg-white/10 backdrop-blur-md text-white border border-white/20'
              }`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <div className="text-2xl font-bold">
              <span className={scrolled ? 'text-charcoal' : 'text-white'}>MAX</span>
              <span className={scrolled ? 'text-accent-red' : 'text-accent-orange'}>EXTRUSIONS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group ${scrolled ? 'text-gray-700 hover:text-accent-red' : 'text-white/90 hover:text-white'
                  }`}
              >
                {item.name}
                <span className={`absolute inset-0 rounded-full scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 -z-10 ${scrolled ? 'bg-gray-100' : 'bg-white/10 backdrop-blur-sm'
                  }`}></span>
              </Link>
            ))}
            <div className="pl-4 ml-4 border-l border-gray-200/20">
              <Link
                href="/contact"
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${scrolled
                    ? 'bg-gradient-to-r from-accent-red to-accent-orange text-white hover:shadow-accent-red/20'
                    : 'bg-white text-accent-red hover:bg-gray-50'
                  }`}
              >
                Request Quote
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg relative z-50 ${scrolled ? 'text-charcoal' : 'text-white'
              }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 z-40 bg-white/95 backdrop-blur-xl md:hidden flex flex-col pt-24 px-6"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center justify-between p-4 text-lg font-medium text-charcoal hover:bg-gray-50 rounded-xl group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-accent-red transition-colors" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <Link
                href="/contact"
                className="block w-full bg-gradient-to-r from-accent-red to-accent-orange text-white text-center py-4 rounded-xl font-bold shadow-lg shadow-accent-red/30"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

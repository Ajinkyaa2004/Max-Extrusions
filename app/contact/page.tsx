'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Contact Background"
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
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium tracking-wide">Responses within 24 Hours</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-red to-accent-orange">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our team is ready to assist with your packaging requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Contact Info Side */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-charcoal mb-6 flex items-center gap-2">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <a href="https://maps.google.com" target="_blank" className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="p-3 bg-accent-red/10 rounded-lg text-accent-red group-hover:bg-accent-red group-hover:text-white transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Headquarters</div>
                      <div className="text-sm text-gray-500 leading-relaxed mt-1">
                        Survey No.688/13, Siddhivinayak Industrial Estate, Somnath, Daman - 396210, India
                      </div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="p-3 bg-accent-orange/10 rounded-lg text-accent-orange group-hover:bg-accent-orange group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Call Us</div>
                      <div className="text-sm text-gray-500 mt-1">
                        +91-260-2244707
                      </div>
                      <div className="text-xs text-green-600 font-medium mt-1">Mon-Sat, 9am - 6pm</div>
                    </div>
                  </div>

                  <a href="mailto:info@maxextrusions.com" className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email Us</div>
                      <div className="text-sm text-gray-500 mt-1">
                        info@maxextrusions.com
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-gradient-to-br from-[#25D366] to-[#128C7E] p-8 rounded-2xl text-white shadow-lg shadow-green-500/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageCircle className="w-8 h-8" />
                    <h3 className="text-xl font-bold">Quick Chat</h3>
                  </div>
                  <p className="text-white/90 mb-6 text-sm">Need a quick answer? Chat with our sales team on WhatsApp.</p>
                  <button className="w-full py-3 bg-white text-[#128C7E] font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-sm">
                    Open WhatsApp
                  </button>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100"
              >
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-charcoal mb-2">Send us a Message</h2>
                  <p className="text-gray-500">Fill out the form below and our team will get back to you shortly.</p>
                </div>
                <ContactForm />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full bg-gray-200 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14907.643360661298!2d72.8449766!3d20.4032159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0da256da6fbd9%3A0xc6cb1c03a9f0290!2sSiddhivinayak%20Industrial%20Estate!5e0!3m2!1sen!2sin!4v1709210000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(100%) contrast(1.2)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
        ></iframe>
        <div className="absolute inset-0 pointer-events-none bg-charcoal/10"></div>
      </section>
    </div>
  );
}

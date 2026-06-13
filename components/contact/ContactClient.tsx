'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function ContactClient() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/hero-bg-blue.png"
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
                            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">Touch</span>
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
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className="relative bg-gradient-to-br from-white via-gray-50 to-white p-8 rounded-3xl shadow-2xl shadow-gray-300/20 border border-gray-200/50 backdrop-blur-xl overflow-hidden"
                            >
                                {/* Decorative Elements */}
                                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-accent-navy/10 to-accent-royal/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold bg-gradient-to-r from-charcoal to-gray-700 bg-clip-text text-transparent mb-8 flex items-center gap-2">
                                        Contact Information
                                    </h3>
                                    <div className="space-y-5">
                                        <motion.a
                                            href="https://maps.google.com"
                                            target="_blank"
                                            whileHover={{ scale: 1.02 }}
                                            className="flex items-start gap-4 p-5 rounded-2xl bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-lg hover:shadow-accent-navy/10 transition-all duration-300 group border border-gray-100/50"
                                        >
                                            <div className="p-3.5 bg-gradient-to-br from-accent-navy to-accent-navy/80 rounded-xl text-white shadow-lg shadow-accent-navy/30 group-hover:shadow-xl group-hover:shadow-accent-navy/40 transition-all duration-300 group-hover:scale-110">
                                                <MapPin className="w-5 h-5" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-bold text-gray-900 mb-1">Headquarters</div>
                                                <div className="text-sm text-gray-600 leading-relaxed">
                                                    Survey No.688/13, Siddhivinayak Industrial Estate, Somnath, Daman - 396210, India
                                                </div>
                                            </div>
                                        </motion.a>

                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            className="flex items-start gap-4 p-5 rounded-2xl bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-lg hover:shadow-accent-royal/10 transition-all duration-300 group border border-gray-100/50"
                                        >
                                            <div className="p-3.5 bg-gradient-to-br from-accent-royal to-cyan-500 rounded-xl text-white shadow-lg shadow-accent-royal/30 group-hover:shadow-xl group-hover:shadow-accent-royal/40 transition-all duration-300 group-hover:scale-110">
                                                <Phone className="w-5 h-5" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-bold text-gray-900 mb-1">Call Us</div>
                                                <div className="text-sm text-gray-600 font-medium">
                                                    +91-6359313912
                                                </div>
                                                <div className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full">
                                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                                    Mon-Sat, 9am - 6pm
                                                </div>
                                            </div>
                                        </motion.div>

                                        <motion.a
                                            href="mailto:bhavyamistry@maxextrusions.com"
                                            whileHover={{ scale: 1.02 }}
                                            className="flex items-start gap-4 p-5 rounded-2xl bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group border border-gray-100/50"
                                        >
                                            <div className="p-3.5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl text-white shadow-lg shadow-blue-500/30 group-hover:shadow-xl group-hover:shadow-blue-500/40 transition-all duration-300 group-hover:scale-110">
                                                <Mail className="w-5 h-5" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-bold text-gray-900 mb-1">Email Us</div>
                                                <div className="text-sm text-gray-600 break-all">
                                                    bhavyamistry@maxextrusions.com
                                                </div>
                                            </div>
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>

                            {/* WhatsApp Card */}
                            <div className="bg-gradient-to-br from-[#25D366] to-[#128C7E] p-8 rounded-2xl text-white shadow-lg shadow-green-500/20 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-3 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
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
                                className="relative bg-gradient-to-br from-white via-white to-gray-50/30 p-8 md:p-12 rounded-[2rem] shadow-2xl shadow-gray-400/20 border border-gray-200/60 backdrop-blur-xl overflow-hidden"
                            >
                                {/* Premium Background Pattern */}
                                <div className="absolute inset-0 opacity-[0.02]">
                                    <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                                </div>

                                {/* Decorative Gradient Orbs */}
                                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent-navy/5 via-accent-royal/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/5 via-purple-500/5 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

                                {/* Accent Border Gradient */}
                                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-accent-navy/10 via-accent-royal/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                                <div className="relative z-10">
                                    <div className="mb-10">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-accent-navy/10 to-accent-royal/10 border border-accent-royal/20 mb-4">
                                            <span className="w-2 h-2 bg-accent-royal rounded-full animate-pulse"></span>
                                            <span className="text-xs font-semibold text-gray-700 tracking-wide uppercase">Priority Response</span>
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-charcoal via-gray-800 to-charcoal bg-clip-text text-transparent mb-3">
                                            Send us a Message
                                        </h2>
                                        <p className="text-gray-600 text-lg">Fill out the form below and our team will get back to you shortly.</p>
                                    </div>
                                    <ContactForm />
                                </div>
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

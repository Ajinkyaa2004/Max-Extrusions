'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, MessageSquare, FileText } from 'lucide-react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700 ml-1">Full Name</label>
                    <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-accent-navy transition-colors" />
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-accent-navy focus:ring-4 focus:ring-accent-navy/10 outline-none transition-all bg-gray-50/50 focus:bg-white placeholder:text-gray-400"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 ml-1">Email Address</label>
                    <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-accent-navy transition-colors" />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-accent-navy focus:ring-4 focus:ring-accent-navy/10 outline-none transition-all bg-gray-50/50 focus:bg-white placeholder:text-gray-400"
                        />
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700 ml-1">Phone Number</label>
                    <div className="relative group">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-accent-navy transition-colors" />
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-accent-navy focus:ring-4 focus:ring-accent-navy/10 outline-none transition-all bg-gray-50/50 focus:bg-white placeholder:text-gray-400"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700 ml-1">Subject</label>
                    <div className="relative group">
                        <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-accent-navy transition-colors" />
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Project Inquiry"
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-accent-navy focus:ring-4 focus:ring-accent-navy/10 outline-none transition-all bg-gray-50/50 focus:bg-white placeholder:text-gray-400"
                        />
                    </div>
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 ml-1">Message</label>
                <div className="relative group">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-accent-navy transition-colors" />
                    <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your requirements..."
                        rows={4}
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-accent-navy focus:ring-4 focus:ring-accent-navy/10 outline-none transition-all resize-none bg-gray-50/50 focus:bg-white placeholder:text-gray-400"
                    />
                </div>
            </div>

            <div className="pt-2">
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-accent-navy to-accent-royal text-white font-bold py-4 rounded-xl shadow-lg shadow-accent-navy/20 hover:shadow-xl hover:shadow-accent-navy/30 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                    {isLoading ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                        <>
                            Send Message
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                </button>
            </div>

            {status === 'success' && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 text-green-700 rounded-xl flex items-center gap-3 border border-green-200"
                >
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <p className="font-medium">Message sent successfully! We'll get back to you soon.</p>
                </motion.div>
            )}
        </form>
    );
}

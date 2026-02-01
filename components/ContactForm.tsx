'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, MessageSquare, FileText, CheckCircle2 } from 'lucide-react';
import { useForm } from '@formspree/react';
import { useEffect } from 'react';

// --- Premium Reusable Input Components ---

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    icon: React.ElementType;
}

const FloatingInput = ({ label, icon: Icon, className, value, ...props }: FloatingInputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const hasValue = value ? String(value).length > 0 : false;

    return (
        <div className="relative group">
            {/* Glow Effect */}
            <div
                className={`absolute -inset-0.5 bg-gradient-to-r from-accent-navy to-accent-royal rounded-xl blur opacity-0 transition duration-500 group-hover:opacity-25 ${isFocused ? 'opacity-40' : ''}`}
            />

            <div className={`relative flex items-center bg-white rounded-xl border transition-all duration-300 overflow-hidden ${isFocused ? 'border-accent-navy shadow-lg shadow-accent-navy/5' : 'border-gray-200'}`}>

                {/* Icon Section */}
                <div className={`flex items-center justify-center w-12 h-full border-r border-gray-100 bg-gray-50/50 transition-colors duration-300 ${isFocused ? 'bg-accent-navy/5' : ''}`}>
                    <Icon className={`w-5 h-5 transition-colors duration-300 ${isFocused || hasValue ? 'text-accent-navy' : 'text-gray-400'}`} />
                </div>

                {/* Input & Label Section */}
                <div className="relative w-full h-14">
                    <input
                        {...props}
                        value={value}
                        onFocus={(e) => {
                            setIsFocused(true);
                            props.onFocus?.(e);
                        }}
                        onBlur={(e) => {
                            setIsFocused(false);
                            props.onBlur?.(e);
                        }}
                        className={`peer w-full h-full pt-5 pb-1 pl-4 pr-4 bg-transparent outline-none text-gray-800 placeholder-transparent font-medium ${className}`}
                        placeholder={label}
                    />
                    <label
                        className={`absolute left-4 transition-all duration-300 pointer-events-none text-gray-500 truncate max-w-[90%] font-medium
              ${(isFocused || hasValue)
                                ? 'top-2.5 text-xs text-accent-navy'
                                : 'top-1/2 -translate-y-1/2 text-sm'
                            }`}
                    >
                        {label}
                        {props.required && <span className="text-red-400 ml-0.5">*</span>}
                    </label>
                </div>

                {/* Active Indicator Bar */}
                <div className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent-navy to-accent-royal transition-all duration-500 ease-out ${isFocused || hasValue ? 'w-full' : 'w-0'}`} />
            </div>
        </div>
    );
};

interface FloatingTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    icon: React.ElementType;
}

const FloatingTextArea = ({ label, icon: Icon, className, value, ...props }: FloatingTextAreaProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const hasValue = value ? String(value).length > 0 : false;

    return (
        <div className="relative group">
            {/* Glow Effect */}
            <div
                className={`absolute -inset-0.5 bg-gradient-to-r from-accent-navy to-accent-royal rounded-xl blur opacity-0 transition duration-500 group-hover:opacity-25 ${isFocused ? 'opacity-40' : ''}`}
            />

            <div className={`relative flex items-start bg-white rounded-xl border transition-all duration-300 overflow-hidden ${isFocused ? 'border-accent-navy shadow-lg shadow-accent-navy/5' : 'border-gray-200'}`}>

                {/* Icon Section */}
                <div className={`flex items-start justify-center w-12 pt-4 h-full min-h-[140px] border-r border-gray-100 bg-gray-50/50 transition-colors duration-300 ${isFocused ? 'bg-accent-navy/5' : ''}`}>
                    <Icon className={`w-5 h-5 transition-colors duration-300 ${isFocused || hasValue ? 'text-accent-navy' : 'text-gray-400'}`} />
                </div>

                {/* Input & Label Section */}
                <div className="relative w-full">
                    <textarea
                        {...props}
                        value={value}
                        onFocus={(e) => {
                            setIsFocused(true);
                            props.onFocus?.(e);
                        }}
                        onBlur={(e) => {
                            setIsFocused(false);
                            props.onBlur?.(e);
                        }}
                        className={`peer w-full pt-5 pb-2 pl-4 pr-4 bg-transparent outline-none text-gray-800 placeholder-transparent font-medium min-h-[140px] resize-none ${className}`}
                        placeholder={label}
                    />
                    <label
                        className={`absolute left-4 transition-all duration-300 pointer-events-none text-gray-500 truncate max-w-[90%] font-medium
              ${(isFocused || hasValue)
                                ? 'top-2.5 text-xs text-accent-navy'
                                : 'top-6 -translate-y-1/2 text-sm'
                            }`}
                    >
                        {label}
                        {props.required && <span className="text-red-400 ml-0.5">*</span>}
                    </label>
                </div>

                {/* Active Indicator Bar */}
                <div className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent-navy to-accent-royal transition-all duration-500 ease-out ${isFocused || hasValue ? 'w-full' : 'w-0'}`} />
            </div>
        </div>
    );
};


export default function ContactForm() {
    // TODO: Replace "YOUR_FORM_ID" with your actual Formspree Form ID (e.g., "moqjowpq")
    // You can find this in your Formspree dashboard or project settings.
    const [state, handleSubmit] = useForm("xkozjrea");

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    // Clear form on success
    useEffect(() => {
        if (state.succeeded) {
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        }
    }, [state.succeeded]);



    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <FloatingInput
                    label="Full Name"
                    type="text"
                    name="name"
                    icon={User}
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <FloatingInput
                    label="Email Address"
                    type="email"
                    name="email"
                    icon={Mail}
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <FloatingInput
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    icon={Phone}
                    value={formData.phone}
                    onChange={handleChange}
                />
                <FloatingInput
                    label="Subject"
                    type="text"
                    name="subject"
                    icon={FileText}
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />
            </div>

            <FloatingTextArea
                label="Message"
                name="message"
                icon={MessageSquare}
                value={formData.message}
                onChange={handleChange}
                required
            />

            <div className="pt-2">
                <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-gradient-to-r from-accent-navy to-accent-royal text-white font-bold py-4 rounded-xl shadow-lg shadow-accent-navy/20 hover:shadow-xl hover:shadow-accent-navy/30 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-xl" />
                    {state.submitting ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                        <>
                            <span className="relative z-10">Send Message</span>
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                        </>
                    )}
                </button>
            </div>

            {state.succeeded && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 text-green-700 rounded-xl flex items-center gap-3 border border-green-200 shadow-sm"
                >
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <p className="font-medium">Message sent successfully! We'll get back to you soon.</p>
                </motion.div>
            )}

            {state.errors && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 text-red-700 rounded-xl flex items-center gap-3 border border-red-200 shadow-sm"
                >
                    <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="font-medium">Failed to send message. Please try again later.</p>
                </motion.div>
            )}
        </form>
    );
}

'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    quantity: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        product: '',
        quantity: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-red focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-red focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-red focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-charcoal mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-red focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="product" className="block text-sm font-medium text-charcoal mb-2">
            Product Interest
          </label>
          <select
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-red focus:border-transparent"
          >
            <option value="">Select a product</option>
            <option value="carry-bags">Plastic Carry Bags</option>
            <option value="garbage-bags">Garbage Bags</option>
            <option value="courier-bags">Courier Bags</option>
            <option value="stretch-wrap">Stretch Wrap</option>
            <option value="films">Plastic Films</option>
            <option value="custom">Custom Solution</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-charcoal mb-2">
            Estimated Quantity
          </label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="e.g., 10,000 units/month"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-red focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
          Message / Requirements
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-red focus:border-transparent resize-none"
        />
      </div>

      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md">
          Thank you for your enquiry! We&apos;ll get back to you within 24 hours.
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md">
          Something went wrong. Please try again or contact us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-accent-red text-white px-8 py-4 rounded-md font-medium hover:bg-accent-orange transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending...' : 'Submit Enquiry'}
      </button>

      <p className="text-sm text-gray-600 text-center">
        * Required fields. We respect your privacy and will never share your information.
      </p>
    </form>
  );
}

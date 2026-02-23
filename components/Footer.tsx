import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white relative overflow-hidden border-t border-white/5">
      {/* Abstract Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-navy/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-royal/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Company Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-navy to-accent-royal rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-accent-navy/50 transition-all duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div className="text-2xl font-bold tracking-tight">
                MAX<span className="text-accent-royal">EXTRUSIONS</span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-8">
              Setting new standards in plastic packaging since 2007. Manufacturer of high-quality plastic bags, films, and custom packaging solutions based in Daman, India.
            </p>
            <div className="flex gap-4 mb-6">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-accent-navy flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                  <Icon className="w-5 h-5 text-gray-300 hover:text-white" />
                </a>
              ))}
            </div>

            {/* Certification Badges */}
            <div className="flex flex-col gap-3">
              {/* ISO Certification Badge */}
              <a
                href="/ISO CERT.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-accent-royal/50 transition-all group w-fit"
              >
                <div className="w-8 h-8 relative">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-accent-royal" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[8px] font-bold text-white">ISO</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white tracking-wider group-hover:text-accent-royal transition-colors">ISO 9001:2015</span>
                  <span className="text-[10px] text-gray-400">Certified Company</span>
                </div>
              </a>

              {/* IEC Certificate Badge */}
              <a
                href="/IEC CERTIFICATE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-accent-royal/50 transition-all group w-fit"
              >
                <div className="w-8 h-8 relative">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-accent-royal" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[8px] font-bold text-white">IEC</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white tracking-wider group-hover:text-accent-royal transition-colors">IEC Certificate</span>
                  <span className="text-[10px] text-gray-400">Import-Export Code</span>
                </div>
              </a>
            </div>
          </div>

          {/* Spacer */}
          <div className="lg:col-span-1 hidden lg:block"></div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Products', href: '/products' },
                { name: 'Infrastructure', href: '/infrastructure' },
                { name: 'Clients', href: '/clients' },
                { name: 'Contact Us', href: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-accent-royal transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-accent-royal transition-colors"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-6 text-white">Products</h4>
            <ul className="space-y-4">
              {['Plastic Bags', 'Garbage Bags', 'Plastic Films', 'Stretch Wrap', '& More'].map((item) => (
                <li key={item}>
                  <Link href="/products" className="text-gray-400 hover:text-accent-royal transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-accent-royal transition-colors"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-gray-400">
                <MapPin className="w-5 h-5 text-accent-royal mt-1 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-sm leading-relaxed">
                    Survey No.688/13 Siddhivinayak Industrial Estate, Somnath Daman, India - 396210
                  </span>
                  <a
                    href="https://www.google.com/maps/search/Siddhivinayak+Industrial+Estate,+Somnath+Daman,+India+-+396210/@20.403294,72.844977,14z/data=!3m1!4b1?hl=en&entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent-royal hover:text-white transition-colors mt-1 hover:underline"
                  >
                    View on Google Map
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4 text-gray-400">
                <Phone className="w-5 h-5 text-accent-royal shrink-0" />
                <a href="tel:+916359313912" className="hover:text-white transition-colors">
                  +91-6359313912
                </a>
              </li>
              <li className="flex items-center gap-4 text-gray-400">
                <Mail className="w-5 h-5 text-accent-royal shrink-0" />
                <a href="mailto:maxextpvtltd@gmail.com" className="hover:text-white transition-colors">
                  maxextpvtltd@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            &copy; {currentYear} Max Extrusions Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

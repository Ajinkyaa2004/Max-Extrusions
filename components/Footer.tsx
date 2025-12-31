import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white relative overflow-hidden border-t border-white/5">
      {/* Abstract Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-orange/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Company Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-red to-accent-orange rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-accent-red/50 transition-all duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div className="text-2xl font-bold tracking-tight">
                MAX<span className="text-accent-red">EXTRUSIONS</span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-8">
              Setting new standards in plastic packaging since 1968. Manufacturer of high-quality plastic bags, films, and custom packaging solutions based in Daman, India.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-accent-red flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                  <Icon className="w-5 h-5 text-gray-300 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="lg:col-span-1 hidden lg:block"></div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Products', 'Infrastructure', 'Clients'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-accent-orange transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-accent-orange transition-colors"></span>
                    {item === 'Home' ? 'Home' : item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-6 text-white">Products</h4>
            <ul className="space-y-4">
              {['Plastic Bags', 'Garbage Bags', 'Plastic Films', 'Stretch Wrap'].map((item) => (
                <li key={item}>
                  <Link href="/products" className="text-gray-400 hover:text-accent-orange transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-accent-orange transition-colors"></span>
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
                <MapPin className="w-5 h-5 text-accent-red mt-1 shrink-0" />
                <span className="text-sm leading-relaxed">
                  Survey No.688/13 Siddhivinayak Industrial Estate, Somnath Daman, India - 396210
                </span>
              </li>
              <li className="flex items-center gap-4 text-gray-400">
                <Phone className="w-5 h-5 text-accent-red shrink-0" />
                <span>+91-260-2244707</span>
              </li>
              <li className="flex items-center gap-4 text-gray-400">
                <Mail className="w-5 h-5 text-accent-red shrink-0" />
                <span>info@maxextrusions.com</span>
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

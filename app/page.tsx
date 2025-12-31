import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import ClientsSection from '@/components/home/ClientsSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import ProductShowcase from '@/components/home/ProductShowcase';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <StatsSection />
      <ClientsSection />
      <FeaturesSection />
      <ProductShowcase />
      <CTASection />
    </div>
  );
}

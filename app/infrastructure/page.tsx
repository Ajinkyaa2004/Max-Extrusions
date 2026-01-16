import { Metadata } from 'next';
import InfrastructureClient from '@/components/infrastructure/InfrastructureClient';

export const metadata: Metadata = {
  title: 'Manufacturing Infrastructure & Technology | Max Extrusions',
  description: 'Our state-of-the-art plastic manufacturing facility in Daman features advanced blown film extrusion lines, flexographic printing, and bag sealing machinery.',
  openGraph: {
    title: 'Manufacturing Infrastructure | Max Extrusions Pvt. Ltd.',
    description: 'Explore our world-class manufacturing facility in Daman, equipped with advanced technology for high-quality plastic packaging production.',
    url: 'https://maxextrusions.com/infrastructure',
    images: [
      {
        url: '/images/infrastructure-preview.jpg', // Assuming a general preview or hero BG if specific one missing
        width: 1200,
        height: 630,
        alt: 'Max Extrusions Manufacturing Facility',
      },
    ],
  },
};

export default function InfrastructurePage() {
  return <InfrastructureClient />;
}

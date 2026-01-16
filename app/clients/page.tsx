import { Metadata } from 'next';
import ClientsClient from '@/components/clients/ClientsClient';

export const metadata: Metadata = {
  title: 'Our Clean & Trusted Clients | Max Extrusions',
  description: 'Trusted by over 300+ clients across India including Godrej Interio, Prince Plastics, and Cello World. Serving diverse industries from Retail to Pharmaceuticals.',
  openGraph: {
    title: 'Trusted by Industry Leaders | Max Extrusions Pvt. Ltd.',
    description: 'We are proud to partner with leading brands like Godrej and Cello. Discover why clients trust Max Extrusions.',
    url: 'https://maxextrusions.com/clients',
    images: [
      {
        url: '/images/clients-bg.jpg', // Placeholder
        width: 1200,
        height: 630,
        alt: 'Max Extrusions Clients',
      },
    ],
  },
};

export default function ClientsPage() {
  return <ClientsClient />;
}

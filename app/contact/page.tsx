import { Metadata } from 'next';
import ContactClient from '@/components/contact/ContactClient';

export const metadata: Metadata = {
  title: 'Contact Max Extrusions | Daman, India',
  description: 'Get in touch with Max Extrusions Pvt. Ltd. for your plastic packaging requirements. Located in Daman, Gujarat. Call us at +91-6359313912.',
  openGraph: {
    title: 'Contact Max Extrusions | Packaging Manufacturer',
    description: 'Reach out to our team for custom quotes and inquiries. Fast response guaranteed.',
    url: 'https://maxextrusions.com/contact',
    images: [
      {
        url: '/images/contact-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Max Extrusions',
      },
    ],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}

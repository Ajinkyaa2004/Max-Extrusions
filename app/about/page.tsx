import { Metadata } from 'next';
import AboutClient from '@/components/about/AboutClient';

export const metadata: Metadata = {
  title: 'About Us | 17+ Years of Manufacturing Excellence | Max Extrusions',
  description: 'Established in 2008, Max Extrusions Pvt. Ltd. is a pioneer in plastic packaging manufacturing in Daman. Learn about our legacy, leadership, and core values.',
  openGraph: {
    title: 'About Max Extrusions Pvt. Ltd. | Our Legacy',
    description: 'Since 2008, we have evolved into a trusted manufacturing hub for plastic packaging solutions. Led by Mr. Deepak Mistry.',
    url: 'https://maxextrusions.com/about',
    images: [
      {
        url: '/images/about-team.jpg', // Placeholder
        width: 1200,
        height: 630,
        alt: 'Max Extrusions Leadership',
      },
    ],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}

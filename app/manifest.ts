import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Max Extrusions Pvt. Ltd.',
        short_name: 'Max Extrusions',
        description: 'Premier Plastic Packaging Manufacturer in Daman, India.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0F172A', // Accent Navy
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}

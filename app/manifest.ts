import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Max Extrusions Pvt. Ltd. - Premium Plastic Packaging Manufacturer',
        short_name: 'Max Extrusions',
        description: 'ISO 9001:2015 certified plastic packaging manufacturer in Daman, India. Specializing in HDPE/LDPE bags, stretch films, and custom packaging solutions.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0F172A',
        orientation: 'portrait-primary',
        scope: '/',
        lang: 'en-US',
        dir: 'ltr',
        categories: ['business', 'manufacturing', 'shopping'],
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}
